import './globals.css';

import { Rubik } from 'next/font/google';

const font = Rubik({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'IP Address Tracker',
  description: 'Frontend Mentor Challenge - IP Address Tracker',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans text-neutral-950 antialiased">{children}</body>
    </html>
  );
}
