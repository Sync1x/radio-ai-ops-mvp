interface HyperlocalNewsProps {
  onBack: () => void;
}

const stories = [
  { market: "St. Johnsbury", slug: "Select board budget hearing", status: "Ready for AM read" },
  { market: "Newport", slug: "Lake safety advisory", status: "Needs producer review" },
  { market: "Lyndonville", slug: "High school playoff schedule", status: "Ready for web" }
];

export default function HyperlocalNews({ onBack }: HyperlocalNewsProps) {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-400">Content Module</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
          Hyperlocal News
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          Demo pipeline for organizing local story leads into station-ready news copy.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">MVP Status</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Demo ready with static story examples. No feeds, scraping, CMS, or AI APIs are connected yet.
          </p>
        </article>
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            What this does for the station
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Gives small newsrooms a shared queue for local leads, daypart copy, and market-specific updates
            without losing the regional context.
          </p>
        </article>
      </div>

      <article className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-5">
        <h2 className="text-lg font-medium text-slate-200">Demo Story Desk</h2>
        <div className="mt-4 overflow-hidden rounded-lg border border-slate-800">
          {stories.map((story) => (
            <div key={story.slug} className="grid gap-2 border-b border-slate-800 bg-slate-900/70 p-4 last:border-b-0 md:grid-cols-[160px_1fr_180px]">
              <p className="text-sm font-medium text-slate-100">{story.market}</p>
              <p className="text-sm text-slate-300">{story.slug}</p>
              <p className="text-sm text-slate-400">{story.status}</p>
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
