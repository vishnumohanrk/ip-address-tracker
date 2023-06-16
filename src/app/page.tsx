import dynamic from 'next/dynamic';
import { headers } from 'next/headers';

import { BgPattern } from '@/components/bg-pattern';
import { CardContent } from '@/components/card-content';
import { Form } from '@/components/form';
import { FormContent } from '@/components/form-content';
import { Header } from '@/components/header';
import { getIPDetails } from '@/lib/api';

const Leaflet = dynamic(() => import('../components/map'), { ssr: false });

export default async function AppHome({
  searchParams: { query },
}: {
  searchParams: { query?: string };
}) {
  const userIp = headers().get('x-forwarded-for') ?? '127.0.0.1';
  const data = await getIPDetails(query ?? userIp);

  const isError = typeof data === 'string';
  const Wrapper = isError ? 'div' : 'dl';

  return (
    <main>
      <BgPattern />
      <div className="px-6">
        <Header />
        <Form content={<FormContent />} />
        <Wrapper className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-y-6 rounded-xl bg-white py-6 shadow-2xl max-sm:text-center sm:grid-cols-2 sm:py-8 lg:mt-8 lg:grid-cols-4">
          {isError ? (
            <p className="col-span-4 break-words px-6 text-center text-lg font-medium">
              {data}
            </p>
          ) : (
            <CardContent {...data} />
          )}
        </Wrapper>
      </div>
      <Leaflet pos={isError ? null : [data.latitude, data.longitude]} />
    </main>
  );
}

export const fetchCache = 'force-cache';
