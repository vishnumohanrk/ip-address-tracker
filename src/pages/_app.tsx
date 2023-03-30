import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';
import { SWRConfig } from 'swr';

import { swrGlobalConfig } from '@/lib/utils.client';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rubik.variable} font-sans antialiased`}>
      <SWRConfig value={swrGlobalConfig}>
        <Component {...pageProps} />
      </SWRConfig>
    </main>
  );
}
