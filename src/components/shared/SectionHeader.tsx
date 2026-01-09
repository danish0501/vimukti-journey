interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ subtitle, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}>
      {subtitle && (
        <p className="text-sm font-sans font-medium text-primary tracking-widest uppercase mb-3 animate-fade-in-up">
          {subtitle}
        </p>
      )}
      <h2 className="zen-heading-2 text-foreground mb-4 animate-fade-in-up animation-delay-100">
        {title}
      </h2>
      {description && (
        <p className="zen-body animate-fade-in-up animation-delay-200">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
