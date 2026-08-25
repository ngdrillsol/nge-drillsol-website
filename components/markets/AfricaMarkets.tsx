"use client";

import Link from "next/link";
import { ArrowRight, Mountain, Drill } from "lucide-react";
import { countryMarkets } from "./markets.data";

const africanCountries = countryMarkets.filter(
  (market) => market.region === "Africa"
);

export default function AfricaMarkets() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-12 text-center">

          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
            Africa
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            Engineering Solutions for Africa
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Explore drilling solutions based on the geological conditions
            and drilling requirements of each country.
          </p>

        </div>

        {/* Country Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {africanCountries.map((country) => (

            <Link
              key={country.id}
              href={country.href}
              className="group flex min-h-[430px] flex-col rounded-[28px] border border-white/10 bg-[#090909] p-7 transition-all duration-300 hover:border-yellow-500/40 hover:bg-[#0d0d0d]"
            >

              {/* Country Header */}

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold text-white">
                  {country.country}
                </h3>

                <ArrowRight
                  size={22}
                  className="text-yellow-400 transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

              {/* Geology */}

              <div className="mt-8">

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

                  <Mountain size={16} />

                  Major Geology

                </div>

                <div className="mt-4 flex flex-wrap gap-2">

                  {country.geology.map((item: string) => (

                    <span
                      key={item}
                      className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-2 text-sm text-yellow-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* Suitable Rigs */}

              <div className="mt-8">

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">

                  <Drill size={16} />

                  Suitable NGE Rigs

                </div>

                <div className="mt-4 flex flex-wrap gap-2">

                  {country.recommendedRigs.map((rig: string) => (

                    <span
                      key={rig}
                      className="rounded-full bg-white/10 px-3 py-2 text-sm text-white"
                    >
                      {rig}
                    </span>

                  ))}

                </div>

              </div>

              {/* Bottom CTA */}

              <div className="mt-auto pt-10 text-sm font-semibold text-yellow-400">

                View Country Drilling Guide →

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}