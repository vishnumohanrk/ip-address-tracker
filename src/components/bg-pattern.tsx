import Image from 'next/image';

import pattern from '../../public/pattern.webp';

export function BgPattern() {
  return (
    <Image
      alt=""
      priority
      src={pattern}
      placeholder="blur"
      role="presentation"
      className="fixed top-0 -z-50 h-[--ht] w-full object-cover"
    />
  );
}
