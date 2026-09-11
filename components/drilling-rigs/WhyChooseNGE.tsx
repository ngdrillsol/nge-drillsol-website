"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Globe2,
  Wrench,
  ShieldCheck,
  Headset,
  Cog,
} from "lucide-react";

const strengths = [
  {
    icon: Factory,
    title: "Drilling Rig Manufacturer",
    description:
      "NGE Drillsol designs and manufactures drilling rigs with in-house engineering control over machine configuration, quality, performance and customization.",
  },
  {
    icon: Globe2,
    title: "Global Export Capability",
    description:
      "We supply drilling equipment for international projects across Africa, the Middle East and other global markets, with machines configured for local drilling conditions.",
  },
  {
    icon: Cog,
    title: "Complete Drilling Solutions",
    description:
      "Drilling rigs can be supplied together with mud pumps, compressors, drill pipes, drill bits and other drilling accessories required for complete field operations.",
  },
  {
    icon: Wrench,
    title: "Customized Rig Engineering",
    description:
      "Rig configurations can be selected according to geology, required drilling depth, hole diameter, drilling method, mounting preference and project application.",
  },
  {
    icon: ShieldCheck,
    title: "Heavy-Duty Field Design",
    description:
      "Our drilling machines are engineered for demanding field conditions with focus on productivity, reliability, serviceability and long operating life.",
  },
  {
    icon: Headset,
    title: "Technical & After-Sales Support",
    description:
      "Our team supports customers with machine selection, installation guidance, operator training, spare parts and technical assistance after delivery.",
  },
];

export default function WhyChooseNGE() {
  return (
    <section
      className="space-y-14"
      aria-labelledby="why-nge-drilling-rigs"
    >

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Why NGE Drillsol
        </span>

        <h2
          id="why-nge-drilling-rigs"
          className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          Engineering Complete Drilling Solutions
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-400">
          NGE Drillsol combines drilling rig manufacturing, application
          engineering, equipment selection, customization and technical support
          to help customers build a drilling system suited to their geology,
          depth and field requirements.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {strengths.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-white/10 bg-[#0A0A0A] p-8 transition hover:border-yellow-500/30"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                <Icon size={30} />
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}