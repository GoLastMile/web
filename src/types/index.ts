/**
 * Common types used across the application
 */

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  createdAt: Date;
}

// Project types
export interface Project {
  id: string;
  name: string;
  path: string;
  userId: string;
  lastAnalyzedAt?: Date;
  createdAt: Date;
}

// Analysis types
export interface Analysis {
  id: string;
  projectId: string;
  readinessScore: number;
  gapCount: number;
  fixableCount: number;
  createdAt: Date;
}

export interface Gap {
  id: string;
  analysisId: string;
  category: GapCategory;
  severity: GapSeverity;
  title: string;
  description: string;
  filePath?: string;
  autoFixable: boolean;
  suggestedFix?: string;
}

export type GapCategory =
  | "security"
  | "auth"
  | "testing"
  | "cicd"
  | "git"
  | "configuration"
  | "build"
  | "deployment"
  | "logging"
  | "error-handling"
  | "database"
  | "api";

export type GapSeverity = "critical" | "warning" | "info";

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}
