import { useMemo, useState } from "react";

interface SpecSpotGeneratorProps {
  onBack: () => void;
}

type BusinessCategory =
  | "Auto Dealer"
  | "Restaurant"
  | "Healthcare"
  | "Home Services"
  | "Tourism"
  | "Retail"
  | "Professional Services";

type TargetStation =
  | "Moo 92"
  | "JJ Country"
  | "The Notch"
  | "Magic 97.7"
  | "Kix 105.5"
  | "The Trail";

type Tone =
  | "Friendly local"
  | "Urgent sale"
  | "Warm community"
  | "Premium/trustworthy"
  | "Funny lighthearted";

interface GeneratedScript {
  id: string;
  title: string;
  angle: string;
  script: string;
  cta: string;
}

const categories: BusinessCategory[] = [
  "Auto Dealer",
  "Restaurant",
  "Healthcare",
  "Home Services",
  "Tourism",
  "Retail",
  "Professional Services"
];

const stations: TargetStation[] = [
  "Moo 92",
  "JJ Country",
  "The Notch",
  "Magic 97.7",
  "Kix 105.5",
  "The Trail"
];

const tones: Tone[] = [
  "Friendly local",
  "Urgent sale",
  "Warm community",
  "Premium/trustworthy",
  "Funny lighthearted"
];

const loadingSteps = [
  "Researching business",
  "Matching station tone",
  "Writing 30-second scripts",
  "Preparing audio placeholder"
];

const categoryLanguage: Record<BusinessCategory, { proof: string; offer: string; need: string }> = {
  "Auto Dealer": {
    proof: "trade-ins, flexible financing, trusted service, and a team that knows local drivers",
    offer: "find the right vehicle and keep it running strong",
    need: "winter roads, weekend errands, and daily commutes"
  },
  Restaurant: {
    proof: "lunch, dinner, takeout, local flavor, and a room that feels like part of the community",
    offer: "make the next meal easy and memorable",
    need: "family nights, work lunches, and weekend plans"
  },
  Healthcare: {
    proof: "care, appointments, family support, and a reputation built on trust",
    offer: "schedule the care your household has been putting off",
    need: "busy families, routine visits, and peace of mind"
  },
  "Home Services": {
    proof: "reliable repairs, clear estimates, seasonal maintenance, and crews who show up",
    offer: "handle the job before small problems become expensive ones",
    need: "storm prep, cold snaps, leaks, and overdue repairs"
  },
  Tourism: {
    proof: "weekend trips, Northeast Kingdom views, visitors, and seasonal offers",
    offer: "turn a free weekend into a local getaway",
    need: "foliage drives, ski weekends, summer trails, and visiting friends"
  },
  Retail: {
    proof: "helpful service, fresh inventory, local deals, and gifts people actually want",
    offer: "shop close to home and discover something new",
    need: "birthdays, holidays, quick errands, and last-minute finds"
  },
  "Professional Services": {
    proof: "experienced guidance, clear answers, local accountability, and long-term relationships",
    offer: "book a conversation with a professional who understands the region",
    need: "planning decisions, business questions, and household priorities"
  }
};

const toneLanguage: Record<Tone, { opener: string; pace: string }> = {
  "Friendly local": {
    opener: "Around here, word travels fast when a local business takes care of people.",
    pace: "neighborly and clear"
  },
  "Urgent sale": {
    opener: "This week is the moment to act.",
    pace: "direct and high-energy"
  },
  "Warm community": {
    opener: "Local businesses help keep this region connected.",
    pace: "warm and grounded"
  },
  "Premium/trustworthy": {
    opener: "When quality matters, choosing the right local partner matters too.",
    pace: "polished and confident"
  },
  "Funny lighthearted": {
    opener: "Some errands can wait. This one probably should not.",
    pace: "light, upbeat, and memorable"
  }
};

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function compactSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function countWords(script: string) {
  return script.trim().split(/\s+/).filter(Boolean).length;
}

function buildScripts(
  businessName: string,
  websiteUrl: string,
  category: BusinessCategory,
  station: TargetStation,
  tone: Tone
): GeneratedScript[] {
  const business = businessName.trim() || "Your Local Business";
  const site = websiteUrl.trim() || "their website";
  const categoryCopy = categoryLanguage[category];
  const toneCopy = toneLanguage[tone];

  return [
    {
      id: "direct-response",
      title: "Direct Response Spot",
      angle: `${toneCopy.pace} call-to-action built for immediate prospect response`,
      cta: `Visit ${site} or stop in today.`,
      script: `${toneCopy.opener} If you have been thinking about ${categoryCopy.need}, ${business} is ready to help. They bring ${categoryCopy.proof}, so you can ${categoryCopy.offer}. Mention you heard this on ${station} and ask what is available this week. ${business}: local, practical, and ready when you are. Visit ${site} or stop in today.`
    },
    {
      id: "community-trust",
      title: "Community Trust Spot",
      angle: "relationship-first message that positions the business as a local fixture",
      cta: `Connect with ${business} and ask how they can help this season.`,
      script: `In the Northeast Kingdom, trust is earned one customer at a time. That is why ${business} matters. With ${categoryCopy.proof}, they help neighbors handle ${categoryCopy.need} without the runaround. ${station} is proud to spotlight businesses that keep this community moving. Connect with ${business} and ask how they can help this season.`
    },
    {
      id: "brand-awareness",
      title: "Brand Awareness Spot",
      angle: "simple brand-building script for consistent station presence",
      cta: `Keep ${business} in mind the next time you need ${categoryCopy.offer}.`,
      script: `Some names should be easy to remember. ${business} is one of them. Whether you are planning ahead or solving something today, they offer ${categoryCopy.proof}. Hear their name on ${station}, then think of them when ${categoryCopy.need} comes up. Keep ${business} in mind the next time you need to ${categoryCopy.offer}.`
    }
  ];
}

export default function SpecSpotGenerator({ onBack }: SpecSpotGeneratorProps) {
  const [businessName, setBusinessName] = useState("Kingdom Auto Center");
  const [websiteUrl, setWebsiteUrl] = useState("kingdomauto.com");
  const [category, setCategory] = useState<BusinessCategory>("Auto Dealer");
  const [station, setStation] = useState<TargetStation>("Moo 92");
  const [tone, setTone] = useState<Tone>("Friendly local");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);
  const [scripts, setScripts] = useState<GeneratedScript[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [audioPreviewIds, setAudioPreviewIds] = useState<string[]>([]);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const businessSlug = useMemo(() => slugify(businessName) || "local-business", [businessName]);
  const stationSlug = useMemo(() => compactSlug(station), [station]);

  const handleGenerate = () => {
    setIsLoading(true);
    setScripts([]);
    setAudioPreviewIds([]);
    setPlayingId(null);
    setLoadingStepIndex(0);

    loadingSteps.forEach((_, index) => {
      window.setTimeout(() => setLoadingStepIndex(index), index * 375);
    });

    window.setTimeout(() => {
      setScripts(buildScripts(businessName, websiteUrl, category, station, tone));
      setIsLoading(false);
      setLoadingStepIndex(0);
    }, 1500);
  };

  const handleCopy = async (script: GeneratedScript) => {
    const copy = `${script.title}\n\nAngle: ${script.angle}\n\n${script.script}\n\nCTA: ${script.cta}`;

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(copy);
      setCopiedId(script.id);
      window.setTimeout(() => setCopiedId(null), 1500);
    }
  };

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-400">Sales Module</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
            Spec Spot Generator
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Build three realistic 30-second spec scripts from a local business profile. This MVP uses
            mock generation logic only.
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="w-fit rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-700 hover:bg-slate-800"
        >
          Return to dashboard
        </button>
      </header>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-sm shadow-black/20">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Business name
                </span>
                <input
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Kingdom Auto Center"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Website URL
                </span>
                <input
                  value={websiteUrl}
                  onChange={(event) => setWebsiteUrl(event.target.value)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="business.com"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Business category
                </span>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value as BusinessCategory)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {categories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Target station
                </span>
                <select
                  value={station}
                  onChange={(event) => setStation(event.target.value as TargetStation)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {stations.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 md:col-span-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                  Tone
                </span>
                <select
                  value={tone}
                  onChange={(event) => setTone(event.target.value as Tone)}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20"
                >
                  {tones.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={isLoading}
              className="mt-5 rounded-lg border border-cyan-700/80 bg-cyan-950/70 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-900/80 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800 disabled:text-slate-400"
            >
              {isLoading ? "Generating..." : "Generate Spec Spots"}
            </button>
          </article>

          {isLoading && (
            <article className="rounded-xl border border-cyan-800/70 bg-cyan-950/20 p-5">
              <p className="text-sm font-medium text-cyan-200">{loadingSteps[loadingStepIndex]}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-4">
                {loadingSteps.map((step, index) => (
                  <div
                    key={step}
                    className={`h-1.5 rounded-full ${
                      index <= loadingStepIndex ? "bg-cyan-400" : "bg-slate-800"
                    }`}
                  />
                ))}
              </div>
            </article>
          )}

          {scripts.length > 0 && (
            <div className="grid gap-4">
              {scripts.map((script) => {
                const fileName = `${businessSlug}_${stationSlug}_${script.id}.mp3`;
                const isAudioVisible = audioPreviewIds.includes(script.id);
                const isPlaying = playingId === script.id;

                return (
                  <article
                    key={script.id}
                    className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5 shadow-sm shadow-black/20"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="text-lg font-semibold text-slate-100">{script.title}</h2>
                        <p className="mt-1 text-sm text-slate-400">{script.angle}</p>
                      </div>
                      <span className="w-fit rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300">
                        {countWords(script.script)} words
                      </span>
                    </div>

                    <p className="mt-4 rounded-lg border border-slate-800 bg-slate-950/80 p-4 text-sm leading-7 text-slate-200">
                      {script.script}
                    </p>

                    <div className="mt-4 rounded-lg border border-slate-800 bg-slate-950/50 p-3">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">CTA</p>
                      <p className="mt-1 text-sm text-slate-300">{script.cta}</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => void handleCopy(script)}
                        className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-700 hover:bg-slate-800"
                      >
                        {copiedId === script.id ? "Copied" : "Copy Script"}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAudioPreviewIds((currentIds) =>
                            currentIds.includes(script.id) ? currentIds : [...currentIds, script.id]
                          );
                          setPlayingId(null);
                        }}
                        className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-700 hover:bg-slate-800"
                      >
                        Generate Audio
                      </button>
                    </div>

                    {isAudioVisible && (
                      <div className="mt-4 rounded-xl border border-cyan-900/70 bg-cyan-950/20 p-4">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                          <div>
                            <p className="text-sm font-medium text-cyan-100">{fileName}</p>
                            <p className="mt-1 text-xs text-cyan-300/80">
                              Demo audio placeholder — ElevenLabs connects here
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => setPlayingId(isPlaying ? null : script.id)}
                              className="rounded-full border border-cyan-700 bg-cyan-950 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-900"
                            >
                              {isPlaying ? "Pause" : "Play"}
                            </button>
                            <span className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-slate-300">
                              00:30
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>

        <aside className="space-y-4">
          <article className="rounded-xl border border-emerald-800/70 bg-emerald-950/20 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Sales impact
            </p>
            <p className="mt-3 text-xl font-semibold leading-7 text-slate-100">
              Cuts spec spot creation from 1–2 days to 5 minutes.
            </p>
          </article>

          <article className="rounded-xl border border-slate-700/70 bg-slate-900/65 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              AE workflow
            </p>
            <p className="mt-3 text-lg font-semibold leading-7 text-slate-100">
              Lets AEs leave a prospect meeting with a polished first draft.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
              MVP Status
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Mock generation only. Website research, voice generation, CRM logging, and approvals are
              intentionally not connected yet.
            </p>
          </article>
        </aside>
      </div>
    </section>
  );
}
