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
  const observerRef = useRef<IntersectionObserver | null>(null)

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

  // Check if date is within last 12 months (skip filtering for recent content)
  const isRecentDate = (date: Date): boolean => {
    const now = new Date()
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), 1)
    return date >= oneYearAgo
  }

  // Simple hash function for filtering
  const hashString = (str: string): number => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash
    }
    return Math.abs(hash)
  }

  // Filter content to only show in 3 months max per year
  const filterByMonthEligibility = <T extends { id?: string; title?: string; text?: string; spotifyId?: string }>(
    items: T[],
    currentMonth: number
  ): T[] => {
    return items.filter(item => {
      const itemId = item.id || item.title || item.text || item.spotifyId || ''
      const hash = hashString(itemId)
      const baseMonth = hash % 12
      const eligibleMonths = [
        baseMonth,
        (baseMonth + 4) % 12,
        (baseMonth + 8) % 12
      ]
      return eligibleMonths.includes(currentMonth)
    })
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

  // Helper to check if year changed from previous section
  const isYearTransition = (index: number): boolean => {
    if (index === 0) return true
    const currentYear = timeline[index].getFullYear()
    const prevYear = timeline[index - 1].getFullYear()
    return currentYear !== prevYear
  }

  return (
    <main className="relative bg-black">
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

      {/* Scrollable Sections */}
      <div className="pt-24 md:pt-32">
        {timeline.map((date, index) => {
          const year = date.getFullYear()
          const month = date.getMonth()
          const era = getEra(year)
          const showYearLabel = isYearTransition(index)
          const isVisible = visibleSections.has(index)

          return (
            <section
              key={`${year}-${month}-${index}`}
              data-index={index}
              ref={(el) => {
                if (el && observerRef.current && !visibleSections.has(index)) {
                  observerRef.current.observe(el)
                }
              }}
              className="min-h-screen flex flex-col items-center justify-center py-12 md:py-16 px-4 md:px-8 border-b border-white/5"
            >
              {/* Year Header - only show on year transitions */}
              {showYearLabel && (
                <div className="mb-8 text-center">
                  <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white/90">
                    {format(date, 'yyyy')}
                  </h2>
                </div>
              )}

              {/* Lazy load content */}
              {isVisible && (() => {
                // Get data for this month
                const result = getDataForMonth(year, month + 1)
                const words = result.words || []
                
                // Get media, songs, tweets
                const eraMedia = ERA_MEDIA[era] || []
                const eraSongs = ERA_SONGS[era] || []
                const eraTweets = ERA_TWEETS[era] || []
                
                // Apply filtering and shuffling
                const media = isRecentDate(date) 
                  ? shuffleArray(eraMedia, randomSeed + index)
                  : shuffleArray(filterByMonthEligibility(eraMedia, month), randomSeed + index)
                
                const songs = isRecentDate(date)
                  ? shuffleArray(eraSongs, randomSeed + index + 1000)
                  : shuffleArray(filterByMonthEligibility(eraSongs, month), randomSeed + index + 1000)
                
                const tweets = isRecentDate(date)
                  ? shuffleArray(eraTweets, randomSeed + index + 2000)
                  : shuffleArray(filterByMonthEligibility(eraTweets, month), randomSeed + index + 2000)
                
                // Transform words for display
                const wordCloudWords = words.map(w => {
                  const counts = words.map(word => word.count)
                  const minCount = Math.min(...counts)
                  const maxCount = Math.max(...counts)
                  const normalizedSize = maxCount > minCount
                    ? ((w.count - minCount) / (maxCount - minCount))
                    : 0.5
                  const fontSize = 16 + (normalizedSize * 40)
                  
                  return { text: w.text, size: fontSize }
                })

                return (
                  <div className="w-full max-w-7xl">
                    <FloatingWordCloud 
                      words={wordCloudWords} 
                      media={media}
                      songs={songs}
                      tweets={tweets}
                      onVideoSelect={setSelectedVideo}
                      key={`cloud-${year}-${month}-${randomSeed}`}
                    />
                  </div>
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
