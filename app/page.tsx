'use client'

import { useEffect, useState } from 'react'
import { ERA_MEDIA, type MediaItem } from './data/media'
import { ERA_SONGS } from './data/songs'
import { ERA_TWEETS } from './data/tweets'
import { getTermsForEra } from './utils/eraData'
import MediaGallery from './components/MediaGallery'

const ERAS = [
  '2025-2026', '2022-2024', '2019-2021', '2016-2018', '2013-2015',
  '2010-2012', '2007-2009', '2004-2006', '2000-2003',
]

function MediaCard({ item, onPlay }: { item: MediaItem; onPlay: (id: string) => void }) {
  const [imageFailed, setImageFailed] = useState(false)
  const image = item.type === 'youtube'
    ? `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`
    : item.url
  const content = <>
    <div className="media-image">
      {image && !imageFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" loading="lazy" onError={() => setImageFailed(true)} />
      ) : <span className="media-fallback">{item.title}</span>}
      {item.type === 'youtube' && <span className="play-icon" aria-hidden="true">▶</span>}
    </div>
    <span className="media-title">{item.title}</span>
  </>
  return item.type === 'youtube'
    ? <button type="button" className="media-card" onClick={() => onPlay(item.id)} aria-label={`Watch ${item.title}`}>{content}</button>
    : <a className="media-card" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title}`}>{content}</a>
}

function EraSection({ era, onPlay }: { era: string; onPlay: (id: string) => void }) {
  const words = getTermsForEra(era).slice(0, 20)
  const media = ERA_MEDIA[era] || []
  const songs = ERA_SONGS[era] || []
  const posts = ERA_TWEETS[era] || []

  return <section id={era} className="era-section" aria-label={`Internet culture from ${era}`}>
    <header className="era-heading"><span className="era-year">{era}</span></header>
    <div className="content-group"><h3>words</h3><div className="words">
      {words.map((word) => <a key={word.text} href={`https://www.google.com/search?q=${encodeURIComponent(word.text)}`} target="_blank" rel="noopener noreferrer">{word.text}</a>)}
    </div></div>
    {media.length > 0 && <div className="content-group"><h3>watch</h3><div className="media-grid">
      {media.map((item) => <MediaCard key={`${item.type}-${item.id}`} item={item} onPlay={onPlay} />)}
    </div></div>}
    {songs.length > 0 && <div className="content-group"><h3>listen</h3><div className="song-list">
      {songs.map((song) => <a key={song.spotifyId} className="song-row" href={`https://open.spotify.com/track/${song.spotifyId}`} target="_blank" rel="noopener noreferrer"><span><strong>{song.title}</strong><small>{song.artist}</small></span><span aria-hidden="true">↗</span></a>)}
    </div></div>}
    {posts.length > 0 && <div className="content-group"><h3>posts</h3><div className="post-list">
      {posts.map((post, index) => <blockquote key={`${post.handle}-${index}`} className="post"><div className="post-byline"><strong>{post.author}</strong><span>{post.handle.startsWith('@') ? post.handle : `@${post.handle}`} · {post.date}</span></div><p>{post.text}</p></blockquote>)}
    </div></div>}
  </section>
}

export default function Home() {
  const [activeEra, setActiveEra] = useState(ERAS[0])
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [showAbout, setShowAbout] = useState(false)

  useEffect(() => {
    const sections = ERAS.map((era) => document.getElementById(era)).filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActiveEra(visible[0].target.id)
    }, { rootMargin: '-120px 0px -55% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function goToEra(era: string) {
    document.getElementById(era)?.scrollIntoView({ behavior: 'smooth' })
  }

  return <main className="site-shell">
    <header className="site-header"><h1 className="site-title"><a href="#top">internet nostalgia</a></h1><button type="button" onClick={() => setShowAbout(!showAbout)} aria-expanded={showAbout}>about</button></header>
    {showAbout && <aside className="about-popover">curated words, videos, music, and posts from 2000 to 2026. links open their original platforms. made by <a href="https://fareeha.sh" target="_blank" rel="noopener noreferrer">fareeha ↗</a></aside>}
    <div className="layout" id="top">
      <nav className="era-nav" aria-label="Jump to an era"><span className="nav-heading">years</span>{ERAS.map((era) => <button type="button" key={era} className={activeEra === era ? 'active' : ''} onClick={() => goToEra(era)} aria-current={activeEra === era ? 'step' : undefined}>{era}</button>)}</nav>
      <div className="feed">
        <div className="feed-intro"><p>things we watched, said, and listened to online. scroll down to go back in time.</p></div>
        {ERAS.map((era) => <EraSection key={era} era={era} onPlay={setSelectedVideo} />)}
        <footer className="feed-end">you made it to 2000. <button type="button" onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}>back to the top ↑</button></footer>
      </div>
    </div>
    <MediaGallery media={[]} selectedVideo={selectedVideo} onClose={() => setSelectedVideo(null)} />
  </main>
}
