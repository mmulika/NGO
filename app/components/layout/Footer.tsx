interface ContactItemProps {
  label: string;
  value: string;
}

const ContactItem = ({ label, value }: ContactItemProps) => (
  <div className="contact-item">
    <span className="contact-label">{label}:</span>
    <span className="contact-value">{value}</span>
  </div>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  "aria-label"?: string;
}

const FooterLink = ({
  href,
  children,
  "aria-label": ariaLabel,
}: FooterLinkProps) => (
  <a href={href} className="footer-link" aria-label={ariaLabel}>
    {children}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
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
              <ContactItem label="Phone" value="+254 113 520004" />
              <ContactItem label="Email" value="admin@teemfoundation.org" />
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
            <nav className="footer-nav" aria-label="Footer navigation">
              <FooterLink
                href="#about"
                aria-label="Navigate to About Us section"
              >
                About Us
              </FooterLink>
              <FooterLink
                href="#our-work"
                aria-label="Navigate to Our Work section"
              >
                Our Work
              </FooterLink>
              <FooterLink
                href="#projects"
                aria-label="Navigate to Projects section"
              >
                Projects
              </FooterLink>
              <FooterLink
                href="#get-involved"
                aria-label="Navigate to Get Involved section"
              >
                Get Involved
              </FooterLink>
            </nav>
          </div>

          <div className="footer-cta">
            <h4 className="footer-title">Make a Difference</h4>
            <p className="footer-cta-text">
              Join us in creating lasting change for Kenya's youth.
            </p>
            <button
              className="footer-donate-btn"
              aria-label="Donate to TEEM Foundation today"
            >
              Donate Today
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} TEEM Foundation. All rights reserved.
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
  );
};

export default Footer;
