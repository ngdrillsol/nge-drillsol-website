export interface Industry {
  id: string;

  title: string;

  description: string;

  icon: string;

  image: string;

  applications: string[];

  geology: string[];

  challenges: string[];

  rigRequirements: string[];

  engineeringInformation: string;

  recommendedRigs: string[];

  href: string;
}

export interface IndustryBenefit {
  title: string;

  description: string;

  icon: string;
}