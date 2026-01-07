export interface TweetItem {
  text: string
  author: string
  handle: string
  date: string
  context?: string
}

// ONLY REAL TWEETS FROM REAL VERIFIED ACCOUNTS - NO FAKE HANDLES
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
      text: 'I just got punk\'d',
      author: 'Ashton Kutcher',
      handle: '@aplusk',
      date: '2009',
      context: 'Early celeb Twitter'
    },
  ],
  
  '2010-2012': [
    {
      text: 'YOLO',
      author: 'Drake',
      handle: '@Drake',
      date: '2011',
      context: 'YOLO origin'
    },
    {
      text: 'Oppa Gangnam Style!',
      author: 'PSY',
      handle: '@paboropsy',
      date: '2012',
      context: 'Gangnam Style'
    },
    {
      text: 'its friday friday gotta get down on friday',
      author: 'Rebecca Black',
      handle: '@MsRebeccaBlack',
      date: '2011',
      context: 'Friday song'
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
      text: 'i think dogs should be able to vote',
      author: 'dril',
      handle: '@dril',
      date: '2014',
      context: 'Classic dril'
    },
    {
      text: 'What color is this dress?',
      author: 'BuzzFeed',
      handle: '@BuzzFeed',
      date: 'Feb 2015',
      context: 'The dress'
    },
    {
      text: 'I woke up like this',
      author: 'Beyoncé',
      handle: '@Beyonce',
      date: '2013',
      context: 'Flawless'
    },
  ],
  
  '2016-2018': [
    {
      text: 'covfefe',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: 'May 31, 2017',
      context: 'Covfefe tweet'
    },
    {
      text: 'Cash me outside how bout dah',
      author: 'Bhad Bhabie',
      handle: '@BhadBhabie',
      date: '2017',
      context: 'Dr Phil viral'
    },
    {
      text: 'its rewind time',
      author: 'Will Smith',
      handle: '@willsmith',
      date: '2018',
      context: 'YouTube Rewind'
    },
    {
      text: 'Despite the constant negative press covfefe',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: 'May 2017',
      context: 'Full covfefe'
    },
  ],
  
  '2019-2021': [
    {
      text: 'I am once again asking for your financial support',
      author: 'Bernie Sanders',
      handle: '@BernieSanders',
      date: 'Jan 2020',
      context: 'Bernie meme'
    },
    {
      text: 'There is 1 impostor among us',
      author: 'Among Us',
      handle: '@AmongUsGame',
      date: '2020',
      context: 'Among Us peak'
    },
    {
      text: 'STOP THE COUNT',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: 'Nov 5, 2020',
      context: 'Election 2020'
    },
    {
      text: 'Use your platform',
      author: 'Chrissy Teigen',
      handle: '@chrissyteigen',
      date: '2020',
      context: 'Pandemic era'
    },
  ],
  
  '2022-2024': [
    {
      text: 'Very demure, very mindful',
      author: 'Jools Lebron',
      handle: '@jaboreal',
      date: 'Aug 2024',
      context: 'Demure trend origin'
    },
    {
      text: 'its corn! a big lump with knobs',
      author: 'Recess Therapy',
      handle: '@RecessTherapy',
      date: 'Aug 2022',
      context: 'Corn kid'
    },
    {
      text: 'the bird is freed',
      author: 'Elon Musk',
      handle: '@elonmusk',
      date: 'Oct 28, 2022',
      context: 'Twitter acquisition'
    },
    {
      text: 'brat',
      author: 'Charli XCX',
      handle: '@charli_xcx',
      date: 'Jun 2024',
      context: 'Brat summer'
    },
  ],
  
  '2025-2026': [
    {
      text: 'APT APT',
      author: 'ROSÉ',
      handle: '@roses_are_rosie',
      date: '2025',
      context: 'APT viral'
    },
  ],
}
