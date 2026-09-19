import type { Metadata } from "next";

import DrillingRigsPage from "@/components/drilling-rigs/DrillingRigsPage";

/* ============================================================
   DRILLING RIGS PAGE SEO
   ============================================================ */

export const metadata: Metadata = {
  title: "Drilling Rigs Manufacturer | Water Well, DTH & Rotary",

  description:
    "Explore NGE Drillsol drilling rigs for water well drilling, DTH drilling, rotary drilling, piling, core drilling and workover applications. Truck, trailer and tractor mounted drilling rig configurations are available for different project requirements.",

  alternates: {
    canonical: "/drilling-rigs",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",

    url: "https://www.ngedrill.com/drilling-rigs",

    siteName: "NGE Drillsol",

    title:
      "Drilling Rigs Manufacturer | Water Well, DTH & Rotary",

    description:
      "Explore water well, DTH, rotary, piling, core drilling and workover rigs manufactured by NGE Drillsol.",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Drilling Rigs Manufacturer | Water Well, DTH & Rotary",

    description:
      "Explore NGE Drillsol water well, DTH, rotary, piling, core and workover drilling rigs.",
  },
};

/* ============================================================
   COLLECTION PAGE STRUCTURED DATA
   ============================================================ */

const drillingRigsSchema = {
  "@context": "https://schema.org",

  "@type": "CollectionPage",

  "@id": "https://www.ngedrill.com/drilling-rigs#webpage",

  url: "https://www.ngedrill.com/drilling-rigs",

  name: "Drilling Rigs Manufacturer | Water Well, DTH & Rotary",

  description:
    "Drilling rig range from NGE Drillsol covering water well drilling, DTH drilling, rotary drilling, piling, core drilling and workover applications.",

  isPartOf: {
    "@id": "https://www.ngedrill.com/#website",
  },

  about: {
    "@id": "https://www.ngedrill.com/#organization",
  },

  inLanguage: "en",
};

/* ============================================================
   PAGE
   ============================================================ */

export default function DrillingRigs() {
  return (
    <>
      {/* SEO / GEO Structured Data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(drillingRigsSchema),
        }}
      />

      {/* Existing Drilling Rigs Page */}

      <DrillingRigsPage /> 
  
    </>
  );
}