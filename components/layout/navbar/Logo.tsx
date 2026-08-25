import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 font-bold text-white shadow-lg shadow-blue-500/25">
        NG
      </div>

      <div>
        <p className="font-heading text-lg font-bold tracking-wide text-white">
          NGE DRILLSOL
        </p>

        <p className="text-xs text-slate-400">
          Premium Drilling Engineering
        </p>
      </div>
    </Link>
  );
}