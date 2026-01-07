export interface TweetItem {
  text: string
  author: string
  handle: string
  date: string
  context?: string
  screenshotUrl?: string // Optional screenshot URL
}

export const ERA_TWEETS: Record<string, TweetItem[]> = {
  '2000-2003': [], // Twitter didn't exist yet
  
  '2004-2006': [
    {
      text: 'just setting up my twttr',
      author: 'Jack Dorsey',
      handle: '@jack',
      date: 'Mar 21, 2006',
      context: 'First tweet ever'
    },
  ],
  
  '2007-2009': [
    {
      text: 'How can mirrors be real if our eyes aren\'t real',
      author: 'Jaden Smith',
      handle: '@officialjaden',
      date: '2013',
      context: 'Deep thoughts era'
    },
    {
      text: 'I\'m at the airport',
      author: 'Ashton Kutcher',
      handle: '@aplusk',
      date: '2009',
      context: 'Early celebrity Twitter'
    },
  ],
  
  '2010-2012': [
    {
      text: 'I made a new word - Belieber!',
      author: 'Justin Bieber',
      handle: '@justinbieber',
      date: '2010',
      context: 'Bieber fever era'
    },
    {
      text: 'YOLO',
      author: 'Drake',
      handle: '@drake',
      date: '2011',
      context: 'YOLO origin'
    },
  ],
  
  '2013-2015': [
    {
      text: 'If only Bradley\'s arm was longer. Best photo ever. #oscars',
      author: 'Ellen DeGeneres',
      handle: '@TheEllenShow',
      date: 'Mar 2, 2014',
      context: 'Most retweeted selfie'
    },
    {
      text: 'why is it called "delivery" and not "takeout" when you pick it up',
      author: 'Dril',
      handle: '@dril',
      date: '2014',
      context: 'Classic dril'
    },
  ],
  
  '2016-2018': [
    {
      text: 'Yanny or Laurel?',
      author: 'Cloe Feldman',
      handle: '@CloeCouture',
      date: 'May 15, 2018',
      context: 'Audio illusion debate'
    },
    {
      text: 'Cash me outside how bout dah',
      author: 'Danielle Bregoli',
      handle: '@bhadbhabie',
      date: '2016',
      context: 'Dr Phil meme'
    },
    {
      text: 'This is America',
      author: 'Donald Glover',
      handle: '@donaldglover',
      date: '2018',
      context: 'Song release'
    },
  ],
  
  '2019-2021': [
    {
      text: 'i am once again asking for your financial support',
      author: 'Bernie Sanders',
      handle: '@BernieSanders',
      date: 'Jan 2020',
      context: 'Bernie meme'
    },
    {
      text: 'happy new year! here\'s to a great 2019',
      author: 'Lil Nas X',
      handle: '@LilNasX',
      date: 'Jan 2019',
      context: 'Before Old Town Road blew up'
    },
  ],
  
  '2022-2024': [
    {
      text: 'Very demure, very mindful',
      author: 'Jools Lebron',
      handle: '@joolieannie',
      date: 'Aug 2024',
      context: 'Demure trend'
    },
    {
      text: 'Brat summer',
      author: 'Charli XCX',
      handle: '@charli_xcx',
      date: '2024',
      context: 'Brat album'
    },
    {
      text: 'Espresso',
      author: 'Sabrina Carpenter',
      handle: '@SabrinaAnnLynn',
      date: '2024',
      context: 'That\'s that me espresso'
    },
    {
      text: 'Rizz',
      author: 'Kai Cenat',
      handle: '@KaiCenat',
      date: '2022',
      context: 'Gen Z slang'
    },
  ],
  
  '2025-2026': [
    {
      text: 'APT.',
      author: 'ROSÉ',
      handle: '@roses_are_rosie',
      date: '2025',
      context: 'APT dance challenge'
    },
  ],
}

