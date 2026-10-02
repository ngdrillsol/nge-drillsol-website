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
Required Drilling Depth (m or ft): ${value("depth")}
Bore Diameter (mm or inches): ${value("boreDiameter")}
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

          <div className="min-w-0 space-y-2">
            <label htmlFor="enquiry-name" className="block text-sm font-medium text-slate-200">
              Full name (required)
            </label>
            <input
              type="text"
              id="enquiry-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
            />
          </div>

          <div className="min-w-0 space-y-2">
            <label htmlFor="enquiry-email" className="block text-sm font-medium text-slate-200">
              Email address (required)
            </label>
            <input
              type="email"
              id="enquiry-email"
              name="email"
              required
              autoComplete="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
            />
          </div>

          <div className="min-w-0 space-y-2">
            <label htmlFor="enquiry-phone" className="block text-sm font-medium text-slate-200">
              Phone / WhatsApp (required)
            </label>
            <input
              type="tel"
              id="enquiry-phone"
              name="phone"
              required
              autoComplete="tel"
              placeholder="Phone / WhatsApp"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
            />
          </div>

          <div className="min-w-0 space-y-2">
            <label htmlFor="enquiry-country" className="block text-sm font-medium text-slate-200">
              Country (required)
            </label>
            <input
              type="text"
              id="enquiry-country"
              name="country"
              required
              autoComplete="country-name"
              placeholder="Country"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
            />
          </div>

          <div className="min-w-0 space-y-2">
            <label htmlFor="enquiry-application" className="block text-sm font-medium text-slate-200">
              Application (required)
            </label>
            <select
              id="enquiry-application"
              name="application"
              required
              defaultValue=""
              className="w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none focus:border-yellow-500"
            >
  
              <option value="" disabled>Application</option>
  
              <option>Water Well Drilling</option>
  
              <option>DTH Drilling</option>
  
              <option>Rotary Drilling</option>
  
              <option>Piling</option>
  
              <option>Core Drilling</option>
  
              <option>Workover Rig</option>
  
            </select>
          </div>

          <div className="min-w-0 space-y-2">
            <label htmlFor="enquiry-depth" className="block text-sm font-medium text-slate-200">
              Required drilling depth — m or ft (required)
            </label>
            <input
              type="text"
              id="enquiry-depth"
              name="depth"
              pattern="[ ]*[0-9]+(?:[.][0-9]+)?[ ]*(?:[mM]|[fF][tT])[ ]*"
              title="Include the unit: for example, 100 m or 300 ft."
              required
              placeholder="Required Drilling Depth (m or ft)"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
            />
          </div>

          <div className="min-w-0 space-y-2">
            <label htmlFor="enquiry-boreDiameter" className="block text-sm font-medium text-slate-200">
              Bore diameter — mm or inches (required)
            </label>
            <input
              type="text"
              id="enquiry-boreDiameter"
              name="boreDiameter"
              pattern="[ ]*[0-9]+(?:[.][0-9]+)?[ ]*(?:[mM][mM]|[iI][nN](?:[cC][hH](?:[eE][sS])?)?)[ ]*"
              title="Include the unit: for example, 150 mm or 6 inches."
              required
              placeholder="Bore Diameter (mm or inches)"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
            />
          </div>

          <div className="min-w-0 space-y-2">
            <label htmlFor="enquiry-preferredRig" className="block text-sm font-medium text-slate-200">
              Preferred rig (optional)
            </label>
            <input
              type="text"
              id="enquiry-preferredRig"
              name="preferredRig"
              placeholder="Preferred Rig (Optional)"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
            />
          </div>

        </div>

        <div className="mt-6 space-y-2">
          <label htmlFor="enquiry-requirements" className="block text-sm font-medium text-slate-200">
            Project requirements (required)
          </label>
          <textarea
            id="enquiry-requirements"
            name="requirements"
            required
            rows={6}
            placeholder="Describe your project requirements..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-500 px-6 py-4 text-center font-semibold text-black transition hover:scale-105 sm:w-auto sm:px-8"
        >
          <Send size={18} />

          Continue to WhatsApp
        </button>
        <p className="mt-3 text-sm text-slate-300">
          Review your enquiry in WhatsApp, then tap Send.
        </p>

      </motion.form>

    </section>
  );
}
