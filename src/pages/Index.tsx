import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import LevelCard from "@/components/LevelCard";
import ContactForm from "@/components/ContactForm";
import PrincipioSemana from "@/components/PrincipioSemana";
import { Link } from "react-router-dom";
import { GraduationCap, Heart, Users, Globe, BookOpen, Trophy } from "lucide-react";

import heroCampus from "@/assets/hero-campus.jpg";
import heroPrimary from "@/assets/hero-primary.jpg";
import preescolarImg from "@/assets/preescolar.jpg";
import secundariaImg from "@/assets/secundaria.jpg";
import preparatoriaImg from "@/assets/preparatoria.jpg";
import vidaEscolarImg from "@/assets/vida-escolar.jpg";

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informes%20sobre%20el%20INAM.";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="INAM Hermosillo | Instituto Anglo Mexicano - Preescolar a Preparatoria"
        description="Escuela privada en Hermosillo, Sonora. Preescolar, Primaria, Secundaria y Preparatoria con formación integral, valores y liderazgo. Solicite informes."
        path="/"
      />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCampus} alt="Campus INAM Hermosillo" className="h-full w-full object-cover" width={1920} height={1080} fetchPriority="high" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-narrow section-padding text-primary-foreground">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Instituto Anglo Mexicano: formamos personas con valores y liderazgo
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              En el INAM, escuela privada en Hermosillo, Sonora, trabajamos para que cada alumno desarrolle lo mejor de sí. Una educación integral desde preescolar hasta preparatoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Solicitar informes
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/admisiones">Proceso de admisión</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Niveles */}
      <section className="section-padding bg-gray-warm">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Nuestros niveles educativos</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Acompañamos a su hijo desde los primeros años hasta su preparación para la universidad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <LevelCard
              title="Preescolar"
              description="Aprendizaje a través del juego, la creatividad y el descubrimiento."
              image={preescolarImg}
              href="/preescolar"
            />
            <LevelCard
              title="Primaria"
              description="Hábitos, pensamiento crítico, valores y formación integral."
              image={heroPrimary}
              href="/primaria"
              highlight
            />
            <LevelCard
              title="Secundaria"
              description="Consolidación académica y desarrollo personal."
              image={secundariaImg}
              href="/secundaria"
            />
            <LevelCard
              title="Preparatoria"
              description="Preparación sólida para la universidad y la vida."
              image={preparatoriaImg}
              href="/preparatoria"
            />
          </div>
        </div>
      </section>

      {/* Primaria Destacado */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-accent">Nivel destacado</span>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">Primaria INAM</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Nos enfocamos en construir bases sólidas: hábitos de estudio, comprensión lectora, pensamiento matemático y convivencia respetuosa.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Hábitos de estudio y organización desde los primeros grados",
                  "Programa de lectura y comprensión de textos",
                  "Pensamiento lógico-matemático aplicado",
                  "Formación en valores y convivencia",
                  "Enfoque multicultural e idiomas",
                  "Actividades deportivas, artísticas y culturales",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" asChild>
                <Link to="/primaria">Conozca más sobre Primaria</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={heroPrimary} alt="Alumnos de Primaria INAM" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-3">Valores y liderazgo</h2>
            <p className="text-primary-foreground/75 max-w-xl mx-auto">
              Buscamos formar personas íntegras, preparadas para los retos del mundo actual.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Valores sólidos", desc: "Respeto, honestidad, responsabilidad y empatía en cada actividad." },
              { icon: GraduationCap, title: "Excelencia académica", desc: "Programas actualizados que buscan el desarrollo integral del alumno." },
              { icon: Users, title: "Liderazgo", desc: "Fomentamos la toma de decisiones, el trabajo en equipo y la iniciativa." },
              { icon: Globe, title: "Visión multicultural", desc: "Preparamos alumnos para un mundo diverso y conectado." },
              { icon: BookOpen, title: "Formación continua", desc: "Docentes capacitados y comprometidos con la mejora constante." },
              { icon: Trophy, title: "Desarrollo integral", desc: "Deportes, arte y cultura como parte esencial de la formación." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <item.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vida escolar gallery */}
      <section className="section-padding bg-gray-warm">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Vida escolar</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Eventos, deportes, cultura y más: la experiencia completa INAM.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[heroPrimary, vidaEscolarImg, secundariaImg, preparatoriaImg, preescolarImg, heroCampus].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={img} alt={`Vida escolar INAM ${i + 1}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/vida-escolar">Ver más de la vida escolar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Lo que dicen nuestras familias</h2>
            <p className="text-sm text-muted-foreground">Experiencias compartidas por familias de la comunidad INAM.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "En el INAM nuestros hijos han encontrado un ambiente cálido y exigente a la vez. Los maestros realmente conocen a cada alumno y los acompañan en su crecimiento.",
                family: "Familia González",
                level: "Primaria y Secundaria",
              },
              {
                quote: "Lo que más valoramos es la formación en valores. Vemos a nuestra hija más segura, responsable y feliz en la escuela. La recomendamos sin dudarlo.",
                family: "Familia Ramírez",
                level: "Preescolar",
              },
              {
                quote: "El nivel académico y el seguimiento personal del INAM prepararon a nuestro hijo para entrar a la universidad con confianza y herramientas reales.",
                family: "Familia Ortega",
                level: "Preparatoria",
              },
            ].map((t, i) => (
              <div key={i} className="bg-secondary rounded-lg p-6 border border-border">
                <p className="text-foreground italic mb-4 text-sm leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.family}</p>
                  <p className="text-xs text-muted-foreground">{t.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Ubicación y Contacto */}
      <section className="section-padding bg-gray-warm" id="contacto">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Ubíquenos</h2>
              <p className="text-muted-foreground mb-6">
                Periférico Pte. 98, Col. Palmar del Sol, Hermosillo, Sonora, México.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.5!2d-110.98!3d29.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA0JzEyLjAiTiAxMTDCsDU4JzQ4LjAiVw!5e0!3m2!1ses!2smx!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación INAM Hermosillo"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Solicite informes</h2>
              <p className="text-muted-foreground mb-6">
                Llene el formulario y nos pondremos en contacto con usted a la brevedad.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </Layout>
  );
};

export default Index;
