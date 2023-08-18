import Favicon from '@/components/Favicon'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Favicon />
      <Component {...pageProps} />
    </>
  )
}
