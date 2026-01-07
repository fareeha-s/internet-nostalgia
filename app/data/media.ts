export interface MediaItem {
  type: 'youtube' | 'gif'
  title: string
  id: string // YouTube video ID or GIF URL
  thumbnail?: string
}

export const ERA_MEDIA: Record<string, MediaItem[]> = {
  '2007-2009': [
    {
      type: 'youtube',
      title: 'Charlie Bit My Finger',
      id: '_OBlgSz8sSM',
    },
    {
      type: 'youtube',
      title: 'Keyboard Cat',
      id: 'J---aiyznGQ',
    },
    {
      type: 'youtube',
      title: 'Chocolate Rain',
      id: 'EwTZ2xpQwpA',
    },
    {
      type: 'youtube',
      title: 'Leave Britney Alone',
      id: 'kHmvkRoEowc',
    },
    {
      type: 'youtube',
      title: 'Rick Astley - Never Gonna Give You Up',
      id: 'dQw4w9WgXcQ',
    },
  ],
  
  '2010-2012': [
    {
      type: 'youtube',
      title: 'Nyan Cat',
      id: 'QH2-TGUlwu4',
    },
    {
      type: 'youtube',
      title: 'Rebecca Black - Friday',
      id: 'kfVsfOSbJY0',
    },
    {
      type: 'youtube',
      title: 'Gangnam Style',
      id: '9bZkp7q19f0',
    },
    {
      type: 'youtube',
      title: 'Double Rainbow',
      id: 'OQSNhk5ICTI',
    },
    {
      type: 'youtube',
      title: 'Harlem Shake',
      id: '384IUU43Vos',
    },
  ],
  
  '2013-2015': [
    {
      type: 'youtube',
      title: 'What Does The Fox Say',
      id: 'jofNR_WkoCE',
    },
    {
      type: 'youtube',
      title: 'Damn Daniel',
      id: 'a16Kgh7j8zk',
    },
    {
      type: 'youtube',
      title: 'The Dress',
      id: 'AskAQwOBvhc',
    },
    {
      type: 'youtube',
      title: 'Flappy Bird',
      id: 'fQoJZP0mR5k',
    },
    {
      type: 'youtube',
      title: 'Left Shark Super Bowl',
      id: 'WmcWZ2Bzoho',
    },
  ],
  
  '2016-2018': [
    {
      type: 'youtube',
      title: 'Damn Daniel',
      id: 'a16Kgh7j8zk',
    },
    {
      type: 'youtube',
      title: 'Bottle Flip Challenge',
      id: 'kJXRBjC7QVc',
    },
    {
      type: 'youtube',
      title: 'Cash Me Outside',
      id: 'jgflCE7zRpc',
    },
    {
      type: 'youtube',
      title: 'Yodeling Walmart Kid',
      id: 'bOZT-UpRA2Y',
    },
    {
      type: 'youtube',
      title: 'In My Feelings Challenge',
      id: 'DRS_PpOrUZ4',
    },
  ],
  
  '2019-2021': [
    {
      type: 'youtube',
      title: 'Old Town Road',
      id: 'r7qovpFAGrQ',
    },
    {
      type: 'youtube',
      title: 'Bernie Sanders Mittens',
      id: 'KgbBP9Em00A',
    },
    {
      type: 'youtube',
      title: 'Coffin Dance',
      id: 'iLBBRuVDOo4',
    },
    {
      type: 'youtube',
      title: 'Among Us Animation',
      id: 'grd-K33tOSM',
    },
    {
      type: 'youtube',
      title: 'Corn Kid',
      id: 'cqd_X7GS_SU',
    },
  ],
  
  '2022-2024': [
    {
      type: 'youtube',
      title: 'Wednesday Dance',
      id: 'xYkSYWPFh1k',
    },
    {
      type: 'youtube',
      title: 'Grimace Shake',
      id: '9LUMx2qPDlQ',
    },
    {
      type: 'youtube',
      title: 'Barbenheimer',
      id: '5m5fjQzoV0U',
    },
    {
      type: 'youtube',
      title: 'Subway Surfers Gameplay',
      id: 'RMPPjKy42bw',
    },
    {
      type: 'youtube',
      title: 'Brain Rot Explained',
      id: 'Xq3W4FoqKW4',
    },
  ],
  
  '2025-2026': [
    {
      type: 'youtube',
      title: 'Sora AI Demo - OpenAI',
      id: 'HK6y8DAPN_0',
    },
    {
      type: 'youtube',
      title: 'Apple - Charli XCX (Official Video)',
      id: 'OlnJWYZnPmU',
    },
    {
      type: 'youtube',
      title: 'Very Demure Very Mindful',
      id: 'tRRrWKs8s48',
    },
    {
      type: 'youtube',
      title: 'Skibidi Toilet Episode 1',
      id: 'WIJmzvQWeTo',
    },
    {
      type: 'youtube',
      title: 'Mr Beast - $1 vs $500,000 Experience',
      id: 'NEYc8ar2Bpw',
    },
    {
      type: 'youtube',
      title: 'Hailey Welch Hawk Tuah',
      id: 'oIkhyHPMcAg',
    },
    {
      type: 'youtube',
      title: 'Tyla - Water Dance Challenge',
      id: 'uj8GGW8HgGU',
    },
    {
      type: 'youtube',
      title: 'OpenAI o1 Preview Demo',
      id: 'RdRCniteGIo',
    },
    {
      type: 'youtube',
      title: 'Kendrick vs Drake - Not Like Us',
      id: 'mAkAfDFgYGE',
    },
    {
      type: 'youtube',
      title: 'Chappell Roan - Pink Pony Club',
      id: 'XF1dCbEE9wU',
    },
    {
      type: 'youtube',
      title: 'Wicked Movie Trailer',
      id: 'cYMpy1x4hlE',
    },
    {
      type: 'youtube',
      title: 'Beyoncé - Texas Hold Em',
      id: 'wjbO80jKW_c',
    },
    {
      type: 'youtube',
      title: 'ChatGPT-4o Demo',
      id: 'DQacCB9tDaw',
    },
    {
      type: 'youtube',
      title: 'Deadpool & Wolverine Trailer',
      id: '73_1biulkYk',
    },
    {
      type: 'youtube',
      title: 'Looksmaxxing Explained',
      id: 'pf0kKmJXG7Q',
    },
  ],
}


