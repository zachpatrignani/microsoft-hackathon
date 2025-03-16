
export type JobWorkType = "Remote" | "On-Site" | "Hybrid";
export type JobEmploymentType = "Part-Time" | "Full-Time" | "Contract";

export interface Job {
    _id: string;
    name: string;
    company: string;
    industry?: string;
    tags?: string[];
    description: string;
    city?: string;
    state?: string;
    location?: string;
    _createdAt: Date;
    employmentType: JobEmploymentType;
    wage: number;
    workType: JobWorkType;
    employerId: string;
    employerPhone?: string;
    employerEmail?: string;
}