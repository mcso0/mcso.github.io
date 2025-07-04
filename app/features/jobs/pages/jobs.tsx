import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "jobs | wemake" },
    { name: "description", content: "Find your dream job!" },
  ];
};

export default function Jobs() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Jobs
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find your dream job!
          </p>
        </div>
      </div>
    </div>
  );
}
