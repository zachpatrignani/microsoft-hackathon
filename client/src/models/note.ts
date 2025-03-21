import { Job } from "./job";
export interface Note {
  jobObject?: Job;
  matchNotes?: string[];
  challengeNotes?: string[];
  salaryInsights?: string[]
}
