import Image from "next/image";

interface GalleryItemProps {
  src: string;
  alt: string;
}

interface VideoItemProps {
  videoId: string;
  title: string;
}

const GalleryItem = ({ src, alt }: GalleryItemProps) => (
  <div className="gallery-item">
    <Image
      src={src}
      alt={alt}
      className="gallery-image"
      width={800}
      height={500}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      unoptimized
    />
  </div>
);

const VideoItem = ({ videoId, title }: VideoItemProps) => (
  <div className="gallery-item video-item">
    <div className="video-wrapper">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allowFullScreen
        className="youtube-video"
        loading="lazy"
      />
    </div>
  </div>
);

const GallerySection = () => {
  const galleryItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/4569d8b9154a4ef386786fdd17888915?format=webp&width=800",
      alt: "TEEM Foundation community outreach program",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/538cf24bfcdc43d8be4042132ae49e3b?format=webp&width=800",
      alt: "Educational workshop session",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/62a428237a4d40458f701547453dfc86?format=webp&width=800",
      alt: "Youth leadership development",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/1436a03f6aa34125aa534d611c3fc333?format=webp&width=800",
      alt: "Skills training session",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/a65c96b22b3f46629f060425b51b050c?format=webp&width=800",
      alt: "Health and hygiene campaign",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/e871c6c1f0a346a2b7bfc2acdc4e979a?format=webp&width=800",
      alt: "Community celebration event",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/3ae520dcc24b4681ae1a841af89de8c4?format=webp&width=800",
      alt: "Environmental conservation project",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/1568aabcefb94b1888c4ac2e9d766f74?format=webp&width=800",
      alt: "Sports and recreation activities",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/1d852ab4b2064ec8a580f5063f303fbd?format=webp&width=800",
      alt: "Educational support program",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/374fd33642d546eab403369d5fd6f814/6c22e2453289413b82fb408375207c16?format=webp&width=800",
      alt: "TEEM Foundation team",
    },
  ];

  const videoItems = [
    {
      videoId: "A6pDPcg8dIY",
      title: "TEEM Foundation Impact Story",
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={`image-${index}`}
              src={item.src}
              alt={item.alt}
            />
          ))}

          {videoItems.map((video, index) => (
            <VideoItem
              key={`video-${index}`}
              videoId={video.videoId}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
};

export default GallerySection;