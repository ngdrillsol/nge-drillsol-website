"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPinned,
  Navigation,
  Building2,
  Globe2,
} from "lucide-react";

export default function MapSection() {
  return (
    <section className="space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Find Us
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Visit Our
          <span className="block text-yellow-400">
            Headquarters
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          We welcome customers, consultants and business partners to
          visit our engineering and manufacturing facility by prior
          appointment.
        </p>

      </div>

      {/* Map */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[36px] border border-white/10 bg-[#090909]"
      >

        {/* Placeholder */}

        <div className="flex h-[520px] flex-col items-center justify-center bg-gradient-to-br from-[#111827] via-[#0F172A] to-[#05070B] px-8 text-center">

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500/10">

            <MapPinned
              size={52}
              className="text-yellow-400"
            />

          </div>

          <h3 className="mt-8 text-4xl font-bold text-white">
            NGE DRILLSOL PVT. LTD.
          </h3>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
            Mehsana, Gujarat, India
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white">

              <Building2
                size={20}
                className="text-yellow-400"
              />

              Engineering Facility

            </div>

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white">

              <Globe2
                size={20}
                className="text-yellow-400"
              />

              Export Headquarters

            </div>

          </div>

          <Link
            href="https://maps.google.com"
            target="_blank"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >

            <Navigation size={18} />

            Get Directions

          </Link>

        </div>

      </motion.div>

    </section>
  );
}