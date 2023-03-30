import { resolve4 } from 'dns/promises';
import { isIP } from 'net';

function getHostName(urlString: string) {
  if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
    return new URL(`https://${urlString}`).hostname;
  }

  return new URL(urlString).hostname;
}

export async function getIP(query: string) {
  if (isIP(query)) {
    return query;
  }

  const ipArr = await resolve4(getHostName(query));
  return ipArr[0];
}
