import Image from "next/image";
import SectionIntro from "../ui/SectionIntro";

interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const GalleryItem = ({ src, alt, title, description }: GalleryItemProps) => (
  <article className="gallery-item">
    <Image
      src={src}
      alt={alt}
      className="gallery-image"
      width={800}
      height={500}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="gallery-content">
      <h3 className="gallery-title">{title}</h3>
      <p className="gallery-description">{description}</p>
    </div>
  </article>
);

const GallerySection = () => {
  const galleryItems = [
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-21.56.37-1-4d7fb5?format=webp&width=800",
      alt: "Sanitary towel distribution event with community participation and support",
      title: "Hygiene Support Program",
      description:
        "Distributing sanitary towels and hygiene supplies to ensure girls can attend school without interruption during their menstrual cycles.",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.05.31-8fb7db?format=webp&width=800",
      alt: "Outdoor community training session with participants engaged in learning",
      title: "Community Training Sessions",
      description:
        "Conducting life skills workshops in natural settings that encourage open dialogue and peer-to-peer learning.",
    },
    {
      src: "https://cdn.builder.io/api/v1/assets/374fd33642d546eab403369d5fd6f814/whatsapp-image-2025-06-16-at-22.27.54-9bc476?format=webp&width=800",
      alt: "Large group photo of TEEM Foundation program participants and facilitators",
      title: "Growing Community",
      description:
        "Our programs bring together diverse groups of young people, creating supportive networks that extend beyond our sessions.",
    },
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <SectionIntro
          title="Our Impact in Action"
          subtitle="See how we're making a real difference in communities across Kenya through our programs and initiatives."
        />

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
