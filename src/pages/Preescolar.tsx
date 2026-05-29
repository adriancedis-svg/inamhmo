import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import preescolarImg from "@/assets/preescolar.jpg";

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informes%20sobre%20Preescolar%20INAM.";

const faq = [
  { question: "¿A partir de qué edad pueden ingresar los niños?", answer: "Los detalles sobre las edades de ingreso se confirman directamente con el área de admisiones según el grado de preescolar." },
  { question: "¿Cuál es el horario de preescolar?", answer: "Los horarios se confirman al contactar al área de admisiones. Contáctenos por WhatsApp o teléfono para más información." },
  { question: "¿Qué metodología utilizan?", answer: "Trabajamos con un enfoque lúdico y vivencial que promueve el aprendizaje a través del juego, la creatividad y el descubrimiento." },
  { question: "¿Cómo es el periodo de adaptación?", answer: "Acompañamos a cada niño y a su familia durante el proceso de adaptación, con atención personalizada y comunicación constante." },
];

const Preescolar = () => (
  <Layout>
    <SEO title="Preescolar INAM Hermosillo | Educación inicial con juego y descubrimiento" description="Preescolar en el Instituto Anglo Mexicano (INAM), Hermosillo. Aprendizaje a través del juego, la creatividad y el desarrollo socioemocional." path="/preescolar" />
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={preescolarImg} alt="Preescolar INAM" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative container-narrow section-padding text-primary-foreground">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-accent">Preescolar</span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Preescolar INAM: los primeros pasos, los más importantes</h1>
          <p className="text-lg text-primary-foreground/85 mb-8">
            En Preescolar INAM fomentamos la curiosidad, la creatividad y los primeros hábitos de convivencia en un ambiente seguro y estimulante.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Solicitar informes</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/admisiones">Proceso de admisión</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">Nuestra propuesta en Preescolar</h2>
        <div className="space-y-4">
          {[
            { title: "Aprendizaje a través del juego", desc: "Actividades lúdicas que estimulan el desarrollo cognitivo, motor y emocional." },
            { title: "Primeros hábitos", desc: "Fomentamos la autonomía, el orden y la responsabilidad desde edades tempranas." },
            { title: "Convivencia y valores", desc: "Respeto, empatía y trabajo en equipo en un ambiente seguro." },
            { title: "Estimulación creativa", desc: "Arte, música y expresión corporal como parte del programa." },
          ].map((item, i) => (
            <div key={i} className="p-5 border border-border rounded-lg bg-card">
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-gray-warm">
      <div className="container-narrow max-w-3xl">
        <FAQSection title="Preguntas frecuentes sobre Preescolar" items={faq} />
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container-narrow max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Desea conocer nuestro Preescolar?</h2>
        <p className="text-primary-foreground/75 mb-8">Agende una visita y conozca el ambiente donde su hijo comenzará su camino educativo.</p>
        <Button variant="hero" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar cita por WhatsApp</a>
        </Button>
      </div>
    </section>

    <div className="h-16 md:hidden" />
  </Layout>
);

export default Preescolar;
