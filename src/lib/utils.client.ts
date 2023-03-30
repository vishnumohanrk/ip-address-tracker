import type { SWRConfiguration } from 'swr';

import type { TResp } from './types';

async function fetcher<T>(url: string) {
  const res = await fetch(url);

  if (res.ok) {
    const data: TResp<T> = await res.json();

    if (data.success) {
      return data;
    }

    throw new Error(data.message);
  }

  throw new Error('An error occurred');
}

export function getAPIURL(ip: string) {
  return `https://ipwho.is/${ip}?fields=success,message,ip,city,region_code,postal,latitude,longitude,isp,timezone.utc,connection.isp`;
}

export const swrGlobalConfig: SWRConfiguration = {
  shouldRetryOnError: false,
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  fetcher,
};
