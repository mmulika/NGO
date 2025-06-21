"use client";

import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["hero", "about", "our-work", "projects", "get-involved", "contact"];
      const currentSection = sections.find(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Close menu on escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });

      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "our-work", label: "Our Work" },
    { id: "projects", label: "Projects" },
    { id: "get-involved", label: "Get Involved" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <nav
        className={`navigation-header ${isScrolled ? "scrolled" : ""} ${className}`}
        role="navigation"
        aria-label="Main navigation"
      >
      <div className="nav-container">
        <div className="logo-section">
          <button
            onClick={() => scrollToSection("hero")}
            className="logo-button"
            aria-label="Go to top of page"
          >
            <div className="logo-circle">T</div>
            <span className="logo-text">TEEM Foundation</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              aria-label={`Navigate to ${item.label} section`}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
          <button
            className="donate-btn"
            aria-label="Donate to TEEM Foundation"
            onClick={() => {
              // Add donation functionality here
              console.log("Donate button clicked");
            }}
          >
            Donate Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="mobile-nav-content">
            <div className="mobile-nav-header">
              <div className="mobile-logo-section">
                <div className="logo-circle">T</div>
                <span className="logo-text">TEEM Foundation</span>
              </div>
              <button
                className="mobile-menu-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <div className="mobile-nav-links">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                  aria-label={`Navigate to ${item.label} section`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}

              <button
                className="mobile-donate-btn"
                aria-label="Donate to TEEM Foundation"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  // Add donation functionality here
                  console.log("Mobile donate button clicked");
                }}
              >
                Donate Now
              </button>
            </div>
          </div>

          {/* Mobile menu overlay */}
          <div
            className="mobile-nav-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;