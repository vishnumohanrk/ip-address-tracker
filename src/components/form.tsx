'use client';

import { useRouter } from 'next/navigation';

export function Form({ content }: { content: React.ReactNode }) {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get('query');

    if (query) {
      router.push(`/?query=${query}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex h-14 w-full max-w-xl items-stretch justify-center"
    >
      {content}
    </form>
  );
}
