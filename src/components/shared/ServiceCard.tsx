import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, link = "/services", delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="zen-card group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-sage-light rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-serif font-medium text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      <Link
        to={link}
        className="zen-link text-sm font-medium group-hover:gap-2 transition-all duration-200"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
