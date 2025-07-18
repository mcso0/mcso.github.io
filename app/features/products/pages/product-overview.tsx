import type { Route } from "./+types/product-overview";
import { ChevronUpIcon, GlobeIcon, StarIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";


export const meta: Route.MetaFunction = ({ params }) => {
  const { productId } = params;
  return [
    { title: `Product - ${productId} | wemake` },
    { name: "description", content: `View product details and information` },
  ];
};

export default function ProductOverview({ 
  params : { productId }
}: Route.ComponentProps) {
  return (
    <div className="max-w-screen-xl mx-auto space-y-10">
      <div className="flex flex-row justify-between border-b pt-8 pb-16">
        <div className="flex flex-row justify-start items-center gap-10">
          {/* Logo image */}
          <div className="size-34 rounded-xl shadow-xl bg-primary/50 overflow-hidden">  
          </div>
          {/* Product information */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Product Overview</h1>
            <p className="text-2xl font-light text-muted-foreground">
              Product description
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="flex items-start text-yellow-400 gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon className="size-4" key={index} fill="currentColor" />
                ))}
              </div>
              <span className="text-base text-muted-foreground">100 reviews</span>
            </div>
          </div>
        </div>
        {/* Product actions */}
        <div className="flex flex-row gap-6 items-center justify-end">
          <div className="flex">
            <Button variant="ghost" className="cursor-pointer text-base !px-6 py-6" size="lg">
              <GlobeIcon className="size-4" />
              Visit website
            </Button>
          </div>
          <div className="flex"> 
            <Button variant="default" className="cursor-pointer text-base !px-6 py-6" size="lg">
              <ChevronUpIcon className="size-4" />
              Upvote (284)
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center gap-4">
        
        <Button variant="outline" className="cursor-pointer text-base" size="lg" asChild>
          <Link to={`/products/${productId}/overview`}>Overview</Link>
        </Button>
        <Button variant="outline" className="cursor-pointer text-base" size="lg" asChild
        >
          <Link to={`/products/${productId}/reviews`}>Reviews</Link> 
        </Button>
      </div>
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">What is this product?</h3>
        <p className="text-base text-muted-foreground">
          ChatGenius uses natural language processing to provide instant customer support through intelligent chatbots.
          <br />It understands complex queries and offers accurate responses while learning from every interaction.
        </p>
      </div>
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">How does it work?</h3>
        <p className="text-base text-muted-foreground">
          Integrate via API and train the AI on your knowledge base. The system handles common inquiries automatically and 
          <br />escalates complex issues to human agents. Includes sentiment analysis for better customer understanding.
        </p>
      </div>
    </div>
  );
}