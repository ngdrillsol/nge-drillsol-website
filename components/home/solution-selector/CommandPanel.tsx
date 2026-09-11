
import Link from "next/link";

import OperationModule from "./OperationModule";

const operations = [
  {
    title: "BUY A DRILLING RIG",
    applications: [
      "Water Well",
      "DTH",
      "Rotary",
      "Core",
      "Piling",
    ],
    metric: "124",
    metricLabel: "AVAILABLE CONFIGURATIONS",
  },
  {
    title: "SELECT BY GEOLOGY",
    applications: [
      "Hard Rock",
      "Soft Formation",
      "Sand",
      "Clay",
      "Mixed Geology",
    ],
    metric: "06",
    metricLabel: "GEOLOGY CATEGORIES",
  },
  {
    title: "SPARE PARTS",
    applications: [
      "Drill Pipes",
      "Drag Bits",
      "DTH Hammers",
      "Mud Pumps",
      "Hydraulics",
    ],
    metric: "500+",
    metricLabel: "PRODUCTS",
  },
  {
    title: "RIG CUSTOMIZATION",
    applications: [
      "Hydraulics",
      "Mast Design",
      "Rotary Head",
      "Controls",
      "Carrier Integration",
    ],
    metric: "100+",
    metricLabel: "CUSTOM OPTIONS",
  },
  {
    title: "TECHNICAL CONSULTANCY",
    applications: [
      "Rig Selection",
      "Drilling Method",
      "Formation Analysis",
      "Project Planning",
      "Tender Support",
    ],
    metric: "25+",
    metricLabel: "YEARS OF EXPERIENCE",
  },
  {
    title: "GOVERNMENT & EPC",
    applications: [
      "Water Supply",
      "Solar Projects",
      "Infrastructure",
      "Mining",
      "Rural Development",
    ],
    metric: "40+",
    metricLabel: "COUNTRIES SERVED",
  },
];

export default function CommandPanel() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#050B14] py-12 sm:py-16 lg:py-32"
      aria-labelledby="drilling-solution-selector-heading"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1420] shadow-[0_0_60px_rgba(37,99,235,0.08)]">

          {/* Corner Bolts */}

          <span className="absolute left-5 top-5 h-2.5 w-2.5 rounded-full bg-zinc-500/60 ring-2 ring-black/30" />

          <span className="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-zinc-500/60 ring-2 ring-black/30" />

          <span className="absolute bottom-5 left-5 h-2.5 w-2.5 rounded-full bg-zinc-500/60 ring-2 ring-black/30" />

          <span className="absolute bottom-5 right-5 h-2.5 w-2.5 rounded-full bg-zinc-500/60 ring-2 ring-black/30" />

          {/* ===================================================
              HEADER
          =================================================== */}

          <div className="px-5 py-10 text-center sm:px-8 sm:py-12 md:px-16 md:py-16">

            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-blue-400">
              Drilling Equipment Selection
            </p>

            <h2
              id="drilling-solution-selector-heading"
              className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl"
            >
              Find the Right Drilling Rig
              <span className="block text-blue-400">
                for Your Project
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Explore NGE Drillsol drilling rigs, geology-based
              solutions, spare parts, customization and engineering
              support according to your drilling application and
              project requirements.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base">
              Start with the drilling method, geological formation,
              required equipment or project type. The correct
              solution depends on drilling depth, bore diameter,
              formation conditions and operating requirements.
            </p>

            <div className="mx-auto mt-8 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-blue-500/70 to-transparent sm:mt-12" />

          </div>

          {/* ===================================================
              OPERATION LAYOUT
          =================================================== */}

          <div className="pb-8 lg:px-16 lg:pb-16">

            {/* Mobile */}

            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-8 lg:hidden">

              {operations.map((operation) => (
                <div
                  key={operation.title}
                  className="w-[86vw] max-w-[360px] shrink-0 snap-start"
                >
                  <OperationModule {...operation} />
                </div>
              ))}

            </div>

            {/* Desktop */}

            <div className="hidden lg:block">

              <div className="mb-6">
                <OperationModule {...operations[0]} />
              </div>

              <div className="mb-6 grid grid-cols-2 gap-6">
                <OperationModule {...operations[1]} />
                <OperationModule {...operations[2]} />
              </div>

              <div className="mb-6 grid grid-cols-2 gap-6">
                <OperationModule {...operations[3]} />
                <OperationModule {...operations[4]} />
              </div>

              <OperationModule {...operations[5]} />

            </div>

          </div>

          {/* ===================================================
              CRAWLABLE SEO LINKS
          =================================================== */}

          <nav
            aria-label="Drilling equipment and services"
            className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-16"
          >

            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Explore NGE Drillsol
            </p>

            <div className="flex flex-wrap justify-center gap-3">

              <Link
                href="/drilling-rigs"
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
              >
                Drilling Rigs
              </Link>

              <Link
                href="/solutions"
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
              >
                Drilling Solutions
              </Link>

              <Link
                href="/services/rig-customization"
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
              >
                Rig Customization
              </Link>

              <Link
                href="/services/spare-parts"
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-blue-500/40 hover:text-blue-400"
              >
                Drilling Spare Parts
              </Link>

            </div>

          </nav>

        </div>

      </div>

    </section>
  );
}