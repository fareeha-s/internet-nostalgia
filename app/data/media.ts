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
      title: 'Sora AI Demo',
      id: 'HK6y8DAPN_0',
    },
    {
      type: 'youtube',
      title: 'Brat Summer',
      id: 'b_OnhT42pXk',
    },
    {
      type: 'youtube',
      title: 'Demure Trend',
      id: 'fSXcKNIwXgk',
    },
    {
      type: 'youtube',
      title: 'Skibidi Toilet',
      id: 'WIJmzvQWeTo',
    },
    {
      type: 'youtube',
      title: 'Gen Alpha Slang',
      id: 'j5a0jTc9S10',
    },
    {
      type: 'youtube',
      title: 'Sigma Male Compilation',
      id: 'Xq3W4FoqKW4',
    },
    {
      type: 'youtube',
      title: 'Ohio Final Boss',
      id: 'RMPPjKy42bw',
    },
    {
      type: 'youtube',
      title: 'Gyatt Explained',
      id: '5m5fjQzoV0U',
    },
    {
      type: 'youtube',
      title: 'Mewing Tutorial',
      id: '9LUMx2qPDlQ',
    },
    {
      type: 'youtube',
      title: 'Looksmaxxing Guide',
      id: 'xYkSYWPFh1k',
    },
    {
      type: 'youtube',
      title: 'Core Aesthetic Explained',
      id: 'cqd_X7GS_SU',
    },
    {
      type: 'youtube',
      title: 'Vibe Shift 2025',
      id: 'grd-K33tOSM',
    },
    {
      type: 'youtube',
      title: 'Brain Rot Compilation',
      id: 'iLBBRuVDOo4',
    },
    {
      type: 'youtube',
      title: 'Gemini AI Demo',
      id: 'KgbBP9Em00A',
    },
    {
      type: 'youtube',
      title: 'Agentic AI Explained',
      id: 'r7qovpFAGrQ',
    },
  ],
}


