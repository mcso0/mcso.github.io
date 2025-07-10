import type { Route } from "./+types/leaderboards";
import PageHero from "~/common/components/page-hero";
import { Link } from "react-router";
import ProductCard from "../components/product-card";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Leaderboards | wemake" },
    { name: "description", content: "Top product leaderboards" },
  ];
};

export default function Leaderboards() {
  return (
    <div className="space-y-20">
    <PageHero
      title="Leaderboards"
      subtitle="See the top performing products in our community"
      className=""
    />

    {/* All Time Leaderboard */}
    <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            All Time Leaderboard
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            The most popular products on wemake by all time
          </p>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            key={`product-${index + 1}`}
            id={`product-${index + 1}`}
            name={`Product ${index + 1}`}
            description={`Product description ${index + 1}`}
            commentCount={12}
            viewCount={12}
            likeCount={12}
            upvoteCount={120}
          />
        ))}
        <Button variant="link" asChild className="!text-primary self-center">
            <Link to={"/products/leaderboards/yearly"}>
              Explore all products &rarr;
            </Link>
          </Button>
      </div>

    {/* Daily Leaderboard */}
    <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            The most popular products on wemake by day
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={`product-${index + 1}`}
            id={`product-${index + 1}`}
            name={`Product ${index + 1}`}
            description={`Product description ${index + 1}`}
            commentCount={12}
            viewCount={12}
            likeCount={12}
            upvoteCount={120}
          />
        ))}
        <Button variant="link" asChild className="!text-primary self-center">
            <Link to={"/products/leaderboards/daily"}>
              Explore all products &rarr;
            </Link>
          </Button>
      </div>

      {/* Weekly Leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            The most popular products on wemake by week
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={`product-${index + 1}`}
            id={`product-${index + 1}`}
            name={`Product ${index + 1}`}
            description={`Product description ${index + 1}`}
            commentCount={12}
            viewCount={12}
            likeCount={12}
            upvoteCount={120}
          />
        ))}
        <Button variant="link" asChild className="!text-primary self-center">
            <Link to={"/products/leaderboards/weekly"}>
              Explore all products &rarr;
            </Link>
          </Button>
      </div>

      {/* Monthly Leaderboard */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            The most popular products on wemake by month
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={`product-${index + 1}`}
            id={`product-${index + 1}`}
            name={`Product ${index + 1}`}
            description={`Product description ${index + 1}`}
            commentCount={12}
            viewCount={12}
            likeCount={12}
            upvoteCount={120}
          />
        ))}
        <Button variant="link" asChild className="!text-primary self-center">
            <Link to={"/products/leaderboards/monthly"}>
              Explore all products &rarr;
            </Link>
          </Button>
      </div>

    </div>
  );
}


