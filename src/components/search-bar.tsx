import { useRouter } from 'next/router';
import { useRef } from 'react';

export function SearchBar() {
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const val = ref.current?.value;

    if (val) {
      router.push(`/?query=${val}`);
    }
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-xl"
    >
      <label htmlFor="search" className="sr-only">
        Search for any IP Address or domain
      </label>
      <input
        required
        ref={ref}
        id="search"
        name="query"
        type="search"
        className="w-full rounded-l-xl px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray"
        placeholder="Search for any IP Address or domain"
      />
      <button
        type="submit"
        aria-label="Submit"
        className="rounded-r-xl bg-neutral-950 px-6 py-4 transition-colors hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
