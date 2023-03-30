import { useRouter } from 'next/router';
import useSWR from 'swr';

import type { TAPISuccess, TGeoDetails } from '@/lib/types';
import { getAPIURL } from '@/lib/utils.client';

export function useAPI() {
  const router = useRouter();

  const { query } = router.query;

  const ipRes = useSWR<TAPISuccess<{ ip: string }>>(
    typeof query === 'string' ? `/api/ip?query=${query}` : null
  );

  const geoRes = useSWR<TAPISuccess<TGeoDetails>>(() => {
    if (!query) {
      return getAPIURL('');
    }

    if (query && ipRes.data && !ipRes.error) {
      return getAPIURL(ipRes.data.ip);
    }
  });

  return {
    details: geoRes.data,
    error: ipRes.error || geoRes.error,
    loading: ipRes.isLoading || geoRes.isLoading,
  };
}
