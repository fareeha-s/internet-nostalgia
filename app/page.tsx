'use client'

import { useState, useMemo, useEffect, useRef, useCallback } from 'react'
import FloatingWordCloud from './components/FloatingWordCloud'
import MediaGallery from './components/MediaGallery'
import { ERA_MEDIA } from './data/media'
import { ERA_SONGS } from './data/songs'
import { ERA_TWEETS } from './data/tweets'
import { getTermsForEra } from './utils/eraData'

interface WordData {
  text: string
  count: number
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [showSources, setShowSources] = useState(false)
  const [randomSeed, setRandomSeed] = useState(0) // Initialize with 0, set on client
  const [loadedCount, setLoadedCount] = useState(15) // Load 15 sections initially for smoother start
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [isMounted, setIsMounted] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [isDraggingDial, setIsDraggingDial] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const yearObserverRef = useRef<IntersectionObserver | null>(null)
  const fadeObserverRef = useRef<IntersectionObserver | null>(null)
  const dialRef = useRef<HTMLDivElement | null>(null)

  // Set random seed on client only to avoid hydration mismatch
  useEffect(() => {
    setRandomSeed(Math.random())
  }, [])

  // Delay animations slightly to prevent jank on initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Generate timeline: current year back to 2000, BUT recent years get more "segments"
  // (so they take longer to scroll through, reflecting higher meme density).
  const timeline = useMemo(() => {
    const start = new Date().getFullYear()
    const entries: { year: number; segment: number; segmentsInYear: number }[] = []

    const segmentsForYear = (year: number): number => {
      // Tuning: more recent = more segments (longer scroll)
      if (year >= 2024) return 6
      if (year >= 2020) return 4
      if (year >= 2016) return 3
      if (year >= 2010) return 2
      return 1
    }

    for (let y = start; y >= 2000; y--) {
      const segmentsInYear = segmentsForYear(y)
      for (let s = 0; s < segmentsInYear; s++) {
        entries.push({ year: y, segment: s, segmentsInYear })
      }
    }
    return entries
  }, [])

  // Shuffle utility
  const shuffleArray = <T,>(array: T[], seed: number): T[] => {
    const shuffled = [...array]
    let currentSeed = seed
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      currentSeed = (currentSeed * 9301 + 49297) % 233280
      const j = Math.floor((currentSeed / 233280) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Helper to get era from year
  const getEra = (year: number): string => {
    if (year >= 2025) return '2025-2026'
    if (year >= 2022) return '2022-2024'
    if (year >= 2019) return '2019-2021'
    if (year >= 2016) return '2016-2018'
    if (year >= 2013) return '2013-2015'
    if (year >= 2010) return '2010-2012'
    if (year >= 2007) return '2007-2009'
    if (year >= 2004) return '2004-2006'
    return '2000-2003'
  }

  // Hard rule: NO repeats across the entire scroll session.
  // Deterministic "pick without replacement" helper.
  const pickUnique = <T,>(
    items: T[],
    getId: (item: T) => string,
    want: number,
    seed: number,
    seen: Set<string>
  ): T[] => {
    if (!items.length || want <= 0) return []
    const shuffled = shuffleArray(items, seed)
    const result: T[] = []
    for (let i = 0; i < shuffled.length && result.length < want; i++) {
      const id = getId(shuffled[i])
      if (!id) continue
      if (seen.has(id)) continue
      seen.add(id)
      result.push(shuffled[i])
    }
    return result
  }

  // Set up intersection observer for loading more sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loadedCount < timeline.length) {
          // Load 8 more sections when user scrolls near the bottom (faster loading)
          setLoadedCount(prev => Math.min(prev + 8, timeline.length))
        }
      },
      {
        rootMargin: '1500px', // Load more when 1500px away from bottom
        threshold: 0
      }
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => observer.disconnect()
  }, [timeline.length, loadedCount])

  // Set up intersection observer for year tracking
  useEffect(() => {
    yearObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = parseInt(entry.target.getAttribute('data-year') || String(new Date().getFullYear()))
            setCurrentYear(year)
          }
        })
      },
      {
        rootMargin: '-40% 0px -40% 0px', // Trigger when section is in middle 20% of viewport
        threshold: 0
      }
    )

    return () => {
      if (yearObserverRef.current) {
        yearObserverRef.current.disconnect()
      }
    }
  }, [])

  // Set up intersection observer for smooth fade-in animations
  useEffect(() => {
    fadeObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id')
            if (sectionId) {
              setVisibleSections(prev => {
                const newSet = new Set(prev)
                newSet.add(sectionId)
                return newSet
              })
            }
          }
        })
      },
      {
        rootMargin: '100px 0px', // Start fading in 100px before entering viewport
        threshold: 0.1 // Trigger when 10% visible
      }
    )

    return () => {
      if (fadeObserverRef.current) {
        fadeObserverRef.current.disconnect()
      }
    }
  }, [])

  // Dial interaction handlers
  const scrollToYear = useCallback((targetYear: number) => {
    // Find the first section for that year
    const yearSections = Array.from(document.querySelectorAll('[data-year]'))
    const targetSection = yearSections.find(section => {
      const year = parseInt(section.getAttribute('data-year') || '0')
      return year === targetYear
    })
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const handleDialInteraction = useCallback((clientY: number) => {
    if (!dialRef.current) return
    
    const rect = dialRef.current.getBoundingClientRect()
    const centerY = rect.top + rect.height / 2
    const deltaY = clientY - centerY
    const maxDelta = rect.height / 2
    
    // Map vertical position to year (2026 at top, 2000 at bottom)
    const currentYearValue = new Date().getFullYear()
    const minYear = 2000
    const percentage = Math.max(-1, Math.min(1, deltaY / maxDelta))
    const targetYear = Math.round(currentYearValue - percentage * (currentYearValue - minYear))
    
    const clampedYear = Math.max(minYear, Math.min(currentYearValue, targetYear))
    scrollToYear(clampedYear)
  }, [scrollToYear])

  const handleDialMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDraggingDial(true)
    handleDialInteraction(e.clientY)
  }, [handleDialInteraction])

  const handleDialTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      setIsDraggingDial(true)
      handleDialInteraction(e.touches[0].clientY)
    }
  }, [handleDialInteraction])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingDial) {
        handleDialInteraction(e.clientY)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (isDraggingDial && e.touches.length > 0) {
        handleDialInteraction(e.touches[0].clientY)
      }
    }

    const handleEnd = () => {
      setIsDraggingDial(false)
    }

    if (isDraggingDial) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleEnd)
      document.body.style.cursor = 'grabbing'
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleEnd)
      document.body.style.cursor = ''
    }
  }, [isDraggingDial, handleDialInteraction])

  return (
    <main className="relative bg-black">
      {/* Year Picker - iOS style - draggable to navigate */}
      <div className="fixed right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-40">
        {/* Year Display - Draggable */}
        <div 
          ref={dialRef}
          className="relative flex flex-col items-center bg-black/60 backdrop-blur-sm rounded-lg px-2 sm:px-3 cursor-grab active:cursor-grabbing touch-none select-none"
          onMouseDown={handleDialMouseDown}
          onTouchStart={handleDialTouchStart}
          title="Drag up/down to jump to a year"
        >
          {/* Selection highlight bar */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 sm:h-10 md:h-12 bg-white/5 border-y border-white/10 pointer-events-none rounded" />
          
          {/* Drag hint arrows */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-white/20">
            <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
            <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </div>
          
          {/* Years stack - compact on mobile */}
          <div className="flex flex-col items-center py-1 sm:py-2 overflow-hidden">
            {/* Year +2 (very faded) - hidden on small mobile */}
            <div className="hidden sm:flex h-6 sm:h-8 md:h-10 items-center justify-center">
              <span className="text-xs sm:text-sm md:text-base font-light tracking-wider text-white/10 transition-all duration-300">
                {currentYear + 2 <= new Date().getFullYear() ? currentYear + 2 : ''}
              </span>
            </div>
            
            {/* Year +1 (faded) */}
            <div className="h-6 sm:h-8 md:h-10 flex items-center justify-center">
              <span className="text-xs sm:text-base md:text-lg font-light tracking-wider text-white/20 sm:text-white/25 transition-all duration-300">
                {currentYear + 1 <= new Date().getFullYear() ? currentYear + 1 : ''}
              </span>
            </div>
            
            {/* Current Year (bright, centered) */}
            <div className="h-8 sm:h-10 md:h-12 flex items-center justify-center">
              <span 
                className="text-lg sm:text-2xl md:text-3xl font-light tracking-wider text-white transition-all duration-300"
                key={currentYear}
              >
                {currentYear}
              </span>
            </div>
            
            {/* Year -1 (faded) */}
            <div className="h-6 sm:h-8 md:h-10 flex items-center justify-center">
              <span className="text-xs sm:text-base md:text-lg font-light tracking-wider text-white/20 sm:text-white/25 transition-all duration-300">
                {currentYear - 1 >= 2000 ? currentYear - 1 : ''}
              </span>
            </div>
            
            {/* Year -2 (very faded) - hidden on small mobile */}
            <div className="hidden sm:flex h-6 sm:h-8 md:h-10 items-center justify-center">
              <span className="text-xs sm:text-sm md:text-base font-light tracking-wider text-white/10 transition-all duration-300">
                {currentYear - 2 >= 2000 ? currentYear - 2 : ''}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Header - Mobile optimized */}
      <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-6 bg-black/90 backdrop-blur-lg border-b border-white/10 safe-area-inset">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h1 className="text-sm sm:text-lg md:text-2xl font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-white/90 truncate">
              INTERNET NOSTALGIA
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm text-white/60 mt-0.5 sm:mt-1">
              scroll to travel back in time
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              className="text-[10px] sm:text-[11px] md:text-xs text-white/60 underline hover:text-white transition min-h-[44px] flex items-center"
              onClick={() => setShowSources((v) => !v)}
            >
              {showSources ? 'hide' : 'sources'}
            </button>
            <a
              href="https://fareeha.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] sm:text-[10px] md:text-[11px] text-white/30 hover:text-white/60 transition-colors duration-300 min-h-[44px] flex items-center"
            >
              by fareeha ✨
            </a>
          </div>
        </div>

        {showSources && (
          <div className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] md:text-xs text-white/70 bg-white/5 border border-white/10 rounded-lg p-2 sm:p-3 md:p-4 space-y-0.5 sm:space-y-1 max-w-7xl mx-auto">
            <p className="font-semibold text-white/80">sources:</p>
            <p>• reddit, twitter/x, youtube, spotify</p>
          </div>
        )}
      </div>

      {/* Scrollable Sections - Only render what's needed, with right padding for year picker */}
      <div className="pt-20 sm:pt-24 md:pt-32 pb-32 max-w-7xl mx-auto pr-14 sm:pr-16 md:pr-20">
        {(() => {
          // Build year cards sequentially with global no-repeat guarantees.
          const seen = {
            word: new Set<string>(),
            media: new Set<string>(),
            song: new Set<string>(),
            tweet: new Set<string>(),
          }

          const cards = timeline.slice(0, loadedCount).map((year, index) => {
            const entry = year
            const era = getEra(entry.year)

            // Terms (full era pool; then pick without replacement)
            const eraTerms = getTermsForEra(era)
            // More recent years can show a bit more per segment
            const wordsPerSegment =
              entry.year >= 2020 ? 16 : entry.year >= 2010 ? 14 : 12
            const pickedTerms = pickUnique(
              eraTerms,
              (t) => `word:${t.text.toLowerCase()}`,
              wordsPerSegment,
              randomSeed + index * 17 + entry.segment * 101,
              seen.word
            )

            // Media / songs / tweets (also without replacement globally)
            const eraMedia = ERA_MEDIA[era] || []
            const eraSongs = ERA_SONGS[era] || []
            const eraTweets = ERA_TWEETS[era] || []

            const mediaPerSegment = entry.year >= 2016 ? 3 : 2
            const tweetsPerSegment = entry.year >= 2016 ? 3 : 2

            const media = pickUnique(
              eraMedia,
              (m: any) => `media:${m.type}:${m.id || m.url || m.title}`,
              mediaPerSegment,
              randomSeed + 1000 + index * 19 + entry.segment * 103,
              seen.media
            )
            const songs = pickUnique(
              eraSongs,
              (s: any) => `song:${s.spotifyId}`,
              2,
              randomSeed + 2000 + index * 23 + entry.segment * 107,
              seen.song
            )
            const tweets = pickUnique(
              eraTweets,
              (t: any) => `tweet:${t.handle}:${t.date}:${t.text}`,
              tweetsPerSegment,
              randomSeed + 3000 + index * 29 + entry.segment * 109,
              seen.tweet
            )

            // Font sizes from counts (stable per picked set)
            const counts = pickedTerms.map((t) => t.count)
            const minCount = counts.length ? Math.min(...counts) : 1
            const maxCount = counts.length ? Math.max(...counts) : 1
            const wordCloudWords = pickedTerms.map((w) => {
              const normalizedSize = maxCount > minCount ? (w.count - minCount) / (maxCount - minCount) : 0.5
              const fontSize = 22 + normalizedSize * 45 // Bigger words for better visibility
              return { text: w.text, size: fontSize }
            })

            return {
              year: entry.year,
              segment: entry.segment,
              segmentsInYear: entry.segmentsInYear,
              index,
              media,
              songs,
              tweets,
              wordCloudWords,
            }
          })

          return cards.map((card) => {
            const sectionId = `y-${card.year}-s${card.segment}`
            const isVisible = visibleSections.has(sectionId)
            
            return (
              <section
                key={sectionId}
                data-section-id={sectionId}
                data-year={card.year}
                ref={(el) => {
                  if (el) {
                    if (yearObserverRef.current) yearObserverRef.current.observe(el)
                    if (fadeObserverRef.current) fadeObserverRef.current.observe(el)
                  }
                }}
                className={`px-2 sm:px-4 md:px-8 ${
                  isMounted 
                    ? `transition-all duration-1000 ease-out transform ${
                        isVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-8'
                      }` 
                    : 'opacity-0'
                }`}
                style={!isMounted ? { visibility: 'hidden' } : {}}
              >
                <FloatingWordCloud
                  words={card.wordCloudWords}
                  media={card.media}
                  songs={card.songs}
                  tweets={card.tweets}
                  onVideoSelect={setSelectedVideo}
                />
              </section>
            )
          })
        })()}
        
        {/* Load more trigger */}
        {loadedCount < timeline.length && (
          <div ref={loadMoreRef} className="h-20 flex items-center justify-center">
            <span className="text-white/20 text-sm">↓</span>
          </div>
        )}

        {/* End of timeline */}
        {loadedCount >= timeline.length && (
          <div className="flex flex-col items-center justify-center py-20 md:py-32 px-4 text-center animate-fade-in">
            <div className="max-w-xl space-y-6">
              <h2 className="text-2xl md:text-4xl font-light text-white/80 tracking-wide">
                2000
              </h2>
              <p className="text-sm md:text-base text-white/50 font-light">
                Forums. Flash. Dial-up.
              </p>
              <div className="pt-6 space-y-3">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-white/50 hover:text-white/80 transition-colors text-xs md:text-sm"
                >
                  ↑ back to top
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Media Gallery */}
      <MediaGallery 
        media={[]} 
        selectedVideo={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
      />
    </main>
  )
}
