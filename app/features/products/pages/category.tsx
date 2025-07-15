import type { Route } from "./+types/category";
import PageHero from "~/common/components/page-hero";
import ProductCard from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";


export const meta: Route.MetaFunction = ({ params }) => {
  return [
    { title: `Developer Tools ${params.category} | wemake` },
    { name: "description", content: `Browse developer tools products` },
  ];
};


export function loader({ params }: Route.LoaderArgs) {
  return { category: params.category };
}

export default function Category({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <PageHero
        title={`${loaderData.category}`}
        subtitle={`Tools for developers to build products faster`}
      />
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