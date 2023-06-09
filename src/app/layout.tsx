import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Wrapper } from '@/components/Wrapper'

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
        <Wrapper>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </Wrapper>
      </body>
    </html>
  )
}
