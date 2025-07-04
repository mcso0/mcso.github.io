import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Product Leaderboards | wemake" }];
};

export default function Leaderboards() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Product Leaderboards
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            See the top performing products in our community
          </p>
        </div>
      </div>
    </div>
  );
}


