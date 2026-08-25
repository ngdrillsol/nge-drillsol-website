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

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* BACK */}

        <Link
          href="/markets"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-yellow-400"
        >
          <ArrowLeft size={17} />
          Back to Markets
        </Link>

        {/* HEADER */}

        <div className="mt-10">

          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Africa Market
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white lg:text-6xl">
            {market.country}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Geological conditions and suitable drilling solutions for
            projects in {market.country}.
          </p>

        </div>

        {/* GEOLOGY */}

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

        {/* DRILLING METHOD */}

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">

          <div className="flex items-center gap-3">

            <Drill
              size={25}
              className="text-yellow-400"
            />

            <h2 className="text-2xl font-bold">
              Suitable Drilling Methods
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

        {/* RIG REQUIREMENTS */}

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">

          <h2 className="text-2xl font-bold">
            What the Drilling Rig Needs
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

        {/* NGE RIGS */}

        <section className="mt-6 rounded-[28px] border border-yellow-500/20 bg-yellow-500/[0.04] p-8">

          <div className="flex items-center gap-3">

            <Drill
              size={25}
              className="text-yellow-400"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
                NGE Recommendation
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Suitable NGE Drilling Rigs
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

        {/* APPLICATIONS */}

        <section className="mt-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">

          <h2 className="text-2xl font-bold">
            Main Applications
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

        {/* CONTACT */}

        <div className="mt-10">

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:scale-105"
          >
            Discuss Your Drilling Project
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </main>
  );
}