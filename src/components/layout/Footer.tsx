import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-black mb-3">INAM</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Instituto Anglo Mexicano. Formación integral con valores y liderazgo en Hermosillo, Sonora.
            </p>
          </div>

          {/* Niveles */}
          <div>
            <h4 className="font-bold mb-3 text-accent">Niveles</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/preescolar" className="hover:text-accent transition-colors">Preescolar</Link></li>
              <li><Link to="/primaria" className="hover:text-accent transition-colors">Primaria</Link></li>
              <li><Link to="/secundaria" className="hover:text-accent transition-colors">Secundaria</Link></li>
              <li><Link to="/preparatoria" className="hover:text-accent transition-colors">Preparatoria</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3 text-accent">Información</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/admisiones" className="hover:text-accent transition-colors">Admisiones</Link></li>
              <li><Link to="/vida-escolar" className="hover:text-accent transition-colors">Vida Escolar</Link></li>
              <li><Link to="/contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Aviso de privacidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 text-accent">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                Periférico Pte. 98, Col. Palmar del Sol, Hermosillo, Sonora
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+526622189696" className="hover:text-accent transition-colors">(662) 218 96 96</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:hola@inam.edu.mx" className="hover:text-accent transition-colors">hola@inam.edu.mx</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Instituto Anglo Mexicano (INAM). Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
