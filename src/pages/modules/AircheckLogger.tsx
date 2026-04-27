interface AircheckLoggerProps {
  onBack: () => void;
}

const clips = [
  { host: "Mara", station: "WGMT", note: "Strong tease into weather", duration: "00:42" },
  { host: "Eli", station: "WKDR", note: "Sponsor read pacing check", duration: "01:18" },
  { host: "Nina", station: "WSTJ", note: "Community calendar handoff", duration: "00:55" }
];

export default function AircheckLogger({ onBack }: AircheckLoggerProps) {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-400">Content Module</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
          Aircheck Logger
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          Mock review board for tagged on-air clips, coaching notes, and station quality checks.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">MVP Status</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Mocked clip data only. No audio capture, transcription, storage, or analysis is connected.
          </p>
        </article>
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            What this does for the station
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Makes coaching moments easier to find and discuss across a multi-station cluster.
          </p>
        </article>
      </div>

      <article className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-5">
        <h2 className="text-lg font-medium text-slate-200">Demo Clip Log</h2>
        <div className="mt-4 grid gap-3">
          {clips.map((clip) => (
            <div key={`${clip.host}-${clip.station}`} className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium text-slate-100">
                  {clip.host} - {clip.station}
                </p>
                <p className="text-sm text-slate-400">{clip.duration}</p>
              </div>
              <p className="mt-2 text-sm text-slate-300">{clip.note}</p>
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
