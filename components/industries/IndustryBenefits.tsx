"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Settings,
  Target,
  ShieldCheck,
  Wrench,
  Globe2,
} from "lucide-react";

const benefits = [
  {
    icon: Mountain,
    title: "Every Geology is Different",
    description:
      "Drilling conditions vary from clay and sand to basalt, granite and extremely hard rock. The right drilling solution starts with understanding the ground.",
  },
  {
    icon: Target,
    title: "Application Determines the Solution",
    description:
      "Water wells, mining, solar foundations, infrastructure and oil & gas projects each require different drilling methods, equipment and engineering strategies.",
  },
  {
    icon: Settings,
    title: "Customized Engineering",
    description:
      "Our engineering team recommends drilling rigs, drilling methods and accessories based on your project's technical requirements rather than a one-size-fits-all approach.",
  },
  {
    icon: Wrench,
    title: "Complete Drilling Package",
    description:
      "Beyond drilling rigs, we provide drill pipes, mud pumps, drill bits, compressors, casing solutions and drilling accessories for complete field operations.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Field Performance",
    description:
      "Our equipment is engineered for demanding environments, delivering dependable performance across challenging geological formations and long drilling campaigns.",
  },
  {
    icon: Globe2,
    title: "Global Engineering Experience",
    description:
      "Experience gained from projects across Africa, the Middle East and Asia enables us to recommend solutions suitable for regional geological conditions.",
  },
];

export default function IndustryBenefits() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Approach
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Why Every Industry Needs
          <span className="block text-yellow-400">
            A Different Drilling Solution
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Successful drilling depends on understanding the relationship
          between geology, application and equipment. Our engineering
          team develops recommendations tailored to your industry and
          project objectives.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.div
              key={benefit.title}
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
                {benefit.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {benefit.description}
              </p>

            </motion.div>
          );
        })}

      </div>

      {/* Bottom Statement */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#111827] via-[#0F172A] to-[#111827] p-10">

        <h3 className="text-center text-3xl font-bold text-white">
          Engineering Before Equipment
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-9 text-slate-300">
          At NGE DRILLSOL, we begin by understanding your project,
          geology, drilling depth and application. Only then do we
          recommend the drilling rig, drilling method and supporting
          equipment that best fits your requirements.
        </p>

      </div>

    </section>
  );
}
