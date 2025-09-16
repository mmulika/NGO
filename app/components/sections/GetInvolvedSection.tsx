import SectionIntro from "../ui/SectionIntro";

import DonationSection from './DonationSection';

interface InvolvementCardProps {
  icon: string;
  title: string;
  description: string;
  ctaText: string;
}

const InvolvementCard = ({
  icon,
  title,
  description,
  ctaText,
}: InvolvementCardProps) => (
  <div className="involvement-card">
    <div className="involvement-icon" role="img" aria-label={`Icon: ${icon}`}>
      {icon}
    </div>
    <h3 className="involvement-title">{title}</h3>
    <p className="involvement-description">{description}</p>
    <button className="involvement-cta" aria-label={`${ctaText} - ${title}`}>
      {ctaText}
    </button>
  </div>
);

interface MethodItemProps {
  title: string;
  description: string;
}

const MethodItem = ({ title, description }: MethodItemProps) => (
  <div className="method-item">
    <strong>{title}</strong>
    <span>{description}</span>
  </div>
);

const GetInvolvedSection = () => {
  const involvementOptions = [
    {
      icon: "💝",
      title: "Donate",
      description:
        "Support awareness campaigns, education advocacy, and essential resources for vulnerable youth.",
      ctaText: "Donate Now",
    },
    {
      icon: "🤝",
      title: "Partner",
      description:
        "Join our network of partners working together to create greater impact across Kenya.",
      ctaText: "Become a Partner",
    },
    {
      icon: "📢",
      title: "Spread Awareness",
      description:
        "Help us reach more communities by sharing our mission and impact stories.",
      ctaText: "Learn More",
    },
  ];

  const donationMethods = [
    {
      title: "Bank Transfers",
      description: "Details available upon request",
    },
    {
      title: "Online Donations",
      description: "Secure online platform",
    },
    {
      title: "In-kind Donations",
      description: "Sanitary towels, supplies, hygiene products",
    },
  ];

  return (
    <section id="get-involved" className="get-involved-section">
      <div className="container">
        <div className="get-involved-content">
          <SectionIntro
            title="Join Our Mission"
            subtitle="Your support creates lasting change for young people across Kenya"
          />

          <div className="involvement-grid">
            {involvementOptions.map((option, index) => (
              <InvolvementCard
                key={index}
                icon={option.icon}
                title={option.title}
                description={option.description}
                ctaText={option.ctaText}
              />
            ))}
          </div>

          <div className="donation-methods">
            <h3 className="methods-title">Ways to Support</h3>
            <div className="methods-grid">
              {donationMethods.map((method, index) => (
                <MethodItem
                  key={index}
                  title={method.title}
                  description={method.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <DonationSection />

    </section>
  );
};

export default GetInvolvedSection;
