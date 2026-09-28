import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Mountain,
  Drill,
  CheckCircle2,
} from "lucide-react";

import { countryMarkets } from "@/components/markets/markets.data";

interface CountryPageProps {
  params: Promise<{
    country: string;
  }>;
}

/* ============================================================
   SEO METADATA
   ============================================================ */

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { country } = await params;

  const market = countryMarkets.find(
    (item) => item.id.toLowerCase() === country.toLowerCase()
  );

  if (!market) {
    return {
      title: "Market Not Found",
      description: "The requested drilling market could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seoData: Record<
    string,
    {
      title: string;
      description: string;
    }
  > = {
    tunisia: {
      title: "Machine de Forage Tunisie | Water Well Drilling Rigs",
      description:
        "Machines de forage pour puits d'eau en Tunisie par NGE Drillsol. Solutions rotary, mud rotary et DTH pour agriculture, irrigation et projets de forage d'eau.",
    },

    morocco: {
      title: "Water Well Drilling Rigs in Morocco",
      description:
        "Explore NGE Drillsol water well, rotary and DTH drilling rigs suitable for groundwater, agriculture, mining and drilling projects in Morocco.",
    },

    egypt: {
      title: "Water Well Drilling Rigs in Egypt",
      description:
        "Explore NGE Drillsol drilling rigs for deep groundwater, agriculture and water well drilling projects across Egypt.",
    },

    kenya: {
      title: "Water Well Drilling Rigs in Kenya",
      description:
        "Explore NGE Drillsol water well and DTH drilling rigs suitable for Kenya's volcanic, basalt, clay and mixed geological formations.",
    },

    "south-africa": {
      title: "Water Well Drilling Rigs in South Africa",
      description:
        "Explore NGE Drillsol water well, DTH and core drilling rigs for groundwater, mining and exploration projects in South Africa.",
    },

    tanzania: {
      title: "Water Well Drilling Rigs in Tanzania",
      description:
        "Explore NGE Drillsol water well and DTH drilling rigs suitable for groundwater, agriculture, mining and drilling projects in Tanzania.",
    },
  };

  const seo = seoData[market.id] ?? {
    title: `Drilling Rigs in ${market.country}`,
    description: `Explore NGE Drillsol drilling solutions for groundwater, water well and drilling projects in ${market.country}.`,
  };

  const canonicalUrl = `/markets/africa/${market.id}`;

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      title: `${seo.title} | NGE Drillsol`,
      description: seo.description,
      url: canonicalUrl,
      siteName: "NGE Drillsol",
    },

    twitter: {
      card: "summary_large_image",
      title: `${seo.title} | NGE Drillsol`,
      description: seo.description,
    },
  };
}

/* ============================================================
   COUNTRY PAGE
   ============================================================ */

export default async function CountryPage({
  params,
}: CountryPageProps) {
  const { country } = await params;

  const market = countryMarkets.find(
    (item) => item.id.toLowerCase() === country.toLowerCase()
  );

  if (!market) {
    notFound();
  }

  const isTunisia = market.id === "tunisia";

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            BACK TO MARKETS
            ===================================================== */}

        <Link
          href="/markets"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-yellow-400"
        >
          <ArrowLeft size={17} />
          Back to Markets
        </Link>

        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="mt-10">
          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Africa Market
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white lg:text-6xl">
            {isTunisia
              ? "Machine de Forage en Tunisie"
              : market.country}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            {isTunisia
              ? "Machines et solutions de forage pour puits d'eau en Tunisie — forage rotary, mud rotary et DTH pour l'agriculture, l'irrigation et les projets de développement des eaux souterraines."
              : `Geological conditions and suitable drilling solutions for projects in ${market.country}.`}
          </p>
        </div>

        {/* =====================================================
            COUNTRY GEOLOGY
            ===================================================== */}

        <section className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-3">
            <Mountain
              size={25}
              className="text-yellow-400"
            />

            <h2 className="text-2xl font-bold">
              Country Geology
            </h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {market.geology.map((geology) => (
              <span
                key={geology}
                className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300"
              >
                {geology}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            {market.geologyOverview.map((text, index) => (
              <p
                key={index}
                className="max-w-4xl leading-8 text-slate-300"
              >
                {text}
              </p>
            ))}
          </div>
        </section>

        {/* =====================================================
            DRILLING METHODS
            ===================================================== */}

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center gap-3">
            <Drill
              size={25}
              className="text-yellow-400"
            />

            <h2 className="text-2xl font-bold">
              {isTunisia
                ? "Méthodes de Forage Adaptées en Tunisie"
                : "Suitable Drilling Methods"}
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {market.drillingMethods.map((method, index) => (
              <div
                key={method}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <h3 className="text-lg font-bold text-yellow-400">
                  {method}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {market.drillingMethodReasons[index]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            RIG REQUIREMENTS
            ===================================================== */}

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-bold">
            {isTunisia
              ? "Caractéristiques Requises pour une Machine de Forage"
              : "What the Drilling Rig Needs"}
          </h2>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {market.rigRequirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="mt-1 shrink-0 text-yellow-400"
                />

                <p className="leading-7 text-slate-300">
                  {requirement}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            NGE RECOMMENDED RIGS
            ===================================================== */}

        <section className="mt-6 rounded-[28px] border border-yellow-500/20 bg-yellow-500/[0.04] p-8">
          <div className="flex items-center gap-3">
            <Drill
              size={25}
              className="text-yellow-400"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                {isTunisia
                  ? "RECOMMANDATION NGE"
                  : "NGE Recommendation"}
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                {isTunisia
                  ? "Machines de Forage NGE pour la Tunisie"
                  : "Suitable NGE Drilling Rigs"}
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {market.recommendedRigs.map((rig, index) => (
              <div
                key={rig}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <h3 className="text-xl font-bold text-yellow-400">
                  {rig}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {market.rigReasons[index]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            APPLICATIONS
            ===================================================== */}

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-2xl font-bold">
            {isTunisia
              ? "Applications de Forage en Tunisie"
              : "Main Applications"}
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {market.applications.map((application) => (
              <span
                key={application}
                className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200"
              >
                {application}
              </span>
            ))}
          </div>
        </section>

        {/* =====================================================
            TUNISIA SEO CONTENT
            ===================================================== */}

        {isTunisia && (
          <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-bold">
              Machine de Forage pour Puits d&apos;Eau en Tunisie
            </h2>

            <div className="mt-6 max-w-4xl space-y-4 leading-8 text-slate-300">
              <p>
                NGE Drillsol propose des machines de forage pour les projets
                de puits d&apos;eau, d&apos;irrigation, d&apos;agriculture et
                de développement des eaux souterraines en Tunisie.
              </p>

              <p>
                Le choix d&apos;une foreuse dépend de la profondeur du puits,
                du diamètre requis et de la formation géologique. Les terrains
                comprenant du sable, de l&apos;argile et des formations
                sédimentaires peuvent nécessiter le forage rotary ou mud
                rotary, tandis que les formations calcaires dures et les
                roches compétentes peuvent nécessiter une foreuse DTH.
              </p>

              <p>
                Pour sélectionner une machine de forage hydraulique adaptée
                à un projet en Tunisie, NGE Drillsol étudie les conditions
                géologiques, la profondeur prévue, le diamètre du forage et
                la méthode de forage avant de recommander une configuration.
              </p>
            </div>
          </section>
        )}

        {/* =====================================================
            CONTACT CTA
            ===================================================== */}

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
          >
            {isTunisia
              ? "Discuter de Votre Projet de Forage"
              : "Discuss Your Drilling Project"}

            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </main>
  );
}