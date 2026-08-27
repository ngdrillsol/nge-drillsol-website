"use client";

import { motion } from "framer-motion";
import {
  Truck,
  GraduationCap,
  Wrench,
  Headphones,
  Package,
  ShieldCheck,
} from "lucide-react";

const supportServices = [
  {
    icon: Truck,
    title: "Installation & Commissioning",
    description:
      "Our engineers assist with machine installation, commissioning and initial operational checks to ensure a smooth project start.",
  },
  {
    icon: GraduationCap,
    title: "Operator Training",
    description:
      "Hands-on training for operators covering machine controls, drilling techniques, maintenance and safe operating procedures.",
  },
  {
    icon: Wrench,
    title: "Preventive Maintenance",
    description:
      "Regular maintenance recommendations and technical guidance help maximize equipment performance and extend service life.",
  },
  {
    icon: Package,
    title: "Genuine Spare Parts",
    description:
      "Fast access to genuine spare parts, drilling accessories, hydraulic components and consumables for reliable operation.",
  },
  {
    icon: Headphones,
    title: "Technical Assistance",
    description:
      "Remote engineering support for troubleshooting, technical queries and operational guidance whenever assistance is required.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    description:
      "We stay connected with our customers throughout the equipment lifecycle, providing engineering support as projects evolve.",
  },
];

export default function SupportServices() {
  return (
    <section className="space-y-10 md:space-y-16">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          After-Sales Support
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Support Beyond
          <span className="block text-yellow-400">
            Machine Delivery
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Purchasing a drilling rig is only the beginning. Our engineering
          team provides installation, training, maintenance and technical
          assistance to help customers achieve reliable long-term
          performance.
        </p>

      </div>

      {/* Cards */}

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:gap-8 md:grid-cols-2 md:overflow-visible xl:grid-cols-3">

        {supportServices.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="w-[84vw] max-w-[340px] shrink-0 snap-start rounded-[30px] border border-white/10 bg-[#090909] p-6 transition-all duration-300 hover:border-yellow-500/30 md:w-auto md:max-w-none md:p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Icon size={30} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {service.description}
              </p>

            </motion.div>
          );
        })}

      </div>

      {/* Bottom Banner */}

      <div className="rounded-[24px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-5 sm:rounded-[28px] sm:p-8 lg:rounded-[32px] lg:p-10">

        <h3 className="text-center text-3xl font-bold text-white">
          Your Success Is Our Long-Term Commitment
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-9 text-slate-300">
          Our objective is not simply to deliver a drilling rig. We aim to
          build long-term partnerships by providing dependable engineering
          support, genuine spare parts and responsive technical assistance
          throughout the life of your equipment.
        </p>

      </div>

    </section>
  );
}
