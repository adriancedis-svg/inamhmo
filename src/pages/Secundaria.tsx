import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import secundariaImg from "@/assets/secundaria.jpg";

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informes%20sobre%20Secundaria%20INAM.";

const faq = [
  { question: "¿Qué programas académicos ofrece la Secundaria?", answer: "Nuestro programa se enfoca en la consolidación académica, con materias clave como ciencias, matemáticas, español e inglés, además de actividades complementarias." },
  { question: "¿Hay actividades extracurriculares?", answer: "Sí, ofrecemos deportes, actividades artísticas y programas de desarrollo personal. La oferta puede variar cada ciclo." },
  { question: "¿Cómo preparan a los alumnos para Preparatoria?", answer: "A través de orientación vocacional, hábitos de estudio avanzados y un programa académico riguroso que facilita la transición." },
  { question: "¿Cuál es el horario de Secundaria?", answer: "El horario se confirma directamente con admisiones. Contáctenos para más detalles." },
];

const Secundaria = () => (
  <Layout>
    <SEO title="Secundaria INAM Hermosillo | Formación académica y personal" description="Secundaria en el Instituto Anglo Mexicano (INAM), Hermosillo. Consolidación académica, liderazgo y formación integral en valores." path="/secundaria" />
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={secundariaImg} alt="Secundaria INAM" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative container-narrow section-padding text-primary-foreground">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-accent">Secundaria</span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Secundaria INAM: consolidar el conocimiento, fortalecer el carácter</h1>
          <p className="text-lg text-primary-foreground/85 mb-8">
            En Secundaria INAM los alumnos profundizan su formación académica mientras desarrollan habilidades de liderazgo y pensamiento crítico.
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
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">Nuestra propuesta en Secundaria</h2>
        <div className="space-y-4">
          {[
            { title: "Consolidación académica", desc: "Programas rigurosos en ciencias, matemáticas, español e idiomas." },
            { title: "Pensamiento crítico", desc: "Proyectos y actividades que desarrollan la capacidad de análisis y argumentación." },
            { title: "Orientación vocacional", desc: "Acompañamiento para que los alumnos identifiquen sus intereses y fortalezas." },
            { title: "Desarrollo personal", desc: "Formación en valores, liderazgo y habilidades socioemocionales." },
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
        <FAQSection title="Preguntas frecuentes sobre Secundaria" items={faq} />
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container-narrow max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Le interesa nuestra Secundaria?</h2>
        <p className="text-primary-foreground/75 mb-8">Conozca la propuesta académica que prepara a su hijo para los siguientes retos.</p>
        <Button variant="hero" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar cita por WhatsApp</a>
        </Button>
      </div>
    </section>

    <div className="h-16 md:hidden" />
  </Layout>
);

export default Secundaria;
