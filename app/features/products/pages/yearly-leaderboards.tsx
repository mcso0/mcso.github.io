import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Leaderboards | wemake" },
    { name: "description", content: "Top performing products yearly" },
  ];
};

export function loader() {
  return {
    year: "2024",
    products: [
      { id: 1, name: "Product A", score: 9500, rank: 1 },
      { id: 2, name: "Product B", score: 8900, rank: 2 },
      { id: 3, name: "Product C", score: 8200, rank: 3 },
    ],
  };
}

export default function YearlyLeaderboards() {
  const year = "2024";
  const products = [
    { id: 1, name: "Product A", score: 9500, rank: 1 },
    { id: 2, name: "Product B", score: 8900, rank: 2 },
    { id: 3, name: "Product C", score: 8200, rank: 3 },
  ];

  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            {year} Yearly Leaderboards
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Top performing products in {year}
          </p>
        </div>
        
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold">#{product.rank}</span>
                <span className="text-lg">{product.name}</span>
              </div>
              <span className="text-lg font-semibold">{product.score.toLocaleString()} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 