"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  MessageCircle,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-4 py-12 sm:rounded-[30px] sm:px-6 sm:py-16 lg:rounded-[36px] lg:px-16 lg:py-20">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Global Engineering Support
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
          Looking for the Right
          <span className="block text-yellow-400">
            Drilling Solution?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
          Tell us your country, geology, drilling depth and application.
          Our engineering team will recommend the most suitable drilling
          rig, drilling method and accessories for your project.
        </p>

        {/* Engineering Checklist */}

        <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:mt-12 sm:gap-4 sm:rounded-3xl sm:p-6 lg:grid-cols-4 lg:p-8">

          <div>
            <Globe2
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Country
            </p>

            <p className="mt-2 text-white">
              Project Location
            </p>
          </div>

          <div>
            <Globe2
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Geology
            </p>

            <p className="mt-2 text-white">
              Ground Formation
            </p>
          </div>

          <div>
            <Globe2
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Application
            </p>

            <p className="mt-2 text-white">
              Water • Mining • Solar
            </p>
          </div>

          <div>
            <Globe2
              size={28}
              className="mx-auto text-yellow-400"
            />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Recommendation
            </p>

            <p className="mt-2 text-white">
              Best NGE Solution
            </p>
          </div>

        </div>

        {/* Action Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col justify-center gap-3 sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-5"
        >

          {/* Engineering Recommendation */}

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Get Engineering Recommendation

            <ArrowRight size={18} />
          </Link>

          {/* WhatsApp */}

          <Link
            href="https://wa.me/919106360907"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/10"
          >
            <MessageCircle size={18} />

            WhatsApp
          </Link>

        </motion.div>

      </div>

    </section>
  );
}
