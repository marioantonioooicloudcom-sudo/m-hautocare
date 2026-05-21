import logo from "@/assets/mh-logo.png";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden radial-spotlight">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Detailing • Protection • Performance
          </div>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            <span className="chrome-text">Showroom shine.</span>
            <br />
            <span className="text-foreground">Every drive.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
            Hand-detailed care for owners who treat their car like a machine, not a chore.
            Interior to undercarriage — restored, sealed, and protected.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#book"
              className="group relative overflow-hidden rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-transform hover:scale-[1.02]"
            >
              Book an appointment
            </a>
            <a
              href="#services"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-white/5"
            >
              View services
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
            <div><span className="text-2xl font-display font-semibold text-foreground">500+</span><div>Cars detailed</div></div>
            <div className="h-8 w-px bg-border" />
            <div><span className="text-2xl font-display font-semibold text-foreground">5.0</span><div>Avg. rating</div></div>
            <div className="h-8 w-px bg-border" />
            <div><span className="text-2xl font-display font-semibold text-foreground">3 yr</span><div>Coating warranty</div></div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black p-2 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <img src={logo} alt="M&H Auto Care logo" className="h-full w-full rounded-xl object-cover" />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
