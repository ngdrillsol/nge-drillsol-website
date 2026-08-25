"use client";

import { motion } from "framer-motion";
import {
  Users,
  Compass,
  Factory,
  Settings,
  Globe2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Engineering-First Approach",
    description:
      "We begin every project by understanding your geology, drilling depth, hole diameter and application before recommending any equipment.",
  },
  {
    icon: Factory,
    title: "OEM Manufacturing",
    description:
      "Every drilling rig is designed and manufactured by NGE DRILLSOL with complete control over quality, performance and customization.",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description:
      "Our engineering team can modify drilling rigs according to project requirements, site conditions and customer preferences.",
  },
  {
    icon: Globe2,
    title: "International Experience",
    description:
      "Our drilling solutions are trusted across Africa, the Middle East and other international markets with diverse geological conditions.",
  },
  {
    icon: Users,
    title: "Technical Consultation",
    description:
      "Our experts guide customers in selecting the right drilling method, drilling rig and accessories for maximum field performance.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Partnership",
    description:
      "From machine selection to installation, training, spare parts and after-sales support, we stay with you throughout the equipment lifecycle.",
  },
];

export default function WhyNGEEngineering() {
  return (
    <section className="space-y-14">

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Why NGE Engineering
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          More Than a Machine Supplier
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Our goal is not simply to sell a drilling rig. We engineer the
          complete drilling solution that matches your project, geology,
          budget and long-term operational requirements.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-[30px] border border-white/10 bg-[#090909] p-8 transition-all duration-300 hover:border-yellow-500/30"
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