type OperationModuleProps = {
  title: string;
  applications: string[];
  metric: string;
  metricLabel: string;
  variant?: "primary" | "secondary" | "compact";
};

export default function OperationModule({
  title,
  applications,
  metric,
  metricLabel,
}: OperationModuleProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-[#1B202B] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/5" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      {/* System Status */}

      <div className="mb-5 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-emerald-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
          SYSTEM READY
        </span>
      </div>

      {/* Module Title */}

      <div className="mb-5">
        <h3 className="text-[1.8rem] font-black uppercase tracking-tight text-white">
          {title}
        </h3>

        <div className="mt-3 h-px w-24 bg-gradient-to-r from-blue-500 to-transparent" />
      </div>

      {/* Applications */}

      <div className="mt-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          APPLICATIONS
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {applications.map((item) => (
            <div
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Information Area */}

      <div className="mt-6 border-t border-white/10 pt-6">
        <div className="grid gap-6 md:grid-cols-5">
          {/* Left Spacer */}

          <div className="hidden border-r border-white/10 md:col-span-3 md:block" />

          {/* Right Information Panel */}

          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {metricLabel}
            </p>

            <p className="mt-1 text-5xl font-black tracking-tight text-white">
              {metric}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}