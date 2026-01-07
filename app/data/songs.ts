export interface SongItem {
  title: string
  artist: string
  spotifyId: string // Spotify track ID
  memeContext?: string
}

export const ERA_SONGS: Record<string, SongItem[]> = {
  '2000-2003': [], // Spotify didn't exist - people used Napster/Limewire
  
  '2004-2006': [
    {
      title: 'Dragostea Din Tei',
      artist: 'O-Zone',
      spotifyId: '02l43tcNi3hkXKCN0Ovvdj',
      memeContext: 'Numa Numa'
    },
    {
      title: 'Chocolate Rain',
      artist: 'Tay Zonday',
      spotifyId: '1p1Z3ayzGhkdKlKPJPzJFS',
      memeContext: 'I move away from the mic'
    },
    {
      title: 'Crazy Frog',
      artist: 'Axel F',
      spotifyId: '6NzItAXwD5LtYgf3PbFbRJ',
      memeContext: 'Annoying ringtone'
    },
  ],
  
  '2007-2009': [
    {
      title: 'Never Gonna Give You Up',
      artist: 'Rick Astley',
      spotifyId: '4cOdK2wGLETKBW3PvgPWqT',
      memeContext: 'Rickroll'
    },
    {
      title: 'All Star',
      artist: 'Smash Mouth',
      spotifyId: '3cfOd4CMv2snFaKAnMdnvK',
      memeContext: 'Shrek meme'
    },
    {
      title: 'Shoes',
      artist: 'Liam Kyle Sullivan',
      spotifyId: '4pNApHFIfhaDKXkfXU5z8H',
      memeContext: 'Let me borrow that top'
    },
  ],
  
  '2010-2012': [
    {
      title: 'Friday',
      artist: 'Rebecca Black',
      spotifyId: '4fK6E2UywZTJIa5kWnCD6x',
      memeContext: 'Viral cringe classic'
    },
    {
      title: 'Gangnam Style',
      artist: 'PSY',
      spotifyId: '0E8toFl5Hs24S1iYNz5kHq',
      memeContext: 'Horse dance'
    },
    {
      title: 'Harlem Shake',
      artist: 'Baauer',
      spotifyId: '6p7kVFnF1NOCi0pS4hiDfZ',
      memeContext: 'Harlem Shake videos'
    },
    {
      title: 'Levels',
      artist: 'Avicii',
      spotifyId: '3VGwXMgUQa0DP7Bc3aMDDT',
      memeContext: 'EDM era meme'
    },
  ],
  
  '2013-2015': [
    {
      title: 'The Fox (What Does the Fox Say?)',
      artist: 'Ylvis',
      spotifyId: '1WuRbEdV2YMw4qurBLummP',
      memeContext: 'What does the fox say'
    },
    {
      title: 'Turn Down for What',
      artist: 'DJ Snake, Lil Jon',
      spotifyId: '3EvgxJP4bWdJ6gCKZRhBvA',
      memeContext: 'Vine era anthem'
    },
    {
      title: 'Watch Me (Whip / Nae Nae)',
      artist: 'Silentó',
      spotifyId: '3KkhXJpsdVqCQfCl4G5qBz',
      memeContext: 'Whip/Nae Nae dance'
    },
    {
      title: 'Hotline Bling',
      artist: 'Drake',
      spotifyId: '0wwPcA6wtMf6HUMpIRdeP7',
      memeContext: 'Drake dancing meme'
    },
  ],
  
  '2016-2018': [
    {
      title: 'Bad and Boujee',
      artist: 'Migos',
      spotifyId: '4Km5HrUvYTaSUfiSGPJeQR',
      memeContext: 'Raindrop, drop top meme'
    },
    {
      title: 'Mask Off',
      artist: 'Future',
      spotifyId: '0VgkVdmE4gld66l8iyGjgx',
      memeContext: 'Flute meme'
    },
    {
      title: 'In My Feelings',
      artist: 'Drake',
      spotifyId: '2G7V7zsVDxg1yRsu7Ew9RJ',
      memeContext: 'Kiki challenge'
    },
    {
      title: 'Gucci Gang',
      artist: 'Lil Pump',
      spotifyId: '6FU7p8kd6giCSDD1XVPOUO',
      memeContext: 'Lil Pump meme era'
    },
  ],
  
  '2019-2021': [
    {
      title: 'Old Town Road',
      artist: 'Lil Nas X',
      spotifyId: '6u7jPi22kF8CTQ3rb9zqF1',
      memeContext: 'TikTok sensation'
    },
    {
      title: 'Savage Love',
      artist: 'Jawsh 685, Jason Derulo',
      spotifyId: '0eG08cBeKk0mzykKjw4hcQ',
      memeContext: 'TikTok dance'
    },
    {
      title: 'Say So',
      artist: 'Doja Cat',
      spotifyId: '3Dv1eDb0MEgF93GpLXlucZ',
      memeContext: 'TikTok dance craze'
    },
    {
      title: 'Astronaut In The Ocean',
      artist: 'Masked Wolf',
      spotifyId: '3Ofmpyhv5UAQ70mENzB277',
      memeContext: 'What you know about meme'
    },
    {
      title: 'WAP',
      artist: 'Cardi B, Megan Thee Stallion',
      spotifyId: '4Oun2ylbjFKMPTiaSbbCih',
      memeContext: 'WAP dance'
    },
    {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      spotifyId: '0VjIjW4GlUZAMYd2vXMi3b',
      memeContext: 'TikTok viral'
    },
    {
      title: 'Savage',
      artist: 'Megan Thee Stallion',
      spotifyId: '0jnsk9HBraJW0tzVKfB9Qp',
      memeContext: 'Savage challenge'
    },
    {
      title: 'Renegade',
      artist: 'K CAMP',
      spotifyId: '5vNRhkKd0yEAg8suGBpjeY',
      memeContext: 'Renegade dance'
    },
    {
      title: 'Dreams',
      artist: 'Fleetwood Mac',
      spotifyId: '0ofHAoxe9vBkTCp2UQIavz',
      memeContext: 'Skateboard guy'
    },
    {
      title: 'Levitating',
      artist: 'Dua Lipa',
      spotifyId: '39LLxExYz6ewLAcYrzQQyP',
      memeContext: 'TikTok dance'
    },
  ],
  
  '2022-2024': [
    {
      title: 'Corn',
      artist: 'Schmoyoho',
      spotifyId: '76PJRfjKtZ0X9BgXt4CjXF',
      memeContext: 'It\'s corn!'
    },
    {
      title: '360',
      artist: 'Charli XCX',
      spotifyId: '4w3tQBXhn5345eUXDGBWZG',
      memeContext: 'Brat summer'
    },
    {
      title: 'Apple',
      artist: 'Charli XCX',
      spotifyId: '2OzhQlSqBEmt7hmkuwzhbi',
      memeContext: 'Brat summer dance'
    },
    {
      title: 'Espresso',
      artist: 'Sabrina Carpenter',
      spotifyId: '2qSkIjg1o9h3YT9RAgYN75',
      memeContext: 'That\'s that me espresso'
    },
    {
      title: 'Cupid - Twin Ver.',
      artist: 'FIFTY FIFTY',
      spotifyId: '4e1aewX6ATPcdfQIqr7gqO',
      memeContext: 'TikTok viral'
    },
    {
      title: 'Unholy',
      artist: 'Sam Smith, Kim Petras',
      spotifyId: '3nqQXoyQOWXiESFLlDF1hG',
      memeContext: 'TikTok dance trend'
    },
    {
      title: 'Anti-Hero',
      artist: 'Taylor Swift',
      spotifyId: '0V3wPSX9ygBnCm8psDIegu',
      memeContext: 'Midnights era'
    },
    {
      title: 'Flowers',
      artist: 'Miley Cyrus',
      spotifyId: '0yc6Gst2xkRu0eMLeRMGCX',
      memeContext: 'Viral breakup anthem'
    },
    {
      title: 'Calm Down',
      artist: 'Rema, Selena Gomez',
      spotifyId: '1HLQfSH96VkRzF8p0LaA4G',
      memeContext: 'TikTok dance'
    },
    {
      title: 'As It Was',
      artist: 'Harry Styles',
      spotifyId: '3rUGC1vUpkDG9CZFHMur1t',
      memeContext: 'Everywhere 2022'
    },
    {
      title: 'Heat Waves',
      artist: 'Glass Animals',
      spotifyId: '02MWAaffLxlfxAUY7c5dvx',
      memeContext: 'TikTok viral'
    },
    {
      title: 'Snooze',
      artist: 'SZA',
      spotifyId: '4iZ4pt7kvcaH6Yo8UoZ4s2',
      memeContext: 'SZA SOS era'
    },
  ],
  
  '2025-2026': [
    {
      title: 'CHANEL',
      artist: 'Tyla',
      spotifyId: '55h7vJchibLdUkxdlX3fK7',
      memeContext: '#1 Pop song Jan 2026'
    },
    {
      title: 'APT.',
      artist: 'ROSÉ & Bruno Mars',
      spotifyId: '5vNRhkKd0yEAg8suGBpjeY',
      memeContext: 'APT dance challenge'
    },
    {
      title: 'Die With A Smile',
      artist: 'Lady Gaga, Bruno Mars',
      spotifyId: '2plbrEY59IikOBgBGLjaoe',
      memeContext: 'Billboard #1 year-end 2025'
    },
    {
      title: 'Man I Need',
      artist: 'Olivia Dean',
      spotifyId: '0y8y1zDbpYCQ5bveSzihaj',
      memeContext: 'Top 40 Pop #2'
    },
    {
      title: 'Defying Gravity',
      artist: 'Cynthia Erivo, Ariana Grande',
      spotifyId: '3V7UhEDGqIcxnP1SoUHLht',
      memeContext: 'Wicked movie soundtrack'
    },
    {
      title: 'Espresso',
      artist: 'Sabrina Carpenter',
      spotifyId: '2qSkIjg1o9h3YT9RAgYN75',
      memeContext: 'That\'s that me espresso'
    },
    {
      title: 'Birds of a Feather',
      artist: 'Billie Eilish',
      spotifyId: '6dOtVTDdiauQNBQEDOtlAB',
      memeContext: 'Viral TikTok sound'
    },
    {
      title: 'Lose Control',
      artist: 'Teddy Swims',
      spotifyId: '6usohdchdzW9oML7VC4Uhk',
      memeContext: 'TikTok viral 2024-25'
    },
  ],
}

