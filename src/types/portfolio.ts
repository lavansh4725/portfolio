export interface PersonalInfo {
  name: string;
  headline: string;
  roles: string[];
  bio: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  leetcodeUrl: string;
  resumeUrl: string;
  profileImageUrl: string;
  availability: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    iconName?: string;
  }[];
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  badgeType: 'engineering' | 'analytics';
  shortDescription: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  overview: string;
  problemStatement: string;
  objectives: string[];
  features: string[];
  systemArchitecture: string;
  architecturePoints: string[];
  technicalImplementation: {
    frontend?: string;
    backend?: string;
    database?: string;
    aiIntegration?: string;
    authAndPdf?: string;
    dataPipeline?: string;
    sqlAndMetrics?: string;
    dashboardDesign?: string;
  };
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  learnings: string[];
  metricsOrInsights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  platform?: string;
  skillsCovered: string[];
}

export interface CodingProfile {
  platform: 'GitHub' | 'LeetCode' | 'LinkedIn';
  username: string;
  profileUrl: string;
  tagline: string;
  description: string;
}
