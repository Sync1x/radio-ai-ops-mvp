import type { DashboardMetric } from "../lib/types";

interface MetricCardProps {
  metric: DashboardMetric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const iconMap: Record<string, string> = {
    Stations: "ST",
    "AI Assets Generated This Week": "AI",
    "Hours Staff Time Saved": "HR",
    "Compliance Drafts Ready": "CP"
  };

  return (
    <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-sm shadow-black/20">
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
        <span className="rounded-md border border-slate-700 bg-slate-800/80 px-1.5 py-1 text-[10px] font-semibold tracking-wide text-slate-300">
          {iconMap[metric.label] ?? "MT"}
        </span>
      </div>
      <p className="mt-3 text-3xl font-semibold leading-none text-slate-100">{metric.value}</p>
    </article>
  );
}
