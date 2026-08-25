export interface MarketRegion {
  id: string;
  title: string;
  description: string;
  countries: number;
  color: string;
}

export interface CountryMarket {
  id: string;
  country: string;
  region: string;

  geology: string[];
  geologyOverview: string[];

  applications: string[];

  challenges: string[];

  rigRequirements: string[];

  drillingMethods: string[];
  drillingMethodReasons: string[];

  recommendedRigs: string[];
  rigReasons: string[];

  image: string;
  href: string;
}