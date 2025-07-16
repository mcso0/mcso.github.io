import type { Route } from "./+types/submit";
import PageHero from "~/common/components/page-hero";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { Textarea } from "~/common/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import InputPair from "~/common/components/input-pair";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";
import Footer from "~/common/components/page-footer";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    {
      name: "description",
      content: "Submit your product",
    },
  ];
};

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export default function Submit() {
  return (
    <div className="space-y-10">
      <PageHero
        title="Submit your product"
        subtitle="Share your product with the world"
        className=""
      />
      <Form className="grid grid-cols-2 gap-20 max-w-screen-lg mx-auto mb-40">
        <div className="space-y-10">
          <InputPair
            label="Product Name"
            description="This is your product name"
            id="name"
            name="name"
            placeholder="Enter your product name"
            type="text"
            required
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            id="tagline"
            name="tagline"
            placeholder="A concise description of your product"
            type="text"
            required
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            id="url"
            name="url"
            placeholder="https://example.com"
            type="url"
            required
          />
          <InputPair
            textarea
            label="Description"
            description="A detailed description of your product"
            id="description"
            name="description"
            placeholder="A detailed description of your product"
            required
            type="text"
          />
          <SelectPair
            name="category"
            label="Category"
            description="The category of your product"
            placeholder="Select a category"
            options={[
              { label: "AI", value: "ai" },
              { label: "Productivity", value: "productivity" },
              { label: "Marketing", value: "marketing" },
              { label: "Design", value: "design" },
              { label: "Development", value: "development" },
              { label: "Other", value: "other" },
            ]}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
        <div className="w-full h-full bg-muted-foreground/10 flex items-center justify-center">
          <span>background_img</span>
        </div>
      </Form>
      <Footer />
    </div>
  );
}
