"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Drill,
  Droplets,
  CheckCircle2,
} from "lucide-react";

const challenges = [
  {
    icon: Mountain,
    title: "Complex Geological Conditions",
    description:
      "Projects involved multiple geological formations including clay, sand, gravel and extremely hard rock, requiring continuous engineering decisions during drilling.",
  },
  {
    icon: Drill,
    title: "Deep Drilling Operations",
    description:
      "Deep boreholes demanded high pullback capacity, stable rotary performance and reliable drilling systems capable of maintaining productivity under demanding conditions.",
  },
  {
    icon: Droplets,
    title: "Groundwater Investigation",
    description:
      "The objective was not only to drill successfully, but also to identify productive aquifers capable of supporting long-term water supply requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Engineering Solution",
    description:
      "By selecting the appropriate drilling method, drilling equipment and field strategy, NGE DRILLSOL successfully executed the project under demanding site conditions.",
  },
];

export default function EngineeringChallenges() {
  return (
    <section className="space-y-14">

      {/* Heading */}

      <div className="text-center">

        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Engineering Challenges
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Every Project Presents
          <span className="block text-yellow-400">
            A Different Challenge
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Successful drilling is not just about powerful machines.
          It requires understanding geology, selecting the right drilling
          method and adapting engineering decisions to field conditions.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2">

        {challenges.map((item, index) => {
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

      {/* Quote */}

      <div className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 p-10">

        <p className="text-center text-2xl font-semibold leading-10 text-white">

          "Every successful drilling project begins with understanding
          the ground beneath it. Our engineering team develops solutions
          based on geology, application and project objectives—not guesswork."

        </p>

      </div>

    </section>
  );
}
