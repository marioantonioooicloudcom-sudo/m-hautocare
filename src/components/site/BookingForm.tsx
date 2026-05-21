import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone required").max(30),
  vehicle: z.string().trim().min(1, "Vehicle required").max(100),
  service: z.string().min(1, "Choose a service"),
  date: z.string().min(1, "Pick a date"),
  notes: z.string().max(1000).optional(),
});

type FormValues = z.infer<typeof schema>;

const services = [
  "Exterior — Coupe/Sedan ($60)",
  "Exterior — SUV/Small Truck ($75)",
  "Exterior — Large SUV/Truck ($90)",
  "Interior — Coupe/Sedan ($80)",
  "Interior — SUV/Small Truck ($100)",
  "Interior — Large SUV/Truck ($120)",
  "Full Detail — Coupe/Sedan ($130)",
  "Full Detail — SUV/Small Truck ($160)",
  "Full Detail — Large SUV/Truck ($180)",
];

export function BookingForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { service: "" } });

  const service = watch("service");

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log("Booking request:", { ...values, email: "[redacted]", phone: "[redacted]" });
    toast.success("Request sent — we'll confirm shortly.", {
      description: `${values.service} on ${values.date}`,
    });
    reset();
  };

  return (
    <section id="book" className="relative border-t border-border/60 py-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Booking</div>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
            <span className="chrome-text">Book your slot.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tell us about your car. We'll confirm within a few hours.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" error={errors.name?.message}>
              <Input {...register("name")} placeholder="Alex Johnson" />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <Input type="tel" {...register("phone")} placeholder="(555) 123-4567" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <Input type="email" {...register("email")} placeholder="you@email.com" />
            </Field>
            <Field label="Vehicle (make/model)" error={errors.vehicle?.message}>
              <Input {...register("vehicle")} placeholder="2020 BMW M4" />
            </Field>
            <Field label="Service" error={errors.service?.message}>
              <Select value={service} onValueChange={(v) => setValue("service", v, { shouldValidate: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Preferred date" error={errors.date?.message}>
              <Input type="date" {...register("date")} />
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Notes (optional)" error={errors.notes?.message}>
              <Textarea rows={4} {...register("notes")} placeholder="Anything we should know — paint condition, problem spots, pickup, etc." />
            </Field>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-white/90 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Request appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">{label}</Label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
