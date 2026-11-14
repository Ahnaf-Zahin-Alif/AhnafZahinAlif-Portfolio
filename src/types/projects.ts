export interface ProjectItem {
  id: string;
  index: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  extendedBreakdown: string;
  architectureDetails: string[];
  tags: string[];
  type: "hospital" | "uav" | "academic" | "tracker" | "python";
  repoUrl: string;
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  };
}
