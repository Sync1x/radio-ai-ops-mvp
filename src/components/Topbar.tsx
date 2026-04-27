export default function Topbar() {
  return (
    <header className="border-b border-slate-800/90 bg-slate-950/55 px-4 py-4 backdrop-blur md:px-6">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between">
        <p className="text-sm font-medium text-slate-300">Green Mountain Broadcast OS</p>
        <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/70 px-2.5 py-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-slate-300">All systems mocked</span>
        </div>
      </div>
    </header>
  );
}
