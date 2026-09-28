'use client'

import { useState } from 'react'
import { ERA_MEDIA, type MediaItem } from './data/media'
import { ERA_SONGS, type SongItem } from './data/songs'
import { ERA_TWEETS, type TweetItem } from './data/tweets'
import { getTermsForEra } from './utils/eraData'
import MediaGallery from './components/MediaGallery'

const ERAS = [
  '2025-2026', '2022-2024', '2019-2021', '2016-2018', '2013-2015',
  '2010-2012', '2007-2009', '2004-2006', '2000-2003',
]

type Fragment =
  | { kind: 'word'; text: string }
  | { kind: 'media'; item: MediaItem }
  | { kind: 'song'; item: SongItem }
  | { kind: 'post'; item: TweetItem }

function fragmentsForEra(era: string): Fragment[][] {
  const words = getTermsForEra(era).slice(0, 20)
  const clusters: Fragment[][] = Array.from({ length: 4 }, (_, index) =>
    words.slice(index * 5, index * 5 + 5).map(({ text }): Fragment => ({ kind: 'word', text }))
  )

  ;(ERA_MEDIA[era] || []).forEach((item, index) => {
    clusters[index % 4].splice(2, 0, { kind: 'media', item })
  })
  ;(ERA_SONGS[era] || []).forEach((item, index) => {
    clusters[(index * 3 + 1) % 4].splice(1, 0, { kind: 'song', item })
  })
  ;(ERA_TWEETS[era] || []).forEach((item, index) => {
    clusters[(index * 3 + 2) % 4].push({ kind: 'post', item })
  })
  return clusters.filter((cluster) => cluster.length > 0)
}

function MediaFragment({ item, onPlay }: { item: MediaItem; onPlay: (id: string) => void }) {
  const [imageFailed, setImageFailed] = useState(false)
  const image = item.type === 'youtube'
    ? `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`
    : item.url
  const content = <>
    <span className="media-image">
      {image && !imageFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" loading="lazy" onError={() => setImageFailed(true)} />
      ) : <span className="media-fallback">{item.title}</span>}
      {item.type === 'youtube' && <span className="play-icon" aria-hidden="true">▶</span>}
    </span>
    <span className="media-title">{item.title}</span>
  </>
  return item.type === 'youtube'
    ? <button type="button" className="media-fragment" onClick={() => onPlay(item.id)} aria-label={`Watch ${item.title}`}>{content}</button>
    : <a className="media-fragment" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title}`}>{content}</a>
}

function FragmentView({ fragment, index, onPlay }: { fragment: Fragment; index: number; onPlay: (id: string) => void }) {
  if (fragment.kind === 'word') return <a className={`word word-${index % 5}`} href={`https://www.google.com/search?q=${encodeURIComponent(fragment.text)}`} target="_blank" rel="noopener noreferrer">{fragment.text}</a>
  if (fragment.kind === 'media') return <MediaFragment item={fragment.item} onPlay={onPlay} />
  if (fragment.kind === 'song') return <a className="song-fragment" href={`https://open.spotify.com/track/${fragment.item.spotifyId}`} target="_blank" rel="noopener noreferrer"><span className="music-mark" aria-hidden="true">♫</span><span>{fragment.item.title}<small>{fragment.item.artist}</small></span></a>
  return <blockquote className="post-fragment"><p>{fragment.item.text}</p><cite>{fragment.item.handle.startsWith('@') ? fragment.item.handle : `@${fragment.item.handle}`}</cite></blockquote>
}

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [showAbout, setShowAbout] = useState(false)
  let clusterNumber = 0

  return <main className="site-shell" id="top">
    <header className="site-header"><h1 className="site-title">internet nostalgia</h1><button type="button" onClick={() => setShowAbout(!showAbout)} aria-expanded={showAbout}>about</button></header>
    {showAbout && <aside className="about-popover">a long scroll through things we said, watched, and listened to online. links open their original platforms. made by <a href="https://fareeha.sh" target="_blank" rel="noopener noreferrer">fareeha ↗</a></aside>}
    <div className="drift" aria-label="A scroll through internet culture, moving backward in time">
      <p className="opening">keep scrolling ↓</p>
      {ERAS.map((era) => <section className="era-drift" key={era} aria-label={`Internet culture from ${era}`}>
        <span className="time-cue" aria-hidden="true">{era.replace('-', '—')}</span>
        {fragmentsForEra(era).map((cluster, clusterIndex) => {
          const position = clusterNumber++ % 5
          return <div className={`cloud-cluster drift-${position}`} key={`${era}-${clusterIndex}`}>
            {cluster.map((fragment, index) => <FragmentView key={`${fragment.kind}-${index}`} fragment={fragment} index={index + clusterIndex} onPlay={setSelectedVideo} />)}
          </div>
        })}
      </section>)}
      <footer className="feed-end">that&apos;s as far back as this goes. <a href="#top">back to top ↑</a></footer>
    </div>
    <MediaGallery media={[]} selectedVideo={selectedVideo} onClose={() => setSelectedVideo(null)} />
  </main>
}
