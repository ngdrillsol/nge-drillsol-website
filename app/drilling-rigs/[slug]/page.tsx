import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RigDetailPage from "@/components/drilling-rigs/RigDetailPage";

import {
  getRigBySlug,
  getAllRigs,
} from "@/components/drilling-rigs/rig.data";

import CategoryDrillingRigsPage from "@/components/drilling-rigs/CategoryDrillingRigsPage";

import {
  rigCategories,
} from "@/components/drilling-rigs/drilling-rigs.data";

interface RigPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* ============================================================
   STATIC PARAMS

   This route supports BOTH:

   /drilling-rigs/ngdr3000

   and

   /drilling-rigs/water-well-drilling-rigs
   ============================================================ */

export async function generateStaticParams() {
  const rigParams = getAllRigs().map((rig) => ({
    slug: rig.slug,
  }));

  const categoryParams = rigCategories.map((category) => ({
    slug: category.href.split("/").filter(Boolean).pop()!,
  }));

  return [...rigParams, ...categoryParams];
}

/* ============================================================
   SEO HELPERS
   ============================================================ */

function getCategorySeoTitle(slug: string, fallbackTitle: string) {
  const titles: Record<string, string> = {
    "water-well-drilling-rigs":
      "Water Well Drilling Rigs Manufacturer",

    "dth-drilling-rigs":
      "DTH Drilling Rigs Manufacturer",

    "rotary-drilling-rigs":
      "Rotary Drilling Rigs Manufacturer",

    "tractor-mounted-drilling-rigs":
      "Tractor Mounted Drilling Rigs Manufacturer",

    "piling-rigs":
      "Piling Rigs Manufacturer",

    "core-drilling-rigs":
      "Core Drilling Rigs Manufacturer",

    "workover-rigs":
      "Workover Rigs Manufacturer",
  };

  return titles[slug] ?? fallbackTitle;
}

function getRigSeoTitle(
  slug: string,
  model: string,
  name: string
) {
  const titles: Record<string, string> = {
    ngdr3000:
      "NGDR3000 Deep Water Well Drilling Rig",

    ngdr2000:
      "NGDR2000 Water Well Drilling Rig",

    ngdr1500:
      "NGDR1500 Water Well Drilling Rig",

    ngdr1000:
      "NGDR1000 Water Well Drilling Rig",

    ngdr500:
      "NGDR500 Water Well Drilling Rig",

    ngdth600r:
      "NGDTH600R Truck Mounted DTH Drilling Rig",

    ngdth300r:
      "NGDTH300R Truck Mounted DTH Drilling Rig",

    ngdth50:
      "NGDTH50 Tractor Mounted DTH Drilling Rig",

    ngdp15:
      "NGDP15 Micro Piling Rig",

    ngdp30:
      "NGDP30 Micro Piling Rig",

    ngdp60:
      "NGDP60 Micro Piling Rig",
  };

  return titles[slug] ?? `${model} ${name}`;
}

/* ============================================================
   SEO METADATA
   ============================================================ */

export async function generateMetadata({
  params,
}: RigPageProps): Promise<Metadata> {
  const { slug } = await params;

  const canonicalUrl = `/drilling-rigs/${slug}`;

  /* ----------------------------------------------------------
     1. CHECK CATEGORY FIRST
     ---------------------------------------------------------- */

  const category = rigCategories.find(
    (item) =>
      item.href.split("/").filter(Boolean).pop() === slug
  );

  if (category) {
    const seoTitle = getCategorySeoTitle(
      slug,
      category.title
    );

    const description =
      category.description ||
      `Explore ${category.title} engineered by NGE Drillsol for professional water well, DTH, rotary, piling and drilling applications worldwide.`;

    return {
      /*
       * IMPORTANT:
       * Do NOT add "| NGE Drillsol" here.
       * app/layout.tsx already adds it automatically.
       */
      title: seoTitle,

      description,

      alternates: {
        canonical: canonicalUrl,
      },

      robots: {
        index: true,
        follow: true,
      },

      openGraph: {
        type: "website",
        title: `${seoTitle} | NGE Drillsol`,
        description,
        url: canonicalUrl,
        siteName: "NGE Drillsol",
      },

      twitter: {
        card: "summary_large_image",
        title: `${seoTitle} | NGE Drillsol`,
        description,
      },
    };
  }

  /* ----------------------------------------------------------
     2. CHECK INDIVIDUAL RIG
     ---------------------------------------------------------- */

  const rig = getRigBySlug(slug);

  if (rig) {
    const seoTitle = getRigSeoTitle(
      slug,
      rig.model,
      rig.name
    );

    const description =
      rig.tagline ||
      `${rig.model} ${rig.name} engineered by NGE Drillsol for professional drilling applications and global water well projects.`;

    return {
      /*
       * Root layout automatically adds:
       * "| NGE Drillsol"
       */
      title: seoTitle,

      description,

      alternates: {
        canonical: canonicalUrl,
      },

      robots: {
        index: true,
        follow: true,
      },

      openGraph: {
        type: "website",
        title: `${seoTitle} | NGE Drillsol`,
        description,
        url: canonicalUrl,
        siteName: "NGE Drillsol",
      },

      twitter: {
        card: "summary_large_image",
        title: `${seoTitle} | NGE Drillsol`,
        description,
      },
    };
  }

  /* ----------------------------------------------------------
     3. INVALID URL
     ---------------------------------------------------------- */

  return {
    title: "Drilling Rig Not Found",

    description:
      "The requested drilling rig or drilling rig category could not be found.",

    robots: {
      index: false,
      follow: false,
    },
  };
}

/* ============================================================
   PAGE
   ============================================================ */

export default async function RigPage({
  params,
}: RigPageProps) {
  const { slug } = await params;

  /* ==========================================================
     1. CHECK CATEGORY
     ========================================================== */

  const category = rigCategories.find(
    (item) =>
      item.href.split("/").filter(Boolean).pop() === slug
  );

  if (category) {
    return (
      <CategoryDrillingRigsPage
        category={category}
      />
    );
  }

  /* ==========================================================
     2. CHECK INDIVIDUAL RIG
     ========================================================== */

  const rig = getRigBySlug(slug);

  if (rig) {
    return (
      <RigDetailPage
        rig={rig}
      />
    );
  }

  /* ==========================================================
     3. INVALID SLUG

     IMPORTANT FOR SEO:
     Return a real HTTP 404 instead of showing a "not found"
     page with HTTP 200.
     ========================================================== */

  notFound();
}