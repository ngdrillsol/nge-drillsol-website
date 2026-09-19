import type { Metadata } from "next";

import SolutionsPage from "@/components/solutions/SolutionsPage";

export const metadata: Metadata = {
  title: "Drilling Solutions | Geology, Methods & Rig Selection",

  description:
    "Explore NGE Drillsol drilling solutions by geology, drilling method and project requirement. Compare water well, DTH, rotary, piling and core drilling equipment for different field conditions.",

  alternates: {
    canonical: "/solutions",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://www.ngedrill.com/solutions",
    siteName: "NGE Drillsol",
    title: "Drilling Solutions | Geology, Methods & Rig Selection",
    description:
      "Explore drilling solutions by geology, drilling method and project requirement from NGE Drillsol.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Drilling Solutions | Geology, Methods & Rig Selection",
    description:
      "Explore NGE Drillsol drilling solutions for water well, DTH, rotary, piling and core drilling projects.",
  },
};

const solutionsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.ngedrill.com/solutions#webpage",
      url: "https://www.ngedrill.com/solutions",
      name: "Drilling Solutions | Geology, Methods & Rig Selection",
      description:
        "NGE Drillsol drilling solutions organized by geology, drilling method and project requirements.",
      isPartOf: {
        "@id": "https://www.ngedrill.com/#website",
      },
      about: {
        "@id": "https://www.ngedrill.com/#organization",
      },
      inLanguage: "en",
    },

    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.ngedrill.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Solutions",
          item: "https://www.ngedrill.com/solutions",
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
          __html: JSON.stringify(solutionsSchema),
        }}
      />

      <SolutionsPage />
    </>
  );
}