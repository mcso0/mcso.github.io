import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Product Categories | wemake" },
    { name: "description", content: "Explore products by categories" },
  ];
};

export function loader() {
  return {
    categories: [
      { id: "web", name: "Web Development", count: 124 },
      { id: "mobile", name: "Mobile Apps", count: 89 },
      { id: "ai", name: "AI & Machine Learning", count: 67 },
      { id: "design", name: "Design Tools", count: 45 },
      { id: "productivity", name: "Productivity", count: 78 },
      { id: "gaming", name: "Gaming", count: 34 },
    ],
  };
}

export default function Categories() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Product Categories
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Explore products by categories
          </p>
        </div>
      </div>
    </div>
  );
}
