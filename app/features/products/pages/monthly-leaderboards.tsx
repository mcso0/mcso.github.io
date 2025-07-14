import type { Route } from "./+types/monthly-leaderboards";
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
  month: z.coerce.number(),
});

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Monthly Leaderboards | wemake" },
    { name: "description", content: "Top performing products monthly" },
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedParams } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "INVALID_PARAMS",
        error_message: "Invalid month format",
      },
      { status: 400 }
    );
  }

  const { year, month } = parsedParams;

  // 월 번호 검증 (1-12)
  if (month < 1 || month > 12) {
    throw data(
      {
        error_code: "INVALID_MONTH",
        error_message: "Invalid month number",
      },
      { status: 400 }
    );
  }

  const currentMonth = DateTime.now().setZone("Asia/Seoul");
  const requestedMonth = DateTime.fromObject({ year, month }).setZone(
    "Asia/Seoul"
  );

  if (requestedMonth > currentMonth) {
    throw data(
      {
        error_code: "FUTURE_MONTH",
        error_message: "Future month",
      },
      { status: 400 }
    );
  }

  return {
    year,
    month,
  };
};

export default function MonthlyLeaderboards({
  loaderData,
}: Route.ComponentProps) {
  const currentMonth = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
  }).setZone("Asia/Seoul");

  const previousMonth = currentMonth.minus({ months: 1 });
  const nextMonth = currentMonth.plus({ months: 1 });
  const isCurrentMonth = currentMonth.hasSame(
    DateTime.now().setZone("Asia/Seoul"),
    "month"
  );

  return (
    <div className="space-y-10">
      <PageHero
        title={`The best of ${currentMonth.toFormat("yyyy.MM")}`}
        subtitle={`The best products of ${currentMonth.toFormat("yyyy.MM")}`}
      />
      <div className="flex items-center gap-2 justify-center">
        <Button variant="secondary" asChild className="px-4">
          <Link
            to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}
          >
            &larr; {previousMonth.toFormat("yyyy.MM")}
          </Link>
        </Button>
        {!isCurrentMonth ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}
            >
              {nextMonth.toFormat("yyyy.MM")} &rarr;
            </Link>
          </Button>
        ) : (
          <Button variant="secondary" disabled>
            {nextMonth.toFormat("yyyy.MM")} &rarr;
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
