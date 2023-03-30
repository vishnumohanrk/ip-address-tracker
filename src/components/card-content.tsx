import { useAPI } from '@/hooks/use-api';

import { CardItem } from './card-item';

export function CardContent() {
  const { details, error } = useAPI();

  if (error) {
    return <p className="text-center text-lg font-medium">An Error Occurred</p>;
  }

  const timeZone = details && `UTC ${details.timezone.utc}`;
  const ipLocation =
    details && `${details.city}, ${details.region_code}, ${details.postal}`;

  return (
    <>
      <CardItem keyText="IP Address" value={details?.ip} />
      <CardItem keyText="Location" value={ipLocation} />
      <CardItem keyText="Timezone" value={timeZone} />
      <CardItem keyText="ISP" value={details?.connection.isp} />
    </>
  );
}
