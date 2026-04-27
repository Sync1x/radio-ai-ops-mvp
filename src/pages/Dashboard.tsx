import { dashboardMetrics, modules } from "../data/mockDashboard";
import { stations } from "../data/stations";
import MetricCard from "../components/MetricCard";
import ModuleCard from "../components/ModuleCard";
import StationTile from "../components/StationTile";
import type { View } from "../App";

interface DashboardProps {
  onOpenModule: (view: View) => void;
}

const moduleRoutes: Record<string, View> = {
  "spec-spot": "specSpot",
  "news-pipeline": "hyperlocalNews",
  "fcc-drafter": "fccDrafter",
  "social-queue": "socialQueue",
  "copyright-logger": "copyrightLogger",
  "proposal-generator": "proposalGenerator",
  aircheck: "aircheckLogger"
};

export default function Dashboard({ onOpenModule }: DashboardProps) {
  return (
    <section className="space-y-8 md:space-y-9">
      <header className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-5 md:p-6">
        <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Admin Dashboard</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
          Green Mountain Broadcast OS
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-400 md:text-base">
          AI operations layer for 7-station rural radio clusters
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-medium text-slate-200">Stations</h2>
          <span className="text-xs uppercase tracking-wide text-slate-500">7 Total</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
          {stations.map((station) => (
            <StationTile key={station.id} station={station} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-medium text-slate-200">Modules</h2>
          <span className="text-xs uppercase tracking-wide text-slate-500">MVP Scope</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={() => onOpenModule(moduleRoutes[module.id])}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
