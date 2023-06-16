import type { TDetails } from '@/lib/schema';

import { CardItem } from './card-item';

export function CardContent(details: TDetails) {
  const timeZone = details && `UTC ${details.timezone.utc}`;
  const ipLocation =
    details && `${details.city}, ${details.region_code}, ${details.postal}`;

  return (
    <>
      <CardItem keyText="IP ADDRESS" value={details.ip} />
      <CardItem keyText="LOCATION" value={ipLocation} />
      <CardItem keyText="TIMEZONE" value={timeZone} />
      <CardItem keyText="ISP" value={details.connection.isp} />
    </>
  );
}
