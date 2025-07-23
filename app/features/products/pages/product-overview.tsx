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
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">What is this product?</h3>
        <p className="text-base text-muted-foreground">
          ChatGenius uses natural language processing to provide instant
          customer support through intelligent chatbots.
          <br />
          It understands complex queries and offers accurate responses while
          learning from every interaction.
        </p>
      </div>
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">How does it work?</h3>
        <p className="text-base text-muted-foreground">
          Integrate via API and train the AI on your knowledge base. The system
          handles common inquiries automatically and
          <br />
          escalates complex issues to human agents. Includes sentiment analysis
          for better customer understanding.
        </p>
      </div>
    </div>
  );
}
