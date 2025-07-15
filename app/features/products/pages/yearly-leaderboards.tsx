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

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
  }).setZone("Asia/Seoul").setLocale("ko");
  return [{ title: `Best products of ${date.toFormat("yyyy")} | wemake` }];
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
  const today = DateTime.now().setZone("Asia/Seoul").startOf("year");
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

export default function YearlyLeaderboards({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
  });
  const previousYear = urlDate.minus({ years: 1 });
  const nextYear = urlDate.plus({ years: 1 });
  const isThisYear = urlDate.equals(
    DateTime.now().setZone("Asia/Seoul").startOf("year")
  );
  return (
    <div className="space-y-10">
      <PageHero
        title={`Best products of ${urlDate.toFormat("yyyy")}`}
        subtitle={`See the best products of the year`}
      />
      <div className="flex items-center gap-2 justify-center">
        <Button variant="secondary" asChild className="px-4">
          <Link
            to={`/products/leaderboards/yearly/${previousYear.year}`}
          >
            &larr; {previousYear.toFormat("yyyy")}
          </Link>
        </Button>
        {!isThisYear ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/yearly/${nextYear.year}`}
            >
              {nextYear.toFormat("yyyy")} &rarr;
            </Link>
          </Button>
        ) : (
          <Button variant="secondary" disabled>
            {nextYear.toFormat("yyyy")} &rarr;
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
