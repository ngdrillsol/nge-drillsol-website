"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe2,
  MapPin,
  Factory,
  ArrowRight,
} from "lucide-react";

const locations = [
  {
    title: "India",
    subtitle: "Headquarters & Manufacturing",
    description:
      "NGE Drillsol's engineering and manufacturing operations are based in Mehsana, Gujarat, India.",
  },
  {
    title: "Senegal",
    subtitle: "West Africa Support",
    description:
      "Regional support for drilling opportunities, customer requirements and projects across West African markets.",
  },
  {
    title: "Australia",
    subtitle: "Regional Business Support",
    description:
      "International business and market support for drilling equipment opportunities in Australia and surrounding markets.",
  },
];

export default function GlobalPresence() {
  return (
    <section
      className="space-y-16"
      aria-labelledby="global-presence-heading"
    >

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Global Presence
        </span>

        <h2
          id="global-presence-heading"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Engineering in India.
          <span className="block text-yellow-400">
            Supporting Projects Worldwide.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          NGE Drillsol combines its Indian engineering and
          manufacturing base with international market support for
          drilling contractors, infrastructure projects and
          equipment requirements across multiple regions.
        </p>

      </div>

      {/* Main */}

      <div className="grid gap-8 lg:grid-cols-3">

        {locations.map((location, index) => (

          <motion.article
            key={location.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.1,
            }}
            className="rounded-[30px] border border-white/10 bg-[#090909] p-8 transition hover:border-yellow-500/30"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10">

              {index === 0 ? (
                <Factory
                  size={30}
                  className="text-yellow-400"
                  aria-hidden="true"
                />
              ) : (
                <MapPin
                  size={30}
                  className="text-yellow-400"
                  aria-hidden="true"
                />
              )}

            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
              {location.subtitle}
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              {location.title}
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              {location.description}
            </p>

          </motion.article>

        ))}

      </div>

      {/* Global market statement */}

      <div className="rounded-[30px] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/[0.08] via-[#0F172A] to-[#090909] p-8 sm:p-10">

        <div className="flex flex-col items-center text-center">

          <Globe2
            size={46}
            className="text-yellow-400"
            aria-hidden="true"
          />

          <h3 className="mt-6 text-3xl font-bold text-white">
            Drilling Equipment for International Markets
          </h3>

          <p className="mt-5 max-w-4xl text-lg leading-9 text-slate-300">
            NGE Drillsol works with project requirements across
            Africa, the Middle East, Asia, Australia and other
            international markets, with particular experience in
            groundwater and drilling equipment applications.
          </p>

          <Link
            href="/markets"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-500 px-7 py-4 font-semibold text-black transition hover:bg-yellow-400"
          >
            Explore Global Markets

            <ArrowRight
              size={17}
              aria-hidden="true"
            />
          </Link>

        </div>

      </div>

    </section>
  );
}