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
    title: "OEM Manufacturer",
    description:
      "NGE DRILLSOL designs and manufactures drilling rigs in-house with complete engineering control over quality, performance and customization.",
  },
  {
    icon: Globe2,
    title: "Global Export Experience",
    description:
      "Trusted by contractors, governments and EPC companies across Africa, the Middle East and other international markets.",
  },
  {
    icon: Cog,
    title: "Complete Drilling Solutions",
    description:
      "From drilling rigs to mud pumps, compressors, drill pipes, drill bits and accessories, everything is available from one source.",
  },
  {
    icon: Wrench,
    title: "Customized Engineering",
    description:
      "Every drilling project is different. Our engineering team customizes rigs according to geology, drilling depth, application and customer requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Heavy-Duty Design",
    description:
      "Built using premium components and engineered for demanding field conditions with high productivity and long service life.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description:
      "Our team provides installation guidance, operator training, spare parts support and after-sales service for every machine supplied.",
  },
];

export default function WhyChooseNGE() {
  return (
    <section className="space-y-14">

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">
          Why Choose NGE DRILLSOL
        </span>

        <h2 className="mt-6 text-5xl font-bold text-white">
          Engineering You Can Trust
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          We don't simply manufacture drilling rigs—we engineer complete
          drilling solutions backed by experience, customization and long-term
          customer support.
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