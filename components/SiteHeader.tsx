import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 bg-earth-900/30 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3 font-display text-xl font-medium tracking-wide">
          <img src="/brand/logo-mark.png" alt="" className="h-9 w-9 rounded-sm" />
          <span className="hidden sm:inline">Montana Micro Wedding</span>
        </Link>
        <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] md:gap-8">
          <Link href="/guides" className="transition-colors hover:text-earth-200">Guides</Link>
          <Link href="/#location" className="hidden transition-colors hover:text-earth-200 sm:block">Location</Link>
          <Link href="/#contact" className="border border-white/60 px-4 py-2 transition-colors hover:bg-white hover:text-earth-900">
            Inquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
