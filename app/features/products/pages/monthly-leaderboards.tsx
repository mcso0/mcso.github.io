import type { MetaFunction } from "react-router";
import { DateTime } from "luxon";

export const meta: MetaFunction = () => {
  return [
    { title: "Monthly Leaderboards | wemake" },
    { name: "description", content: "Top performing products monthly" },
  ];
};

export default function MonthlyLeaderboards() {
  const year = DateTime.now().setZone("Asia/Seoul").year;
  const month = DateTime.now().setZone("Asia/Seoul").month;

  return (
    <div className="px-20 py-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tight">
          {year}/{month} Monthly Leaderboards
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          Top performing products in {year}/{month}
        </p>
      </div>
    </div>
  );
}
