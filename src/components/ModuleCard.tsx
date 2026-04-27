import type { ModuleItem } from "../lib/types";

interface ModuleCardProps {
  module: ModuleItem;
  onClick?: () => void;
}

const badgeColors: Record<ModuleItem["status"], string> = {
  "Demo Ready": "bg-emerald-900/40 text-emerald-300 border-emerald-700/70",
  Mocked: "bg-blue-900/40 text-blue-300 border-blue-700/70",
  "API Pending": "bg-amber-900/40 text-amber-300 border-amber-700/70"
};

export default function ModuleCard({ module, onClick }: ModuleCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-6 text-slate-100">{module.name}</h3>
        <span
          className={`shrink-0 rounded-md border px-2 py-1 text-[11px] font-medium ${badgeColors[module.status]}`}
        >
          {module.status}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{module.description}</p>
      <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
        Estimated Value: {module.valueLabel}
      </p>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="h-full rounded-xl border border-slate-700/70 bg-slate-900/65 p-5 text-left shadow-sm shadow-black/20 transition hover:border-cyan-700/80 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
      >
        {content}
      </button>
    );
  }

  return (
    <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-sm shadow-black/20">
      {content}
    </article>
  );
}
