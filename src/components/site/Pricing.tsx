import { Check } from "lucide-react";

const tiers = [
  {
    name: "Exterior",
    prices: [
      { label: "Coupe / Sedan", price: 60 },
      { label: "SUV / Small Truck", price: 75 },
      { label: "Large SUV / Truck", price: 90 },
    ],
    features: [
      "Wheels & tires cleaned",
      "Pre-wash + contact wash",
      "Windows",
      "Tire shine",
      "Spray protection",
    ],
  },
  {
    name: "Full Detail",
    featured: true,
    blurb: "Most popular",
    prices: [
      { label: "Coupe / Sedan", price: 130 },
      { label: "SUV / Small Truck", price: 160 },
      { label: "Large SUV / Truck", price: 180 },
    ],
    features: [
      "Full interior + exterior",
      "More detailed cleaning",
      "Added protection",
    ],
  },
  {
    name: "Interior",
    prices: [
      { label: "Coupe / Sedan", price: 80 },
      { label: "SUV / Small Truck", price: 100 },
      { label: "Large SUV / Truck", price: 120 },
    ],
    features: [
      "Vacuum",
      "Deep clean all surfaces",
      "Door jambs",
      "Windows",
      "Rubber mats",
      "Light stain removal included",
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
          <p className="mt-4 text-muted-foreground">Fully mobile — we come to you. Prices may vary based on vehicle.</p>
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
              <ul className="mt-6 space-y-2 border-b border-border/60 pb-6">
                {t.prices.map((p) => (
                  <li key={p.label} className="flex items-baseline justify-between gap-3">
                    <span className="text-sm text-muted-foreground">{p.label}</span>
                    <span className="font-display text-xl font-bold chrome-text">${p.price}</span>
                  </li>
                ))}
              </ul>
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
        <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Text to book · 845-271-9655
        </p>
      </div>
    </section>
  );
}
