import type { Route } from "./+types/leaderboards-redirection";
import { redirect } from "react-router";


export function loader({ params, request }: Route.LoaderArgs) {
  const { period } = params;
  return redirect(`/products/leaderboards/${period}`);
  return null;
}