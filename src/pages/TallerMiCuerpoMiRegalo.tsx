import SEO from "@/components/SEO";
import { BookOpen, Heart, Sparkles, ShieldCheck, Quote, Activity, Lightbulb } from "lucide-react";

const TallerMiCuerpoMiRegalo = () => {
  return (
    <main className="min-h-screen bg-gray-warm">
      <SEO
        title="Taller #36: Mi cuerpo, mi regalo | INAM Hermosillo"
        description="Taller del principio de la semana 'Mi cuerpo, mi regalo'. Base bíblica Proverbios 6:5. Formación en integridad y cuidado personal."
        path="/talleres/mi-cuerpo-mi-regalo"
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(var(--navy-light))] text-primary-foreground">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="container-narrow section-padding relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3.5 py-1 mb-5 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            <span className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Clase #36 · Principio de la semana
            </span>
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-4 max-w-3xl">
            Mi cuerpo, mi regalo
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
            Una clase de formación humana para reconocer que nuestro cuerpo es un regalo de Dios que debemos cuidar, proteger y respetar.
          </p>
        </div>
      </header>

      {/* Datos clave */}
      <section className="container-narrow section-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Sparkles, label: "Clase", value: "#36" },
            { icon: Heart, label: "Principio", value: "Mi cuerpo, mi regalo" },
            { icon: BookOpen, label: "Base bíblica", value: "Proverbios 6:5" },
            { icon: Quote, label: "Frase de la semana", value: "“Yo cuido mi cuerpo”" },
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-5 shadow-sm">
              <item.icon className="h-5 w-5 text-accent mb-3" />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
              <p className="text-foreground font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {/* Historia */}
          <article className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Historia</h2>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Salmos 139:13-16</p>
            <ul className="space-y-2 text-foreground leading-relaxed">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />Dios me formó en el vientre de mi madre.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />Aún desde antes de nacer Dios ya me había visto.</li>
            </ul>
          </article>

          {/* Contenido */}
          <article className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Contenido</h2>
            </div>
            <p className="text-foreground leading-relaxed">
              El cuerpo es un regalo de Dios y debemos cuidarlo. Cada parte del cuerpo necesita cuidados diferentes. También debe explicarse que hay partes especiales y privadas del cuerpo, que no se muestran ni se dejan tocar por otras personas. Si alguien intenta tocar esas partes o hace sentir incómodo al niño, debe decir <strong>NO</strong> y contárselo a una persona de confianza.
            </p>
          </article>

          {/* Actividad */}
          <article className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Actividad</h2>
            </div>
            <p className="text-foreground leading-relaxed">
              Usar una caja de regalo para explicar que cada niño es especial y único. Comparar el cuerpo con un regalo que debe cuidarse, protegerse y mantenerse seguro.
            </p>
          </article>

          {/* Observaciones */}
          <article className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Observaciones</h2>
            </div>
            <p className="text-foreground leading-relaxed">
              Relacionar la base bíblica con la historia: Dios nos creó y nos cuida desde antes de nacer. Si alguien quiere tocar o jugar con nuestras partes especiales, debemos decir <strong>NO</strong>, alejarnos y contarlo a alguien que pueda cuidarnos.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default TallerMiCuerpoMiRegalo;
