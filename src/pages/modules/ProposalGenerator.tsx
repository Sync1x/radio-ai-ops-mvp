interface ProposalGeneratorProps {
  onBack: () => void;
}

const proposals = [
  { account: "Burke Mountain Lodge", campaign: "Winter Weekender", value: "$4,800" },
  { account: "Caledonia Credit Union", campaign: "Financial Wellness", value: "$7,250" },
  { account: "Northern Roots Market", campaign: "Grand Opening", value: "$2,950" }
];

export default function ProposalGenerator({ onBack }: ProposalGeneratorProps) {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-400">Revenue Module</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
          Proposal Generator
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          Mock proposal workspace for packaging account needs, station inventory, and draft campaign ideas.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">MVP Status</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            API pending. This prototype uses mock accounts and packages with no CRM or document export.
          </p>
        </article>
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            What this does for the station
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Gives sales managers a repeatable path from prospect context to a polished local campaign pitch.
          </p>
        </article>
      </div>

      <article className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-5">
        <h2 className="text-lg font-medium text-slate-200">Demo Proposal Pipeline</h2>
        <div className="mt-4 grid gap-3">
          {proposals.map((proposal) => (
            <div key={proposal.account} className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium text-slate-100">{proposal.account}</p>
                <p className="text-sm font-medium text-emerald-300">{proposal.value}</p>
              </div>
              <p className="mt-2 text-sm text-slate-400">{proposal.campaign}</p>
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
