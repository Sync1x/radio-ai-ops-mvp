export type ModuleStatus = "Demo Ready" | "Mocked" | "API Pending";

export interface Station {
  id: string;
  frequency: string;
  callSign: string;
  brand: string;
  city: string;
  format: string;
}

export interface DashboardMetric {
  label: string;
  value: string;
}

export interface ModuleItem {
  id: string;
  name: string;
  description: string;
  status: ModuleStatus;
  valueLabel: "Sales" | "Compliance" | "Content" | "Revenue";
}
