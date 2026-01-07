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
      text: 'Make something people want.',
      author: 'Paul Graham',
      handle: '@paulg',
      date: '2014',
      context: 'YC motto'
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
      text: 'Bitcoin is rat poison squared',
      author: 'Warren Buffett',
      handle: '@WarrenBuffett',
      date: 'May 2018',
      context: 'Crypto skeptic'
    },
    {
      text: 'nobody:\nabsolutely nobody:\nstill nobody:\nme:',
      author: 'Various',
      handle: '@internet',
      date: '2018',
      context: 'Nobody meme format'
    },
  ],
  
  '2019-2021': [
    {
      text: 'Have fun staying poor',
      author: 'Various CT',
      handle: '@CT_Anon',
      date: '2020',
      context: 'Crypto Twitter HFSP'
    },
    {
      text: 'gm',
      author: 'Everyone on CT',
      handle: '@cryptotwitter',
      date: '2020-2021',
      context: 'Good morning ritual'
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
      text: 'The fundamental problem with programming is that it is a constant battle against complexity',
      author: 'John Carmack',
      handle: '@ID_AA_Carmack',
      date: '2023',
      context: 'AGI takes'
    },
    {
      text: 'effective accelerationism is the only way forward',
      author: 'Based Beff Jezos',
      handle: '@BasedBeffJezos',
      date: '2023',
      context: 'e/acc movement'
    },
    {
      text: 'touch grass',
      author: 'Everyone',
      handle: '@internet',
      date: '2022-2024',
      context: 'Go outside'
    },
  ],
  
  '2025-2026': [
    {
      text: 'Founder mode is real and it\'s about being in the details',
      author: 'Brian Chesky',
      handle: '@bchesky',
      date: 'Sep 2024',
      context: 'Founder mode'
    },
    {
      text: 'we are so back',
      author: 'Tech Twitter',
      handle: '@techtwitter',
      date: '2024-2025',
      context: 'Optimism posting'
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

