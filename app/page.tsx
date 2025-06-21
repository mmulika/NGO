export default function Home() {
  return (
    <main className="main-container">
      {/* Navigation Header */}
      <nav className="navigation-header">
        <div className="nav-container">
          <div className="logo-section">
            <div className="logo-circle">T</div>
            <span className="logo-text">TEEM Foundation</span>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#our-work" className="nav-link">
              Our Work
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#get-involved" className="nav-link">
              Get Involved
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <button className="donate-btn">Donate Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.05.31-1-b68eff?format=webp&width=1200"
            alt="TEEM Foundation community gathering showing diverse group of participants"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
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
                <button className="cta-primary">Support Our Mission</button>
                <button className="cta-secondary">Learn More</button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Girls Impacted</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Regions Served</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Key Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="impact-banner">
        <div className="container">
          <div className="impact-content">
            <h2 className="impact-title">
              Creating lasting change in communities across Kenya
            </h2>
            <p className="impact-description">
              Through education, mentorship, and community support, we're
              building a future where every young person can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                <div className="mission-point">
                  <div className="point-icon">🎯</div>
                  <div className="point-text">
                    Targeted interventions for at-risk youth
                  </div>
                </div>
                <div className="mission-point">
                  <div className="point-icon">🤝</div>
                  <div className="point-text">
                    Inclusive programs for girls and boys
                  </div>
                </div>
                <div className="mission-point">
                  <div className="point-icon">📚</div>
                  <div className="point-text">
                    Education and life skills development
                  </div>
                </div>
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
            <div className="image-card">
              <img
                src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-21.56.37-797bc2?format=webp&width=800"
                alt="TEEM Foundation leaders and community members at an outreach event"
                className="program-image"
              />
              <div className="image-overlay">
                <div className="image-caption">Community Leadership</div>
                <div className="image-description">
                  Working with local leaders to create lasting change
                </div>
              </div>
            </div>
            <div className="image-card">
              <img
                src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-21.56.36-399dcb?format=webp&width=800"
                alt="Sanitary towel distribution ceremony with young girls receiving essential hygiene supplies"
                className="program-image"
              />
              <div className="image-overlay">
                <div className="image-caption">Essential Support</div>
                <div className="image-description">
                  Providing sanitary towels and hygiene education
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Our Impact in Action</h2>
            <p className="section-subtitle">
              See how we're making a real difference in communities across Kenya
              through our programs and initiatives.
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-21.56.37-1-4d7fb5?format=webp&width=800"
                alt="Sanitary towel distribution event with community participation and support"
                className="gallery-image"
              />
              <div className="gallery-content">
                <h3 className="gallery-title">Hygiene Support Program</h3>
                <p className="gallery-description">
                  Distributing sanitary towels and hygiene supplies to ensure
                  girls can attend school without interruption during their
                  menstrual cycles.
                </p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.05.31-8fb7db?format=webp&width=800"
                alt="Outdoor community training session with participants engaged in learning"
                className="gallery-image"
              />
              <div className="gallery-content">
                <h3 className="gallery-title">Community Training Sessions</h3>
                <p className="gallery-description">
                  Conducting life skills workshops in natural settings that
                  encourage open dialogue and peer-to-peer learning.
                </p>
              </div>
            </div>

            <div className="gallery-item">
              <img
                src="https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.27.54-9bc476?format=webp&width=800"
                alt="Large group photo of TEEM Foundation program participants and facilitators"
                className="gallery-image"
              />
              <div className="gallery-content">
                <h3 className="gallery-title">Growing Community</h3>
                <p className="gallery-description">
                  Our programs bring together diverse groups of young people,
                  creating supportive networks that extend beyond our sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="our-work" className="work-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Our Work</h2>
            <p className="section-subtitle">
              Direct support for young people across Kenya to overcome personal
              and academic challenges.
            </p>
          </div>

          <div className="work-grid">
            <div className="work-card">
              <div className="work-icon">👥</div>
              <h3 className="work-title">Mutual Aid Groups</h3>
              <p className="work-description">
                Encouraging young people to come together and support each other
                through peer networks and community building.
              </p>
            </div>
            <div className="work-card">
              <div className="work-icon">🧠</div>
              <h3 className="work-title">Life Skills Training</h3>
              <p className="work-description">
                Age-appropriate education focusing on communication,
                decision-making, and self-care skills.
              </p>
            </div>
            <div className="work-card">
              <div className="work-icon">🌟</div>
              <h3 className="work-title">Mentorship Programs</h3>
              <p className="work-description">
                Pairing youth with role models who provide guidance and inspire
                positive growth and development.
              </p>
            </div>
            <div className="work-card">
              <div className="work-icon">👨‍👩‍👧‍👦</div>
              <h3 className="work-title">Parenting Workshops</h3>
              <p className="work-description">
                Helping parents understand how to better support and guide their
                children in today's world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="featured-project">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-content">
              <div className="featured-badge">Featured Program</div>
              <h2 className="featured-title">Wendano Programme</h2>
              <p className="featured-description">
                Launched during COVID-19, supporting girls aged 13-19 from the
                Wendano community through counseling, mentorship, and life
                skills workshops.
              </p>
              <div className="featured-stats">
                <div className="featured-stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-text">Girls Supported</div>
                </div>
                <div className="featured-stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-text">Community Focus</div>
                </div>
              </div>
              <button className="featured-cta">Learn More About Wendano</button>
            </div>
            <div className="featured-visual">
              <div className="featured-image-placeholder">
                <div className="placeholder-icon">📚</div>
                <div className="placeholder-text">Wendano Programme Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">
              Impactful initiatives designed to empower teenage girls and boys
              across Kenya.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🎓</div>
                <h3 className="project-title">
                  Education & Awareness Campaigns
                </h3>
              </div>
              <p className="project-description">
                Community outreach educating youth about sexual health, teenage
                pregnancies, and the importance of education.
              </p>
              <div className="project-impact">
                Breaking down taboos through open discussions
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🏥</div>
                <h3 className="project-title">Sanitary Towel Distribution</h3>
              </div>
              <p className="project-description">
                Providing sanitary towels and essential hygiene items to girls
                who cannot afford them, ensuring uninterrupted school
                attendance.
              </p>
              <div className="project-impact">
                Supporting girls' health and education
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-icon">🛠️</div>
                <h3 className="project-title">Skills Development Workshops</h3>
              </div>
              <p className="project-description">
                Regular workshops focusing on practical life skills including
                cooking, cleaning, gardening, and financial literacy.
              </p>
              <div className="project-impact">
                Preparing youth for future employment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="get-involved-section">
        <div className="container">
          <div className="get-involved-content">
            <h2 className="section-title">Join Our Mission</h2>
            <p className="section-subtitle">
              Your support creates lasting change for young people across Kenya
            </p>

            <div className="involvement-grid">
              <div className="involvement-card">
                <div className="involvement-icon">💝</div>
                <h3 className="involvement-title">Donate</h3>
                <p className="involvement-description">
                  Support awareness campaigns, education advocacy, and essential
                  resources for vulnerable youth.
                </p>
                <button className="involvement-cta">Donate Now</button>
              </div>

              <div className="involvement-card">
                <div className="involvement-icon">🤝</div>
                <h3 className="involvement-title">Partner</h3>
                <p className="involvement-description">
                  Join our network of partners working together to create
                  greater impact across Kenya.
                </p>
                <button className="involvement-cta">Become a Partner</button>
              </div>

              <div className="involvement-card">
                <div className="involvement-icon">📢</div>
                <h3 className="involvement-title">Spread Awareness</h3>
                <p className="involvement-description">
                  Help us reach more communities by sharing our mission and
                  impact stories.
                </p>
                <button className="involvement-cta">Learn More</button>
              </div>
            </div>

            <div className="donation-methods">
              <h3 className="methods-title">Ways to Support</h3>
              <div className="methods-grid">
                <div className="method-item">
                  <strong>Bank Transfers</strong>
                  <span>Details available upon request</span>
                </div>
                <div className="method-item">
                  <strong>Online Donations</strong>
                  <span>Secure online platform</span>
                </div>
                <div className="method-item">
                  <strong>In-kind Donations</strong>
                  <span>Sanitary towels, supplies, hygiene products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Operation */}
      <section className="areas-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Where We Work</h2>
            <p className="section-subtitle">
              Operating across multiple regions in Kenya, focusing on areas with
              the greatest need.
            </p>
          </div>

          <div className="areas-map">
            <div className="areas-grid">
              <div className="area-pin">
                <div className="pin-dot"></div>
                <div className="area-info">
                  <h4 className="area-name">Nairobi</h4>
                  <p className="area-focus">
                    Educational outreach & empowerment
                  </p>
                </div>
              </div>
              <div className="area-pin">
                <div className="pin-dot"></div>
                <div className="area-info">
                  <h4 className="area-name">Machakos</h4>
                  <p className="area-focus">
                    Pregnancy prevention & education access
                  </p>
                </div>
              </div>
              <div className="area-pin">
                <div className="pin-dot"></div>
                <div className="area-info">
                  <h4 className="area-name">Makueni</h4>
                  <p className="area-focus">
                    Skills training & health awareness
                  </p>
                </div>
              </div>
              <div className="area-pin">
                <div className="pin-dot"></div>
                <div className="area-info">
                  <h4 className="area-name">Murang'a</h4>
                  <p className="area-focus">Life skills workshops & support</p>
                </div>
              </div>
              <div className="area-pin">
                <div className="pin-dot"></div>
                <div className="area-info">
                  <h4 className="area-name">Nakuru</h4>
                  <p className="area-focus">Youth empowerment programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-quote">
              <div className="quote-mark">"</div>
              <p className="quote-text">
                We must work together to create a future where young people are
                not forced into early pregnancies or marriages. By empowering
                children with education, life skills, and support, we help them
                create better futures for themselves and their communities.
              </p>
              <div className="quote-author">
                <div className="author-name">Annah Musau</div>
                <div className="author-title">Wendano Programme Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer-section">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-circle">T</div>
                <span className="logo-text">TEEM Foundation</span>
              </div>
              <p className="footer-description">
                Empowering youth across Kenya through education, mentorship, and
                community support.
              </p>
            </div>

            <div className="footer-contact">
              <h4 className="footer-title">Contact Us</h4>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">+254 113 520004</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">
                    admin@teemfoundation.org
                  </span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Address:</span>
                  <span className="contact-value">
                    P.O. Box 76696, 00508
                    <br />
                    Yaya Centre, Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-nav">
                <a href="#about" className="footer-link">
                  About Us
                </a>
                <a href="#our-work" className="footer-link">
                  Our Work
                </a>
                <a href="#projects" className="footer-link">
                  Projects
                </a>
                <a href="#get-involved" className="footer-link">
                  Get Involved
                </a>
              </div>
            </div>

            <div className="footer-cta">
              <h4 className="footer-title">Make a Difference</h4>
              <p className="footer-cta-text">
                Join us in creating lasting change for Kenya's youth.
              </p>
              <button className="footer-donate-btn">Donate Today</button>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2024 TEEM Foundation. All rights reserved.
              </p>
              <div className="footer-bottom-links">
                <a href="#" className="bottom-link">
                  Privacy Policy
                </a>
                <a href="#" className="bottom-link">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
