import { CardItem } from './card-item';

export function Card() {
  return (
    <dl className="mx-auto mt-6 grid w-full max-w-6xl grid-cols-1 rounded-xl bg-white py-6 shadow-card max-lg:gap-y-6 max-sm:text-center sm:grid-cols-2 sm:py-8 lg:mt-8 lg:grid-cols-4">
      <CardItem keyText="IP Address" value="999.999.999.999" />
      <CardItem keyText="Location" value="Test City, TN, 999999" />
      <CardItem keyText="Timezone" value="UTC +05:30" />
      <CardItem keyText="ISP" value="Test Network" />
    </dl>
  );
}
