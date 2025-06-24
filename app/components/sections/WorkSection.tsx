import SectionIntro from "../ui/SectionIntro";

interface WorkCardProps {
  icon: string;
  title: string;
  description: string;
}

const WorkCard = ({ icon, title, description }: WorkCardProps) => (
  <article className="work-card">
    <div className="work-icon" role="img" aria-label={`Icon: ${icon}`}>
      {icon}
    </div>
    <h3 className="work-title">{title}</h3>
    <p className="work-description">{description}</p>
  </article>
);

const WorkSection = () => {
  const workItems = [
    {
      icon: "👥",
      title: "Mutual Aid Groups",
      description:
        "Encouraging young people to come together and support each other through peer networks and community building.",
    },
    {
      icon: "🧠",
      title: "Life Skills Training",
      description:
        "Age-appropriate education focusing on communication, decision-making, and self-care skills.",
    },
    {
      icon: "🌟",
      title: "Mentorship Programs",
      description:
        "Pairing youth with role models who provide guidance and inspire positive growth and development.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Parenting Workshops",
      description:
        "Helping parents understand how to better support and guide their children in today's world.",
    },
  ];

  return (
    <section id="our-work" className="work-section">
      <div className="container">
        <SectionIntro
          title="Our Work"
          subtitle="Direct support for young people across Kenya to overcome personal and academic challenges."
        />

        <div className="work-grid">
          {workItems.map((item, index) => (
            <WorkCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
