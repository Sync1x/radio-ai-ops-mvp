interface SocialQueueProps {
  onBack: () => void;
}

const posts = [
  { channel: "Facebook", copy: "Morning storm closure roundup", time: "6:15 AM" },
  { channel: "Instagram", copy: "Remote broadcast photo recap", time: "12:30 PM" },
  { channel: "X", copy: "Tonight's basketball final score thread", time: "9:45 PM" }
];

export default function SocialQueue({ onBack }: SocialQueueProps) {
  return (
    <section className="space-y-6">
      <header>
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-400">Content Module</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
          Social Queue
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          Mock scheduling board for station posts tied to local events, promotions, and programming.
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">MVP Status</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Mocked queue only. There are no publishing permissions, social integrations, or scheduled jobs.
          </p>
        </article>
        <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            What this does for the station
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Lets producers plan station voice across platforms from one operational queue before posting.
          </p>
        </article>
      </div>

      <article className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-5">
        <h2 className="text-lg font-medium text-slate-200">Demo Post Queue</h2>
        <div className="mt-4 grid gap-3">
          {posts.map((post) => (
            <div key={`${post.channel}-${post.time}`} className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium text-slate-100">{post.channel}</p>
                <p className="text-sm text-slate-400">{post.time}</p>
              </div>
              <p className="mt-2 text-sm text-slate-300">{post.copy}</p>
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
