export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  level: number; // 1-10
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  description: string;
}

export interface Social {
  name: string;
  icon: string;
  url: string;
}