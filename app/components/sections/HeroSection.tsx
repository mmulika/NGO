import Image from "next/image";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatItemProps) => (
  <div className="stat-item">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="hero-section" role="banner">
      <div className="hero-background">
        <Image
          src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.27.54-9bc476?format=webp&width=1200"
          alt="Large group photo of TEEM Foundation program participants and community members"
          className="hero-image"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Empowering Youth
              <br />
              <span className="hero-highlight">Across Kenya</span>
            </h1>
            <p className="hero-description">
              Breaking cycles of poverty, early pregnancies, and lack of
              education through inclusive programs that empower both girls and
              boys to reach their full potential.
            </p>
            <div className="hero-actions">
              <button
                className="cta-primary"
                aria-label="Support TEEM Foundation's mission"
              >
                Support Our Mission
              </button>
              <button
                className="cta-secondary"
                aria-label="Learn more about TEEM Foundation"
              >
                Learn More
              </button>
            </div>
            <div
              className="hero-stats"
              role="region"
              aria-label="Impact statistics"
            >
              <StatItem number="500+" label="Girls Impacted" />
              <StatItem number="5" label="Regions Served" />
              <StatItem number="4" label="Key Programs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
