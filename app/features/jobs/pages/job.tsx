import type { Route } from "./+types/job";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Job Detail" }];
};

export default function JobPage() {
  return (
    <div>
      <h1>Job Detail</h1>
    </div>
  );
} 