"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`navigation-header ${isScrolled ? "scrolled" : ""} ${className}`}
      >
        <div className="nav-container">
          <div className="logo-section">
            <div className="logo-circle">T</div>
            <span className="logo-text">TEEM Foundation</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
              aria-label="Navigate to About section"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("our-work")}
              className="nav-link"
              aria-label="Navigate to Our Work section"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
              aria-label="Navigate to Projects section"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="nav-link"
              aria-label="Navigate to Get Involved section"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
              aria-label="Navigate to Contact section"
            >
              Contact
            </button>
            <button
              className="donate-btn"
              aria-label="Donate to TEEM Foundation"
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-button ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav
          className="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu-header">
            <div className="logo-section">
              <div className="logo-circle">T</div>
              <span className="logo-text">TEEM Foundation</span>
            </div>
          </div>

          <div className="mobile-nav-links">
            <button
              onClick={() => scrollToSection("about")}
              className="mobile-nav-link"
              aria-label="Navigate to About section"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("our-work")}
              className="mobile-nav-link"
              aria-label="Navigate to Our Work section"
            >
              Our Work
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="mobile-nav-link"
              aria-label="Navigate to Projects section"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="mobile-nav-link"
              aria-label="Navigate to Get Involved section"
            >
              Get Involved
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="mobile-nav-link"
              aria-label="Navigate to Contact section"
            >
              Contact
            </button>

            <div className="mobile-menu-cta">
              <button
                className="mobile-donate-btn"
                aria-label="Donate to TEEM Foundation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate Now
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
