import { AppHeader } from '@/components/app-header';
import { BgPattern } from '@/components/bg-pattern';
import { Card } from '@/components/card';
import { SearchBar } from '@/components/search-bar';

export default function AppHome() {
  return (
    <>
      <BgPattern />
      <div className="absolute top-0 w-full max-xl:px-6">
        <AppHeader />
        <SearchBar />
        <Card />
      </div>
      <div className="h-[calc(100vh-var(--pattern-ht))] bg-blue-600" />
    </>
  );
}
