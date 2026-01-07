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
  const [randomSeed, setRandomSeed] = useState(0)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [isMounted, setIsMounted] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const dialRef = useRef<HTMLDivElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  // Set random seed on client only
  useEffect(() => {
    setRandomSeed(Math.random())
  }, [])

  // Delay mount for smooth fade-in
  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Generate timeline: current year back to 2000
  const timeline = useMemo(() => {
    const start = new Date().getFullYear()
    const years: number[] = []
    for (let y = start; y >= 2000; y--) {
      years.push(y)
    }
    return years
  }, [])

  // Shuffle utility with seed
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

  // Allow items to repeat up to 3 times max
  const pickWithLimit = <T,>(
    items: T[],
    getId: (item: T) => string,
    want: number,
    seed: number,
    usageCounts: Map<string, number>,
    maxUsage: number = 3
  ): T[] => {
    if (!items.length || want <= 0) return []
    const shuffled = shuffleArray(items, seed)
    const result: T[] = []
    for (let i = 0; i < shuffled.length && result.length < want; i++) {
      const id = getId(shuffled[i])
      if (!id) continue
      const currentUsage = usageCounts.get(id) || 0
      if (currentUsage >= maxUsage) continue
      usageCounts.set(id, currentUsage + 1)
      result.push(shuffled[i])
    }
    return result
  }

  // Track horizontal scroll to update current year
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const scrollWidth = container.scrollWidth - container.clientWidth
      const scrollPercent = scrollWidth > 0 ? scrollLeft / scrollWidth : 0
      
      // Map scroll position to year (left = current, right = 2000)
      const currentYearValue = new Date().getFullYear()
      const yearRange = currentYearValue - 2000
      const year = Math.round(currentYearValue - scrollPercent * yearRange)
      setCurrentYear(Math.max(2000, Math.min(currentYearValue, year)))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // Dial interaction - horizontal mapping
  const scrollToYear = useCallback((targetYear: number) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const currentYearValue = new Date().getFullYear()
    const yearRange = currentYearValue - 2000
    const scrollWidth = container.scrollWidth - container.clientWidth
    const targetPercent = (currentYearValue - targetYear) / yearRange
    const targetScroll = targetPercent * scrollWidth
    
    container.scrollTo({ left: targetScroll, behavior: 'smooth' })
  }, [])

  const handleDialInteraction = useCallback((clientX: number) => {
    if (!dialRef.current) return
    
    const rect = dialRef.current.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const percentage = Math.max(0, Math.min(1, relativeX / rect.width))
    
    // Map horizontal position to year (left = current, right = 2000)
    const currentYearValue = new Date().getFullYear()
    const targetYear = Math.round(currentYearValue - percentage * (currentYearValue - 2000))
    
    scrollToYear(targetYear)
  }, [scrollToYear])

  const handleDialMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    handleDialInteraction(e.clientX)
  }, [handleDialInteraction])

  const handleDialTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      setIsDragging(true)
      handleDialInteraction(e.touches[0].clientX)
    }
  }, [handleDialInteraction])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleDialInteraction(e.clientX)
    }
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) handleDialInteraction(e.touches[0].clientX)
    }
    const handleEnd = () => setIsDragging(false)

    if (isDragging) {
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
  }, [isDragging, handleDialInteraction])

  // Build all year data with 3-max repeat rule
  const yearData = useMemo(() => {
    const wordUsage = new Map<string, number>()
    const mediaUsage = new Map<string, number>()
    const songUsage = new Map<string, number>()
    const tweetUsage = new Map<string, number>()

    return timeline.map((year, index) => {
      const era = getEra(year)
      const eraTerms = getTermsForEra(era)
      const eraMedia = ERA_MEDIA[era] || []
      const eraSongs = ERA_SONGS[era] || []
      const eraTweets = ERA_TWEETS[era] || []

      const wordsPerYear = year >= 2020 ? 20 : year >= 2010 ? 16 : 12
      const mediaPerYear = year >= 2016 ? 4 : 3
      const tweetsPerYear = year >= 2016 ? 5 : 3

      const pickedTerms = pickWithLimit(
        eraTerms,
        (t) => t.text.toLowerCase(),
        wordsPerYear,
        randomSeed + index * 17,
        wordUsage,
        3
      )

      const media = pickWithLimit(
        eraMedia,
        (m: any) => `${m.type}:${m.id || m.url}`,
        mediaPerYear,
        randomSeed + 1000 + index * 19,
        mediaUsage,
        3
      )

      const songs = pickWithLimit(
        eraSongs,
        (s: any) => s.spotifyId,
        3,
        randomSeed + 2000 + index * 23,
        songUsage,
        3
      )

      const tweets = pickWithLimit(
        eraTweets,
        (t: any) => `${t.handle}:${t.text.substring(0, 20)}`,
        tweetsPerYear,
        randomSeed + 3000 + index * 29,
        tweetUsage,
        3
      )

      // Calculate word sizes
      const counts = pickedTerms.map((t) => t.count)
      const minCount = counts.length ? Math.min(...counts) : 1
      const maxCount = counts.length ? Math.max(...counts) : 1
      const wordCloudWords = pickedTerms.map((w) => {
        const normalizedSize = maxCount > minCount ? (w.count - minCount) / (maxCount - minCount) : 0.5
        const fontSize = 20 + normalizedSize * 40
        return { text: w.text, size: fontSize }
      })

      return { year, media, songs, tweets, wordCloudWords }
    })
  }, [timeline, randomSeed])

  return (
    <main className="relative bg-black min-h-screen flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] text-white/90">
              INTERNET NOSTALGIA
            </h1>
            <p className="text-xs md:text-sm text-white/60 mt-1">
              scroll right to travel back in time →
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="text-xs text-white/60 underline hover:text-white transition"
              onClick={() => setShowSources((v) => !v)}
            >
              {showSources ? 'hide' : 'sources'}
            </button>
            <a
              href="https://fareeha.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              by fareeha ✨
            </a>
          </div>
        </div>

        {showSources && (
          <div className="mt-4 text-xs text-white/70 bg-white/5 border border-white/10 rounded-lg p-3 max-w-7xl mx-auto">
            <p className="font-semibold text-white/80">sources:</p>
            <p>• reddit, twitter/x, youtube, spotify</p>
          </div>
        )}
      </div>

      {/* Horizontal Scroll Container - Continuous flow */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-x-auto overflow-y-auto pt-20 md:pt-24 pb-16 md:pb-20"
        style={{ 
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div 
          className={`flex items-start transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ minHeight: 'calc(100vh - 140px)' }}
        >
          {yearData.map((data, index) => (
            <div
              key={data.year}
              data-year={data.year}
              className="flex-shrink-0"
            >
              <FloatingWordCloud
                words={data.wordCloudWords}
                media={data.media}
                songs={data.songs}
                tweets={data.tweets}
                onVideoSelect={setSelectedVideo}
              />
            </div>
          ))}

          {/* End marker */}
          <div className="flex-shrink-0 flex items-center justify-center px-8 min-w-[200px]">
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-4xl font-light text-white/60 tracking-wide">
                2000
              </h2>
              <p className="text-xs md:text-sm text-white/40">
                the beginning
              </p>
              <button
                onClick={() => scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' })}
                className="text-white/40 hover:text-white/70 transition-colors text-xs"
              >
                ← back
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Year Dial - Minimal */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-4 md:px-8 py-3 md:py-4 bg-black/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          {/* Current year */}
          <span className="text-xl md:text-2xl font-light text-white tracking-wider min-w-[60px]">
            {currentYear}
          </span>
          
          {/* Horizontal Dial - Minimal */}
          <div 
            ref={dialRef}
            className="relative flex-1 h-6 md:h-8 cursor-grab active:cursor-grabbing touch-none select-none"
            onMouseDown={handleDialMouseDown}
            onTouchStart={handleDialTouchStart}
          >
            {/* Track line */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-white/20" />
            
            {/* Current position indicator */}
            <div 
              className="absolute top-1/2 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full transition-all duration-150"
              style={{
                left: `${((new Date().getFullYear() - currentYear) / (new Date().getFullYear() - 2000)) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
            
            {/* Subtle tick marks */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between">
              {Array.from({ length: 14 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-px h-2 bg-white/10"
                />
              ))}
            </div>
          </div>
          
          {/* End year */}
          <span className="text-sm md:text-base font-light text-white/40 min-w-[40px] text-right">
            2000
          </span>
        </div>
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
