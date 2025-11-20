import Link from "next/link";

const navItems = [
  { label: "Shop", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const Header = () => {
  return (
    <header className="px-6 py-4">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          PRIME
        </Link>

        <nav className="hidden items-center justify-center gap-10 text-sm font-medium text-neutral-600 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-neutral-900">
              {item.label}
            </a>
          ))}
        </nav>

        <form className="flex items-center justify-end gap-4 min-w-sm">
          <label className="flex w-full max-w-sm items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-500">
            <span className="sr-only">Search products</span>
            <svg
              className="h-4 w-4 text-neutral-500"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm6.5 11 2.5 2.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="search"
              placeholder="Find a product…"
              className="w-full bg-transparent text-neutral-700 placeholder:text-neutral-500 focus:outline-none"
            />
          </label>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-neutral-800 transition-colors hover:text-neutral-900 focus:outline-none cursor-pointer"
          aria-label="Open cart"
        >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6h15l-1.5 8.5h-11L6 6Zm0 0L4 3H2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="19" r="1" fill="currentColor" />
              <circle cx="17" cy="19" r="1" fill="currentColor" />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;

