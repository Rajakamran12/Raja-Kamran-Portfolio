
export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  github?: string;
  demo?: string;
}
