"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface StatItemProps {
  number: string;
  label: string;
  delay?: number;
}

const StatItem = ({ number, label, delay = 0 }: StatItemProps) => (
  <div
    className="stat-item"
    style={{
      animationDelay: `${delay}ms`,
    }}
  >
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlogan, setCurrentSlogan] = useState(0);

  const slogans = ["Empowering Youth", "Building Futures", "Creating Change"];

  useEffect(() => {
    setIsLoaded(true);

    // Rotate slogans every 4 seconds
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (type: "support" | "learn") => {
    // Add subtle haptic feedback if supported
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }

    // Analytics or action handling would go here
    console.log(`CTA clicked: ${type}`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
          onLoad={() => setIsLoaded(true)}
        />
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className={`hero-container ${isLoaded ? "loaded" : ""}`}>
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-animated">{slogans[currentSlogan]}</span>
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
                onClick={() => handleCTAClick("support")}
                aria-label="Support TEEM Foundation's mission"
              >
                <span className="cta-text">Support Our Mission</span>
                <span className="cta-icon" aria-hidden="true">
                  →
                </span>
              </button>
              <button
                className="cta-secondary"
                onClick={() => scrollToSection("about")}
                aria-label="Learn more about TEEM Foundation"
              >
                <span className="cta-text">Learn More</span>
                <span className="cta-icon" aria-hidden="true">
                  ↓
                </span>
              </button>
            </div>
            <div
              className="hero-stats"
              role="region"
              aria-label="Impact statistics"
            >
              <StatItem number="500+" label="Girls Impacted" delay={200} />
              <StatItem number="5" label="Regions Served" delay={400} />
              <StatItem number="4" label="Key Programs" delay={600} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
