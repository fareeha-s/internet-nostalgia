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
      context: 'Deep thoughts'
    },
    {
      text: 'I just got punk\'d',
      author: 'Ashton Kutcher',
      handle: '@aplusk',
      date: '2009',
      context: 'Early celeb Twitter'
    },
    {
      text: 'im drinking a starbucks latte',
      author: 'Kim Kardashian',
      handle: '@KimKardashian',
      date: '2009',
      context: 'Early Kim tweets'
    },
  ],
  
  '2010-2012': [
    {
      text: 'I made a new word - Belieber!',
      author: 'Justin Bieber',
      handle: '@justinbieber',
      date: '2010',
      context: 'Bieber fever'
    },
    {
      text: 'YOLO',
      author: 'Drake',
      handle: '@drake',
      date: '2011',
      context: 'YOLO origin'
    },
    {
      text: 'I\'m really rich',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: '2011',
      context: 'Trump tweets'
    },
    {
      text: 'Oppa Gangnam Style!',
      author: 'PSY',
      handle: '@psy_oppa',
      date: '2012',
      context: 'Gangnam Style'
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
    {
      text: 'What color is this dress?',
      author: 'BuzzFeed',
      handle: '@BuzzFeed',
      date: 'Feb 2015',
      context: 'The dress'
    },
    {
      text: 'Left shark won the super bowl',
      author: 'Katy Perry',
      handle: '@katyperry',
      date: 'Feb 2015',
      context: 'Left shark'
    },
    {
      text: 'Why you always lying',
      author: 'Nicholas Fraser',
      handle: '@downgoes',
      date: '2015',
      context: 'Lying meme'
    },
  ],
  
  '2016-2018': [
    {
      text: 'Yanny or Laurel?',
      author: 'Cloe Feldman',
      handle: '@CloeCouture',
      date: 'May 15, 2018',
      context: 'Audio debate'
    },
    {
      text: 'Cash me outside how bout dah',
      author: 'Danielle Bregoli',
      handle: '@bhadbhabie',
      date: '2016',
      context: 'Dr Phil'
    },
    {
      text: 'covfefe',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: 'May 2017',
      context: 'Covfefe tweet'
    },
    {
      text: 'Damn Daniel! Back at it again with the white vans!',
      author: 'Josh Holz',
      handle: '@josholzz',
      date: '2016',
      context: 'Damn Daniel'
    },
    {
      text: 'Salt Bae is the best thing on the internet',
      author: 'Complex',
      handle: '@Complex',
      date: '2017',
      context: 'Salt Bae viral'
    },
    {
      text: 'I have the best words',
      author: 'Donald Trump',
      handle: '@realDonaldTrump',
      date: '2016',
      context: 'Trump quote'
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
      text: 'this quarantine got me feeling some type of way',
      author: 'Chrissy Teigen',
      handle: '@chrissyteigen',
      date: 'Mar 2020',
      context: 'Pandemic tweets'
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
      date: 'Nov 2020',
      context: 'Election 2020'
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
      text: 'Wednesday Addams dance is everything',
      author: 'Jenna Ortega',
      handle: '@jennaortega',
      date: 'Nov 2022',
      context: 'Wednesday show'
    },
    {
      text: 'its corn! a big lump with knobs',
      author: 'Recess Therapy',
      handle: '@RecessTherapy',
      date: 'Aug 2022',
      context: 'Corn kid'
    },
  ],
  
  '2025-2026': [
    {
      text: 'APT dance is taking over',
      author: 'ROSÉ',
      handle: '@roses_are_rosie',
      date: '2025',
      context: 'APT viral'
    },
  ],
}

