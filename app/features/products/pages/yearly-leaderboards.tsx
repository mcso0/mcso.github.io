import type { Route } from "./+types/yearly-leaderboards";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse } from "react-router";
import * as z from "zod";
import PageHero from "~/common/components/page-hero";
import ProductCard from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
  year: z.coerce.number(),
});

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Yearly Leaderboards | wemake" },
    { name: "description", content: "Top performing products yearly" },
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedParams } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "INVALID_PARAMS",
        error_message: "Invalid year format",
      },
      { status: 400 }
    );
  }

  const { year } = parsedParams;

  // 연도 검증 (합리적인 범위)
  const currentYear = DateTime.now().setZone("Asia/Seoul").year;
  if (year < 2020 || year > currentYear + 1) {
    throw data(
      {
        error_code: "INVALID_YEAR",
        error_message: "Invalid year range",
      },
      { status: 400 }
    );
  }

  if (year > currentYear) {
    throw data(
      {
        error_code: "FUTURE_YEAR",
        error_message: "Future year",
      },
      { status: 400 }
    );
  }

  return {
    year,
  };
};

export default function YearlyLeaderboards({
  loaderData,
}: Route.ComponentProps) {
  const currentYear = DateTime.fromObject({
    year: loaderData.year,
  }).setZone("Asia/Seoul");

  const previousYear = currentYear.minus({ years: 1 });
  const nextYear = currentYear.plus({ years: 1 });
  const isCurrentYear = currentYear.hasSame(
    DateTime.now().setZone("Asia/Seoul"),
    "year"
  );

  return (
    <div className="space-y-10">
      <PageHero
        title={`The best of ${currentYear.toFormat("yyyy")}`}
        subtitle={`The best products of ${currentYear.toFormat("yyyy")}`}
      />
      <div className="flex items-center gap-2 justify-center">
        <Button variant="secondary" asChild className="px-4">
          <Link to={`/products/leaderboards/yearly/${previousYear.year}`}>
            &larr; {previousYear.toFormat("yyyy")}
          </Link>
        </Button>
        {!isCurrentYear ? (
          <Button variant="secondary" asChild>
            <Link to={`/products/leaderboards/yearly/${nextYear.year}`}>
              {nextYear.toFormat("yyyy")} &rarr;
            </Link>
          </Button>
        ) : (
          <Button variant="secondary" disabled>
            {nextYear.year} &rarr;
          </Button>
        )}
      </div>
      <div className="space-y-10 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, index) => (
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
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
};
