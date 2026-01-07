'use client'

import { useRef, useState, useEffect, useMemo } from 'react'

interface Word {
  text: string
  size: number
}

interface Song {
  title: string
  artist: string
  spotifyId: string
  memeContext?: string
}

interface Tweet {
  text: string
  author: string
  handle: string
  date: string
  context?: string
}

interface FloatingWordCloudProps {
  words: Word[]
  media?: any[]
  songs?: Song[]
  tweets?: Tweet[]
  onVideoSelect?: (id: string) => void
}

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

type ContentItem = 
  | { type: 'word'; data: Word; id: string }
  | { type: 'video'; data: any; id: string }
  | { type: 'song'; data: Song; id: string }
  | { type: 'tweet'; data: Tweet; id: string }

// GIF/Image thumbnail for early internet era
function GifImageThumbnail({ item }: { item: any }) {
  return (
    <div
      className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:scale-105 flex-shrink-0"
      title={item.title}
    >
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
  )
}

// Video thumbnail - ONLY show if available
function VideoThumbnail({ item, onSelect }: { item: any, onSelect?: (id: string) => void }) {
  const [isAvailable, setIsAvailable] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  useEffect(() => {
    // Strictly check if video thumbnail exists
    const img = new Image()
    img.onload = () => {
      // YouTube returns 120x90 default image for unavailable videos
      // Real thumbnails are 320x180 or larger
      if (img.naturalWidth > 120 && img.naturalHeight > 90) {
        setIsAvailable(true)
        setImageLoaded(true)
      } else {
        setIsAvailable(false)
      }
    }
    img.onerror = () => {
      setIsAvailable(false)
    }
    img.src = `https://img.youtube.com/vi/${item.id}/mqdefault.jpg`
  }, [item.id])

  // DO NOT RENDER if video is not available
  if (!isAvailable) return null
  if (!imageLoaded) return null

  return (
    <button
      className="group relative w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden border border-white/20 hover:border-white/40 transition-all hover:scale-105 flex-shrink-0"
      onClick={() => onSelect?.(item.id)}
      title={item.title}
    >
      <img
        src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
        alt={item.title}
        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-white transition-all" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </button>
  )
}

// Song card component
function SongCard({ song }: { song: Song }) {
  return (
    <a
      href={`https://open.spotify.com/track/${song.spotifyId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-32 md:w-40 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg p-2 md:p-3 transition-all hover:scale-105 flex-shrink-0"
      title={`${song.title} - ${song.artist}`}
    >
      <div className="flex items-start gap-2">
        <svg 
          className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] md:text-xs text-white/80 group-hover:text-white font-medium truncate transition-colors leading-tight">
            {song.title}
          </p>
          <p className="text-[8px] md:text-[10px] text-white/40 truncate mt-0.5">
            {song.artist}
          </p>
          {song.memeContext && (
            <p className="text-[7px] md:text-[9px] text-white/30 italic truncate mt-1">
              {song.memeContext}
            </p>
          )}
        </div>
      </div>
    </a>
  )
}

// Tweet card component
function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <div className="block w-40 md:w-48 bg-white/5 border border-white/10 rounded-lg p-2 md:p-3 transition-all flex-shrink-0">
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <svg className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] md:text-[10px] text-white/80 font-medium">{tweet.author}</p>
            <p className="text-[8px] md:text-[9px] text-white/40">{tweet.handle}</p>
          </div>
        </div>
        <p className="text-[10px] md:text-xs text-white/90 leading-snug line-clamp-3">
          {tweet.text}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[7px] md:text-[8px] text-white/30">{tweet.date}</p>
          {tweet.context && (
            <p className="text-[7px] md:text-[8px] text-white/30 italic truncate max-w-[60%]">
              {tweet.context}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default function FloatingWordCloud({ words, media = [], songs = [], tweets = [], onVideoSelect }: FloatingWordCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const wordRefs = useRef<Map<number, HTMLSpanElement>>(new Map())

  // Create shuffled content array - recalculates on every mount (triggered by key prop change)
  const shuffledContent = useMemo(() => {
    const content: ContentItem[] = []
    
    // Add all words
    words.forEach((word, i) => {
      content.push({ type: 'word', data: word, id: `word-${i}` })
    })
    
    // Add all videos
    media.forEach((item, i) => {
      content.push({ type: 'video', data: item, id: `video-${i}` })
    })
    
    // Add all songs
    songs.forEach((song, i) => {
      content.push({ type: 'song', data: song, id: `song-${i}` })
    })
    
    // Add all tweets
    tweets.forEach((tweet, i) => {
      content.push({ type: 'tweet', data: tweet, id: `tweet-${i}` })
    })
    
    // Shuffle everything together
    return shuffle(content)
  }, [words, media, songs, tweets])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Apply repulsion effect to words
  useEffect(() => {
    const updateWordPositions = () => {
      wordRefs.current.forEach((element, index) => {
        if (!element || !containerRef.current) return
        
        const rect = element.getBoundingClientRect()
        const containerRect = containerRef.current.getBoundingClientRect()
        
        const wordCenterX = rect.left + rect.width / 2 - containerRect.left
        const wordCenterY = rect.top + rect.height / 2 - containerRect.top
        
        const dx = mousePos.x - wordCenterX
        const dy = mousePos.y - wordCenterY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const repelRadius = 120
        
        if (distance < repelRadius && distance > 0) {
          const force = (repelRadius - distance) / repelRadius
          const pushX = (-dx / distance) * force * 30
          const pushY = (-dy / distance) * force * 30
          
          element.style.transform = `translate(${pushX}px, ${pushY}px)`
        } else {
          element.style.transform = ''
        }
      })
    }

    updateWordPositions()
  }, [mousePos])

  if (words.length === 0) {
    return null
  }

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className="relative w-full h-full bg-black"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/[0.02] rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/[0.02] rounded-full blur-3xl animate-pulse" 
               style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
        
        {/* Shuffled content - words, videos, songs, tweets all mixed */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 md:gap-5 p-4 md:p-8 h-full content-center">
          {shuffledContent.map((item, index) => {
            if (item.type === 'word') {
              const word = item.data as Word
              return (
                <span
                  key={item.id}
                  ref={(el) => {
                    if (el) wordRefs.current.set(index, el)
                  }}
                  className="floating-word font-light tracking-wide text-white/50 hover:text-white transition-all duration-200 cursor-pointer select-none"
                  style={{
                    fontSize: `${word.size}px`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onClick={() => {
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(word.text)}`, '_blank')
                  }}
                >
                  {word.text}
                </span>
              )
            } else if (item.type === 'video') {
              const mediaData = item.data as any
              // Check if it's a gif/image or YouTube video
              if (mediaData.type === 'gif' || mediaData.type === 'image') {
                return (
                  <GifImageThumbnail 
                    key={item.id}
                    item={mediaData}
                  />
                )
              } else {
                return (
                  <VideoThumbnail 
                    key={item.id}
                    item={mediaData} 
                    onSelect={onVideoSelect} 
                  />
                )
              }
            } else if (item.type === 'song') {
              return (
                <SongCard key={item.id} song={item.data as Song} />
              )
            } else if (item.type === 'tweet') {
              return (
                <TweetCard key={item.id} tweet={item.data as Tweet} />
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
