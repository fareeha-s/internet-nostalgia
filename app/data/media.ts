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
      title: 'Logan Paul Japan Incident',
      id: 'ZMxQHQj5-jo',
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
      title: 'Fauci Ouchie Remix',
      id: 'Xvr2M7MvOY0',
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
      title: 'Grimace Shake Trend',
      id: '9LUMx2qPDlQ',
    },
    {
      type: 'youtube',
      title: 'Corn Kid Interview',
      id: '_caMQpiwiaU',
    },
    {
      type: 'youtube',
      title: 'Girl Explaining Dinner',
      id: 'yfPjpW5DPKk',
    },
    {
      type: 'youtube',
      title: 'Bing Chilling John Cena',
      id: 'bOZ2b5adjd4',
    },
    {
      type: 'youtube',
      title: 'Roman Empire TikTok',
      id: 'SNYLv9TgsTA',
    },
    {
      type: 'youtube',
      title: 'Girl Dinner Explained',
      id: 'gKzWLM-AUt8',
    },
    {
      type: 'youtube',
      title: 'NPC Livestream',
      id: '0zG_lckuzbo',
    },
  ],
  
  '2025-2026': [
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
      title: 'Mr Beast $1 vs $500,000',
      id: 'sxb6b7tN2KE',
    },
    {
      type: 'youtube',
      title: 'Apple Dance Trend',
      id: 'qYApvyc0S4k',
    },
    {
      type: 'youtube',
      title: 'Wicked Movie Trailer',
      id: 'cYMpy1x4hlE',
    },
    {
      type: 'youtube',
      title: 'Skibidi Toilet 77',
      id: 'WIJmzvQWeTo',
    },
    {
      type: 'youtube',
      title: 'Sigma Grindset Meme',
      id: '1-emQo-7O3Y',
    },
    {
      type: 'youtube',
      title: 'AI Sora Demo',
      id: 'HK6y8DAPN_0',
    },
    {
      type: 'youtube',
      title: 'ChatGPT-4o Demo',
      id: 'DQacCB9tDaw',
    },
  ],
}


