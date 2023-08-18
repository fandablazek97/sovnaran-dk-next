import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Introduction from '@/components/Introduction'
import Features from '@/components/Features'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
     <Hero />
     <Introduction />
     <Features />
     <Contact />
     <Footer />
    </main>
  )
}
