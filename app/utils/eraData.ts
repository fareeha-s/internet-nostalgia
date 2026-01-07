// Era-specific culturally relevant terms
const ERA_TERMS: Record<string, { text: string; count: number }[]> = {
  // 2000-2003: Early internet, forums, Flash
  '2000-2003': [
    { text: 'all your base', count: 92 },
    { text: 'hamster dance', count: 87 },
    { text: 'newgrounds', count: 82 },
    { text: 'flash', count: 78 },
    { text: 'ebaumsworld', count: 73 },
    { text: 'homestar runner', count: 68 },
    { text: 'dancing baby', count: 63 },
    { text: 'badger badger', count: 58 },
    { text: 'napster', count: 53 },
    { text: 'aim', count: 48 },
    { text: 'livejournal', count: 43 },
    { text: 'something awful', count: 38 },
    { text: 'ytmnd', count: 33 },
    { text: 'strong bad', count: 28 },
    { text: 'geocities', count: 23 },
  ],
  
  // 2004-2006: YouTube, early social, forums
  '2004-2006': [
    { text: 'youtube', count: 95 },
    { text: 'myspace', count: 90 },
    { text: '4chan', count: 85 },
    { text: 'limewire', count: 80 },
    { text: 'numa numa', count: 75 },
    { text: 'leeroy jenkins', count: 70 },
    { text: 'chocolate rain', count: 65 },
    { text: 'lonelygirl15', count: 60 },
    { text: 'boxxy', count: 55 },
    { text: 'snakes on a plane', count: 50 },
    { text: 'chuck norris', count: 45 },
    { text: 'lolcats', count: 40 },
    { text: 'i can has', count: 35 },
    { text: 'o rly', count: 30 },
    { text: 'an hero', count: 25 },
  ],
  
  // 2007-2009: Early social media, recession
  '2007-2009': [
    { text: 'iphone', count: 95 },
    { text: 'facebook', count: 88 },
    { text: 'twitter', count: 82 },
    { text: 'myspace', count: 78 },
    { text: 'recession', count: 71 },
    { text: 'fail', count: 65 },
    { text: 'epic', count: 59 },
    { text: 'pwned', count: 54 },
    { text: 'lolcats', count: 48 },
    { text: 'rickroll', count: 43 },
    { text: 'digg', count: 38 },
    { text: 'reddit', count: 35 },
    { text: 'tumblr', count: 32 },
    { text: 'viral', count: 29 },
    { text: 'youtube', count: 26 },
  ],
  
  // 2010-2012: Instagram, social media boom
  '2010-2012': [
    { text: 'instagram', count: 92 },
    { text: 'hashtag', count: 87 },
    { text: 'rage comic', count: 79 },
    { text: 'swag', count: 73 },
    { text: 'yolo', count: 68 },
    { text: 'selfie', count: 64 },
    { text: 'gangnam', count: 58 },
    { text: 'meme', count: 53 },
    { text: 'doge', count: 47 },
    { text: 'pinterest', count: 42 },
    { text: 'snapchat', count: 38 },
    { text: '9gag', count: 34 },
    { text: 'derp', count: 29 },
    { text: 'hipster', count: 25 },
    { text: 'troll', count: 22 },
  ],
  
  // 2013-2015: Vine, social media, mainstream memes
  '2013-2015': [
    { text: 'vine', count: 89 },
    { text: 'binge', count: 84 },
    { text: 'netflix', count: 78 },
    { text: 'fleek', count: 72 },
    { text: 'fomo', count: 67 },
    { text: 'basic', count: 61 },
    { text: 'literally', count: 56 },
    { text: 'squad', count: 51 },
    { text: 'goals', count: 46 },
    { text: 'spotify', count: 41 },
    { text: 'uber', count: 37 },
    { text: 'airbnb', count: 33 },
    { text: 'selfie', count: 28 },
    { text: 'tbt', count: 24 },
    { text: 'filter', count: 20 },
  ],
  
  // 2016-2018: Fidget spinners, Trump era, mainstream social
  '2016-2018': [
    { text: 'dabbing', count: 98 },
    { text: 'fake news', count: 91 },
    { text: 'fidget spinner', count: 85 },
    { text: 'metoo', count: 79 },
    { text: 'bitcoin', count: 74 },
    { text: 'fortnite', count: 68 },
    { text: 'tide pods', count: 63 },
    { text: 'tiktok', count: 57 },
    { text: 'influencer', count: 52 },
    { text: 'thanos', count: 47 },
    { text: 'salty', count: 42 },
    { text: 'lit', count: 37 },
    { text: 'lowkey', count: 33 },
    { text: 'highkey', count: 28 },
    { text: 'shade', count: 24 },
  ],
  
  // 2019-2021: Pandemic, TikTok boom, mainstream culture - MASSIVELY EXPANDED
  '2019-2021': [
    { text: 'covid', count: 105 },
    { text: 'pandemic', count: 98 },
    { text: 'zoom', count: 92 },
    { text: 'quarantine', count: 87 },
    { text: 'karen', count: 81 },
    { text: 'simp', count: 76 },
    { text: 'amongus', count: 71 },
    { text: 'stonks', count: 66 },
    { text: 'wallstreetbets', count: 61 },
    { text: 'gamestop', count: 56 },
    { text: 'poggers', count: 51 },
    { text: 'based', count: 46 },
    { text: 'cringe', count: 42 },
    { text: 'vibe check', count: 37 },
    { text: 'cheugy', count: 33 },
    { text: 'blursed', count: 88 },
    { text: 'thicc', count: 84 },
    { text: 'periodt', count: 79 },
    { text: 'stan', count: 75 },
    { text: 'no cap', count: 71 },
    { text: 'sheesh', count: 67 },
    { text: 'bussin', count: 63 },
    { text: 'its the _ for me', count: 59 },
    { text: 'main character', count: 55 },
    { text: 'telling on yourself', count: 51 },
    { text: 'touch grass', count: 47 },
    { text: 'red flag', count: 43 },
    { text: 'toxic', count: 39 },
    { text: 'gaslighting', count: 35 },
    { text: 'normalize', count: 31 },
    { text: 'ratioed', count: 86 },
    { text: 'cottagecore', count: 82 },
    { text: 'dark academia', count: 78 },
    { text: 'alt', count: 74 },
    { text: 'pick me', count: 70 },
    { text: 'im baby', count: 66 },
    { text: 'no thoughts head empty', count: 62 },
    { text: 'monke', count: 58 },
    { text: 'reject modernity', count: 54 },
    { text: 'return to monke', count: 50 },
    { text: 'wojak', count: 46 },
    { text: 'soyjak', count: 42 },
    { text: 'chad', count: 38 },
    { text: 'virgin vs chad', count: 34 },
    { text: 'bonk', count: 30 },
  ],
  
  // 2022-2024: AI boom, mainstream TikTok, brat summer, hawk tuah - MASSIVELY EXPANDED
  '2022-2024': [
    { text: 'chatgpt', count: 102 },
    { text: 'brat', count: 98 },
    { text: 'hawk tuah', count: 95 },
    { text: 'demure', count: 90 },
    { text: 'moo deng', count: 86 },
    { text: 'ai', count: 82 },
    { text: 'midjourney', count: 78 },
    { text: 'rizz', count: 74 },
    { text: 'skibidi', count: 70 },
    { text: 'slay', count: 66 },
    { text: 'delulu', count: 62 },
    { text: 'bereal', count: 58 },
    { text: 'threads', count: 54 },
    { text: 'situationship', count: 50 },
    { text: 'ick', count: 46 },
    { text: 'wednesday dance', count: 94 },
    { text: 'girl dinner', count: 90 },
    { text: 'roman empire', count: 86 },
    { text: 'boy math', count: 82 },
    { text: 'girl math', count: 78 },
    { text: 'npc', count: 74 },
    { text: 'let him cook', count: 70 },
    { text: 'corn kid', count: 66 },
    { text: 'grimace shake', count: 62 },
    { text: 'fanum tax', count: 58 },
    { text: 'gyatt', count: 54 },
    { text: 'ohio', count: 50 },
    { text: 'mewing', count: 46 },
    { text: 'mogging', count: 42 },
    { text: 'looksmaxxing', count: 38 },
    { text: 'its giving', count: 93 },
    { text: 'understood the assignment', count: 89 },
    { text: 'ate and left no crumbs', count: 85 },
    { text: 'the serve', count: 81 },
    { text: 'mother', count: 77 },
    { text: 'gagged', count: 73 },
    { text: 'the way i', count: 69 },
    { text: 'not me', count: 65 },
    { text: 'im screaming', count: 61 },
    { text: 'living rent free', count: 57 },
    { text: 'iykyk', count: 53 },
    { text: 'bestie', count: 49 },
    { text: 'real ones know', count: 45 },
    { text: 'no thoughts just vibes', count: 41 },
    { text: 'unhinged', count: 37 },
    { text: 'feral', count: 33 },
    { text: 'gremlin mode', count: 29 },
    { text: 'goblin mode', count: 25 },
    { text: 'beige flag', count: 91 },
    { text: 'ick list', count: 87 },
    { text: 'situationship', count: 83 },
    { text: 'talking stage', count: 79 },
    { text: 'breadcrumbing', count: 75 },
    { text: 'soft launch', count: 71 },
    { text: 'hard launch', count: 67 },
    { text: 'weaponized incompetence', count: 63 },
    { text: 'quiet quitting', count: 59 },
    { text: 'quiet luxury', count: 55 },
    { text: 'tomato girl', count: 51 },
    { text: 'clean girl', count: 47 },
    { text: 'mob wife', count: 43 },
    { text: 'coastal grandmother', count: 39 },
  ],
  
  // 2025-2026: FRESH from web - MASSIVELY EXPANDED
  '2025-2026': [
    { text: 'the great meme reset', count: 100 },
    { text: 'big chungus returns', count: 98 },
    { text: 'do you know the way', count: 95 },
    { text: '1/1/1 meme', count: 92 },
    { text: '6-7 vibes', count: 88 },
    { text: 'italian brainrot', count: 85 },
    { text: 'tiktok ban', count: 82 },
    { text: 'nyan cat comeback', count: 78 },
    { text: 'brain rot era', count: 75 },
    { text: 'she ate no crumbs', count: 72 },
    { text: 'its giving', count: 70 },
    { text: 'understood the assignment', count: 68 },
    { text: 'very demure very mindful', count: 66 },
    { text: 'no crumbs left', count: 64 },
    { text: 'the serve', count: 62 },
    { text: 'mother is mothering', count: 60 },
    { text: 'gagged', count: 58 },
    { text: 'rent free', count: 56 },
    { text: 'living in my head', count: 54 },
    { text: 'im screaming', count: 52 },
    { text: 'not me', count: 50 },
    { text: 'the way i', count: 48 },
    { text: 'please be serious', count: 46 },
    { text: 'real ones know', count: 44 },
    { text: 'periodt', count: 42 },
    { text: 'chat is this real', count: 40 },
    { text: 'nobody asked', count: 38 },
    { text: 'caught in 4k', count: 36 },
    { text: 'main character energy', count: 34 },
    { text: 'villain era', count: 32 },
    { text: 'wicked', count: 96 },
    { text: 'moana 2', count: 93 },
    { text: 'squid game season 2', count: 90 },
    { text: 'wrapped', count: 87 },
    { text: 'spotify wrapped', count: 84 },
    { text: 'aura points', count: 81 },
    { text: 'sigma', count: 77 },
    { text: 'alpha', count: 74 },
    { text: 'beta', count: 71 },
    { text: 'edging', count: 68 },
    { text: 'gooning', count: 65 },
    { text: 'goon cave', count: 62 },
    { text: 'locked in', count: 59 },
    { text: 'cooked', count: 56 },
    { text: 'we are so back', count: 53 },
    { text: 'its so over', count: 50 },
    { text: 'ngmi', count: 47 },
    { text: 'wagmi', count: 44 },
    { text: 'gm', count: 41 },
    { text: 'gn', count: 38 },
    { text: 'fren', count: 35 },
    { text: 'smol bean', count: 91 },
    { text: 'bbg', count: 88 },
    { text: 'pookie', count: 85 },
    { text: 'chat', count: 82 },
    { text: 'npc stream', count: 79 },
    { text: 'tiktok rizz party', count: 76 },
    { text: 'only in ohio', count: 73 },
    { text: 'grimace shake deaths', count: 70 },
    { text: 'broke the internet', count: 67 },
    { text: 'the timeline', count: 64 },
    { text: 'for the plot', count: 61 },
    { text: 'hear me out', count: 58 },
    { text: 'getting sturdy', count: 55 },
    { text: 'zesty', count: 52 },
    { text: 'bombastic side eye', count: 49 },
    { text: 'criminal offensive side eye', count: 46 },
  ],
}

export function getTermsForEra(era: string): { text: string; count: number }[] {
  return ERA_TERMS[era] || []
}

function getEraForDate(year: number, month: number): string {
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

// Generate unique seed based on year and month
function getMonthSeed(year: number, month: number): number {
  return year * 12 + month
}

// Seeded random function
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Shuffle array with seed
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function getDataForMonth(year: number, month: number) {
  const era = getEraForDate(year, month)
  const eraData = ERA_TERMS[era] || ERA_TERMS['2025-2026']

  // Create unique seed for this month
  const seed = getMonthSeed(year, month)
  
  // Shuffle words differently for each month
  const shuffledData = shuffleWithSeed(eraData, seed)
  
  // Take 12-18 words (varies by month)
  const wordCount = 12 + Math.floor(seededRandom(seed) * 7)
  const selectedWords = shuffledData.slice(0, wordCount)
  
  // Add month-specific randomization to counts
  const randomizedData = selectedWords.map((word, index) => ({
    text: word.text,
    count: Math.max(15, word.count + Math.floor(seededRandom(seed + index) * 30) - 15)
  }))

  return {
    year: year.toString(),
    month: month.toString(),
    source: 'era-curated',
    note: `Showing curated cultural terms from the ${era} era`,
    words: randomizedData,
  }
}

