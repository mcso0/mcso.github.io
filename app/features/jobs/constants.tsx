export const JOB_TYPE = [
  {
    label: "Full-time",
    value: "full-time",
  },
  {
    label: "Part-time",
    value: "part-time",
  },
  {
    label: "Freelance",
    value: "freelance",
  },
  {
    label: "Internship",
    value: "internship",
  },
] as const;

export const LOCATIONS_TYPE = [
  {
    label: "Remote",
    value: "remote",
  },
  {
    label: "In-person",
    value: "in-person",
  },
  {
    label: "Hybrid",
    value: "hybrid",
  },
] as const;

export const SALARY_RANGE = [
  "$0 - $50,000",
  "$50,000 - $75,000",
  "$75,000 - $100,000",
  "$100,000 - $150,000",
  "$150,000 - $200,000",
  "$200,000 - $250,000",
  "$250,000 +",
] as const;
