"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mountain,
  Drill,
  Droplets,
} from "lucide-react";

import { countryMarkets } from "./markets.data";

const middleEastCountries = countryMarkets.filter(
  (country) => country.region === "Middle East"
);

export default function MiddleEastMarkets() {
  return (
    <section className="space-y-14">

      {/* Header */}

      <div className="text-center">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-400">
          Middle East
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Engineering Solutions for the Middle East
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Heavy-duty drilling solutions developed for desert conditions,
          limestone formations, sandstone geology and demanding oil &
          gas, water well and infrastructure projects.
        </p>

      </div>

      {/* Countries */}

      <div className="grid gap-8 lg:grid-cols-2">

        {middleEastCountries.map((country, index) => (

          <motion.div
            key={country.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >

            <Link
              href={country.href}
              className="group block rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1"
            >

              {/* Country */}

              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-bold text-white">
                  {country.country}
                </h3>

                <ArrowRight
                  size={22}
                  className="text-blue-400 transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>

              {/* Geology */}

              <div className="mt-8">

                <div className="mb-3 flex items-center gap-2 text-blue-400">

                  <Mountain size={18} />

                  <span className="text-sm uppercase tracking-[0.25em]">
                    Major Geology
                  </span>

                </div>

                <div className="flex flex-wrap gap-2">

                  {country.geology.map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-300"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* Applications */}

              <div className="mt-8">

                <div className="mb-3 flex items-center gap-2 text-blue-400">

                  <Droplets size={18} />

                  <span className="text-sm uppercase tracking-[0.25em]">
                    Main Applications
                  </span>

                </div>

                <div className="flex flex-wrap gap-2">

                  {country.applications.map((item) => (

                    <span
                      key={item}
                      className="rounded-full bg-white/5 px-3 py-2 text-sm text-white"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* Rigs */}

              <div className="mt-8">

                <div className="mb-3 flex items-center gap-2 text-blue-400">

                  <Drill size={18} />

                  <span className="text-sm uppercase tracking-[0.25em]">
                    Recommended Rigs
                  </span>

                </div>

                <div className="flex flex-wrap gap-2">

                  {country.recommendedRigs.map((rig) => (

                    <span
                      key={rig}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
                    >
                      {rig}
                    </span>

                  ))}

                </div>

              </div>

              {/* CTA */}

              <div className="mt-10 flex items-center justify-between">

                <span className="font-semibold text-blue-400">
                  View Country Guide
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white">

                  <ArrowRight size={20} />

                </div>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
