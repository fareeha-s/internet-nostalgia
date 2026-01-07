export interface TweetItem {
  text: string
  author: string
  handle: string
  date: string
  context?: string
  screenshotUrl?: string // Optional screenshot URL
}

export const ERA_TWEETS: Record<string, TweetItem[]> = {
  '2007-2009': [
    {
      text: 'just setting up my twttr',
      author: 'Jack Dorsey',
      handle: '@jack',
      date: 'Mar 21, 2006',
      context: 'First tweet ever'
    },
    {
      text: 'Yeezy taught me',
      author: 'Kanye West',
      handle: '@kanyewest',
      date: '2009',
      context: 'Early Kanye Twitter'
    },
  ],
  
  '2010-2012': [
    {
      text: 'There are 47% of the people who will vote for the president no matter what',
      author: 'Mitt Romney',
      handle: '@MittRomney',
      date: 'Sep 2012',
      context: '47% controversy'
    },
    {
      text: 'I made a new word - Belieber!',
      author: 'Justin Bieber',
      handle: '@justinbieber',
      date: '2010',
      context: 'Bieber fever era'
    },
  ],
  
  '2013-2015': [
    {
      text: 'WHAT ARE THOSEEEEE',
      author: 'Brandon Moore',
      handle: '@youngbusco',
      date: 'Jun 2015',
      context: 'Viral meme origin'
    },
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
      text: 'Despite the constant negative press covfefe',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: 'May 31, 2017',
      context: 'Covfefe typo'
    },
    {
      text: 'Cash me ousside how bout dah',
      author: 'Danielle Bregoli',
      handle: '@bhadbhabie',
      date: '2016',
      context: 'Dr Phil meme'
    },
    {
      text: 'Yanny or Laurel?',
      author: 'Cloe Feldman',
      handle: '@CloeCouture',
      date: 'May 15, 2018',
      context: 'Audio illusion debate'
    },
  ],
  
  '2019-2021': [
    {
      text: 'STOP THE COUNT!',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: 'Nov 5, 2020',
      context: '2020 election'
    },
    {
      text: 'Not me having to clean up my Twitter from saying "if I get corona I get corona"',
      author: 'Brady Sluder',
      handle: '@BradySluder',
      date: 'Mar 2020',
      context: 'COVID denial meme'
    },
    {
      text: 'i am once again asking for your financial support',
      author: 'Bernie Sanders',
      handle: '@BernieSanders',
      date: 'Jan 2020',
      context: 'Bernie meme'
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
      text: 'hawk tuah spit on that thang',
      author: 'Haliey Welch',
      handle: '@hay_welch',
      date: 'Jun 2024',
      context: 'Hawk tuah girl'
    },
    {
      text: 'It\'s corn! A big lump with knobs',
      author: 'Tariq',
      handle: '@tariq',
      date: 'Aug 2022',
      context: 'Corn kid'
    },
  ],
  
  '2025-2026': [
    {
      text: 'brat summer is never over',
      author: 'Charli XCX',
      handle: '@charli_xcx',
      date: 'Jun 2024',
      context: 'Brat album era'
    },
    {
      text: 'I\'m very demure, very mindful, very cutesy',
      author: 'Jools Lebron',
      handle: '@joolieannie',
      date: 'Aug 2024',
      context: 'Original demure tweet'
    },
    {
      text: 'kamala IS brat',
      author: 'Charli XCX',
      handle: '@charli_xcx',
      date: 'Jul 2024',
      context: 'Kamala brat tweet'
    },
  ],
}

