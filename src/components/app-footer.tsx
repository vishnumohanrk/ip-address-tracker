export function AppFooter() {
  return (
    <footer className="fixed bottom-0 left-0 z-[500] bg-white/80 px-0.5 text-xs">
      <p>
        Data from&nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ipwhois.io/"
          className="text-blue-700 underline"
        >
          IPWHOIS.IO
        </a>
        &nbsp;API
      </p>
    </footer>
  );
}
