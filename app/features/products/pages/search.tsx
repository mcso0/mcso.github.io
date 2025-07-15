import type { Route } from "./+types/search";
import * as z from "zod";
import { data, Form } from "react-router";
import PageHero from "~/common/components/page-hero";
import ProductCard from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [{ title: `Search products | wemake` },
    {
      name: "description",
      content: "Search for products",
    },
  ];
}

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});


export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedParams } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  )
  if (!success) {
    throw new Error("Invalid parameters");
  };
}

export default function Search({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <PageHero
        title="Search"
        subtitle="Search for products by title or description"
      />
      <Form className="flex gap-4 justify-center max-w-screen-sm mx-auto items-center">
        <Input
          name="query"
          placeholder="Search for products"
          className="h-10 w-full text-base"
        />
        <Button type="submit" className="h-10">Search</Button>
      </Form>
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
