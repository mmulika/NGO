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
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const slogans = ["Empowering Youth", "Building Futures", "Creating Change"];

  const backgroundImages = [
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.27.54-9bc476?format=webp&width=1200",
      alt: "Large group photo of TEEM Foundation program participants and community members",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      alt: "Students engaged in collaborative learning activities",
    },
    {
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1200&auto=format&fit=crop",
      alt: "Young people participating in community development workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1200&auto=format&fit=crop",
      alt: "Youth empowerment and education program in action",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Rotate slogans every 4 seconds
    const sloganInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length);
      }
    }, 4000);

    // Rotate background images every 6 seconds
    const imageInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      }
    }, 6000);

    return () => {
      clearInterval(sloganInterval);
      clearInterval(imageInterval);
    };
  }, [isPaused]);

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

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
    if (index === 0) {
      setIsLoaded(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setCurrentImageIndex(index);
    }
  };

  return (
    <section
      className="hero-section"
      role="banner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            className={`hero-image ${index === currentImageIndex ? "active" : ""} ${loadedImages.has(index) ? "loaded" : ""}`}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{ objectFit: "cover" }}
            onLoad={() => handleImageLoad(index)}
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

        {/* Image navigation dots */}
        <div
          className="hero-image-nav"
          aria-label="Background image navigation"
        >
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`image-nav-dot ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Show background image ${index + 1}`}
            >
              {index === currentImageIndex && !isPaused && (
                <div className="progress-ring" />
              )}
            </button>
          ))}
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
