"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import type { FormEvent } from "react";

export default function InquiryForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const value = (name: string) => String(formData.get(name) ?? "").trim();

    const message = `NGE DRILLSOL - ENGINEERING INQUIRY

Name: ${value("name")}
Email: ${value("email")}
Phone / WhatsApp: ${value("phone")}
Country: ${value("country")}
Application: ${value("application")}
Required Drilling Depth: ${value("depth")}
Bore Diameter: ${value("boreDiameter")}
Preferred Rig: ${value("preferredRig") || "Not specified"}

Project Requirements:
${value("requirements")}`;

    window.open(
      `https://wa.me/919106360907?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

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

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
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
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-[24px] border border-white/10 bg-[#090909] p-5 sm:rounded-[30px] sm:p-8 lg:rounded-[36px] lg:p-10"
      >

        <div className="grid gap-6 md:grid-cols-2">

          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Full Name"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Email Address"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="Phone / WhatsApp"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="text"
            name="country"
            required
            autoComplete="country-name"
            placeholder="Country"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <select
            name="application"
            required
            defaultValue=""
            className="rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none focus:border-yellow-500"
          >

            <option value="" disabled>Application</option>

            <option>Water Well Drilling</option>

            <option>DTH Drilling</option>

            <option>Rotary Drilling</option>

            <option>Piling</option>

            <option>Core Drilling</option>

            <option>Workover Rig</option>

          </select>

          <input
            type="text"
            name="depth"
            required
            placeholder="Required Drilling Depth"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="text"
            name="boreDiameter"
            required
            placeholder="Bore Diameter"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

          <input
            type="text"
            name="preferredRig"
            placeholder="Preferred Rig (Optional)"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />

        </div>

        <textarea
          name="requirements"
          required
          rows={6}
          placeholder="Describe your project requirements..."
          className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
        />

        <button
          type="submit"
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-500 px-6 py-4 text-center font-semibold text-black transition hover:scale-105 sm:w-auto sm:px-8"
        >
          <Send size={18} />

          Submit Engineering Inquiry
        </button>

      </motion.form>

    </section>
  );
}
