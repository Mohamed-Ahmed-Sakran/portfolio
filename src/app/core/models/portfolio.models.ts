// ─── Portfolio Data Models ─────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  level?: number; // 0-100
}

export interface SkillGroup {
  category: string;
  icon: string;
  color: string;
  skills: SkillItem[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  architecture?: string;
  githubUrl: string;
  liveUrl?: string;
  category: ProjectCategory;
  featured?: boolean;
  status: 'completed' | 'in-progress';
  year: number;
}

export type ProjectCategory = 'backend' | 'fullstack' | 'api' | 'frontend' | 'console' | 'all';

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
  flag: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username: string;
}
