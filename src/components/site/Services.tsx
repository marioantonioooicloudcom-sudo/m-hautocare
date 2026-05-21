import { Sparkles, ShieldCheck, Gauge, Droplets, Sun, Car } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Exterior Detail", desc: "Hand wash, decontamination, clay bar, machine polish and high-gloss finish." },
  { icon: Car, title: "Interior Detail", desc: "Steam clean, leather conditioning, vacuum, fabric extraction and odor removal." },
  { icon: ShieldCheck, title: "Ceramic Coating", desc: "Multi-year nano coating for hydrophobic, scratch-resistant protection." },
  { icon: Sun, title: "Paint Correction", desc: "Multi-stage cut & polish to remove swirls, scratches and oxidation." },
  { icon: Droplets, title: "Wash & Wax", desc: "Express foam wash, hand dry and carnauba wax finish — weekly upkeep." },
  { icon: Gauge, title: "Engine Bay Detail", desc: "Degrease, steam clean and dress for a factory-fresh engine compartment." },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</div>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            <span className="chrome-text">What we do.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Every job is hand-finished. No conveyor belts. No shortcuts.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative bg-card p-8 transition-colors hover:bg-secondary">
              <Icon className="h-7 w-7 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl font-semibold uppercase tracking-wide">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
