export interface SolutionCategory {
  id: string;

  title: string;

  description: string;

  icon: string;

  image: string;

  href: string;

  badge: string;

  suitableFor: string[];

  relatedRigs: string[];
}

export interface GeologyType {
  id: string;

  name: string;

  description: string;

  formations: string[];

  recommendedMethod: string;

  recommendedRigs: string[];

  href: string;
}

export interface ApplicationType {
  id: string;

  title: string;

  description: string;

  industries: string[];

  rigs: string[];

  href: string;
}