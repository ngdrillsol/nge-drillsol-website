"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function InquiryForm() {
  return (
    <section
      id="inquiry-form"
      className="space-y-14"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Inquiry
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Tell Us About
          <span className="block text-yellow-400">
            Your Project
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Provide your project requirements and our engineering team
          will recommend the most suitable drilling solution.
        </p>

      </div>

      {/* Form */}

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[36px] border border-white/10 bg-[#090909] p-10"
      >

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            placeholder="Full Name"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="tel"
            placeholder="Phone / WhatsApp"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="text"
            placeholder="Country"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <select className="rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none focus:border-yellow-500">

            <option>Application</option>

            <option>Water Well Drilling</option>

            <option>DTH Drilling</option>

            <option>Rotary Drilling</option>

            <option>Piling</option>

            <option>Core Drilling</option>

            <option>Workover Rig</option>

          </select>

          <input
            type="text"
            placeholder="Required Drilling Depth"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="text"
            placeholder="Bore Diameter"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="text"
            placeholder="Preferred Rig (Optional)"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

        </div>

        <textarea
          rows={6}
          placeholder="Describe your project requirements..."
          className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
        />

        <button
          type="submit"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          <Send size={18} />

          Submit Engineering Inquiry
        </button>

      </motion.form>

    </section>
  );
}