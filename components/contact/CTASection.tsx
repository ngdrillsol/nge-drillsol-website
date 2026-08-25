"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Mail,
  Drill,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-yellow-500/20 bg-gradient-to-br from-[#07111F] via-[#090909] to-[#05070B] px-8 py-20 lg:px-16">

      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <div className="flex justify-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10">

            <Drill
              size={42}
              className="text-yellow-400"
            />

          </div>

        </div>

        <span className="mt-8 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Consultation
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white xl:text-6xl">
          Ready To Discuss
          <span className="block text-yellow-400">
            Your Drilling Project?
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
          Contact our engineering team today for expert guidance on
          drilling rigs, customized solutions, project planning and
          technical consultation. We look forward to becoming your
          trusted drilling engineering partner.
        </p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-5"
        >

          <Link
            href="#inquiry-form"
            className="inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Submit Inquiry

            <ArrowRight size={18} />
          </Link>

          <Link
            href="https://wa.me/919106360907"
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
          >
            <MessageCircle size={18} />

            WhatsApp
          </Link>

          <Link
            href="tel:+919106360907"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
          >
            <Phone size={18} />

            Call Us
          </Link>

          <Link
            href="mailto:info@ngedrillsol.com"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition hover:border-yellow-500/30"
          >
            <Mail size={18} />

            Email Us
          </Link>

        </motion.div>

      </div>

    </section>
  );
}