"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Navigation,
  Globe2,
} from "lucide-react";

import { office } from "./contact.data";

export default function GlobalOffice() {
  return (
    <section
      id="office"
      className="space-y-16"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Head Office
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Visit Our
          <span className="block text-yellow-400">
            Engineering Facility
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Our headquarters serves as the center for engineering,
          manufacturing, customer support and global export operations.
        </p>

      </div>

      {/* Main Card */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-10 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#111827] via-[#090909] to-[#05070B] p-10 lg:grid-cols-[1.2fr_1fr]"
      >

        {/* Left */}

        <div>

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-yellow-500/10">

            <Building2
              size={42}
              className="text-yellow-400"
            />

          </div>

          <h3 className="mt-8 text-4xl font-bold text-white">
            {office.title}
          </h3>

          <p className="mt-8 flex items-start gap-4 text-lg leading-8 text-slate-300">

            <MapPin
              className="mt-1 text-yellow-400"
              size={22}
            />

            {office.address}

          </p>

          <div className="mt-8 space-y-5">

            <Link
              href={`tel:${office.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-yellow-500/30"
            >

              <Phone
                size={20}
                className="text-yellow-400"
              />

              <span className="text-white">
                {office.phone}
              </span>

            </Link>

            <Link
              href={`mailto:${office.email}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-yellow-500/30"
            >

              <Mail
                size={20}
                className="text-yellow-400"
              />

              <span className="text-white break-all">
                {office.email}
              </span>

            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <Globe2
              size={34}
              className="text-yellow-400"
            />

            <h4 className="mt-5 text-2xl font-bold text-white">
              Export Operations
            </h4>

            <p className="mt-4 leading-8 text-slate-400">
              Supporting customers across international markets with
              engineering guidance, documentation and logistics
              coordination.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

            <Navigation
              size={34}
              className="text-yellow-400"
            />

            <h4 className="mt-5 text-2xl font-bold text-white">
              Factory Visits
            </h4>

            <p className="mt-4 leading-8 text-slate-400">
              We welcome scheduled visits for customers who wish to
              explore our engineering capabilities and manufacturing
              facilities.
            </p>

          </div>

        </div>

      </motion.div>

    </section>
  );
}