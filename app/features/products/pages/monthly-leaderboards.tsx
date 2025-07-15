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

export const meta: Route.MetaFunction = ({ params}) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
  }).setZone("Asia/Seoul").setLocale("ko");
  return [{ title: `Best products of ${date.toFormat("yyyy MMMM", { locale: "en" })} | wemake` }];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedDate } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "INVALID_PARAMS",
        error_message: "Invalid date format",
      },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject({
    year: parsedDate.year,
    month: parsedDate.month,
  }).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "INVALID_DATE",
        error_message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("month");
  if (date > today) {
    throw data(
      {
        error_code: "FUTURE_DATE",
        error_message: "Future date",
      },
      { status: 400 }
    );
  }
  return {
    ...parsedDate,
  };
};

export default function MonthlyLeaderboards({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
  });
  const previousMonth = urlDate.minus({ months: 1 });
  const nextMonth = urlDate.plus({ months: 1 });
  const isThisMonth = urlDate.equals(
    DateTime.now().setZone("Asia/Seoul").startOf("month")
  );
  return (
    <div className="space-y-10">
      <PageHero
        title={`Best products of ${urlDate.toFormat("yyyy MMMM", { locale: "en" })}`}
        subtitle={`See the best products of the month`}
      />
      <div className="flex items-center gap-2 justify-center">
        <Button variant="secondary" asChild className="px-4">
          <Link
            to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}
          >
            &larr; {previousMonth.toFormat("yy.MM")}
          </Link>
        </Button>
        {!isThisMonth ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}
            >
              {nextMonth.toFormat("yy.MM")} &rarr;
            </Link>
          </Button>
        ) : (
          <Button variant="secondary" disabled>
            {nextMonth.toFormat("yy.MM")} &rarr;
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
  return <div>Unknown errorr</div>;
};
