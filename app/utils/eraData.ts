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
  
  // 2019-2021: Pandemic, TikTok boom, mainstream culture
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
  ],
  
  // 2022-2024: AI boom, mainstream TikTok, brat summer, hawk tuah
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
  ],
  
  // 2025-2026: Current era - FRESH Jan 2026 trends
  '2025-2026': [
    { text: 'fate of ophelia', count: 100 },
    { text: 'taylor swift', count: 98 },
    { text: 'apt dance', count: 95 },
    { text: 'tiktok ban', count: 92 },
    { text: 'bad bunny', count: 88 },
    { text: 'rosé', count: 85 },
    { text: 'bruno mars', count: 82 },
    { text: 'new year resolutions', count: 78 },
    { text: 'mariah carey', count: 75 },
    { text: 'kendrick', count: 72 },
    { text: 'sabrina carpenter', count: 68 },
    { text: 'lady gaga', count: 65 },
    { text: 'wicked', count: 62 },
    { text: 'squid game 2', count: 58 },
    { text: 'die with a smile', count: 55 },
  ],
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

