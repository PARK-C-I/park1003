import Header from '@/compontents/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/compontents/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '홍길동 포트폴리오',
  description: 'html5,css3,react, javascript,nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
