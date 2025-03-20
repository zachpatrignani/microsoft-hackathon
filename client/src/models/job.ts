export type JobWorkType = "Remote" | "Hybrid" | "In-Person";
export type JobEmploymentType = "Part-Time" | "Full-Time" | "Contract" | "Intern" | "Temporary" ;

export interface Job {
  _id: string;
  name?: string;
  company?: string;
  industry?: string;
  description?: string;
  skills?: string;
  responsibilities?: string;
  city?: string;
  state?: string;
  _createdAt: string;
  employmentType?: JobEmploymentType;
  wage?: number;
  workType?: JobWorkType;
  employerId?: string;
  employerPhone?: string;
  employerEmail?: string;
  website?: string;
}
