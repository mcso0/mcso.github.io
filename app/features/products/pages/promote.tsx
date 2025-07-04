import type { MetaFunction } from "react-router";
import type { Route } from "./+types/promote";

interface PromotionOption {
  id: string;
  name: string;
  price: string;
  duration: string;
  benefits: string[];
}

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | wemake" },
    {
      name: "description",
      content: "Promote your product to reach a wider audience",
    },
  ];
};

export function loader() {
  return {
    promotionOptions: [
      {
        id: "featured",
        name: "Featured Listing",
        price: "$99",
        duration: "7 days",
        benefits: [
          "Homepage featured spot",
          "Priority in search",
          "Social media feature",
        ],
      },
      {
        id: "boost",
        name: "Product Boost",
        price: "$49",
        duration: "3 days",
        benefits: [
          "Higher search ranking",
          "Newsletter mention",
          "Badge highlight",
        ],
      },
      {
        id: "basic",
        name: "Basic Promotion",
        price: "$19",
        duration: "1 day",
        benefits: [
          "Promoted section",
          "Extended description",
          "Social media feature",
        ],
      },
    ] as PromotionOption[],
  };
}

export default function Promote({ loaderData }: Route.ComponentProps) {
  const { promotionOptions } = loaderData as unknown as {
    promotionOptions: PromotionOption[];
  };

  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Promote Your Product
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Reach a wider audience with our promotion options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotionOptions.map((option: PromotionOption) => (
            <div key={option.id} className="p-6 border rounded-lg space-y-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold">{option.name}</h3>
                <div className="text-3xl font-bold text-blue-500">
                  {option.price}
                </div>
                <div className="text-muted-foreground">{option.duration}</div>
              </div>

              <ul className="space-y-2">
                {option.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
