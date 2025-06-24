import Image from "next/image";

const FeaturedProject = () => {
  return (
    <section className="featured-project">
      <div className="container">
        <div className="featured-grid">
          <div className="featured-content">
            <div className="featured-badge">Featured Program</div>
            <h2 className="featured-title">Wendano Programme</h2>
            <p className="featured-description">
              Launched during COVID-19, supporting girls aged 13-19 from the
              Wendano community through counseling, mentorship, and life skills
              workshops.
            </p>
            <div
              className="featured-stats"
              role="region"
              aria-label="Program statistics"
            >
              <div className="featured-stat">
                <div className="stat-number">500+</div>
                <div className="stat-text">Girls Supported</div>
              </div>
              <div className="featured-stat">
                <div className="stat-number">100%</div>
                <div className="stat-text">Community Focus</div>
              </div>
            </div>
            <button
              className="featured-cta"
              aria-label="Learn more about the Wendano Programme"
            >
              Learn More About Wendano
            </button>
          </div>
          <div className="featured-visual">
            <Image
              src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.31.12-e620cc?format=webp&width=800"
              alt="Wendano Programme participants engaged in learning activities and community building"
              className="featured-image"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
