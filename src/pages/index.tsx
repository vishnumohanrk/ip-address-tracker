import dynamic from 'next/dynamic';
import Head from 'next/head';

import { AppHeader } from '@/components/app-header';
import { BgPattern } from '@/components/bg-pattern';
import { CardContent } from '@/components/card-content';
import { SearchBar } from '@/components/search-bar';

const Leaflet = dynamic(() => import('../components/maps'), {
  ssr: false,
});

export default function AppHome() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | IP Address Tracker</title>
        <meta
          name="description"
          content="Frontend Mentor Challenge - IP Address Tracker"
        />
      </Head>
      <BgPattern />
      <div className="absolute top-0 z-[500] w-full max-xl:px-6">
        <AppHeader />
        <SearchBar />
        <dl className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-1 rounded-xl bg-white py-6 shadow-card max-lg:gap-y-6 max-sm:text-center sm:grid-cols-2 sm:py-8 lg:mt-8 lg:grid-cols-4">
          <CardContent />
        </dl>
      </div>
      <Leaflet />
    </>
  );
}
