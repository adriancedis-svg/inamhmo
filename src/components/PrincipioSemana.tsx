import { Sparkles, ShieldCheck } from "lucide-react";

const PrincipioSemana = () => {
  return (
    <section className="px-4 py-12 md:px-8 lg:py-16" aria-labelledby="principio-semana">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-primary via-primary to-[hsl(var(--navy-light))] p-8 md:p-12 shadow-xl">
          {/* Decorative accents */}
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col items-center text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span id="principio-semana" className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Principio de la semana
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-balance mb-6 max-w-3xl">
              Mi cuerpo, mi regalo
            </h2>

            <div className="h-px w-16 bg-accent/60 mb-6" aria-hidden="true" />

            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-accent-foreground shadow-md">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider">
                Valor: Integridad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipioSemana;
