import dynamic from 'next/dynamic';

import { AppHeader } from '@/components/app-header';
import { BgPattern } from '@/components/bg-pattern';
import { Card } from '@/components/card';
import { SearchBar } from '@/components/search-bar';

const Leaflet = dynamic(() => import('../components/maps'), {
  ssr: false,
});

export default function AppHome() {
  return (
    <>
      <BgPattern />
      <div className="absolute top-0 z-[500] w-full max-xl:px-6">
        <AppHeader />
        <SearchBar />
        <Card />
      </div>
      <Leaflet />
    </>
  );
}
