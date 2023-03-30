export function SearchBar() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className="mx-auto flex max-w-xl" onSubmit={handleSubmit}>
      <label htmlFor="search" className="sr-only">
        Search for any IP Address or domain
      </label>
      <input
        id="search"
        name="query"
        type="search"
        className="flex-1 rounded-l-xl py-4 pl-6"
        placeholder="Search for any IP Address or domain"
      />
      <button
        type="submit"
        aria-label="Submit"
        className="rounded-r-xl bg-neutral-950 px-6 py-4 transition-colors hover:bg-neutral-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
