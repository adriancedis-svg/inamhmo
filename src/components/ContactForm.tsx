import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const w = window as unknown as Record<string, unknown>;
    if (typeof w.gtag === "function") {
      (w.gtag as Function)("event", "form_submit", { event_category: "conversion" });
    }

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("¡Gracias! Nos pondremos en contacto con usted pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          name="nombre"
          placeholder="Nombre completo"
          required
          maxLength={100}
          className="bg-background"
        />
      </div>
      <div>
        <Input
          name="telefono"
          placeholder="Teléfono"
          type="tel"
          required
          maxLength={15}
          className="bg-background"
        />
      </div>
      <div>
        <Select name="nivel" required>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Nivel de interés" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="preescolar">Preescolar</SelectItem>
            <SelectItem value="primaria">Primaria</SelectItem>
            <SelectItem value="secundaria">Secundaria</SelectItem>
            <SelectItem value="preparatoria">Preparatoria</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Textarea
          name="mensaje"
          placeholder="¿En qué podemos ayudarle? (opcional)"
          rows={3}
          maxLength={500}
          className="bg-background"
        />
      </div>
      <Button type="submit" variant="cta" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Solicitar informes"}
      </Button>
    </form>
  );
};

export default ContactForm;
