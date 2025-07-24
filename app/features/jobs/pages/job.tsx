import type { Route } from "./+types/job";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Job | wemake" },
    { name: "description", content: "Job details" },
  ];
};

export default function Job() {
  return <div>Job</div>;
}
