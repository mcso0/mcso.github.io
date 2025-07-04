import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Part-time Jobs | wemake" },
    { name: "description", content: "Find part-time job opportunities" },
  ];
};

export function loader() {
  return {
    jobs: Array.from({ length: 6 }, (_, index) => ({
      id: `parttime-job-${index + 1}`,
      company: [
        "Local Startup",
        "Tech Café",
        "Online Store",
        "Creative Agency",
      ][index % 4],
      title: `Part-time ${
        ["Developer", "Designer", "Writer", "Assistant"][index % 4]
      }`,
      postedAt: `${Math.floor(Math.random() * 7) + 1} days ago`,
      employmentType: "Part-time",
      workType: "Flexible",
      salary: `$${15 + Math.floor(Math.random() * 20)}/hr - $${
        25 + Math.floor(Math.random() * 25)
      }/hr`,
      location: "Local",
      additionalBadges: ["Flexible hours", "Student-friendly"],
    })),
  };
}

export default function PartTimeJobs() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Part-time Jobs
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find part-time job opportunities with flexible schedules
          </p>
        </div>
      </div>
    </div>
  );
}
