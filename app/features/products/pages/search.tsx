import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    {
      name: "description",
      content: "Search for products in the wemake community",
    },
  ];
}

export function loader() {
  return {
    searchQuery: "",
    results: [],
  };
}

export default function Search() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Search Products
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find the perfect product for your needs
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <input
            type="search"
            placeholder="Search products..."
            className="w-full px-4 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-center text-muted-foreground">
          Start typing to search for products
        </div>
      </div>
    </div>
  );
}
