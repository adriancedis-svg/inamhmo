import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface LevelCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  highlight?: boolean;
}

const LevelCard = ({ title, description, image, href, highlight = false }: LevelCardProps) => {
  return (
    <Link
      to={href}
      className={`group relative overflow-hidden rounded-lg border transition-all hover:shadow-xl ${
        highlight
          ? "border-accent shadow-lg ring-2 ring-accent/20"
          : "border-border hover:border-accent/50"
      }`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${title} - INAM`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className={`p-5 ${highlight ? "bg-accent/5" : "bg-card"}`}>
        {highlight && (
          <span className="inline-block mb-2 text-xs font-bold uppercase tracking-wider text-accent">
            ★ Destacado
          </span>
        )}
        <h3 className="text-lg font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <span className="inline-flex items-center text-sm font-semibold text-accent group-hover:gap-2 transition-all">
          Conocer más <ArrowRight className="h-4 w-4 ml-1" />
        </span>
      </div>
    </Link>
  );
};

export default LevelCard;
