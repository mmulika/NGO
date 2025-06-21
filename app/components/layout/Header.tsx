"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`navigation-header ${isScrolled ? "scrolled" : ""} ${className}`}
    >
      <div className="nav-container">
        <div className="logo-section">
          <div className="logo-circle">T</div>
          <span className="logo-text">TEEM Foundation</span>
        </div>
        <div className="nav-links">
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
          <button className="donate-btn" aria-label="Donate to TEEM Foundation">
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
