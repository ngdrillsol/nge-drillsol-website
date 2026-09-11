import type { Metadata } from "next";

import DrillingRigsPage from "@/components/drilling-rigs/DrillingRigsPage";

/* ============================================================
   SEO METADATA
   ============================================================ */

export const metadata: Metadata = {
  /*
   * Root layout automatically adds:
   * "| NGE Drillsol"
   *
   * Final title:
   * Drilling Rigs Manufacturer | Water Well, DTH & Rotary | NGE Drillsol
   */
  title: "Drilling Rigs Manufacturer | Water Well, DTH & Rotary",

  description:
    "Explore drilling rigs manufactured by NGE Drillsol for water well, DTH, mud rotary, piling, core and workover applications. Discover truck, trailer and tractor mounted drilling rigs for projects worldwide.",

  alternates: {
    canonical: "/drilling-rigs",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "/drilling-rigs",
    siteName: "NGE Drillsol",
    title:
      "Drilling Rigs Manufacturer | Water Well, DTH & Rotary | NGE Drillsol",
    description:
      "Explore NGE Drillsol water well, DTH, rotary, piling, core and workover drilling rigs engineered for professional drilling projects worldwide.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Drilling Rigs Manufacturer | Water Well, DTH & Rotary | NGE Drillsol",
    description:
      "Explore water well, DTH, rotary, piling, core and workover drilling rigs manufactured by NGE Drillsol.",
  },
};

/* ============================================================
   STRUCTURED DATA
   ============================================================ */

const drillingRigsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",

  name: "Drilling Rigs",

  url: "https://www.ngedrill.com/drilling-rigs",

  description:
    "Drilling rigs manufactured by NGE Drillsol for water well, DTH, rotary, piling, core and workover drilling applications.",

  isPartOf: {
    "@type": "WebSite",
    name: "NGE Drillsol",
    url: "https://www.ngedrill.com",
  },

  about: {
    "@type": "Organization",
    name: "NGE Drillsol Pvt. Ltd.",
    url: "https://www.ngedrill.com",
  },

  hasPart: [
    {
      "@type": "CollectionPage",
      name: "Water Well Drilling Rigs",
      url: "https://www.ngedrill.com/drilling-rigs/water-well-drilling-rigs",
    },
    {
      "@type": "CollectionPage",
      name: "DTH Drilling Rigs",
      url: "https://www.ngedrill.com/drilling-rigs/dth-drilling-rigs",
    },
    {
      "@type": "CollectionPage",
      name: "Rotary Drilling Rigs",
      url: "https://www.ngedrill.com/drilling-rigs/rotary-drilling-rigs",
    },
    {
      "@type": "CollectionPage",
      name: "Tractor Mounted Drilling Rigs",
      url: "https://www.ngedrill.com/drilling-rigs/tractor-mounted-drilling-rigs",
    },
    {
      "@type": "CollectionPage",
      name: "Piling Rigs",
      url: "https://www.ngedrill.com/drilling-rigs/piling-rigs",
    },
    {
      "@type": "CollectionPage",
      name: "Core Drilling Rigs",
      url: "https://www.ngedrill.com/drilling-rigs/core-drilling-rigs",
    },
    {
      "@type": "CollectionPage",
      name: "Workover Rigs",
      url: "https://www.ngedrill.com/drilling-rigs/workover-rigs",
    },
  ],
};

/* ============================================================
   PAGE
   ============================================================ */

export default function Page() {
  return (
    <>
      {/* SEO / GEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(drillingRigsSchema),
        }}
      />

      {/* Existing page design */}
      <DrillingRigsPage />
    </>
  );
}