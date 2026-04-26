export interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  detailsImage?: string;
  techStack: string[];
  features: string[];
  timeline: {
    startDate: string;
    endDate: string;
  };
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  competition?: {
    name: string;
    result?: string;
    teamMembers?: string[];
  };
  team?: {
    size: string;
    composition: string;
  };
}
