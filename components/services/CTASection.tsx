"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Settings,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-[24px] border border-yellow-500/20 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-4 py-12 sm:rounded-[30px] sm:px-6 sm:py-16 lg:rounded-[36px] lg:px-16 lg:py-20">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Starts Here
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">
          Let's Build the Right
          <span className="block text-yellow-400">
            Drilling Solution Together
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
          Share your project requirements with our engineering team.
          We'll recommend the most suitable drilling rig, drilling
          method and complete drilling solution based on your geology,
          application and operational objectives.
        </p>

        {/* Engineering Checklist */}

        <div className="mt-8 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:mt-12 sm:gap-4 sm:rounded-3xl sm:p-6 lg:grid-cols-4 lg:p-8">

          <div>
            <Settings size={28} className="mx-auto text-yellow-400" />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Project
            </p>

            <p className="mt-2 text-white">
              Share Requirements
            </p>
          </div>

          <div>
            <Settings size={28} className="mx-auto text-yellow-400" />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Engineering
            </p>

            <p className="mt-2 text-white">
              Solution Design
            </p>
          </div>

          <div>
            <Settings size={28} className="mx-auto text-yellow-400" />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Equipment
            </p>

            <p className="mt-2 text-white">
              Rig Recommendation
            </p>
          </div>

          <div>
            <Settings size={28} className="mx-auto text-yellow-400" />

            <p className="mt-4 text-sm uppercase tracking-wider text-yellow-400">
              Support
            </p>

            <p className="mt-2 text-white">
              Lifetime Partnership
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

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Start Your Project

            <ArrowRight size={18} />
          </Link>

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
