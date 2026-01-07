export interface MediaItem {
  type: 'youtube' | 'gif' | 'image'
  title: string
  id: string // YouTube video ID, GIF URL, or image URL
  thumbnail?: string
  url?: string // Direct URL for GIFs/images
}

export const ERA_MEDIA: Record<string, MediaItem[]> = {
  '2000-2003': [
    {
      type: 'gif',
      title: 'Dancing Baby',
      id: 'dancing-baby',
      url: 'https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif',
    },
    {
      type: 'gif',
      title: 'Hamster Dance',
      id: 'hamster-dance',
      url: 'https://media.giphy.com/media/3oriNZoNvn73MZaFYk/giphy.gif',
    },
    {
      type: 'image',
      title: 'All Your Base',
      id: 'all-your-base',
      url: 'https://i.imgur.com/G3Vc5xZ.jpeg',
    },
    {
      type: 'gif',
      title: 'Badger Badger Badger',
      id: 'badger',
      url: 'https://media.giphy.com/media/xT5LMQ8rHYTDGFG07e/giphy.gif',
    },
  ],
  
  '2004-2006': [
    {
      type: 'youtube',
      title: 'Numa Numa Dance',
      id: 'KmtzQCSh6xk',
    },
    {
      type: 'youtube',
      title: 'Lazy Sunday SNL',
      id: 'sRhTeaa_B98',
    },
    {
      type: 'youtube',
      title: 'Evolution of Dance',
      id: 'dMH0bHeiRNg',
    },
  ],
  
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
      title: 'Leave Britney Alone',
      id: 'kHmvkRoEowc',
    },
    {
      type: 'youtube',
      title: 'Dramatic Chipmunk',
      id: 'a1Y73sPHKxw',
    },
    {
      type: 'youtube',
      title: 'Shoes - Liam Kyle Sullivan',
      id: 'wCF3ywukQYA',
    },
    {
      type: 'youtube',
      title: 'Diet Coke Mentos',
      id: 'hKoB0MHVBvM',
    },
    {
      type: 'youtube',
      title: 'Sneezing Panda',
      id: 'FzRH3iTQPrk',
    },
    {
      type: 'youtube',
      title: 'Grape Lady Falls',
      id: 'STbhaqsBJB0',
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
      title: 'Harlem Shake Original',
      id: '384IUU43Vos',
    },
    {
      type: 'youtube',
      title: 'Honey Badger Don\'t Care',
      id: '4r7wHMg5Yjg',
    },
    {
      type: 'youtube',
      title: 'Bad Lip Reading NFL',
      id: 'Zce-QT7MGSE',
    },
    {
      type: 'youtube',
      title: 'Ain\'t Nobody Got Time',
      id: 'bFEoMO0pc7k',
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
      title: 'The Dress - Blue/Gold',
      id: 'AskAQwOBvhc',
    },
    {
      type: 'youtube',
      title: 'Left Shark Super Bowl',
      id: 'WmcWZ2Bzoho',
    },
    {
      type: 'youtube',
      title: 'Why You Always Lying',
      id: 'qlOTNtUvhe8',
    },
    {
      type: 'youtube',
      title: 'Yodel Kid Walmart',
      id: 'bOZT-UpRA2Y',
    },
    {
      type: 'youtube',
      title: 'Best Vines Compilation',
      id: 'G-T3qKl6y-c',
    },
    {
      type: 'youtube',
      title: 'Charlie Sheen Winning',
      id: '9QS0q3mGPGg',
    },
  ],
  
  '2016-2018': [
    {
      type: 'youtube',
      title: 'Cash Me Outside Dr Phil',
      id: 'jgflCE7zRpc',
    },
    {
      type: 'youtube',
      title: 'Bottle Flip Challenge',
      id: 'kJXRBjC7QVc',
    },
    {
      type: 'youtube',
      title: 'United Breaks Guitar',
      id: '5YGc4zOqozo',
    },
    {
      type: 'youtube',
      title: 'Tide Pod Challenge',
      id: 'pM6wanZOLtk',
    },
    {
      type: 'youtube',
      title: 'This Is America',
      id: 'VYOjWnS4cMY',
    },
    {
      type: 'youtube',
      title: 'Salt Bae',
      id: 'J5GGG0PaSe4',
    },
    {
      type: 'youtube',
      title: 'Fidget Spinner Tricks',
      id: 'Yx7e8qQy56U',
    },
    {
      type: 'youtube',
      title: 'Ugandan Knuckles',
      id: 'Hxjofn2bYE8',
    },
  ],
  
  '2019-2021': [
    {
      type: 'youtube',
      title: 'Bernie Sanders Mittens Meme',
      id: 'KgbBP9Em00A',
    },
    {
      type: 'youtube',
      title: 'Coffin Dance Meme',
      id: 'iLBBRuVDOo4',
    },
    {
      type: 'youtube',
      title: 'Among Us Original Trailer',
      id: 'grd-K33tOSM',
    },
    {
      type: 'youtube',
      title: 'Woman Yelling at Cat',
      id: 'QmZw8cT4qBM',
    },
    {
      type: 'youtube',
      title: 'Ratatouille Musical TikTok',
      id: 'M1EcVWSSgOY',
    },
    {
      type: 'youtube',
      title: 'Zoom Meeting Fails',
      id: 'DYW5AfYt0Ss',
    },
    {
      type: 'youtube',
      title: 'Sea Shanty TikTok',
      id: '8q8WvQlPrw8',
    },
    {
      type: 'youtube',
      title: 'Old Town Road',
      id: 'w2Ov5jzm3j8',
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
      title: 'Very Demure Very Mindful',
      id: 'wWHjV35mh6k',
    },
    {
      type: 'youtube',
      title: 'Hawk Tuah Girl Interview',
      id: 'oIkhyHPMcAg',
    },
    {
      type: 'youtube',
      title: 'Moo Deng Baby Hippo',
      id: 'R7DhGLXp_6E',
    },
    {
      type: 'youtube',
      title: 'Brat Summer Explained',
      id: 'v1RxTDJRZOc',
    },
    {
      type: 'youtube',
      title: 'Corn Kid Interview',
      id: '_caMQpiwiaU',
    },
    {
      type: 'youtube',
      title: 'Grimace Shake Trend',
      id: '9LUMx2qPDlQ',
    },
    {
      type: 'youtube',
      title: 'Girl Dinner Explained',
      id: 'gKzWLM-AUt8',
    },
    {
      type: 'youtube',
      title: 'Skibidi Toilet',
      id: 'WIJmzvQWeTo',
    },
  ],
  
  '2025-2026': [
    {
      type: 'youtube',
      title: 'APT. - ROSÉ & Bruno Mars',
      id: 'ekr2nIex040',
    },
    {
      type: 'youtube',
      title: 'Die With A Smile - Lady Gaga, Bruno Mars',
      id: 'kPa7bsKwL-c',
    },
    {
      type: 'youtube',
      title: 'Taylor Swift Eras Tour',
      id: 'KudedLV0tP0',
    },
    {
      type: 'youtube',
      title: 'Squid Game Season 2 Trailer',
      id: 'Ed5QQOX0ByU',
    },
    {
      type: 'youtube',
      title: 'Wicked - Defying Gravity',
      id: '6COmYeLsz4c',
    },
    {
      type: 'youtube',
      title: 'Bad Bunny - Lo Que Le Pasó a Hawaii',
      id: 'GzST0Vc7F7o',
    },
  ],
}


