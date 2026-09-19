import Link from "next/link";

import SolutionsHero from "./SolutionsHero";
import GeologySelector from "./GeologySelector";
import RigRecommendation from "./RigRecommendation";
import DrillingGuide from "./DrillingGuide";
import WhyNGEEngineering from "./WhyNGEEngineering";
import CTASection from "./CTASection";

const rigCategoryLinks = [
  {
    title: "Water Well Drilling Rigs",
    href: "/drilling-rigs/water-well-drilling-rigs",
    description:
      "Explore drilling rigs for groundwater, borewell and deep water well projects.",
  },
  {
    title: "DTH Drilling Rigs",
    href: "/drilling-rigs/dth-drilling-rigs",
    description:
      "Explore DTH drilling rigs for hard-rock and compressed-air drilling applications.",
  },
  {
    title: "Rotary Drilling Rigs",
    href: "/drilling-rigs/rotary-drilling-rigs",
    description:
      "Explore rotary drilling rigs for soft, mixed and large-diameter drilling requirements.",
  },
  {
    title: "Piling Rigs",
    href: "/drilling-rigs/piling-rigs",
    description:
      "Explore piling rigs for foundation, solar and infrastructure applications.",
  },
  {
    title: "Core Drilling Rigs",
    href: "/drilling-rigs/core-drilling-rigs",
    description:
      "Explore core drilling rigs for geological and exploration applications.",
  },
  {
    title: "Tractor Mounted Drilling Rigs",
    href: "/drilling-rigs/tractor-mounted-drilling-rigs",
    description:
      "Explore compact tractor-mounted drilling and piling equipment.",
  },
  {
    title: "Workover Rigs",
    href: "/drilling-rigs/workover-rigs",
    description:
      "Explore NGE Drillsol workover rig equipment and machine information.",
  },
];

const projectLinks = [
  {
    title: "Industries",
    href: "/industries",
    description:
      "Explore drilling equipment according to industry and project application.",
  },
  {
    title: "Services",
    href: "/services",
    description:
      "Explore NGE Drillsol drilling, engineering and project support services.",
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "Review NGE Drillsol project experience and completed drilling work.",
  },
  {
    title: "Global Markets",
    href: "/markets",
    description:
      "Explore markets and regions served by NGE Drillsol.",
  },
  {
    title: "Resources",
    href: "/resources",
    description:
      "Access drilling knowledge, technical information and useful resources.",
  },
  {
    title: "Contact Engineering Team",
    href: "/contact",
    description:
      "Share your depth, diameter, geology and application for equipment selection.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#05070B] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 py-8 sm:gap-20 sm:px-6 sm:py-10 lg:gap-28 lg:px-8">

        {/* =====================================================
            HERO
        ===================================================== */}

        <SolutionsHero />

        {/* =====================================================
            GEOLOGY
        ===================================================== */}

        <section
          id="geology"
          className="scroll-mt-28"
        >
          <GeologySelector />
        </section>

        {/* =====================================================
            DRILLING RIG CATEGORY LINKS
        ===================================================== */}

        <section
          aria-labelledby="solution-rig-categories"
          className="rounded-[30px] border border-white/10 bg-[#090909] p-6 sm:p-8 lg:p-10"
        >
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">
              Drilling Equipment
            </span>

            <h2
              id="solution-rig-categories"
              className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              Explore Drilling Solutions by Rig Category
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Select a drilling rig category according to drilling
              method, geology, project type and required equipment
              configuration.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rigCategoryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-yellow-500/30 hover:bg-yellow-500/[0.04]"
              >
                <h3 className="font-semibold text-white transition group-hover:text-yellow-400">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-yellow-400">
                  Explore {item.title} →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/drilling-rigs"
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-500/30 hover:text-yellow-400"
            >
              View All Drilling Rigs
            </Link>
          </div>
        </section>

        {/* =====================================================
            ENGINEERING RECOMMENDATION
        ===================================================== */}

        <RigRecommendation />

        {/* =====================================================
            DRILLING METHODS
        ===================================================== */}

        <DrillingGuide />

        {/* =====================================================
            PROJECT / WEBSITE INTERNAL LINK HUB
        ===================================================== */}

        <section
          aria-labelledby="project-support-links"
          className="border-t border-white/10 pt-16 sm:pt-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-400">
              Explore NGE Drillsol
            </span>

            <h2
              id="project-support-links"
              className="mt-6 text-3xl font-bold sm:text-4xl"
            >
              Continue Your Project Research
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-400">
              Explore industries, services, completed projects,
              international markets and technical resources before
              discussing your drilling requirement with our team.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-yellow-500/30"
              >
                <h3 className="font-semibold text-white transition group-hover:text-yellow-400">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex text-sm font-semibold text-yellow-400">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================
            WHY NGE
        ===================================================== */}

        <WhyNGEEngineering />

        {/* =====================================================
            CTA
        ===================================================== */}

        <CTASection />

      </div>
    </main>
  );
}