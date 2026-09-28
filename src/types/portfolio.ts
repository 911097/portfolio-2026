export type ProjectFilter = 
  | 'all' 
  | 'system_dev'
  | 'visual_design'
  | 'ui_ux'
  | 'branding' 
  | 'graphic' 
  | 'web_dev' 
  | 'ai_systems'
  | 'illustration';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitleEn?: string;
  originalTitle: string;
  filterCategory: ProjectFilter;
  displayBadge: string;
  tags: string[];
  year: string;
  role: string;
  tools: string[];
  leadParagraph: string;
  problem: string;
  solutionAndMethods: string;
  highlights: string[];
  metrics: ProjectMetric[];
  artTheme: 'system-dev' | 'visual-design' | 'ui-ux-phone' | 'campus-branding' | 'mobile-wallet' | 'infographic-poster' | 'hospital-sensing' | 'rehab-skeleton' | 'safety-surveillance' | 'rfm-analytics' | 'supply-chain' | 'smartfit-mirror' | 'lt-architects' | 'rwd-luoyang' | 'app-ui' | 'elderly-care' | 'white-model-3d' | 'print-isometric' | 'anonymous-tracking-ui';
  inventionAward?: string;
  videoLink?: string;
  subPages?: {
    subtitle: string;
    description: string;
  }[];
}

export interface EducationCourse {
  category: string;
  courses: { name: string; score: number }[];
}

export interface HonorAward {
  event: string;
  dateOrYear: string;
  project: string;
  role: string;
  note?: string;
  type: 'international' | 'certification' | 'campus';
}

export interface WorkExperience {
  period: string;
  company: string;
  title: string;
  durationOrScope: string;
  description: string;
  details: string[];
}

export interface NextDirection {
  title: string;
  subtitle: string;
  items: string[];
}
