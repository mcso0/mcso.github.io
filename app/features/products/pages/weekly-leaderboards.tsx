import type { MetaFunction } from "react-router";
import { DateTime } from "luxon";
export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Leaderboards | wemake" },
    { name: "description", content: "Top performing products weekly" },
  ];
};

export default function WeeklyLeaderboards() {
  const year = DateTime.now().setZone("Asia/Seoul").year;
  const week = DateTime.now().setZone("Asia/Seoul").weekNumber;
  const products = [
    { id: 1, name: "Product A", score: 680, rank: 1 },
    { id: 2, name: "Product B", score: 590, rank: 2 },
    { id: 3, name: "Product C", score: 520, rank: 3 },
  ];

  return (
    <div className="px-20 py-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tight">
          {year} Week {week} Leaderboards
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          Top performing products in {year} week {week}
        </p>
      </div>
    </div>
  );
}
