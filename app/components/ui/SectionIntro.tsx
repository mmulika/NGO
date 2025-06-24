interface SectionIntroProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionIntro = ({
  title,
  subtitle,
  className = "",
}: SectionIntroProps) => {
  return (
    <div className={`section-intro ${className}`}>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
};

export default SectionIntro;
