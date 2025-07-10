import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Remote Jobs | wemake" },
    { name: "description", content: "Find the best remote job opportunities" },
  ];
}

export function loader() {
  return {
    jobs: Array.from({ length: 15 }, (_, index) => ({
      id: `remote-job-${index + 1}`,
      company: ["Apple", "Google", "Microsoft", "Meta", "Netflix", "Tesla"][
        index % 6
      ],
      title: `Remote ${
        ["Frontend", "Backend", "Full-stack", "DevOps", "Data"][index % 5]
      } Developer`,
      postedAt: "2 days ago",
      employmentType: "Full-time",
      workType: "Remote",
      salary: `$${80 + Math.floor(Math.random() * 70)}k - $${
        150 + Math.floor(Math.random() * 100)
      }k`,
      location: "Worldwide",
      additionalBadges: ["Remote", "Urgent"],
    })),
  };
}

export default function RemoteJobs() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Remote Jobs
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find the best remote job opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
