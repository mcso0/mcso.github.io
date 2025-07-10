import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Internship Jobs | wemake" },
    {
      name: "description",
      content: "Find internship opportunities to start your career",
    },
  ];
}

export function loader() {
  return {
    jobs: Array.from({ length: 8 }, (_, index) => ({
      id: `internship-job-${index + 1}`,
      company: ["Apple", "Google", "Microsoft", "Meta", "Amazon", "Uber"][
        index % 6
      ],
      title: `${
        ["Software", "Data Science", "Product", "Design", "Marketing"][
          index % 5
        ]
      } Intern`,
      postedAt: `${Math.floor(Math.random() * 10) + 1} days ago`,
      employmentType: "Internship",
      workType: "Hybrid",
      salary: `$${20 + Math.floor(Math.random() * 15)}/hr - $${
        35 + Math.floor(Math.random() * 20)
      }/hr`,
      location: ["San Francisco", "New York", "Seattle", "Boston"][index % 4],
      additionalBadges: ["Summer 2024", "Mentorship"],
    })),
  };
}

export default function InternshipJobs() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Internship Jobs
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find internship opportunities to start your career
          </p>
        </div>
      </div>
    </div>
  );
}
