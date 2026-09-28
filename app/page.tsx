'use client'

import { useEffect, useState } from 'react'
import { ERA_MEDIA, type MediaItem } from './data/media'
import { ERA_SONGS } from './data/songs'
import { ERA_TWEETS } from './data/tweets'
import { getTermsForEra } from './utils/eraData'
import MediaGallery from './components/MediaGallery'

const ERAS = [
  { years: '2025-2026', label: 'Now', mood: 'The internet is everywhere' },
  { years: '2022-2024', label: 'The feed', mood: 'Everything is content' },
  { years: '2019-2021', label: 'Online together', mood: 'The world moves indoors' },
  { years: '2016-2018', label: 'Always connected', mood: 'The timeline never sleeps' },
  { years: '2013-2015', label: 'The social era', mood: 'Post it, share it, repeat' },
  { years: '2010-2012', label: 'Going viral', mood: 'Everybody has a camera' },
  { years: '2007-2009', label: 'The early platforms', mood: 'A new kind of internet' },
  { years: '2004-2006', label: 'The web wakes up', mood: 'Your world, online' },
  { years: '2000-2003', label: 'The beginning', mood: 'Before everything changed' },
]

function MediaCard({ item, onPlay }: { item: MediaItem; onPlay: (id: string) => void }) {
  const [imageFailed, setImageFailed] = useState(false)
  const image = item.type === 'youtube' ? `https://img.youtube.com/vi/${item.id}/hqdefault.jpg` : item.url
  const content = <><div className="media-image">
    {image && !imageFailed ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image} alt="" loading="lazy" onError={() => setImageFailed(true)} />
    ) : <span className="media-placeholder">{item.type === 'youtube' ? '▶' : '✦'}</span>}
    {item.type === 'youtube' && <span className="play-badge">▶ Watch</span>}
  </div><span className="media-title">{item.title}</span></>
  return item.type === 'youtube' ? <button type="button" className="media-card" onClick={() => onPlay(item.id)} aria-label={`Watch ${item.title}`}>{content}</button>
    : <a className="media-card" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title}`}>{content}</a>
}

function EraSection({ era, index, onPlay }: { era: typeof ERAS[number]; index: number; onPlay: (id: string) => void }) {
  const words = getTermsForEra(era.years).slice(0, 20)
  const media = ERA_MEDIA[era.years] || []
  const songs = ERA_SONGS[era.years] || []
  const tweets = ERA_TWEETS[era.years] || []
  return <section id={era.years} className={`era-section era-tone-${index % 3}`} aria-label={`${era.years}: ${era.label}`}>
    <div className="era-inner">
      <div className="era-topline"><span>CHAPTER {String(index + 1).padStart(2, '0')} / 09</span><span>SCROLL TO EXPLORE ↓</span></div>
      <div className="era-hero"><p className="eyebrow">{era.years} · {era.mood}</p><h2>{era.label}<span className="period">.</span></h2><p>A little of what the internet looked, sounded and felt like from {era.years.replace('-', ' to ')}.</p></div>
      <div className="era-detail">
        <section className="content-section" aria-labelledby={`words-${index}`}><div className="section-heading"><h3 id={`words-${index}`}>The words</h3><span>{words.length} memories</span></div><div className="word-list">{words.map((word, i) => <a key={word.text} className={`word-chip word-size-${i % 4}`} href={`https://www.google.com/search?q=${encodeURIComponent(word.text)}`} target="_blank" rel="noopener noreferrer">{word.text} <span>↗</span></a>)}</div></section>
        {media.length > 0 && <section className="content-section" aria-labelledby={`media-${index}`}><div className="section-heading"><h3 id={`media-${index}`}>On screen</h3><span>{media.length} clips &amp; images</span></div><div className="media-grid">{media.map((item) => <MediaCard key={`${item.type}-${item.id}`} item={item} onPlay={onPlay} />)}</div></section>}
        {songs.length > 0 && <section className="content-section" aria-labelledby={`songs-${index}`}><div className="section-heading"><h3 id={`songs-${index}`}>On repeat</h3><span>{songs.length} tracks</span></div><div className="song-list">{songs.map((song) => <a key={song.spotifyId} href={`https://open.spotify.com/track/${song.spotifyId}`} target="_blank" rel="noopener noreferrer" className="song-row"><span className="song-icon">♫</span><span className="song-meta"><strong>{song.title}</strong><small>{song.artist}</small></span><span aria-hidden="true">↗</span></a>)}</div></section>}
        {tweets.length > 0 && <section className="content-section" aria-labelledby={`posts-${index}`}><div className="section-heading"><h3 id={`posts-${index}`}>In the feed</h3><span>{tweets.length} posts</span></div><div className="post-grid">{tweets.map((post, i) => <blockquote key={`${post.handle}-${i}`} className="post"><p>“{post.text}”</p><footer><strong>{post.author}</strong><span>{post.handle.startsWith('@') ? post.handle : `@${post.handle}`} · {post.date}</span></footer></blockquote>)}</div></section>}
      </div>
      <div className="chapter-end"><span>✳</span><span>{index === ERAS.length - 1 ? 'YOU REACHED THE BEGINNING' : `NEXT: ${ERAS[index + 1].years}`}</span><span>↓</span></div>
    </div>
  </section>
}

export default function Home() {
  const [activeEra, setActiveEra] = useState(ERAS[0].years)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [showSources, setShowSources] = useState(false)
  useEffect(() => {
    const sections = ERAS.map((era) => document.getElementById(era.years)).filter((el): el is HTMLElement => !!el)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActiveEra(visible[0].target.id)
    }, { rootMargin: '-120px 0px -55% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (!window.matchMedia('(max-width: 740px)').matches) return
    const list = document.querySelector<HTMLElement>('.era-list')
    const button = Array.from(list?.querySelectorAll<HTMLButtonElement>('.era-button') || [])
      .find((item) => item.dataset.era === activeEra)
    if (list && button) list.scrollTo({ left: button.offsetLeft - list.offsetLeft - (list.clientWidth - button.clientWidth) / 2, behavior: 'smooth' })
  }, [activeEra])
  function goToEra(years: string) {
    document.getElementById(years)?.scrollIntoView({ behavior: 'smooth' })
  }
  return <main className="site-shell">
    <header className="site-header"><a className="brand" href="#top" aria-label="Internet Nostalgia, back to top"><span className="brand-mark">◉</span><span>INTERNET<br />NOSTALGIA</span></a><div className="header-actions"><button type="button" onClick={() => setShowSources(!showSources)} aria-expanded={showSources}>About &amp; sources</button><a href="https://fareeha.sh" target="_blank" rel="noopener noreferrer">by fareeha ↗</a></div></header>
    {showSources && <aside className="source-note">A curated time capsule of internet culture from 2000 to 2026. Explore words, videos, music and posts from each era. Media links open YouTube, Giphy, Imgur or Spotify.</aside>}
    <div id="top" className="opening"><span className="eyebrow">AN INTERNET TIME CAPSULE · 2000—2026</span><h1>Remember<br />the internet<span className="period">?</span></h1><p>Scroll through nine chapters of things we watched, said and had on repeat. Start here, and keep going back.</p><button type="button" onClick={() => goToEra(ERAS[0].years)}>START SCROLLING <span>↓</span></button><div className="opening-deco" aria-hidden="true">✳</div></div>
    <div className="archive-layout"><nav className="era-nav" aria-label="Jump to an era"><p className="eyebrow nav-label">THE TIMELINE</p><div className="era-list">{ERAS.map((item) => <button type="button" key={item.years} data-era={item.years} className={`era-button ${activeEra === item.years ? 'active' : ''}`} onClick={() => goToEra(item.years)} aria-current={activeEra === item.years ? 'step' : undefined}><span>{item.years}</span><small>{item.label}</small></button>)}</div></nav><div className="archive-content">{ERAS.map((era, index) => <EraSection key={era.years} era={era} index={index} onPlay={setSelectedVideo} />)}<footer className="journey-end"><span>✳</span><h2>That&apos;s all, for now.</h2><p>You made it back to the beginning of this little corner of the web.</p><button type="button" onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}>BACK TO THE PRESENT ↑</button></footer></div></div>
    <MediaGallery media={[]} selectedVideo={selectedVideo} onClose={() => setSelectedVideo(null)} />
  </main>
}
