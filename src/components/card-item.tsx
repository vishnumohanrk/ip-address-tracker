type CardItemProps = {
  keyText: string;
  value: string | undefined;
};

export function CardItem({ keyText, value }: CardItemProps) {
  return (
    <div className="border-black/[0.15] px-2 last:border-0 sm:border-r sm:px-8">
      <dt className="mb-1.5 text-xs font-bold uppercase tracking-wide text-gray/50 sm:text-sm">
        {keyText}
      </dt>
      <dd className="line-clamp-2 break-words text-xl font-semibold text-gray lg:text-2xl">
        {value ?? (
          <div className="h-7 w-full animate-pulse rounded-lg bg-gray/50" />
        )}
      </dd>
    </div>
  );
}
