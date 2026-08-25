export type GeologyChallenge = {
  title: string;
  description: string;
};

export type DrillingMethod = {
  name: string;
  suitability: string;
  description: string;
  advantages: string[];
};

export type RigRequirement = {
  parameter: string;
  requirement: string;
  reason: string;
};

export type ToolingRequirement = {
  item: string;
  recommendation: string;
  purpose: string;
};

export type RecommendedRig = {
  model: string;
  reason: string;
  applications: string[];
  href: string;
};

export type GeologyData = {
  slug: string;
  name: string;
  shortName: string;
  badge: string;

  introduction: string;

  characteristics: string[];

  challenges: GeologyChallenge[];

  drillingMethods: DrillingMethod[];

  rigRequirements: RigRequirement[];

  tooling: ToolingRequirement[];

  recommendedRigs: RecommendedRig[];

  engineeringNote: string;
};