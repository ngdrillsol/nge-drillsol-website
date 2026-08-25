"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  Landmark,
  Mountain,
} from "lucide-react";

import { marketRegions } from "./markets.data";

const icons = {
  africa: Globe2,
  "middle-east": Landmark,
  asia: Mountain,
};

export default function RegionSelector() {
  return (
    <section
      id="regions"
      className="space-y-14"
    >
      {/* Header */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Global Regions
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Choose Your Market
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Every region has different geological formations, drilling
          requirements and applications. Select your market to explore
          country-specific drilling solutions.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 lg:grid-cols-3">

        {marketRegions.map((region, index) => {

          const Icon =
            icons[region.id as keyof typeof icons];

          return (

            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >

              <Link
                href={`/markets/${region.id}`}
                className="group block rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
              >

                {/* Icon */}

                <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-yellow-500/10">

                  <Icon
                    size={34}
                    className="text-yellow-400"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-4xl font-bold text-white">

                  {region.title}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-400">

                  {region.description}

                </p>

                {/* Countries */}

                <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">

                  <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">

                    Countries Covered

                  </p>

                  <p className="mt-2 text-3xl font-bold text-white">

                    {region.countries}

                  </p>

                </div>

                {/* CTA */}

                <div className="mt-10 flex items-center justify-between">

                  <span className="font-semibold text-yellow-400">

                    Explore Region

                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-black transition-transform duration-300 group-hover:translate-x-1">

                    <ArrowRight size={20} />

                  </div>

                </div>

              </Link>

            </motion.div>

          );

        })}

      </div>
    </section>
  );
}