"use client";

import RigHero from "./RigHero";
import RigGallery from "./RigGallery";
import RigQuickSpecs from "./RigQuickSpecs";
import RigOverview from "./RigOverview";
import RigFeatures from "./RigFeatures";
import RigSpecifications from "./RigSpecifications";
import RigApplications from "./RigApplications";
import RigEquipment from "./RigEquipment";
import RigPerformance from "./RigPerformance";
import RigProjects from "./RigProjects";
import RigVideos from "./RigVideos";
import RigDownloads from "./RigDownloads";
import RigFAQ from "./RigFAQ";
import RelatedRigs from "./RelatedRigs";
import RigInquiryCTA from "./RigInquiryCTA";

import type { RigData } from "./rig.types";

interface RigDetailPageProps {
  rig: RigData;
}

export default function RigDetailPage({
  rig,
}: RigDetailPageProps) {
  const rigUrl = `https://www.ngedrill.com/drilling-rigs/${rig.slug}`;

  /* ==========================================================
     PRODUCT STRUCTURED DATA
     ========================================================== */

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: `${rig.model} ${rig.name}`,

    model: rig.model,

    description: rig.tagline,

    url: rigUrl,

    image: rig.heroImage.startsWith("http")
      ? rig.heroImage
      : `https://www.ngedrill.com${rig.heroImage}`,

    brand: {
      "@type": "Brand",
      name: "NGE Drillsol",
    },

    manufacturer: {
      "@type": "Organization",
      name: "NGE Drillsol Pvt. Ltd.",
      url: "https://www.ngedrill.com",
    },

    category:
      rig.category && rig.category.length > 0
        ? rig.category.join(", ")
        : "Drilling Rig",
  };

  /* ==========================================================
     BREADCRUMB STRUCTURED DATA
     ========================================================== */

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.ngedrill.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Drilling Rigs",
        item: "https://www.ngedrill.com/drilling-rigs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${rig.model} ${rig.name}`,
        item: rigUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#05070B] text-white">

      {/* =====================================================
          SEO / GEO STRUCTURED DATA
      ===================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* =====================================================
          HERO
      ===================================================== */}

      <RigHero rig={rig} />

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-10 sm:gap-20 sm:px-6 sm:py-12 lg:gap-28 lg:px-8">

        {/* =====================================================
            GALLERY
        ===================================================== */}

        <RigGallery rig={rig} />

        {/* =====================================================
            QUICK SPECIFICATIONS
        ===================================================== */}

        <RigQuickSpecs rig={rig} />

        {/* =====================================================
            OVERVIEW
        ===================================================== */}

        <RigOverview rig={rig} />

        {/* =====================================================
            KEY FEATURES
        ===================================================== */}

        <RigFeatures rig={rig} />

        {/* =====================================================
            TECHNICAL SPECIFICATIONS
        ===================================================== */}

        <RigSpecifications rig={rig} />

        {/* =====================================================
            APPLICATIONS
        ===================================================== */}

        <RigApplications rig={rig} />

        {/* =====================================================
            EQUIPMENT
        ===================================================== */}

        <RigEquipment rig={rig} />

        {/* =====================================================
            PERFORMANCE
        ===================================================== */}

        {rig.performance && rig.performance.length > 0 && (
          <RigPerformance rig={rig} />
        )}

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        {rig.projects && rig.projects.length > 0 && (
          <RigProjects rig={rig} />
        )}

        {/* =====================================================
            VIDEOS
        ===================================================== */}

        {rig.videos && rig.videos.length > 0 && (
          <RigVideos rig={rig} />
        )}

        {/* =====================================================
            DOWNLOADS
        ===================================================== */}

        {rig.downloads && rig.downloads.length > 0 && (
          <RigDownloads rig={rig} />
        )}

        {/* =====================================================
            FAQ
        ===================================================== */}

        {rig.faqs && rig.faqs.length > 0 && (
          <RigFAQ rig={rig} />
        )}

        {/* =====================================================
            RELATED RIGS
        ===================================================== */}

        {rig.relatedRigs && rig.relatedRigs.length > 0 && (
          <RelatedRigs rig={rig} />
        )}

        {/* =====================================================
            FINAL INQUIRY CTA
        ===================================================== */}

        <RigInquiryCTA rig={rig} />

      </div>
    </main>
  );
}