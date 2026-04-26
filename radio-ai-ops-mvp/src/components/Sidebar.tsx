interface SidebarProps {
  currentView: "dashboard" | "modules";
  onChangeView: (view: "dashboard" | "modules") => void;
}

const navItems: Array<{ id: "dashboard" | "modules"; label: string }> = [
  { id: "dashboard", label: "Dashboard" },
  { id: "modules", label: "AI Modules" }
];

export default function Sidebar({ currentView, onChangeView }: SidebarProps) {
  return (
    <aside className="w-full border-b border-slate-800/90 bg-slate-950/70 p-4 backdrop-blur md:w-72 md:border-b-0 md:border-r md:p-5">
      <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3">
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Broadcast Ops</p>
        <p className="mt-2 text-lg font-semibold text-slate-100">Cluster Console</p>
        <p className="mt-1 text-xs text-slate-400">Northeast Kingdom Region</p>
      </div>
      <nav className="mt-5 flex gap-2 md:flex-col">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChangeView(item.id)}
            className={`rounded-lg border px-3 py-2.5 text-left text-sm transition ${
              currentView === item.id
                ? "border-slate-600 bg-slate-800 text-slate-100"
                : "border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900 hover:text-slate-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
