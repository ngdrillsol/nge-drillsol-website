"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Settings,
  Users,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const strengths = [
  {
    icon: Globe2,
    title: "Global Engineering Experience",
    description:
      "Our drilling solutions are designed for diverse geological conditions across Africa, the Middle East and Asia, helping customers choose equipment that matches local drilling requirements.",
  },
  {
    icon: Settings,
    title: "Customized Drilling Solutions",
    description:
      "Every project is different. We configure drilling rigs according to geology, drilling depth, hole diameter and customer application.",
  },
  {
    icon: Users,
    title: "Engineering Consultation",
    description:
      "Our technical team assists customers in selecting the most suitable drilling method, drilling rig and drilling accessories before project execution.",
  },
  {
    icon: Truck,
    title: "Export Ready",
    description:
      "Our machines are prepared for international shipment with complete export documentation, packaging and worldwide logistics support.",
  },
  {
    icon: Wrench,
    title: "Complete Drilling Package",
    description:
      "Beyond drilling rigs, we provide mud pumps, drill pipes, drill bits, compressors, spare parts and accessories for complete drilling operations.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Support",
    description:
      "From commissioning and operator guidance to spare parts and after-sales support, our engineering team remains available throughout the equipment lifecycle.",
  },
];

export default function WhyChooseNGEGlobal() {
  return (
    <section className="space-y-14">

      {/* Header */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Why Global Customers Choose NGE
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Trusted Beyond Borders
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          We combine engineering expertise, manufacturing capability and
          international support to deliver drilling solutions that perform
          reliably in challenging environments around the world.
        </p>

      </div>

      {/* Cards */}

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