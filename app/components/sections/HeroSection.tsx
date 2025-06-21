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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slogans = ["Empowering Youth", "Building Futures", "Creating Change"];

  const backgroundImages = [
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.27.54-9bc476?format=webp&width=1200",
      alt: "Large group photo of TEEM Foundation program participants and community members",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
      alt: "Students learning in classroom environment",
    },
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
      alt: "Young girls participating in educational activities",
    },
    {
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
      alt: "Community members working together on development projects",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Rotate slogans every 4 seconds
    const sloganInterval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);

    // Rotate background images every 6 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => {
      clearInterval(sloganInterval);
      clearInterval(imageInterval);
    };
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
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className={`hero-image ${index === currentImageIndex ? "active" : ""}`}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            onLoad={() => index === 0 && setIsLoaded(true)}
          />
        ))}
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => {
            // Generate deterministic values based on index to avoid hydration mismatch
            const leftPosition = i * 16.7 + ((i * 13) % 100);
            const delay = (i * 0.33) % 2;
            const duration = 3 + ((i * 0.4) % 2);

            return (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${leftPosition}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              />
            );
          })}
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
