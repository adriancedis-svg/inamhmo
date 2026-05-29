import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { FileText, CalendarCheck, ClipboardList, CheckCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20iniciar%20el%20proceso%20de%20admisi%C3%B3n%20en%20el%20INAM.";

const steps = [
  { icon: FileText, title: "1. Solicite informes", desc: "Contáctenos por WhatsApp, teléfono o formulario para conocer nuestra oferta educativa." },
  { icon: CalendarCheck, title: "2. Agende una visita", desc: "Visite nuestras instalaciones, conozca al equipo docente y resuelva todas sus dudas." },
  { icon: ClipboardList, title: "3. Entregue documentación", desc: "Presente los documentos requeridos para formalizar el proceso. Le indicaremos los requisitos según el nivel." },
  { icon: CheckCircle, title: "4. Formalice la inscripción", desc: "Complete el proceso y dé la bienvenida a su hijo a la comunidad INAM." },
];

const admisionFAQ = [
  { question: "¿Cuándo puedo iniciar el proceso de admisión?", answer: "El proceso de admisión está abierto durante todo el año. Le recomendamos contactarnos con anticipación para asegurar disponibilidad en el nivel de su interés." },
  { question: "¿Qué documentos necesito?", answer: "Los requisitos varían según el nivel educativo. Al contactarnos, le proporcionaremos la lista completa de documentos necesarios para el grado que le interesa." },
  { question: "¿Puedo inscribir a mi hijo en cualquier momento del ciclo escolar?", answer: "Dependiendo de la disponibilidad de espacios, es posible realizar inscripciones durante el ciclo escolar. Contáctenos para verificar disponibilidad." },
  { question: "¿Ofrecen becas o planes de pago?", answer: "Para información sobre esquemas de pago y programas de apoyo, le invitamos a comunicarse directamente con el área de admisiones." },
  { question: "¿Cómo puedo agendar una visita al campus?", answer: "Puede agendar su visita por WhatsApp, teléfono (662) 218 96 96 o a través del formulario en esta página. Le confirmaremos fecha y horario disponibles." },
  { question: "¿Cuál es el horario de atención para admisiones?", answer: "Horario de atención: confirmar por WhatsApp o al teléfono (662) 218 96 96." },
];

const Admisiones = () => {
  return (
    <Layout>
    <SEO title="Admisiones INAM Hermosillo | Proceso de admisión paso a paso" description="Conozca el proceso de admisión al Instituto Anglo Mexicano (INAM) en Hermosillo, Sonora. Solicite informes, agende su cita y reciba acompañamiento personalizado." path="/admisiones" />
      {/* Hero */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-narrow">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-accent">Admisiones</span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">
              Admisiones INAM: inicie el camino hacia una educación integral
            </h1>
            <p className="text-lg text-primary-foreground/85 mb-8 leading-relaxed">
              El proceso de admisión al INAM es sencillo y personalizado. Estamos aquí para acompañarle en cada paso.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Iniciar proceso por WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Proceso en 4 pasos */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-10 text-center">Proceso de admisión en 4 pasos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 mb-4">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos generales */}
      <section className="section-padding bg-gray-warm">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Requisitos generales</h2>
          <div className="bg-card rounded-lg border border-border p-6 md:p-8">
            <p className="text-muted-foreground mb-4">Los documentos específicos varían según el nivel educativo. De manera general, se solicita:</p>
            <ul className="space-y-2">
              {[
                "Acta de nacimiento del alumno",
                "CURP del alumno",
                "Boleta de calificaciones del ciclo anterior (si aplica)",
                "Carta de buena conducta de la escuela de procedencia (si aplica)",
                "Identificación oficial del padre, madre o tutor",
                "Comprobante de domicilio reciente",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4 italic">
              * La lista completa de requisitos se confirma al contactar al área de admisiones según el nivel y grado de interés.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <FAQSection title="Preguntas frecuentes sobre admisiones" items={admisionFAQ} />
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="section-padding bg-gray-warm">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contáctenos</h2>
              <p className="text-muted-foreground mb-6">
                Llene el formulario y nuestro equipo de admisiones se pondrá en contacto con usted.
              </p>
              <ContactForm />
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-primary text-primary-foreground rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">¿Prefiere contacto directo?</h3>
                <p className="text-primary-foreground/75 mb-6">
                  Escríbanos por WhatsApp o llámenos. Estamos para atenderle.
                </p>
                <div className="space-y-3">
                  <Button variant="hero" className="w-full" size="lg" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp: Solicitar informes</a>
                  </Button>
                  <Button variant="hero-outline" className="w-full" size="lg" asChild>
                    <a href="tel:+526622189696">Llamar: (662) 218 96 96</a>
                  </Button>
                </div>
                <p className="text-xs text-primary-foreground/50 mt-4">
                  Horario de atención: confirmar por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </Layout>
  );
};

export default Admisiones;
