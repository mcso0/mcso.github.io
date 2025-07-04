import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Products | wemake" }];
};

export default function Products() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Products
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            for you and your business
          </p>
        </div>
      </div>
    </div>
  );
}
