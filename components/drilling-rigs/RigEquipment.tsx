"use client";

import { motion } from "framer-motion";
import {
  Settings2,
  Cog,
  Gauge,
  Fuel,
  Wrench,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import type { RigData } from "./rig.types";

interface RigEquipmentProps {
  rig: RigData;
}

const equipmentIcons = [
  Cog,
  Settings2,
  Gauge,
  Fuel,
  Wrench,
];

export default function RigEquipment({
  rig,
}: RigEquipmentProps) {
  const equipment = rig.equipment || [];

  if (!equipment.length) {
    return null;
  }

  return (
    <section
      id="equipment"
      className="space-y-12"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="max-w-4xl">

        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
          <Settings2 size={14} />
          Machine Systems
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Major
          <span className="text-yellow-400">
            {" "}Equipment & Systems
          </span>
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          Key systems and equipment associated with the published
          configuration of the {rig.model}.
        </p>

      </div>

      {/* =====================================================
          EQUIPMENT GRID
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-2">

        {equipment.map((system, index) => {

          const Icon =
            equipmentIcons[index % equipmentIcons.length];

          return (
            <motion.article
              key={`${system.title}-${index}`}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              className="group rounded-[30px] border border-white/10 bg-[#090C11] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-500/30 sm:p-8"
            >

              {/* Top */}

              <div className="flex items-start justify-between gap-5">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">

                    <Icon
                      size={25}
                      className="text-yellow-400"
                    />

                  </div>

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      System {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-white">
                      {system.title}
                    </h3>

                  </div>

                </div>

                <Settings2
                  size={18}
                  className="mt-1 text-white/10 transition group-hover:text-yellow-400/60"
                />

              </div>

              {/* Equipment list */}

              {system.items?.length > 0 && (

                <div className="mt-7 space-y-3 border-t border-white/10 pt-6">

                  {system.items.map((item, itemIndex) => (

                    <div
                      key={`${item}-${itemIndex}`}
                      className="flex items-start gap-3"
                    >

                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-500/10">

                        <CheckCircle2
                          size={13}
                          className="text-yellow-400"
                        />

                      </div>

                      <span className="text-sm leading-7 text-slate-300">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              )}

            </motion.article>
          );
        })}

      </div>

      {/* =====================================================
          CONFIGURATION NOTE
      ===================================================== */}

      <div className="rounded-[28px] border border-white/10 bg-white/[0.025] px-7 py-6 sm:px-9">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10">

            <Wrench
              size={20}
              className="text-yellow-400"
            />

          </div>

          <div>

            <p className="font-semibold text-white">
              Configuration & project requirements
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              Auxiliary equipment, tooling and system configuration
              may vary according to drilling method, formation,
              borehole requirements and the final project
              specification.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}