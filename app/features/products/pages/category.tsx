import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Category Products | wemake" },
    { name: "description", content: "Explore products by category" },
  ];
};

export function loader() {
  return {
    category: "web",
    categoryName: "Web Development",
    products: [
      { id: 1, name: "Product A", description: "An amazing product", rating: 4.8 },
      { id: 2, name: "Product B", description: "Another great product", rating: 4.6 },
      { id: 3, name: "Product C", description: "Fantastic tool", rating: 4.9 },
    ],
  };
}

export default function Category() {
  const category = "web";
  const categoryName = "Web Development";
  const products = [
    { id: 1, name: "Product A", description: "An amazing product", rating: 4.8 },
    { id: 2, name: "Product B", description: "Another great product", rating: 4.6 },
    { id: 3, name: "Product C", description: "Fantastic tool", rating: 4.9 },
  ];

  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            {categoryName} Products
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Explore {categoryName} products in our community
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Rating</span>
                <span className="font-semibold">{product.rating} ⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 