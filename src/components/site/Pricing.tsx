import { Check } from "lucide-react";

const tiers = [
  {
    name: "Express",
    price: 79,
    blurb: "Quick refresh, in and out.",
    features: ["Foam hand wash", "Wheel & tire clean", "Hand dry", "Interior vacuum", "Window clean"],
  },
  {
    name: "Signature",
    price: 199,
    featured: true,
    blurb: "Our most popular full detail.",
    features: [
      "Everything in Express",
      "Clay bar decontamination",
      "Sealant + carnauba wax",
      "Leather & plastic conditioning",
      "Tire dressing",
      "2-hour service",
    ],
  },
  {
    name: "Showroom",
    price: 499,
    blurb: "Concours-level restoration.",
    features: [
      "Everything in Signature",
      "Multi-stage paint correction",
      "1-year ceramic coating",
      "Engine bay detail",
      "Headlight restoration",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-border/60 bg-black/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Pricing</div>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            <span className="chrome-text">Straight rates.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">No hidden fees. Custom quotes available for trucks, SUVs and exotics.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                t.featured
                  ? "border-white/30 bg-gradient-to-b from-white/10 to-white/[0.02] shadow-[0_0_60px_-20px_rgba(255,255,255,0.25)]"
                  : "border-border bg-card hover:border-white/20"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-black">
                  Most popular
                </div>
              )}
              <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold chrome-text">${t.price}</span>
                <span className="text-sm text-muted-foreground">starting</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={2.5} />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                  t.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/20 text-foreground hover:bg-white/5"
                }`}
              >
                Book {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
