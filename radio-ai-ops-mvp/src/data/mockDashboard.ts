import type { DashboardMetric, ModuleItem } from "../lib/types";

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Stations", value: "7" },
  { label: "AI Assets Generated This Week", value: "42" },
  { label: "Hours Staff Time Saved", value: "18.5" },
  { label: "Compliance Drafts Ready", value: "4" }
];

export const modules: ModuleItem[] = [
  {
    id: "news-pipeline",
    name: "Hyperlocal News Pipeline",
    description: "Drafts station-specific local news bulletins and refreshes angles by daypart.",
    status: "Demo Ready",
    valueLabel: "Content"
  },
  {
    id: "spec-spot",
    name: "Spec Spot Generator",
    description: "Creates first-pass ad copy concepts and spot scripts for prospecting.",
    status: "Mocked",
    valueLabel: "Sales"
  },
  {
    id: "fcc-drafter",
    name: "FCC Quarterly Issues Drafter",
    description: "Builds compliance draft language from programming and community inputs.",
    status: "API Pending",
    valueLabel: "Compliance"
  },
  {
    id: "social-queue",
    name: "Social Automation Queue",
    description: "Plans and stages social posts tied to promos, events, and live reads.",
    status: "Mocked",
    valueLabel: "Content"
  },
  {
    id: "copyright-logger",
    name: "Copyright Logger",
    description: "Normalizes music logs and prepares rights/compliance-friendly exports.",
    status: "Demo Ready",
    valueLabel: "Compliance"
  },
  {
    id: "proposal-generator",
    name: "Ad Sales CRM + Proposal Generator",
    description: "Packages account intelligence into polished draft proposals for close support.",
    status: "API Pending",
    valueLabel: "Revenue"
  },
  {
    id: "aircheck",
    name: "Aircheck Logger",
    description: "Captures and tags host clips for coaching and on-air quality review.",
    status: "Mocked",
    valueLabel: "Content"
  }
];
