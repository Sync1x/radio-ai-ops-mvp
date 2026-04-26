import { useMemo, useState } from "react";
import ModuleCard from "./components/ModuleCard";
import AppShell from "./components/AppShell";
import { modules } from "./data/mockDashboard";
import Dashboard from "./pages/Dashboard";

type View = "dashboard" | "modules";

export default function App() {
  const [view, setView] = useState<View>("dashboard");

  const content = useMemo(() => {
    if (view === "dashboard") {
      return <Dashboard />;
    }

    return (
      <section>
        <h1 className="text-2xl font-semibold text-slate-100">AI Modules</h1>
        <p className="mt-1 text-sm text-slate-400">
          Current MVP modules for rural cluster operations.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
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
