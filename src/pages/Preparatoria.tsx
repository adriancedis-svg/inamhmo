import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import preparatoriaImg from "@/assets/preparatoria.jpg";

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informes%20sobre%20Preparatoria%20INAM.";

const faq = [
  { question: "¿Qué plan de estudios tiene la Preparatoria?", answer: "El plan de estudios se confirma directamente con el área de admisiones. Contáctenos para conocer la oferta académica vigente." },
  { question: "¿Preparan para el examen de admisión a universidades?", answer: "Sí, trabajamos en la preparación académica y vocacional que facilita el ingreso a instituciones de educación superior." },
  { question: "¿Hay actividades extracurriculares en Preparatoria?", answer: "Ofrecemos actividades deportivas, culturales y de servicio social como parte de la formación integral." },
  { question: "¿Cuál es el horario de Preparatoria?", answer: "El horario se confirma con el área de admisiones. Contáctenos para más detalles." },
];

const Preparatoria = () => (
  <Layout>
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={preparatoriaImg} alt="Preparatoria INAM" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      <div className="relative container-narrow section-padding text-primary-foreground">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-accent">Preparatoria</span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Preparatoria INAM: preparación sólida para la universidad y la vida</h1>
          <p className="text-lg text-primary-foreground/85 mb-8">
            En Preparatoria INAM formamos jóvenes con las herramientas académicas, personales y sociales para enfrentar con éxito su futuro.
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
        <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">Nuestra propuesta en Preparatoria</h2>
        <div className="space-y-4">
          {[
            { title: "Preparación universitaria", desc: "Programas académicos que facilitan el ingreso y desempeño en las mejores universidades." },
            { title: "Orientación vocacional", desc: "Acompañamiento personalizado para que los jóvenes tomen decisiones informadas sobre su futuro." },
            { title: "Liderazgo y servicio", desc: "Formación en habilidades de liderazgo, trabajo en equipo y compromiso social." },
            { title: "Visión global", desc: "Preparación para un mundo conectado y diverso, con énfasis en idiomas y cultura." },
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
        <FAQSection title="Preguntas frecuentes sobre Preparatoria" items={faq} />
      </div>
    </section>

    <section className="section-padding bg-primary text-primary-foreground text-center">
      <div className="container-narrow max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Listo para el siguiente paso?</h2>
        <p className="text-primary-foreground/75 mb-8">Conozca nuestra Preparatoria y la formación que abrirá puertas a su futuro.</p>
        <Button variant="hero" size="lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar cita por WhatsApp</a>
        </Button>
      </div>
    </section>

    <div className="h-16 md:hidden" />
  </Layout>
);

export default Preparatoria;
