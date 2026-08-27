"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Settings,
  Globe2,
  ShieldCheck,
  Wrench,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Industry-Specific Engineering",
    description:
      "Every industry has unique drilling challenges. Our engineering team recommends equipment based on application, geology and operational requirements rather than offering a generic solution.",
  },
  {
    icon: Settings,
    title: "Customized Drilling Rigs",
    description:
      "Our drilling rigs can be configured according to drilling depth, bore diameter, geology, truck chassis, mast capacity and customer-specific requirements.",
  },
  {
    icon: Globe2,
    title: "Global Project Experience",
    description:
      "Our equipment supports projects across Africa, the Middle East and Asia, covering water supply, mining, renewable energy, infrastructure and industrial applications.",
  },
  {
    icon: Wrench,
    title: "Complete Drilling Package",
    description:
      "From drilling rigs and mud pumps to drill pipes, drill bits, compressors and spare parts, we provide everything required for complete drilling operations.",
  },
  {
    icon: Users,
    title: "Engineering Consultation",
    description:
      "Our specialists help customers select the correct drilling method, rig configuration and accessories before the project begins, reducing risk and improving productivity.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable After-Sales Support",
    description:
      "Installation guidance, operator training, technical assistance and spare parts support ensure reliable performance throughout the machine's service life.",
  },
];

export default function WhyChooseNGEIndustries() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Why Industries Choose NGE
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Engineering Solutions
          <span className="block text-yellow-400">
            Built Around Your Industry
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          We combine engineering expertise, manufacturing capability and
          field experience to deliver reliable drilling solutions for
          diverse industries across international markets.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {reasons.map((item, index) => {
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

      {/* Bottom Statement */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-[#0F172A] via-[#111827] to-[#0F172A] p-10">

        <h3 className="text-center text-3xl font-bold text-white">
          One Engineering Partner. Multiple Industries.
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-9 text-slate-300">
          Whether your project involves groundwater development,
          infrastructure, renewable energy, mining or geological
          exploration, NGE DRILLSOL provides engineering-led drilling
          solutions designed to deliver long-term performance and value.
        </p>

      </div>

    </section>
  );
}
