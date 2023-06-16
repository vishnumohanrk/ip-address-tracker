export function FormContent() {
  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search for any IP address or domain
      </label>
      <input
        required
        id="search"
        type="text"
        name="query"
        placeholder="Search for any IP address or domain"
        className="grow rounded-l-xl px-4 focus:outline-none focus:outline-neutral-50"
      />
      <button
        type="submit"
        className="inline-flex w-16 items-center justify-center rounded-r-xl bg-neutral-950 text-neutral-50 transition-colors hover:bg-neutral-800 focus:outline-none focus:outline-neutral-950"
      >
        <svg
          fill="none"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          className="h-6 w-6"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span className="sr-only">Submit</span>
      </button>
    </>
  );
}
