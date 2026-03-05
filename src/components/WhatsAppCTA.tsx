import { MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informes%20sobre%20el%20INAM.";

const WhatsAppCTA = () => {
  const trackWhatsApp = () => {
    const w = window as unknown as Record<string, unknown>;
    if (typeof w.gtag === "function") {
      (w.gtag as Function)("event", "whatsapp_click", { event_category: "conversion" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6 md:w-auto">
      {/* Mobile sticky bar */}
      <div className="flex md:hidden border-t border-border bg-background shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsApp}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[hsl(142,70%,40%)] text-primary-foreground font-bold text-sm"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href="/admisiones"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-bold text-sm"
        >
          <CalendarCheck className="h-5 w-5" />
          Agendar cita
        </a>
      </div>

      {/* Desktop floating button */}
      <div className="hidden md:block">
        <Button variant="whatsapp" size="lg" className="rounded-full shadow-2xl px-6" asChild>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsApp}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default WhatsAppCTA;
