"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Handshake,
} from "lucide-react";

export default function CTASection() {
  const whatsappMessage = encodeURIComponent(
    "Hello NGE Drillsol, I would like to discuss a drilling rig requirement. I can share the drilling depth, bore diameter, geological formation, drilling method and project location."
  );

  return (
    <section
      className="relative overflow-hidden rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-4 py-12 sm:rounded-[30px] sm:px-6 sm:py-16 lg:rounded-[36px] lg:px-16 lg:py-20"
      aria-labelledby="about-cta-heading"
    >

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <div className="flex justify-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10">

            <Handshake
              size={42}
              className="text-yellow-400"
              aria-hidden="true"
            />

          </div>

        </div>

        <span className="mt-8 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Discuss Your Drilling Requirement
        </span>

        <h2
          id="about-cta-heading"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl"
        >
          Find the Right Rig for
          <span className="block text-yellow-400">
            Your Drilling Project
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
          Share your target drilling depth, bore diameter,
          geological formation, drilling method and project
          location. NGE Drillsol can help evaluate a suitable water
          well, DTH, rotary, piling, core or workover rig
          configuration.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col justify-center gap-3 sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-5"
        >

          <Link
            href="/drilling-rigs"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-yellow-400"
          >
            Explore Drilling Rigs

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/10"
          >
            Contact Our Team
          </Link>

          <a
            href={`https://wa.me/919106360907?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/10"
          >
            <MessageCircle
              size={18}
              aria-hidden="true"
            />

            WhatsApp
          </a>

        </motion.div>

      </div>

    </section>
  );
}