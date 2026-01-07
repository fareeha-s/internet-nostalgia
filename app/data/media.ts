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
      title: 'Rick Roll',
      id: 'dQw4w9WgXcQ',
    },
    {
      type: 'youtube',
      title: 'Dramatic Chipmunk',
      id: 'a1Y73sPHKxw',
    },
    {
      type: 'youtube',
      title: 'Numa Numa Dance',
      id: 'KmtzQCSh6xk',
    },
    {
      type: 'youtube',
      title: 'Evolution of Dance',
      id: 'dMH0bHeiRNg',
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
    {
      type: 'youtube',
      title: 'Call Me Maybe',
      id: 'fWNaR-rxAic',
    },
    {
      type: 'youtube',
      title: 'Kony 2012',
      id: 'Y4MnpzG5Sqc',
    },
    {
      type: 'youtube',
      title: 'Bed Intruder Song',
      id: 'hMtZfW2z9dw',
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
      title: 'Charli XCX - Apple',
      id: 'h64RD_qHbwY',
    },
    {
      type: 'youtube',
      title: 'Sabrina Carpenter - Espresso',
      id: 'eVli-tstM5E',
    },
    {
      type: 'youtube',
      title: 'Billie Eilish - LUNCH',
      id: 'R0X8ZLZVQ3E',
    },
    {
      type: 'youtube',
      title: 'Chappell Roan - Good Luck, Babe!',
      id: 'GxldQ9IdV-w',
    },
    {
      type: 'youtube',
      title: 'Kendrick Lamar - Not Like Us',
      id: 'dQw4w9WgXcQ',
    },
    {
      type: 'youtube',
      title: 'Tyla - Water',
      id: 'bRYG_26wwjk',
    },
    {
      type: 'youtube',
      title: 'Mr Beast $1 vs $500,000 Plane Ticket',
      id: 'sxb6b7tN2KE',
    },
    {
      type: 'youtube',
      title: 'Wicked Movie Trailer',
      id: 'cYMpy1x4hlE',
    },
    {
      type: 'youtube',
      title: 'Deadpool & Wolverine Trailer',
      id: '73_1biulkYk',
    },
    {
      type: 'youtube',
      title: 'Inside Out 2 Trailer',
      id: 'LEjhY15eCx0',
    },
    {
      type: 'youtube',
      title: 'Dune Part Two Trailer',
      id: 'Way9Dexny3w',
    },
    {
      type: 'youtube',
      title: 'Moo Deng Baby Hippo',
      id: 'R7DhGLXp_6E',
    },
  ],
}


