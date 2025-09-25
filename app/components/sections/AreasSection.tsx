import SectionIntro from "../ui/SectionIntro";

interface AreaPinProps {
  name: string;
  focus: string;
}

const AreaPin = ({ name, focus }: AreaPinProps) => (
  <div className="area-pin">
    <div className="pin-dot" aria-hidden="true"></div>
    <div className="area-info">
      <h4 className="area-name">{name}</h4>
      <p className="area-focus">{focus}</p>
    </div>
  </div>
);

const AreasSection = () => {
  const areas = [
    {
      name: "Nairobi",
      focus: "Educational outreach & empowerment",
    },
    {
      name: "Machakos",
      focus: "Pregnancy prevention & education access",
    },
    {
      name: "Makueni",
      focus: "Skills training & health awareness",
    },
    {
      name: "Murang'a",
      focus: "Life skills workshops & support",
    },
    {
      name: "Nakuru",
      focus: "Youth empowerment programs",
    },
  ];

  return (
    <section className="areas-section">
      <div className="container">
        <SectionIntro
          title="Where We Work"
          subtitle="Operating across multiple regions in Kenya, focusing on areas with the greatest need."
        />

        <div className="areas-map">
          <div className="areas-grid">
            {areas.map((area, index) => (
              <AreaPin key={index} name={area.name} focus={area.focus} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
