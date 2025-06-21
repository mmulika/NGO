import type { Metadata } from "next";
import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import ImpactBanner from "./components/sections/ImpactBanner";
import AboutSection from "./components/sections/AboutSection";
import GallerySection from "./components/sections/GallerySection";
import WorkSection from "./components/sections/WorkSection";
import FeaturedProject from "./components/sections/FeaturedProject";
import ProjectsSection from "./components/sections/ProjectsSection";
import GetInvolvedSection from "./components/sections/GetInvolvedSection";
import AreasSection from "./components/sections/AreasSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "TEEM Foundation - Empowering Youth Across Kenya",
  description:
    "Teenage Girls Empowerment Foundation (TEEM) is dedicated to empowering adolescent girls and boys across Kenya, focusing on breaking cycles of poverty, early pregnancies, and lack of education.",
  keywords:
    "TEEM Foundation, youth empowerment, Kenya, education, girls empowerment, community development, NGO",
  openGraph: {
    title: "TEEM Foundation - Empowering Youth Across Kenya",
    description:
      "Breaking cycles of poverty, early pregnancies, and lack of education through inclusive programs that empower both girls and boys to reach their full potential.",
    type: "website",
    locale: "en_KE",
    siteName: "TEEM Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEEM Foundation - Empowering Youth Across Kenya",
    description:
      "Breaking cycles of poverty, early pregnancies, and lack of education through inclusive programs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://teemfoundation.org",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TEEM Foundation",
  alternateName: "Teenage Girls Empowerment Foundation",
  url: "https://teemfoundation.org",
  logo: "https://teemfoundation.org/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254-113-520004",
    contactType: "Customer Service",
    email: "admin@teemfoundation.org",
    areaServed: "KE",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.O. Box 76696, 00508 Yaya Centre",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    "https://facebook.com/teemfoundation",
    "https://twitter.com/teemfoundation",
  ],
  description:
    "Teenage Girls Empowerment Foundation (TEEM) is dedicated to empowering adolescent girls and boys across Kenya, focusing on breaking cycles of poverty, early pregnancies, and lack of education.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main-content" className="main-container">
        <Header />
        <HeroSection />
        <ImpactBanner />
        <AboutSection />
        <GallerySection />
        <WorkSection />
        <FeaturedProject />
        <ProjectsSection />
        <GetInvolvedSection />
        <AreasSection />
        <TestimonialSection />
        <Footer />
      </main>
    </>
  );
}
