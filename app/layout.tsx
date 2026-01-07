import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Internet Nostalgia',
  description: 'Words, videos, and songs that defined each era of internet culture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className="dark:bg-black">
        {children}
      </body>
    </html>
  )
}

