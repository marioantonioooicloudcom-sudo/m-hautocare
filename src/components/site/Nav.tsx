import logo from "@/assets/mh-logo.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book", href: "#book" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="M&H Auto Care" className="h-10 w-10 rounded-md object-cover ring-1 ring-white/10" />
          <span className="font-display text-lg font-semibold tracking-widest chrome-text">M&amp;H AUTO CARE</span>
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
          className="rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-white/10 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]"
        >
          Book now
        </a>
      </div>
    </header>
  );
}
