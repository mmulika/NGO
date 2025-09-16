"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./header-paypal.module.css";

interface HeaderProps {
  className?: string;
}

const PAYPAL_SCRIPT_SRC =
  "https://www.paypal.com/sdk/js?client-id=BAAomlFNxNPJgGtgdXPGZoKo7JizFMJ6wCJp6WLe8Pb9Z5ALLEURBDiteqr4JdvHSf0u2WuiLiOyRJn-Y0&components=hosted-buttons&disable-funding=venmo&currency=GBP";
const HOSTED_BUTTON_ID = "M37GN5RNART8J";

const Header = ({ className = "" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);
  const [paypalLoading, setPaypalLoading] = useState(false);
  const [paypalError, setPaypalError] = useState<string | null>(null);
  const paypalRenderedRef = useRef(false);

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
        setShowPaypal(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".mobile-menu-button") &&
        !target.closest(`.${styles.paypalModal}`)
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

  const loadPaypalScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if ((window as any).paypal) return resolve();

      // Check if script already in the DOM
      const existing = document.querySelector(`script[src\n*="${PAYPAL_SCRIPT_SRC}"]`);
      if (existing && (window as any).paypal) return resolve();

      const script = document.createElement("script");
      script.src = PAYPAL_SCRIPT_SRC;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load PayPal SDK"));
      document.head.appendChild(script);
    });
  };

  const renderHostedButton = async () => {
    try {
      if (paypalRenderedRef.current) return;
      if (!(window as any).paypal) {
        throw new Error("PayPal SDK not available");
      }
      (window as any).paypal
        .HostedButtons({ hostedButtonId: HOSTED_BUTTON_ID })
        .render(`#paypal-container-${HOSTED_BUTTON_ID}`);
      paypalRenderedRef.current = true;
    } catch (err: any) {
      setPaypalError(err?.message || "Unable to render PayPal button");
    }
  };

  const openPaypal = async () => {
    setShowPaypal(true);
    setPaypalError(null);
    setPaypalLoading(true);
    try {
      await loadPaypalScript();
      await renderHostedButton();
    } catch (err: any) {
      setPaypalError(err?.message || "Failed to load PayPal");
    } finally {
      setPaypalLoading(false);
    }
  };

  const handleDonateClick = () => openPaypal();

  const closePaypal = () => {
    setShowPaypal(false);
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
              onClick={handleDonateClick}
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
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleDonateClick();
                }}
              >
                Donate Now
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* PayPal Modal */}
      <div
        className={`${styles.paypalModal} ${showPaypal ? styles.active : ""}`}
        role="dialog"
        aria-modal={showPaypal}
        aria-labelledby="paypal-modal-title"
      >
        <div className={styles.backdrop} onClick={closePaypal} />
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 id="paypal-modal-title">Donate via PayPal</h3>
            <button
              className={styles.closeBtn}
              onClick={closePaypal}
              aria-label="Close donation dialog"
            >
              ×
            </button>
          </div>

          <div className={styles.body}>
            {paypalLoading && <p>Loading PayPal...</p>}
            {paypalError && <p className={styles.error}>Error: {paypalError}</p>}
            <div id={`paypal-container-${HOSTED_BUTTON_ID}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
