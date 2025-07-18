import type { Route } from "./+types/redirect-product";
import { redirect } from "react-router";

export const loader = ({ params }: Route.LoaderArgs) => {
    const { productId } = params;
  return redirect(`/products/${productId}/overview`);
};