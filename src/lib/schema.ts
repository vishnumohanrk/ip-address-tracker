import 'server-only';

import { resolve4 } from 'dns/promises';
import isFQDN from 'validator/es/lib/isFQDN';
import isURL from 'validator/lib/isURL';
import { z } from 'zod';

async function getIP(val: string, ctx: z.RefinementCtx) {
  try {
    const ipArr = await resolve4(val);
    return ipArr[0];
  } catch (e) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `DNS Resolver error - ${JSON.stringify(e)}`,
    });

    return z.NEVER;
  }
}

export const querySchema = z.union([
  z.string().transform((val, ctx) => {
    if (!isFQDN(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
      });

      return z.NEVER;
    }

    return getIP(val, ctx);
  }),

  z.string().transform((val, ctx) => {
    if (!isURL(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
      });

      return z.NEVER;
    }

    const url =
      val.startsWith('http://') || val.startsWith('https://')
        ? new URL(val)
        : new URL(`https://${val}`);

    return getIP(url.hostname, ctx);
  }),

  z.string().ip({ message: 'Invalid Input' }),
]);

export const respSchema = z.object({
  ip: z.string(),
  region_code: z.string(),
  city: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  postal: z.string(),
  connection: z.object({
    isp: z.string(),
  }),
  timezone: z.object({
    utc: z.string(),
  }),
});

export type TDetails = z.infer<typeof respSchema>;
