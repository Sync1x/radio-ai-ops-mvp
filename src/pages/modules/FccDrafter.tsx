interface FccDrafterProps {
  onBack: () => void;
}

const issues = [
  { issue: "Housing affordability", programs: "6 segments", quarter: "Q2 draft" },
  { issue: "Rural broadband access", programs: "4 segments", quarter: "Q2 draft" },
  { issue: "Regional flood recovery", programs: "9 segments", quarter: "Q2 draft" }
];

export default function FccDrafter({ onBack }: FccDrafterProps) {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-400">Compliance Module</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
          FCC Drafter
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          Mock quarterly issues workflow for reviewing public-affairs programming and drafting summaries.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">MVP Status</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            API pending. This screen uses mock compliance inputs and does not generate legal filings.
          </p>
        </article>
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            What this does for the station
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Reduces the blank-page work around quarterly issue documentation while preserving human review.
          </p>
        </article>
      </div>

      <article className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-5">
        <h2 className="text-lg font-medium text-slate-200">Demo Issues Draft</h2>
        <div className="mt-4 grid gap-3">
          {issues.map((item) => (
            <div key={item.issue} className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
              <p className="font-medium text-slate-100">{item.issue}</p>
              <p className="mt-2 text-sm text-slate-400">
                {item.programs} logged for {item.quarter}
              </p>
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
