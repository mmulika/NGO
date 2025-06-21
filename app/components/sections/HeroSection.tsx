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
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/_i3a1261-3d4766",
      alt: "TEEM Foundation representatives in traditional African attire at cultural celebration with international flags",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/_i3a1282-11d069",
      alt: "TEEM Foundation team members and participants at Africa Day celebration showcasing cultural diversity",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/_i3a1284-69ee3d",
      alt: "Community engagement and cultural exchange at TEEM Foundation event with participants in traditional dress",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/_i3a1343-fff635",
      alt: "TEEM Foundation cultural celebration with participants wearing beautiful traditional African clothing",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/_i3a1349-83974a",
      alt: "TEEM Foundation representatives engaging with community members at cultural event",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/_i3a1353-473061",
      alt: "TEEM Foundation Africa Day celebration with traditional dress and cultural displays",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/_i3a1438-924edc",
      alt: "TEEM Foundation community outreach and cultural sharing at special event",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/_i3a1441-40b9ac",
      alt: "TEEM Foundation cultural exchange program with participants in traditional African attire",
    },
  ];

  // Generate responsive image sources for better performance across devices
  const getResponsiveImageSrc = (baseSrc: string) => {
    return {
      mobile: `${baseSrc}?format=webp&width=800&height=600&fit=cover`,
      tablet: `${baseSrc}?format=webp&width=1200&height=800&fit=cover`,
      desktop: `${baseSrc}?format=webp&width=1920&height=1080&fit=cover`,
      large: `${baseSrc}?format=webp&width=2560&height=1440&fit=cover`,
    };
  };

  useEffect(() => {
    setIsLoaded(true);

    // Preload first few images for smooth transitions
    const preloadImages = () => {
      backgroundImages.slice(0, 3).forEach((image, index) => {
        const responsiveSrc = getResponsiveImageSrc(image.src);
        const img = new window.Image();
        img.src = responsiveSrc.desktop;
        img.onload = () => handleImageLoad(index);
      });
    };

    preloadImages();

    // Rotate slogans every 4 seconds
    const sloganInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length);
      }
    }, 4000);

    // Rotate background images every 6 seconds
    const imageInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentImageIndex((prev) => {
          const nextIndex = (prev + 1) % backgroundImages.length;

          // Preload the image after the next one
          const imageAfterNext = (nextIndex + 1) % backgroundImages.length;
          const responsiveSrc = getResponsiveImageSrc(
            backgroundImages[imageAfterNext].src,
          );
          const img = new window.Image();
          img.src = responsiveSrc.desktop;
          img.onload = () => handleImageLoad(imageAfterNext);

          return nextIndex;
        });
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
        {backgroundImages.map((image, index) => {
          const responsiveSrc = getResponsiveImageSrc(image.src);
          return (
            <div
              key={index}
              className={`hero-image-wrapper ${index === currentImageIndex ? "active" : ""}`}
            >
              <Image
                src={responsiveSrc.desktop}
                alt={image.alt}
                className={`hero-image ${loadedImages.has(index) ? "loaded" : ""}`}
                fill
                priority={index === 0 || index === 1} // Preload first two images
                sizes="(max-width: 640px) 800px, (max-width: 1024px) 1200px, (max-width: 1920px) 1920px, 2560px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                onLoad={() => handleImageLoad(index)}
                quality={90}
              />
              {!loadedImages.has(index) && (
                <div className="hero-image-skeleton" aria-hidden="true" />
              )}
            </div>
          );
        })}
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
              onKeyDown={(e) => handleKeyDown(e, index)}
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
