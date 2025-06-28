import Image from "next/image";
import SectionIntro from "../ui/SectionIntro";

interface GalleryItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface VideoItemProps {
  videoId: string;
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
      unoptimized
    />
    <div className="gallery-content">
      <h3 className="gallery-title">{title}</h3>
      <p className="gallery-description">{description}</p>
    </div>
  </article>
);

const VideoItem = ({ videoId, title, description }: VideoItemProps) => (
  <article className="gallery-item video-item">
    <div className="video-wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allowFullScreen
        className="youtube-video"
        loading="lazy"
      />
    </div>
    <div className="gallery-content">
      <h3 className="gallery-title">{title}</h3>
      <p className="gallery-description">{description}</p>
    </div>
  </article>
);

const GallerySection = () => {
  const galleryItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F4569d8b9154a4ef386786fdd17888915?format=webp&width=800",
      alt: "TEEM Foundation community outreach program in action",
      title: "Community Outreach",
      description:
        "Engaging directly with communities to understand their needs and provide targeted support for youth development.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F538cf24bfcdc43d8be4042132ae49e3b?format=webp&width=800",
      alt: "Educational workshop session with young participants",
      title: "Educational Workshops",
      description:
        "Interactive learning sessions that empower young people with knowledge and skills for their future success.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F62a428237a4d40458f701547453dfc86?format=webp&width=800",
      alt: "Youth leadership development program participants",
      title: "Leadership Development",
      description:
        "Building confident leaders through mentorship and hands-on experience in community service and advocacy.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F1436a03f6aa34125aa534d611c3fc333?format=webp&width=800",
      alt: "Skills training session for teenage girls and boys",
      title: "Skills Training",
      description:
        "Practical life skills workshops covering financial literacy, cooking, gardening, and vocational training opportunities.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2Fa65c96b22b3f46629f060425b51b050c?format=webp&width=800",
      alt: "Health and hygiene awareness campaign",
      title: "Health & Hygiene",
      description:
        "Comprehensive health education and hygiene supply distribution to ensure young people stay healthy and in school.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2Fe871c6c1f0a346a2b7bfc2acdc4e979a?format=webp&width=800",
      alt: "Community gathering and celebration event",
      title: "Community Celebrations",
      description:
        "Bringing communities together through cultural events that strengthen bonds and celebrate achievements.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F3ae520dcc24b4681ae1a841af89de8c4?format=webp&width=800",
      alt: "Environmental conservation project with youth volunteers",
      title: "Environmental Action",
      description:
        "Youth-led environmental conservation projects that protect our natural resources while building responsibility.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F1568aabcefb94b1888c4ac2e9d766f74?format=webp&width=800",
      alt: "Sports and recreation activities for youth development",
      title: "Sports & Recreation",
      description:
        "Using sports and recreational activities to build teamwork, discipline, and physical health among participants.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F1d852ab4b2064ec8a580f5063f303fbd?format=webp&width=800",
      alt: "Educational scholarship and support program",
      title: "Educational Support",
      description:
        "Providing scholarships, school supplies, and educational resources to ensure no child is left behind.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F374fd33642d546eab403369d5fd6f814%2F6c22e2453289413b82fb408375207c16?format=webp&width=800",
      alt: "TEEM Foundation team and volunteers working together",
      title: "Our Team in Action",
      description:
        "Dedicated volunteers and staff members working tirelessly to create lasting positive change in communities.",
    },
  ];

  const videoItems = [
    {
      videoId: "A6pDPcg8dIY",
      title: "TEEM Foundation Impact Story",
      description:
        "Watch how TEEM Foundation is transforming lives and communities across Kenya through our comprehensive youth empowerment programs.",
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <SectionIntro
          title="Our Impact in Action"
          subtitle="See how we're making a real difference in communities across Kenya through our programs and initiatives."
        />

        <div className="gallery-grid">
          {/* Render all gallery images */}
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={`image-${index}`}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}

          {/* Render video items */}
          {videoItems.map((video, index) => (
            <VideoItem
              key={`video-${index}`}
              videoId={video.videoId}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
