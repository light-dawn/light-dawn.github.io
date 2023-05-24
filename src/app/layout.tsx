import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LoNa\'s Tech Blogs',
  // headerTitle: 'LoNa\'s Tech Blogs',
  // siteUrl: 'https://light-dawn.github.io',
  // email: 'lona_anyway@outlook.com',
  // github: 'https://github.com/light-dawn',
  // twitter: 'https://twitter.com/LoNa_Anyway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
