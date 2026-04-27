interface CopyrightLoggerProps {
  onBack: () => void;
}

const logs = [
  { title: "Harvest Moon", artist: "Neil Young", station: "WGMT", time: "08:14" },
  { title: "Fast Car", artist: "Tracy Chapman", station: "WKDR", time: "10:42" },
  { title: "Take Me Home", artist: "Phil Collins", station: "WSTJ", time: "14:08" }
];

export default function CopyrightLogger({ onBack }: CopyrightLoggerProps) {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-400">Compliance Module</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
          Copyright Logger
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          Demo log review for music metadata, station attribution, and rights-friendly exports.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">MVP Status</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Demo ready with static sample logs. No automation, ingestion, or export services are connected.
          </p>
        </article>
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            What this does for the station
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Creates a cleaner review path for played-song records before they become compliance artifacts.
          </p>
        </article>
      </div>

      <article className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-5">
        <h2 className="text-lg font-medium text-slate-200">Demo Music Log</h2>
        <div className="mt-4 overflow-hidden rounded-lg border border-slate-800">
          {logs.map((log) => (
            <div key={`${log.station}-${log.time}`} className="grid gap-2 border-b border-slate-800 bg-slate-900/70 p-4 last:border-b-0 md:grid-cols-[80px_1fr_1fr_80px]">
              <p className="text-sm font-medium text-slate-100">{log.station}</p>
              <p className="text-sm text-slate-300">{log.title}</p>
              <p className="text-sm text-slate-400">{log.artist}</p>
              <p className="text-sm text-slate-400">{log.time}</p>
            </div>
          ))}
        </div>
      </article>

      <button
        type="button"
        onClick={onBack}
        className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-700 hover:bg-slate-800"
      >
        Return to dashboard
      </button>
    </section>
  );
}
