'use client'

import { useRef, useState, useEffect, useMemo, useCallback, memo } from 'react'
import NextImage from 'next/image'

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

// GIF/Image thumbnail for early internet era - memoized
const GifImageThumbnail = memo(function GifImageThumbnail({ item }: { item: any }) {
  return (
    <div
      className="relative w-14 h-14 sm:w-[72px] sm:h-[72px] md:w-24 md:h-24 rounded-lg overflow-hidden border border-white/20 active:border-white/40 md:hover:border-white/40 transition-all active:scale-95 md:hover:scale-105 flex-shrink-0 will-change-transform touch-manipulation"
      title={item.title}
    >
      <NextImage
        src={item.url}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 56px, (max-width: 768px) 72px, 96px"
        className="object-cover opacity-80"
      />
    </div>
  )
})

// Video thumbnail - memoized and optimized
const VideoThumbnail = memo(function VideoThumbnail({ item, onSelect }: { item: any, onSelect?: (id: string) => void }) {
  const [isAvailable, setIsAvailable] = useState(false)
  
  useEffect(() => {
    const img = new window.Image()
    img.onload = () => {
      if (img.naturalWidth > 120 && img.naturalHeight > 90) {
        setIsAvailable(true)
      }
    }
    img.src = `https://img.youtube.com/vi/${item.id}/mqdefault.jpg`
  }, [item.id])

  if (!isAvailable) return null

  return (
    <button
      className="group relative w-16 h-11 sm:w-20 sm:h-14 md:w-28 md:h-20 rounded-lg overflow-hidden border border-white/20 active:border-white/40 md:hover:border-white/40 transition-all active:scale-95 md:hover:scale-105 flex-shrink-0 will-change-transform touch-manipulation"
      onClick={() => onSelect?.(item.id)}
      title={item.title}
    >
      <NextImage
        src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 112px"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/80" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </button>
  )
})

// Song card component - memoized
const SongCard = memo(function SongCard({ song }: { song: Song }) {
  return (
    <a
      href={`https://open.spotify.com/track/${song.spotifyId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-28 sm:w-32 md:w-40 bg-white/5 active:bg-white/10 md:hover:bg-white/10 border border-white/10 active:border-white/30 md:hover:border-white/30 rounded-lg p-2 md:p-3 transition-all active:scale-95 md:hover:scale-105 flex-shrink-0 will-change-transform touch-manipulation min-h-[44px]"
      title={`${song.title} - ${song.artist}`}
    >
      <div className="flex items-start gap-1.5 sm:gap-2">
        <svg 
          className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <div className="flex-1 min-w-0">
          <p className="text-[9px] sm:text-[10px] md:text-xs text-white/80 font-medium truncate leading-tight">
            {song.title}
          </p>
          <p className="text-[8px] md:text-[10px] text-white/40 truncate mt-0.5">
            {song.artist}
          </p>
        </div>
      </div>
    </a>
  )
})

// Tweet card component - memoized
const TweetCard = memo(function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <div className="block w-36 sm:w-40 md:w-48 bg-white/5 border border-white/10 rounded-lg p-2 md:p-3 flex-shrink-0 touch-manipulation">
      <div className="space-y-1.5 sm:space-y-2">
        <div className="flex items-start gap-1.5 sm:gap-2">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-white/80 font-medium truncate">{tweet.author}</p>
            <p className="text-[7px] sm:text-[8px] md:text-[9px] text-white/40 truncate">{tweet.handle}</p>
          </div>
        </div>
        <p className="text-[9px] sm:text-[10px] md:text-xs text-white/90 leading-snug line-clamp-2 sm:line-clamp-3">
          {tweet.text}
        </p>
        <p className="text-[6px] sm:text-[7px] md:text-[8px] text-white/30">{tweet.date}</p>
      </div>
    </div>
  )
})

export default function FloatingWordCloud({ words, media = [], songs = [], tweets = [], onVideoSelect }: FloatingWordCloudProps) {
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

  if (words.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 py-2">
      {shuffledContent.map((item, index) => {
        if (item.type === 'word') {
          const word = item.data as Word
          // Scale down font size on mobile
          const mobileSize = Math.max(12, word.size * 0.7)
          return (
            <span
              key={item.id}
              className="floating-word font-light tracking-wide text-white/50 active:text-white md:hover:text-white transition-colors cursor-pointer select-none touch-manipulation"
              style={{
                fontSize: `clamp(${mobileSize}px, ${word.size * 0.8}px, ${word.size}px)`,
                animationDelay: `${(index % 10) * 0.15}s`,
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
          if (mediaData.type === 'gif' || mediaData.type === 'image') {
            return <GifImageThumbnail key={item.id} item={mediaData} />
          } else {
            return <VideoThumbnail key={item.id} item={mediaData} onSelect={onVideoSelect} />
          }
        } else if (item.type === 'song') {
          return <SongCard key={item.id} song={item.data as Song} />
        } else if (item.type === 'tweet') {
          return <TweetCard key={item.id} tweet={item.data as Tweet} />
        }
        return null
      })}
    </div>
  )
}
