export const ROLES = [
    'Backend Developer',
    'Business Analyst',
    'Data Analyst',
    'Director',
    'Frontend Developer',
    'Manager',
    'Marketing Specialist',
    'Principal Engineer',
    'QA Engineer',
    'Senior Backend Developer',
    'Senior Frontend Developer',
    'Senior FullStack Developer',
    'Staff Engineer',
    'Tech Lead',
] as const

export type Role = (typeof ROLES)[number]
