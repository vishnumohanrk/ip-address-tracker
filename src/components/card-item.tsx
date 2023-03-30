type CardItemProps = {
  value: string;
  keyText: string;
};

export function CardItem({ keyText, value }: CardItemProps) {
  return (
    <div className="border-black/[0.15] sm:border-r sm:px-8">
      <dt className="mb-1.5 text-xs font-bold uppercase tracking-wide text-gray/50 sm:text-sm">
        {keyText}
      </dt>
      <dd className="line-clamp-2 break-words text-xl font-semibold text-gray sm:text-2xl">
        {value}
      </dd>
    </div>
  );
}
