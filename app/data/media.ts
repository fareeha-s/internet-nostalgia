export interface MediaItem {
  type: 'youtube' | 'gif' | 'image'
  title: string
  id: string // YouTube video ID, GIF URL, or image URL
  thumbnail?: string
  url?: string // Direct URL for GIFs/images
  sourceUrl?: string // Source page for an image, when available
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
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/All_your_base_are_belong_to_us.png/500px-All_your_base_are_belong_to_us.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:All_your_base_are_belong_to_us.png',
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
      type: 'image',
      title: 'Gary Brolsma (Numa Numa)',
      id: 'numa-numa',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Gary_Brolsma.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gary_Brolsma.jpg',
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
      title: 'Keyboard Cat',
      id: 'J---aiyznGQ',
    },
    {
      type: 'image',
      title: 'Dramatic Marmot',
      id: 'dramatic-marmot',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Dramatic_Marmot_%283707765232%29.jpg/500px-Dramatic_Marmot_%283707765232%29.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dramatic_Marmot_(3707765232).jpg',
    },
  ],
  
  '2010-2012': [
    {
      type: 'image',
      title: 'Nyan Cat at Comic-Con',
      id: 'nyan-cat-comic-con',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/SDCC_2012_-_Nyan_Cat_%287626690530%29.jpg/500px-SDCC_2012_-_Nyan_Cat_%287626690530%29.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:SDCC_2012_-_Nyan_Cat_(7626690530).jpg',
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
      title: 'Honey Badger Don\'t Care',
      id: '4r7wHMg5Yjg',
    },
  ],
  
  '2013-2015': [
    {
      type: 'youtube',
      title: 'What Does The Fox Say',
      id: 'jofNR_WkoCE',
    },
    {
      type: 'image',
      title: 'The Dress',
      id: 'the-dress',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Kat_Walsh_in_The_Dress.jpg/500px-Kat_Walsh_in_The_Dress.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kat_Walsh_in_The_Dress.jpg',
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
  ],
  
  '2016-2018': [
    {
      type: 'youtube',
      title: 'Cash Me Outside Dr Phil',
      id: 'jgflCE7zRpc',
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
      type: 'image',
      title: 'Do U No De Wei?',
      id: 'ugandan-knuckles',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Do_U_No_De_Wei%3F.jpg/500px-Do_U_No_De_Wei%3F.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Do_U_No_De_Wei%3F.jpg',
    },
  ],
  
  '2019-2021': [
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
      title: 'Old Town Road',
      id: 'w2Ov5jzm3j8',
    },
  ],
  
  '2022-2024': [
    {
      type: 'image',
      title: 'Wednesday cosplay',
      id: 'wednesday-cosplay',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Enid_Sinclair_%26_Wednesday_Addams_cosplayers_%2852954661185%29_%28cropped%2C_Wednesday%29.jpg/500px-Enid_Sinclair_%26_Wednesday_Addams_cosplayers_%2852954661185%29_%28cropped%2C_Wednesday%29.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Enid_Sinclair_%26_Wednesday_Addams_cosplayers_(52954661185)_(cropped,_Wednesday).jpg',
    },
    {
      type: 'youtube',
      title: 'Corn Kid Interview',
      id: '_caMQpiwiaU',
    },
    {
      type: 'image',
      title: 'Skibidi Toilet cosplay',
      id: 'skibidi-toilet-cosplay',
      url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Bolivian_skibidi_toilet_cosplayers.jpg/500px-Bolivian_skibidi_toilet_cosplayers.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bolivian_skibidi_toilet_cosplayers.jpg',
    },
  ],
  
  '2025-2026': [
    {
      type: 'youtube',
      title: 'Mr Beast Squid Game',
      id: '0e3GPea1Tyg',
    },
  ],
}

