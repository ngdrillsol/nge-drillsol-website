export interface Industry {

  id: string;

  title: string;

  description: string;

  icon: string;

  image: string;

  applications: string[];

}

export interface IndustryCardProps {

  industry: Industry;

}