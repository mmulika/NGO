import SectionIntro from "../ui/SectionIntro";

interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  impact: string;
}

const ProjectCard = ({
  icon,
  title,
  description,
  impact,
}: ProjectCardProps) => (
  <article className="project-card">
    <div className="project-header">
      <div className="project-icon" role="img" aria-label={`Icon: ${icon}`}>
        {icon}
      </div>
      <h3 className="project-title">{title}</h3>
    </div>
    <p className="project-description">{description}</p>
    <div className="project-impact">{impact}</div>
  </article>
);

const ProjectsSection = () => {
  const projects = [
    {
      icon: "🎓",
      title: "Education & Awareness Campaigns",
      description:
        "Community outreach educating youth about sexual health, teenage pregnancies, and the importance of education.",
      impact: "Breaking down taboos through open discussions",
    },
    {
      icon: "🏥",
      title: "Sanitary Towel Distribution",
      description:
        "Providing sanitary towels and essential hygiene items to girls who cannot afford them, ensuring uninterrupted school attendance.",
      impact: "Supporting girls' health and education",
    },
    {
      icon: "🛠️",
      title: "Skills Development Workshops",
      description:
        "Regular workshops focusing on practical life skills including cooking, cleaning, gardening, and financial literacy.",
      impact: "Preparing youth for future employment",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionIntro
          title="Our Projects"
          subtitle="Impactful initiatives designed to empower teenage girls and boys across Kenya."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              impact={project.impact}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
