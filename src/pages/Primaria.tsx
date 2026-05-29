import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Users, Lightbulb, Heart, Palette } from "lucide-react";

import heroPrimary from "@/assets/hero-primary.jpg";
import vidaEscolarImg from "@/assets/vida-escolar.jpg";

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informes%20sobre%20Primaria%20INAM.";

const primaryFAQ = [
  { question: "¿Cuál es el horario de clases en Primaria?", answer: "El horario específico de Primaria se confirma directamente con el área de admisiones. Le invitamos a contactarnos por WhatsApp o al teléfono (662) 218 96 96 para conocer los horarios vigentes." },
  { question: "¿Qué enfoque educativo tiene la Primaria del INAM?", answer: "Nos enfocamos en la formación integral: hábitos de estudio, comprensión lectora, pensamiento lógico-matemático, valores, convivencia y un enfoque multicultural que prepara a los alumnos para un mundo diverso." },
  { question: "¿Se imparten clases en inglés?", answer: "El INAM tiene un enfoque multicultural que incluye la enseñanza del idioma inglés. Para conocer los detalles del programa bilingüe, le invitamos a solicitar informes directamente." },
  { question: "¿Qué actividades extracurriculares se ofrecen?", answer: "Ofrecemos actividades deportivas, artísticas y culturales como parte de la formación integral. Los detalles específicos pueden variar cada ciclo escolar. Contáctenos para conocer la oferta vigente." },
  { question: "¿Cómo es la comunicación entre la escuela y los padres?", answer: "Trabajamos con canales de comunicación directa entre docentes y familias, con seguimiento personalizado del avance de cada alumno. Buscamos que los padres estén siempre informados y participen activamente." },
  { question: "¿Cuál es el proceso de admisión para Primaria?", answer: "El proceso general incluye: solicitar informes, agendar una visita al campus, entregar documentación y formalizar la inscripción. Visite nuestra página de Admisiones o contáctenos para iniciar el proceso." },
  { question: "¿Cuántos alumnos hay por grupo?", answer: "Buscamos mantener grupos que permitan una atención personalizada. Para conocer el número exacto de alumnos por grupo, le invitamos a contactarnos directamente." },
];

const typicalDay = [
  { time: "Entrada", activity: "Recepción y bienvenida", icon: "🏫" },
  { time: "Mañana", activity: "Clases académicas: español, matemáticas, ciencias", icon: "📚" },
  { time: "Recreo", activity: "Actividad física, convivencia y alimentación", icon: "⚽" },
  { time: "Media mañana", activity: "Inglés y materias complementarias", icon: "🌎" },
  { time: "Tarde", activity: "Actividades artísticas, deportivas o culturales", icon: "🎨" },
  { time: "Salida", activity: "Cierre del día y entrega a familias", icon: "🏠" },
];

const Primaria = () => {
  return (
    <Layout>
    <SEO title="Primaria INAM Hermosillo | Educación primaria con valores" description="Primaria en el Instituto Anglo Mexicano (INAM), Hermosillo. Hábitos de estudio, comprensión lectora, pensamiento matemático, valores e idiomas." path="/primaria" />
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPrimary} alt="Primaria INAM" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-narrow section-padding text-primary-foreground">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-accent">Primaria</span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              Primaria INAM: bases sólidas para toda la vida
            </h1>
            <p className="text-lg text-primary-foreground/85 mb-8 leading-relaxed">
              Formación académica, valores y liderazgo. En Primaria INAM acompañamos a cada alumno en la construcción de hábitos, conocimiento y carácter.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Solicitar informes de Primaria</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/admisiones">Ver proceso de admisión</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que su hijo vive */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Lo que su hijo vive en Primaria</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Cada día en el INAM es una oportunidad para aprender, crecer y convivir. Estos son los pilares de nuestra Primaria:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Hábitos de estudio", desc: "Desde los primeros grados, fomentamos la organización, la disciplina y la responsabilidad académica." },
              { icon: Lightbulb, title: "Comprensión lectora", desc: "Programa de lectura constante para desarrollar la comprensión, el vocabulario y el gusto por leer." },
              { icon: Clock, title: "Pensamiento matemático", desc: "Trabajamos el razonamiento lógico y la resolución de problemas aplicados a la vida diaria." },
              { icon: Users, title: "Convivencia y valores", desc: "Respeto, empatía y trabajo en equipo como parte fundamental de la experiencia escolar." },
              { icon: Heart, title: "Enfoque multicultural", desc: "Preparamos a los alumnos para un entorno diverso, incluyendo la enseñanza del idioma inglés." },
              { icon: Palette, title: "Actividades integrales", desc: "Deportes, arte y cultura complementan la formación académica de cada alumno." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <item.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo acompañamos */}
      <section className="section-padding bg-gray-warm">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={vidaEscolarImg} alt="Acompañamiento en Primaria INAM" className="w-full object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-6">Cómo acompañamos a las familias</h2>
              <div className="space-y-4">
                {[
                  { title: "Comunicación constante", desc: "Canales directos entre docentes y padres de familia para un seguimiento cercano." },
                  { title: "Seguimiento personalizado", desc: "Cada alumno es acompañado en su proceso de aprendizaje con atención a sus necesidades." },
                  { title: "Participación activa", desc: "Invitamos a las familias a ser parte de la comunidad escolar a través de eventos y actividades." },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-card rounded-lg border border-border">
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Un día típico */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">Un día típico en Primaria</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Así transcurre una jornada escolar en Primaria INAM (horarios sujetos a confirmación):
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {typicalDay.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-lg border border-border bg-card">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{item.time}</span>
                  <p className="text-sm text-foreground mt-1">{item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-warm">
        <div className="container-narrow max-w-3xl">
          <FAQSection title="Preguntas frecuentes sobre Primaria" items={primaryFAQ} />
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Le gustaría conocer nuestra Primaria?</h2>
          <p className="text-primary-foreground/75 mb-8">
            Agende una visita al campus y conozca de cerca nuestra propuesta educativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Agendar cita por WhatsApp</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contacto">Enviar formulario</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </Layout>
  );
};

export default Primaria;
