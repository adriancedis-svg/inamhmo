import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informes%20sobre%20el%20INAM.";

const Contacto = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-narrow">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wider text-accent">Contacto</span>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-4">Estamos para atenderle</h1>
          <p className="text-lg text-primary-foreground/85">
            Contáctenos por el medio que prefiera. Con gusto resolveremos sus dudas y le brindaremos toda la información que necesite.
          </p>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Información de contacto</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-sm text-muted-foreground">Periférico Pte. 98, Col. Palmar del Sol, Hermosillo, Sonora, México</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a href="tel:+526622189696" className="text-sm text-muted-foreground hover:text-accent transition-colors">(662) 218 96 96</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Correo</p>
                  <a href="mailto:hola@inam.edu.mx" className="text-sm text-muted-foreground hover:text-accent transition-colors">hola@inam.edu.mx</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario de atención</p>
                  <p className="text-sm text-muted-foreground">Confirmar por WhatsApp o teléfono</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="whatsapp" size="lg" className="w-full sm:w-auto" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Escribir por WhatsApp</a>
              </Button>
            </div>

            <div className="mt-8 aspect-video rounded-lg overflow-hidden border border-border">
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

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Envíenos un mensaje</h2>
            <p className="text-muted-foreground mb-6">
              Complete el formulario y nuestro equipo se comunicará con usted a la brevedad.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <div className="h-16 md:hidden" />
  </Layout>
);

export default Contacto;
