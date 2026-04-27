import { useMemo, useState } from "react";
import ModuleCard from "./components/ModuleCard";
import AppShell from "./components/AppShell";
import { modules } from "./data/mockDashboard";
import Dashboard from "./pages/Dashboard";
import AircheckLogger from "./pages/modules/AircheckLogger";
import CopyrightLogger from "./pages/modules/CopyrightLogger";
import FccDrafter from "./pages/modules/FccDrafter";
import HyperlocalNews from "./pages/modules/HyperlocalNews";
import ProposalGenerator from "./pages/modules/ProposalGenerator";
import SocialQueue from "./pages/modules/SocialQueue";
import SpecSpotGenerator from "./pages/modules/SpecSpotGenerator";

export type View =
  | "dashboard"
  | "modules"
  | "specSpot"
  | "hyperlocalNews"
  | "fccDrafter"
  | "socialQueue"
  | "copyrightLogger"
  | "proposalGenerator"
  | "aircheckLogger";

const moduleRoutes: Record<string, View> = {
  "spec-spot": "specSpot",
  "news-pipeline": "hyperlocalNews",
  "fcc-drafter": "fccDrafter",
  "social-queue": "socialQueue",
  "copyright-logger": "copyrightLogger",
  "proposal-generator": "proposalGenerator",
  aircheck: "aircheckLogger"
};

export default function App() {
  const [view, setView] = useState<View>("dashboard");
  const goDashboard = () => setView("dashboard");

  const content = useMemo(() => {
    if (view === "dashboard") {
      return <Dashboard onOpenModule={setView} />;
    }

    if (view === "specSpot") {
      return <SpecSpotGenerator onBack={goDashboard} />;
    }

    if (view === "hyperlocalNews") {
      return <HyperlocalNews onBack={goDashboard} />;
    }

    if (view === "fccDrafter") {
      return <FccDrafter onBack={goDashboard} />;
    }

    if (view === "socialQueue") {
      return <SocialQueue onBack={goDashboard} />;
    }

    if (view === "copyrightLogger") {
      return <CopyrightLogger onBack={goDashboard} />;
    }

    if (view === "proposalGenerator") {
      return <ProposalGenerator onBack={goDashboard} />;
    }

    if (view === "aircheckLogger") {
      return <AircheckLogger onBack={goDashboard} />;
    }

    return (
      <section>
        <h1 className="text-2xl font-semibold text-slate-100">AI Modules</h1>
        <p className="mt-1 text-sm text-slate-400">
          Current MVP modules for rural cluster operations.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={() => setView(moduleRoutes[module.id])}
            />
          ))}
        </div>
      </section>
    );
  }, [view]);

  return (
    <AppShell currentView={view} onChangeView={setView}>
      {content}
    </AppShell>
  );
}
