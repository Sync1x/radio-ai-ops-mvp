import type { Station } from "../lib/types";

interface StationTileProps {
  station: Station;
}

export default function StationTile({ station }: StationTileProps) {
  return (
    <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-4 shadow-sm shadow-black/20">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-100">
            {station.callSign} {station.frequency}
          </p>
          <p className="text-sm text-slate-300">{station.brand}</p>
        </div>
        <span className="rounded border border-slate-700 bg-slate-800/80 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300">
          Live
        </span>
      </div>
      <p className="mt-3 text-xs text-slate-400">
        {station.city} • {station.format}
      </p>
    </article>
  );
}
