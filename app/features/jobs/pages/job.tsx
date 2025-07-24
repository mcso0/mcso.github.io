import type { Route } from "./+types/job";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Job Detail | wemake" },
    { name: "description", content: "Job details" },
  ];
};

export default function JobPage() {
  return (
    <div>
      <h1>Job Detail</h1>
    </div>
  );
}
