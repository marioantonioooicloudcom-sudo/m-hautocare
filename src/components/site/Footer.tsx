import logo from "@/assets/mh-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="M&H" className="h-9 w-9 rounded-md ring-1 ring-white/10" />
          <div>
            <div className="font-display text-sm font-semibold tracking-widest chrome-text">M&amp;H AUTO CARE</div>
            <div className="text-xs text-muted-foreground">Detailing • Protection • Performance</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} M&amp;H Auto Care. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
