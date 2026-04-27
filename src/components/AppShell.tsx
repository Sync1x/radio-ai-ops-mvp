import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import type { View } from "../App";

interface AppShellProps {
  currentView: View;
  onChangeView: (view: View) => void;
  children: ReactNode;
}

export default function AppShell({ currentView, onChangeView, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 md:flex">
      <Sidebar currentView={currentView} onChangeView={onChangeView} />
      <div className="min-w-0 flex-1">
        <Topbar />
        <main className="mx-auto w-full max-w-[1400px] p-4 md:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
