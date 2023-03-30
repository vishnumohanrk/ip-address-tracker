import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rubik.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </main>
  );
}
