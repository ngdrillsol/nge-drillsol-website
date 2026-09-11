import type { Metadata } from "next";

import AboutPage from "@/components/about/AboutPage";

/* ============================================================
   ABOUT PAGE SEO
   ============================================================ */

export const metadata: Metadata = {
  title: {
    absolute:
      "About NGE Drillsol | Drilling Rig Manufacturer in India",
  },

  description:
    "Learn about NGE Drillsol Pvt. Ltd., an Indian drilling rig manufacturer engineering water well, DTH, rotary, piling, core and workover rigs for domestic and international projects.",

  alternates: {
    canonical: "/about",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.ngedrill.com/about",
    siteName: "NGE Drillsol",
    title:
      "About NGE Drillsol | Drilling Rig Manufacturer in India",
    description:
      "Learn about NGE Drillsol's drilling rig engineering, manufacturing capabilities, product range and project approach.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "About NGE Drillsol | Drilling Rig Manufacturer in India",
    description:
      "Indian manufacturer of water well, DTH, rotary, piling, core and workover drilling rigs.",
  },
};

/* ============================================================
   ABOUT PAGE STRUCTURED DATA
   ============================================================ */

const aboutSchema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "AboutPage",

      "@id":
        "https://www.ngedrill.com/about#webpage",

      url:
        "https://www.ngedrill.com/about",

      name:
        "About NGE Drillsol | Drilling Rig Manufacturer in India",

      description:
        "Information about NGE Drillsol Pvt. Ltd., its drilling rig engineering, manufacturing and equipment solutions.",

      about: {
        "@id":
          "https://www.ngedrill.com/#organization",
      },

      isPartOf: {
        "@id":
          "https://www.ngedrill.com/#website",
      },

      inLanguage: "en",
    },

    {
      "@type": "BreadcrumbList",

      "@id":
        "https://www.ngedrill.com/about#breadcrumb",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item:
            "https://www.ngedrill.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About NGE Drillsol",
          item:
            "https://www.ngedrill.com/about",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />

      <AboutPage />
    </>
  );
}