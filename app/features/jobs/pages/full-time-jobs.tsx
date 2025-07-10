import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Full-time Jobs | wemake" },
    { name: "description", content: "Find full-time career opportunities" },
  ];
};

export function loader() {
  return {
    jobs: Array.from({ length: 12 }, (_, index) => ({
      id: `fulltime-job-${index + 1}`,
      company: ["Apple", "Google", "Microsoft", "Meta", "Netflix", "Tesla"][
        index % 6
      ],
      title: `Senior ${
        ["Frontend", "Backend", "Full-stack", "Mobile", "Product"][index % 5]
      } Engineer`,
      postedAt: `${Math.floor(Math.random() * 7) + 1} days ago`,
      employmentType: "Full-time",
      workType: Math.random() > 0.5 ? "On-site" : "Hybrid",
      salary: `$${100 + Math.floor(Math.random() * 80)}k - $${
        180 + Math.floor(Math.random() * 120)
      }k`,
      location: ["San Francisco", "New York", "Seattle", "Austin"][index % 4],
      additionalBadges: ["Benefits", "Equity"],
    })),
  };
}

export default function FullTimeJobs() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Full-time Jobs
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find full-time career opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
