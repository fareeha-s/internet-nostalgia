'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import FloatingWordCloud from './components/FloatingWordCloud'
import MediaGallery from './components/MediaGallery'
import { format, subMonths } from 'date-fns'
import { ERA_MEDIA } from './data/media'
import { ERA_SONGS } from './data/songs'
import { ERA_TWEETS } from './data/tweets'
import { getDataForMonth } from './utils/eraData'

interface WordData {
  text: string
  count: number
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [showSources, setShowSources] = useState(false)
  const [randomSeed] = useState(() => Math.random()) // Shuffle on page load
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set([0, 1, 2])) // Start with first 3 sections visible
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const observerRef = useRef<IntersectionObserver | null>(null)
  const yearObserverRef = useRef<IntersectionObserver | null>(null)
  const sectionRefs = useRef<Map<number, HTMLElement>>(new Map())

  // Generate timeline: current month back to Jan 2000
  const timeline = useMemo(() => {
    const dates = []
    let date = new Date()
    const endDate = new Date(2000, 0) // January 2000
    
    while (date >= endDate) {
      dates.push(new Date(date))
      date = subMonths(date, 1)
    }
    
    return dates
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

  // Get a UNIQUE slice of content for each month
  // Key insight: use absolute month index to rotate through content
  // So month 0 gets items 0-2, month 1 gets items 3-5, etc.
  const getContentSlice = <T,>(
    items: T[],
    absoluteMonthIndex: number,
    itemsPerMonth: number = 3
  ): T[] => {
    if (items.length === 0) return []
    
    // Shuffle the array first with a consistent seed for this session
    const shuffled = shuffleArray(items, randomSeed)
    
    // Calculate the starting position based on month index
    // Use modulo to wrap around when we run out of content
    const totalItems = shuffled.length
    const startIdx = (absoluteMonthIndex * itemsPerMonth) % totalItems
    
    // Get items with wrap-around
    const result: T[] = []
    for (let i = 0; i < Math.min(itemsPerMonth, totalItems); i++) {
      const idx = (startIdx + i) % totalItems
      result.push(shuffled[idx])
    }
    
    return result
  }

  // Set up intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleSections(prev => {
              const newSet = new Set(prev)
              newSet.add(index)
              return newSet
            })
          }
        })
      },
      {
        rootMargin: '500px', // Load 500px before entering viewport
        threshold: 0
      }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Set up intersection observer for year tracking
  useEffect(() => {
    yearObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = parseInt(entry.target.getAttribute('data-year') || '2026')
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


  return (
    <main className="relative bg-black">
      {/* Year Picker - iOS style */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="relative flex flex-col items-center">
          {/* Selection highlight bar */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-10 md:h-12 bg-white/5 border-y border-white/10 pointer-events-none" />
          
          {/* Years stack */}
          <div className="flex flex-col items-center py-2 overflow-hidden">
            {/* Year +2 (very faded) */}
            <div className="h-8 md:h-10 flex items-center justify-center">
              <span className="text-sm md:text-base font-light tracking-wider text-white/10 transition-all duration-300">
                {currentYear + 2 <= new Date().getFullYear() ? currentYear + 2 : ''}
              </span>
            </div>
            
            {/* Year +1 (faded) */}
            <div className="h-8 md:h-10 flex items-center justify-center">
              <span className="text-base md:text-lg font-light tracking-wider text-white/25 transition-all duration-300">
                {currentYear + 1 <= new Date().getFullYear() ? currentYear + 1 : ''}
              </span>
            </div>
            
            {/* Current Year (bright, centered) */}
            <div className="h-10 md:h-12 flex items-center justify-center">
              <span 
                className="text-2xl md:text-3xl font-light tracking-wider text-white transition-all duration-300"
                key={currentYear}
              >
                {currentYear}
              </span>
            </div>
            
            {/* Year -1 (faded) */}
            <div className="h-8 md:h-10 flex items-center justify-center">
              <span className="text-base md:text-lg font-light tracking-wider text-white/25 transition-all duration-300">
                {currentYear - 1 >= 2000 ? currentYear - 1 : ''}
              </span>
            </div>
            
            {/* Year -2 (very faded) */}
            <div className="h-8 md:h-10 flex items-center justify-center">
              <span className="text-sm md:text-base font-light tracking-wider text-white/10 transition-all duration-300">
                {currentYear - 2 >= 2000 ? currentYear - 2 : ''}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] text-white/90">
              INTERNET NOSTALGIA
            </h1>
            <p className="text-xs md:text-sm text-white/60 mt-1">
              scroll to travel back in time
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="text-[11px] md:text-xs text-white/60 underline hover:text-white transition"
              onClick={() => setShowSources((v) => !v)}
            >
              {showSources ? 'hide sources' : 'data sources'}
            </button>
            <a
              href="https://fareeha.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-[11px] text-white/30 hover:text-white/60 transition-colors duration-300"
            >
              by fareeha ✨
            </a>
          </div>
        </div>

        {showSources && (
          <div className="mt-4 text-[11px] md:text-xs text-white/70 bg-white/5 border border-white/10 rounded-lg p-3 md:p-4 space-y-1 max-w-7xl mx-auto">
            <p className="font-semibold text-white/80">sources:</p>
            <p>• reddit (trending words by era)</p>
            <p>• twitter/x (iconic tweets)</p>
            <p>• youtube (viral moments & memes)</p>
            <p>• spotify (era-defining songs)</p>
            <p>• know your meme (cultural references)</p>
          </div>
        )}
      </div>

      {/* Scrollable Sections - Continuous Flow */}
      <div className="pt-24 md:pt-32 pb-32 max-w-7xl mx-auto">
        {timeline.map((date, index) => {
          const year = date.getFullYear()
          const month = date.getMonth()
          const era = getEra(year)
          const isVisible = visibleSections.has(index)

          return (
            <section
              key={`${year}-${month}-${index}`}
              data-index={index}
              data-year={year}
              ref={(el) => {
                if (el) {
                  sectionRefs.current.set(index, el)
                  if (observerRef.current && !visibleSections.has(index)) {
                    observerRef.current.observe(el)
                  }
                  if (yearObserverRef.current) {
                    yearObserverRef.current.observe(el)
                  }
                }
              }}
              className="px-4 md:px-8"
            >

              {/* Lazy load content */}
              {isVisible && (() => {
                // Get data for this month
                const result = getDataForMonth(year, month + 1)
                const words = result.words || []
                
                // Get media, songs, tweets
                const eraMedia = ERA_MEDIA[era] || []
                const eraSongs = ERA_SONGS[era] || []
                const eraTweets = ERA_TWEETS[era] || []
                
                // Calculate absolute month index (unique for each month in timeline)
                // This ensures EVERY month gets different content
                const absoluteMonthIndex = index
                
                // Get DIFFERENT slices for each month
                // Media: 2 items per month (videos/gifs)
                // Songs: 2 items per month
                // Tweets: 2 items per month
                const media = getContentSlice(eraMedia, absoluteMonthIndex, 2)
                const songs = getContentSlice(eraSongs, absoluteMonthIndex + 100, 2)
                const tweets = getContentSlice(eraTweets, absoluteMonthIndex + 200, 2)
                
                // Also rotate words - take different subset each month
                const shuffledWords = shuffleArray(words, randomSeed)
                const wordsPerMonth = Math.max(8, Math.ceil(words.length / 3))
                const wordStartIdx = (absoluteMonthIndex * 3) % Math.max(1, words.length)
                const selectedWords: typeof words = []
                for (let i = 0; i < Math.min(wordsPerMonth, words.length); i++) {
                  const idx = (wordStartIdx + i) % words.length
                  selectedWords.push(shuffledWords[idx])
                }
                
                // Transform words for display
                const wordCloudWords = selectedWords.map(w => {
                  const counts = selectedWords.map(word => word.count)
                  const minCount = Math.min(...counts)
                  const maxCount = Math.max(...counts)
                  const normalizedSize = maxCount > minCount
                    ? ((w.count - minCount) / (maxCount - minCount))
                    : 0.5
                  const fontSize = 16 + (normalizedSize * 40)
                  
                  return { text: w.text, size: fontSize }
                })

                return (
                  <FloatingWordCloud 
                    words={wordCloudWords} 
                    media={media}
                    songs={songs}
                    tweets={tweets}
                    onVideoSelect={setSelectedVideo}
                    key={`cloud-${year}-${month}-${randomSeed}`}
                  />
                )
              })()}
            </section>
          )
        })}
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
