import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Admisiones", href: "/admisiones" },
  { label: "Primaria", href: "/primaria" },
  { label: "Preescolar", href: "/preescolar" },
  { label: "Secundaria", href: "/secundaria" },
  { label: "Preparatoria", href: "/preparatoria" },
  { label: "Vida Escolar", href: "/vida-escolar" },
  { label: "Contacto", href: "/contacto" },
];

const WHATSAPP_URL = "https://wa.me/526622189696?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informes%20sobre%20el%20INAM.";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container-narrow flex items-center justify-between py-1.5 px-4 text-sm">
          <span>Periférico Pte. 98, Col. Palmar del Sol, Hermosillo, Sonora</span>
          <div className="flex items-center gap-4">
            <a href="tel:+526622189696" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              (662) 218 96 96
            </a>
            <a href="mailto:hola@inam.edu.mx" className="hover:text-accent transition-colors">
              hola@inam.edu.mx
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-narrow flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-primary">
            INAM
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground leading-tight">
            Instituto Anglo<br />Mexicano
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-accent bg-accent/10"
                  : "text-foreground/80 hover:text-accent hover:bg-accent/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button variant="cta" size="sm" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Solicitar informes
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="flex flex-col py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <Button variant="cta" className="w-full" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Solicitar informes por WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
