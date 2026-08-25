import OperationModule from "./OperationModule";

export default function CommandPanel() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050B14] py-32">
      {/* Ambient Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1420] shadow-[0_0_60px_rgba(37,99,235,0.08)]">
          {/* Corner Bolts */}

          <span className="absolute left-5 top-5 h-2.5 w-2.5 rounded-full bg-zinc-500/60 ring-2 ring-black/30" />

          <span className="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-zinc-500/60 ring-2 ring-black/30" />

          <span className="absolute bottom-5 left-5 h-2.5 w-2.5 rounded-full bg-zinc-500/60 ring-2 ring-black/30" />

          <span className="absolute bottom-5 right-5 h-2.5 w-2.5 rounded-full bg-zinc-500/60 ring-2 ring-black/30" />

          {/* Header */}

          <div className="px-8 py-16 text-center md:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-blue-400">
              NGE DRILLSOL
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              PROJECT COMMAND CENTER
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Every drilling project starts with a decision.
              <br />
              Select the operation below to continue.
            </p>

            {/* Divider */}

            <div className="mx-auto mt-12 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
          </div>

          {/* Operation Layout */}

          <div className="px-8 pb-16 md:px-16">
            {/* ==================================================
                BUY A DRILLING RIG
            ================================================== */}

            <div className="mb-6">
              <OperationModule
                title="BUY A DRILLING RIG"
                applications={[
                  "Water Well",
                  "DTH",
                  "Rotary",
                  "Core",
                  "Piling",
                ]}
                metric="124"
                metricLabel="AVAILABLE CONFIGURATIONS"
                variant="primary"
              />
            </div>

            {/* ==================================================
                SELECT BY GEOLOGY + SPARE PARTS
            ================================================== */}

            <div className="mb-6 grid gap-6 lg:grid-cols-2">
              <OperationModule
                title="SELECT BY GEOLOGY"
                applications={[
                  "Hard Rock",
                  "Soft Formation",
                  "Sand",
                  "Clay",
                  "Mixed Geology",
                ]}
                metric="06"
                metricLabel="GEOLOGY CATEGORIES"
              />

              <OperationModule
                title="SPARE PARTS"
                applications={[
                  "Drill Pipes",
                  "Drag Bits",
                  "DTH Hammers",
                  "Mud Pumps",
                  "Hydraulics",
                ]}
                metric="500+"
                metricLabel="PRODUCTS"
              />
            </div>

            {/* ==================================================
                CUSTOMIZATION + CONSULTANCY
            ================================================== */}

            <div className="mb-6 grid gap-6 lg:grid-cols-2">
              <OperationModule
                title="RIG CUSTOMIZATION"
                applications={[
                  "Hydraulics",
                  "Mast Design",
                  "Rotary Head",
                  "Controls",
                  "Carrier Integration",
                ]}
                metric="100+"
                metricLabel="CUSTOM OPTIONS"
              />

              <OperationModule
                title="TECHNICAL CONSULTANCY"
                applications={[
                  "Rig Selection",
                  "Drilling Method",
                  "Formation Analysis",
                  "Project Planning",
                  "Tender Support",
                ]}
                metric="25+"
                metricLabel="YEARS OF EXPERIENCE"
              />
            </div>

            {/* ==================================================
                GOVERNMENT & EPC
            ================================================== */}

            <div>
              <OperationModule
                title="GOVERNMENT & EPC"
                applications={[
                  "Water Supply",
                  "Solar Projects",
                  "Infrastructure",
                  "Mining",
                  "Rural Development",
                ]}
                metric="40+"
                metricLabel="COUNTRIES SERVED"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}