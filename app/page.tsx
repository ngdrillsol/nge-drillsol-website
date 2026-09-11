import type { Metadata } from "next";

import Hero from "@/components/home/hero/hero";
import SolutionSelector from "@/components/home/solution-selector/SolutionSelector";
import EngineeringSolution from "@/components/home/EngineeringSolution";
import PlatformExplorer from "@/components/home/PlatformExplorer/PlatformExplorer";
import IndustriesSection from "@/components/home/industries";
import TrustSection from "@/components/home/trust";
import Footer from "@/components/shared/footer";

/* ============================================================
   HOMEPAGE SEO
   ============================================================ */

export const metadata: Metadata = {
  title: {
    absolute:
      "Water Well Drilling Rig Manufacturer in India | NGE Drillsol",
  },

  description:
    "NGE Drillsol manufactures and exports water well drilling rigs, DTH rigs, rotary drilling rigs, piling rigs, core drilling rigs and workover rigs for drilling projects worldwide.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.ngedrill.com",
    siteName: "NGE Drillsol",
    title:
      "Water Well Drilling Rig Manufacturer in India | NGE Drillsol",
    description:
      "Manufacturer and exporter of water well, DTH, rotary, piling, core and workover drilling rigs for projects worldwide.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Water Well Drilling Rig Manufacturer in India | NGE Drillsol",
    description:
      "Manufacturer and exporter of water well, DTH, rotary, piling, core and workover drilling rigs.",
  },
};

/* ============================================================
   ORGANIZATION + WEBSITE STRUCTURED DATA
   ============================================================ */

const homepageSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ngedrill.com/#organization",

      name: "NGE Drillsol Pvt. Ltd.",

      alternateName: "NGE Drillsol",

      url: "https://www.ngedrill.com",

      description:
        "Manufacturer and exporter of drilling rigs and groundwater drilling equipment for water well, DTH, rotary, piling, core drilling and workover applications.",

      knowsAbout: [
        "Water Well Drilling",
        "Groundwater Drilling",
        "DTH Drilling",
        "Rotary Drilling",
        "Mud Rotary Drilling",
        "Core Drilling",
        "Piling",
        "Workover Operations",
        "Drilling Equipment",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.ngedrill.com/#website",

      url: "https://www.ngedrill.com",

      name: "NGE Drillsol",

      publisher: {
        "@id": "https://www.ngedrill.com/#organization",
      },

      inLanguage: "en",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.ngedrill.com/#homepage",

      url: "https://www.ngedrill.com",

      name:
        "Water Well Drilling Rig Manufacturer in India | NGE Drillsol",

      description:
        "NGE Drillsol manufactures water well, DTH, rotary, piling, core and workover drilling rigs for global drilling projects.",

      isPartOf: {
        "@id": "https://www.ngedrill.com/#website",
      },

      about: {
        "@id": "https://www.ngedrill.com/#organization",
      },

      inLanguage: "en",
    },
  ],
};

/* ============================================================
   HOMEPAGE
   ============================================================ */

export default function HomePage() {
  return (
    <>
      {/* SEO / GEO Structured Data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />

      {/* Homepage Content */}

      <Hero />

      <SolutionSelector />

      <EngineeringSolution />

      <PlatformExplorer />

      <IndustriesSection />

      <TrustSection />

      <Footer />
    </>
  );
}