"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
  const [isPaused, setIsPaused] = useState(false);

  const slogans = ["Empowering Youth", "Building Futures", "Creating Change"];

  const heroImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2Fc30b4ca4cb584cbeba336aece29fb415?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F1e2a95a3a47940b2be9823dfd08193f6?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F01cecac51fff4edf8c5811ec144f756f?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2Fef08c192ffb3498a819f97a33426bb3d?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F9d3270146e3f42e4999b6bbbb45967e9?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F4ea7e8517a6b4247944087a40f170481?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2Fb16acccd56b24f7281c6d2dc4931324e?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F67113984d71d44cc9a88fde4e01e798f?format=webp&width=800",
  ];
  const [activeImage, setActiveImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(heroImages.length).fill(false)
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const sloganInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length);
      }
    }, 4000);

    return () => {
      clearInterval(sloganInterval);
    };
  }, [isPaused]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      if (!isPaused) {
        setActiveImage((prev) => (prev + 1) % heroImages.length);
      }
    }, 6000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [isPaused, heroImages.length]);

  const handleCTAClick = (type: "support" | "learn") => {
    if ("vibrate" in navigator) {
      navigator.vibrate(50);
    }
    if (type === "support") {
      window.dispatchEvent(new CustomEvent("open-paypal-modal"));
    }
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
    <section
      className="hero-section"
      role="banner"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-background">
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`hero-image-wrapper ${activeImage === index ? "active" : ""}`}
            aria-hidden="true"
          >
            <div className="hero-image-skeleton" />
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className={`hero-image ${loadedImages[index] ? "loaded" : ""}`}
              onLoad={() =>
                setLoadedImages((prev) => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                })
              }
            />
          </div>
        ))}

        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-particles" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => {
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
              <span className="title-animated" aria-live="polite">{slogans[currentSlogan]}</span>
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
                <span className="cta-icon" aria-hidden="true">→</span>
              </button>
              <button
                className="cta-secondary"
                onClick={() => scrollToSection("about")}
                aria-label="Learn more about TEEM Foundation"
              >
                <span className="cta-text">Learn More</span>
                <span className="cta-icon" aria-hidden="true">↓</span>
              </button>
            </div>
            <div className="hero-stats" role="region" aria-label="Impact statistics">
              <StatItem number="500+" label="Girls Impacted" delay={200} />
              <StatItem number="5" label="Regions Served" delay={400} />
              <StatItem number="4" label="Key Programs" delay={600} />
            </div>
          </div>
        </div>

        <div className="hero-image-nav" aria-label="Background image navigation">
          {heroImages.map((_, i) => (
            <button
              key={i}
              className={`image-nav-dot ${activeImage === i ? "active" : ""}`}
              onClick={() => setActiveImage(i)}
              aria-label={`Show background image ${i + 1}`}
            >
              {activeImage === i && <span className="progress-ring" aria-hidden="true" />}
            </button>
          ))}
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
