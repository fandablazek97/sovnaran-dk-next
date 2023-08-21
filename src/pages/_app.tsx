import Favicon from '@/components/Favicon'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Favicon />
      <Component {...pageProps} />
      <Analytics mode={'production'} />;
    </>
  )
}
