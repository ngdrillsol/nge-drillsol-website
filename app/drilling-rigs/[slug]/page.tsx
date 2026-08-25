import type { Metadata } from "next";

import {
  RigDetailPage,
  getRigBySlug,
  getAllRigs,
} from "@/components/drilling-rigs";

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

  return [
    ...rigParams,
    ...categoryParams,
  ];
}

/* ============================================================
   SEO METADATA
   ============================================================ */

export async function generateMetadata({
  params,
}: RigPageProps): Promise<Metadata> {
  const { slug } = await params;

  /* ----------------------------------------------------------
     CHECK CATEGORY FIRST
     ---------------------------------------------------------- */

  const category = rigCategories.find(
    (item) =>
      item.href.split("/").filter(Boolean).pop() === slug
  );

  if (category) {
    return {
      title: `${category.title} | NGE DRILLSOL`,

      description: category.description,

      keywords: [
        category.title,
        "drilling rigs",
        "NGE DRILLSOL",
        ...category.methods,
        ...category.applications,
      ],
    };
  }

  /* ----------------------------------------------------------
     CHECK INDIVIDUAL RIG
     ---------------------------------------------------------- */

  const rig = getRigBySlug(slug);

  if (rig) {
    return {
      title: `${rig.model} | ${rig.name} | NGE DRILLSOL`,

      description: rig.tagline,

      keywords: [
        rig.model,
        rig.name,
        "drilling rig",
        "NGE DRILLSOL",
        ...(rig.category || []),
      ],
    };
  }

  /* ----------------------------------------------------------
     FALLBACK
     ---------------------------------------------------------- */

  return {
    title: "Drilling Rigs | NGE DRILLSOL",

    description:
      "Explore drilling rigs engineered by NGE DRILLSOL for water well, DTH, rotary, piling, core drilling and other applications.",
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
     ========================================================== */

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#05070B] px-6 text-white">

      <div className="max-w-xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
          Page Not Found
        </p>

        <h1 className="mt-5 text-4xl font-bold">
          This drilling rig page could not be found.
        </h1>

        <p className="mt-5 text-slate-400">
          The requested drilling rig or category does not exist
          or the URL is incorrect.
        </p>

        <a
          href="/drilling-rigs"
          className="mt-8 inline-flex rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:bg-yellow-400"
        >
          View All Drilling Rigs
        </a>

      </div>

    </main>
  );
}