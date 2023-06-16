type Props = {
  value: string;
  keyText: string;
};

export function CardItem({ keyText, value }: Props) {
  return (
    <div className="border-r border-neutral-300 px-4 last:border-0 sm:px-8">
      <dt className="mb-1.5 text-xs font-bold tracking-wide text-neutral-950/40 sm:text-sm">
        {keyText}
      </dt>
      <dd className="line-clamp-2 break-words text-xl font-semibold text-neutral-950 lg:text-2xl">
        {value}
      </dd>
    </div>
  );
}
