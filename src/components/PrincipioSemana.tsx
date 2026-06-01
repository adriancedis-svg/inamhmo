import { Sparkles, ShieldCheck } from "lucide-react";

const PrincipioSemana = () => {
  return (
    <section className="px-4 py-12 md:px-8 lg:py-16" aria-labelledby="principio-semana">
      <div className="container-narrow">
        <div className="group relative animate-fade-up [animation-duration:900ms]">
          {/* Soft outer glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-[1.25rem] bg-gradient-to-r from-accent/30 via-primary/20 to-accent/30 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-90"
          />

          <article
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary via-primary to-[hsl(var(--navy-light))] p-8 md:p-12 lg:p-14 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_25px_60px_-15px_hsl(var(--accent)/0.45)]"
          >
            {/* Decorative glows */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

            {/* Subtle inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" aria-hidden="true" />

            <div className="relative flex flex-col items-center text-center text-primary-foreground">
              {/* Pilar de la escuela badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3.5 py-1 mb-5 backdrop-blur-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                <span className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Pilar de la escuela
                </span>
              </span>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-5">
                <Sparkles className="h-4 w-4 text-accent" />
                <span
                  id="principio-semana"
                  className="text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-primary-foreground/70"
                >
                  Principio de la semana
                </span>
                <Sparkles className="h-4 w-4 text-accent" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-balance mb-7 max-w-3xl">
                Mi cuerpo, mi regalo
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-7" aria-hidden="true">
                <span className="h-px w-10 bg-accent/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="h-px w-10 bg-accent/50" />
              </div>

              {/* Valor */}
              <div className="inline-flex items-center gap-2.5 rounded-full bg-accent px-5 py-2.5 text-accent-foreground shadow-lg shadow-accent/20 transition-transform duration-500 group-hover:scale-[1.02]">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.15em]">
                  Valor: Integridad
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PrincipioSemana;
