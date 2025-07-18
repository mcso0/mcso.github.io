import type { Route } from "./+types/promote";
import PageHero from "~/common/components/page-hero";
import SelectPair from "~/common/components/select-pair";
import Footer from "~/common/components/page-footer";
import { Form } from "react-router";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "~/common/components/ui/select";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    {
      name: "description",
      content: "Submit your product",
    },
  ];
};



export default function Promote() {
  const [promotionPeriod, setPromotionPeriod] = useState<DateRange | undefined>();
  const totalDays = promotionPeriod?.from && promotionPeriod?.to ? 
  DateTime.fromJSDate(promotionPeriod.to).diff(DateTime.fromJSDate(promotionPeriod.from), 'days').days
  : 0;

  return (
    <div>
      <PageHero
        title="Promote Your Product"
        subtitle="Boost your product's visibility"
        className=""
      />
      <Form className="max-w-screen-sm mx-auto mb-40 flex flex-col gap-10 items-center">
      <SelectPair
        name="product"
        label="Select a product"
        description="Select the product you want to promote"
        placeholder="Select a product"
        options={[
          { label: "AI Dark mode maker", value: "ai-dark-mode-maker" },
          { label: "AI Image generator", value: "ai-image-generator" },
          { label: "AI Text generator", value: "ai-text-generator" },
          { label: "AI Code generator", value: "ai-code-generator" },
          { label: "AI Music generator", value: "ai-music-generator" },
          { label: "AI Video generator", value: "ai-video-generator" },
          { label: "AI PDF generator", value: "ai-pdf-generator" },
          { label: "AI Excel generator", value: "ai-excel-generator" },
          { label: "AI PowerPoint generator", value: "ai-powerpoint-generator" },
        ]}
      />
      <div className="flex flex-col gap-2 items-center w-full">
        <Label className="flex flex-col gap-2 text-center">
          Select a range of dates for promotion
          <small className="text-muted-foreground block">
            minimum duration is 3 days
          </small>
        </Label>
        <Calendar 
          mode="range"
          selected={promotionPeriod}
          onSelect={setPromotionPeriod}
          min={3}
          disabled={{before: new Date()}}
        />
      </div>
      <Button disabled={totalDays === 0}>
        Go to checkout (${totalDays * 20})
      </Button>
      </Form>
      <Footer />
    </div>
  );
}
