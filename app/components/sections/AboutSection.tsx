import Image from "next/image";

interface MissionPointProps {
  icon: string;
  text: string;
}

const MissionPoint = ({ icon, text }: MissionPointProps) => (
  <div className="mission-point">
    <div className="point-icon" role="img" aria-label={`Icon: ${icon}`}>
      {icon}
    </div>
    <div className="point-text">{text}</div>
  </div>
);

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

const ImageCard = ({ src, alt, caption, description }: ImageCardProps) => (
  <div className="image-card">
    <Image
      src={src}
      alt={alt}
      className="program-image"
      width={800}
      height={600}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="image-overlay">
      <div className="image-caption">{caption}</div>
      <div className="image-description">{description}</div>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-intro">
          <h2 className="section-title">About TEEM Foundation</h2>
          <p className="section-subtitle">
            Registered with the NGO Board in Kenya, dedicated to empowering
            adolescent girls and boys across the country.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3 className="about-heading">Our Mission</h3>
            <p className="about-paragraph">
              We focus on addressing barriers including sexual exploitation,
              unplanned teenage pregnancies, and challenges to accessing
              education. At TEEM, we believe in inclusivity and involving both
              girls and boys in our programs.
            </p>
            <p className="about-paragraph">
              We work together to break cycles of poverty, early pregnancies,
              and lack of education through various initiatives that create a
              supportive, informed, and empowered generation of youth.
            </p>
            <div className="mission-points">
              <MissionPoint
                icon="🎯"
                text="Targeted interventions for at-risk youth"
              />
              <MissionPoint
                icon="🤝"
                text="Inclusive programs for girls and boys"
              />
              <MissionPoint
                icon="📚"
                text="Education and life skills development"
              />
            </div>
          </div>
          <div className="about-visual">
            <div className="about-card">
              <div className="card-number">500+</div>
              <div className="card-title">Young Lives Changed</div>
              <div className="card-description">
                Through our Wendano Programme and other initiatives
              </div>
            </div>
          </div>
        </div>

        <div className="image-grid">
          <ImageCard
            src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-21.56.37-797bc2?format=webp&width=800"
            alt="TEEM Foundation leaders and community members at an outreach event"
            caption="Community Leadership"
            description="Working with local leaders to create lasting change"
          />
          <ImageCard
            src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-21.56.36-399dcb?format=webp&width=800"
            alt="Sanitary towel distribution ceremony with young girls receiving essential hygiene supplies"
            caption="Essential Support"
            description="Providing sanitary towels and hygiene education"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
