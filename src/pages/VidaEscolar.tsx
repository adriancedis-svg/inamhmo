import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroPrimary from "@/assets/hero-primary.jpg";
import vidaEscolarImg from "@/assets/vida-escolar.jpg";
import secundariaImg from "@/assets/secundaria.jpg";
import preparatoriaImg from "@/assets/preparatoria.jpg";
import preescolarImg from "@/assets/preescolar.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const images = [
  { src: vidaEscolarImg, alt: "Deportes - Vida escolar INAM", caption: "Deportes y actividad física" },
  { src: heroPrimary, alt: "Aula - Vida escolar INAM", caption: "Aprendizaje en el aula" },
  { src: preescolarImg, alt: "Arte - Vida escolar INAM", caption: "Expresión artística" },
  { src: secundariaImg, alt: "Laboratorio - Vida escolar INAM", caption: "Laboratorio de ciencias" },
  { src: preparatoriaImg, alt: "Graduación - Vida escolar INAM", caption: "Ceremonias y graduaciones" },
  { src: heroCampus, alt: "Campus - Vida escolar INAM", caption: "Nuestras instalaciones" },
];

const VidaEscolar = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-accent">Vida Escolar</span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Vida escolar INAM: más que clases, una experiencia completa</h1>
          <p className="text-lg text-primary-foreground/85">
            Eventos, deportes, cultura y comunidad. La vida en el INAM va más allá del aula.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="group rounded-lg overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Avisos / Boletines */}
    <section className="section-padding bg-gray-warm">
      <div className="container-narrow max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Avisos y boletines</h2>
        <div className="bg-card rounded-lg border border-border p-8">
          <p className="text-foreground">
            En el INAM mantenemos a las familias informadas sobre eventos académicos, deportivos y culturales: ceremonias cívicas, festivales artísticos, torneos deportivos internos, semanas culturales, salidas educativas y reuniones de padres. Cada nivel cuenta con un canal de comunicación directo con coordinación académica para compartir avisos y boletines mensuales.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container-narrow max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Quiere ser parte de nuestra comunidad?</h2>
        <p className="text-primary-foreground/75 mb-8">Conozca el INAM de cerca y viva la experiencia.</p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/admisiones">Iniciar proceso de admisión</Link>
        </Button>
      </div>
    </section>

    <div className="h-16 md:hidden" />
  </Layout>
);

export default VidaEscolar;
