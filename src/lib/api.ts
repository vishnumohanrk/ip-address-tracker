import 'server-only';

import { z } from 'zod';

import { querySchema, respSchema } from './schema';

export function getAPIURL(ip: string) {
  return `https://ipwho.is/${ip}?fields=success,message,ip,city,region_code,postal,latitude,longitude,isp,timezone.utc,connection.isp`;
}

export async function getIPDetails(q: string) {
  try {
    const query = await querySchema.parseAsync(q);
    const resp = await fetch(getAPIURL(query));
    return respSchema.parse(await resp.json());
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues[0].message;
    }

    return JSON.stringify(error);
  }
}
