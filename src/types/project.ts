export type ProjectCategory = "AI" | "Analytics" | "Full Stack" | "Leadership";

export type ProjectTech = {
  name: string;
  icon: string;
};

export type ProjectFeature = string | { title: string; description: string };

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectCardSummary = {
  slug: string;
  title: string;
  heroImage: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  heroImage: string;
  category: ProjectCategory;
  problem: string;
  objectives: string;
  businessNeed: string;
  architectureDiagram: string;
  techStack: ProjectTech[];
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  metrics: ProjectMetric[];
  lessonsLearned: string;
  screenshots: string[];
  githubUrl?: string;
  demoUrl?: string;
  futureImprovements: string[];
};

export type ProjectData = ProjectCardSummary & ProjectCaseStudy;