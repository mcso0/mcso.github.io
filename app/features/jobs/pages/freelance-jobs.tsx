import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Freelance Jobs | wemake" },
    {
      name: "description",
      content: "Find freelance and contract opportunities",
    },
  ];
};

export function loader() {
  return {
    jobs: Array.from({ length: 10 }, (_, index) => ({
      id: `freelance-job-${index + 1}`,
      company: [
        "Startup Co",
        "Tech Agency",
        "Design Studio",
        "E-commerce",
        "FinTech",
      ][index % 5],
      title: `Freelance ${
        [
          "Web Developer",
          "UI/UX Designer",
          "Content Writer",
          "Marketing",
          "Consultant",
        ][index % 5]
      }`,
      postedAt: `${Math.floor(Math.random() * 5) + 1} days ago`,
      employmentType: "Contract",
      workType: "Remote",
      salary: `$${30 + Math.floor(Math.random() * 40)}/hr - $${
        80 + Math.floor(Math.random() * 70)
      }/hr`,
      location: "Remote",
      additionalBadges: ["Flexible", "Project-based"],
    })),
  };
}

export default function FreelanceJobs() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Freelance Jobs
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find freelance and contract opportunities
          </p>
        </div>
      </div>
    </div>
  );
}
