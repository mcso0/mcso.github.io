import type { MetaFunction } from "react-router";
import { DateTime } from "luxon";
export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Leaderboards | wemake" },
    { name: "description", content: "Top performing products yearly" },
  ];
};

export default function YearlyLeaderboards() {
  const year = DateTime.now().setZone("Asia/Seoul").year;

  return (
    <div className="px-20 py-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold leading-tight tracking-tight">
          {year} Yearly Leaderboards
        </h1>
        <p className="text-xl font-light text-muted-foreground">
          Top performing products in {year}
        </p>
      </div>
    </div>
  );
}
