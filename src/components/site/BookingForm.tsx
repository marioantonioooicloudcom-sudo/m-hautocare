const EMAIL = "mhautocare0@gmail.com";

const subject = "Appointment Request";
const body = `Hi MH Auto Care,

I'd like to book an appointment.

Service: 
Preferred date: 
Vehicle (year / make / model): 
Name: 
Phone: 
Notes (optional): 

Thanks!`;

const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export function BookingForm() {
  return (
    <section id="book" className="relative border-t border-border/60 py-24">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Booking</div>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl">
          <span className="chrome-text">Book your slot.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          To book an appointment, send us an email with the details below.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-card/60 p-8 backdrop-blur">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Email us at</div>
          <a
            href={mailto}
            className="mt-2 inline-block font-display text-2xl font-semibold tracking-tight text-foreground hover:underline md:text-3xl"
          >
            {EMAIL}
          </a>

          <div className="mt-8 text-left">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Please include</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90">
              <li>• Service you want (e.g. Full Detail — SUV)</li>
              <li>• Preferred date</li>
              <li>• Vehicle year, make, and model</li>
              <li>• Your name and phone number</li>
              <li>• Any notes (paint condition, problem spots, pickup, etc.) — optional</li>
            </ul>
          </div>

          <a
            href={mailto}
            className="mt-8 inline-block w-full rounded-md bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:bg-white/90"
          >
            Email to book
          </a>
        </div>
      </div>
    </section>
  );
}
