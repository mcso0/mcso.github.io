export const JOB_TYPES = [
    {
        label: "Full-Time",
        value: "full-time",
    },
    {
        label: "Part-Time",
        value: "part-time",
    },
    {
        label: "Remote",
        value: "remote",
    },
] as const;

export const LOCATION_TYPES = [
    {
        label: "Remote",
        value: "remote",
    },
    {
        label: "In-Person",
        value: "in-person",
    },    
    {
        label: "Hybrid",
        value: "hybrid",
    },
] as const;


export const SALARY_RANGES = [
    "$0 - $50,000",
    "$50,000 - $75,000",
    "$75,000 - $100,000",
    "$100,000 - $125,000",
    "$125,000 - $150,000",
    "$150,000 - $175,000",
    "$175,000 - $200,000",
    "$200,000 - $225,000",
    "$225,000 - $250,000",
    "$250,000+",
] as const;
