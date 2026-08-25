export interface Service {
  id: string;

  title: string;

  description: string;

  icon: string;

  image: string;

  features: string[];

  relatedSolutions: string[];

  href: string;
}

export interface WorkflowStep {
  step: number;

  title: string;

  description: string;
}