import Image from 'next/image';

import pattern from '../../public/pattern.png';

export function BgPattern() {
  return (
    <Image
      alt=""
      priority
      src={pattern}
      role="presentation"
      className="h-[--pattern-ht] w-full object-cover"
    />
  );
}
