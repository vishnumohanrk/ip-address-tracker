import type { NextApiRequest, NextApiResponse } from 'next';

import type { TIPResp } from '@/lib/types';
import { getIP } from '@/lib/utils.server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TIPResp>
) {
  const { query } = req.query;

  if (typeof query !== 'string') {
    res.status(500).json({ success: false, message: 'Invalid Query' });
    return;
  }

  try {
    const ip = await getIP(query);
    res.status(200).json({ success: true, ip });
  } catch (err: unknown) {
    res.status(500).json({ success: false, message: JSON.stringify(err) });
  }
}
