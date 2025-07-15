import type { Route } from "./+types/categories";
import PageHero from "~/common/components/page-hero";
import CategoryCard from "../components/category-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Explore products by categories" },
  ];
};


export default function Categories() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Categories"
        subtitle="Explore products by categories"
      />
      <div className="grid grid-cols-4 w-full gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={`category-${index + 1}`}
            id={`category-${index + 1}`}
            name={`Category ${index + 1}`}
            description={`Category description ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}


