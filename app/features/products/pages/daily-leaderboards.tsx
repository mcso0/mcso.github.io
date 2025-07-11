import type { Route } from "./+types/daily-leaderboards";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse } from "react-router";
import * as z from "zod";
import PageHero from "~/common/components/page-hero";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const meta: Route.MetaFunction = () => {
  return [{ title: "Daily Leaderboards | wemake" }];
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
  const date = DateTime.fromObject(parsedDate).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "INVALID_DATE",
        error_message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
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

export default function DailyLeaderboards({
  loaderData,
}: Route.ComponentProps) {
  const date = DateTime.fromObject(loaderData);
  return (
    <div>
      <PageHero
        title={"The best of today's products"}
        subtitle={`Today's products for ${date.year}-${date.month}-${date.day}`}
      />
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
