import logo from "@/assets/mh-logo.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book", href: "#book" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img src={logo} alt="M&H Auto Care" className="h-9 w-9 shrink-0 rounded-md object-cover ring-1 ring-white/10 sm:h-10 sm:w-10" />
          <span className="truncate font-display text-sm font-semibold tracking-widest chrome-text sm:text-lg">M&amp;H AUTO CARE</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="shrink-0 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-foreground transition-all hover:bg-white/10 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)] sm:px-4 sm:text-sm"
        >
          Book now
        </a>
      </div>
    </header>
  );
}
