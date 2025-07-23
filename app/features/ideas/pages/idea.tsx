import type { Route } from "./+types/idea";
import PageHero from "~/common/components/page-hero";
import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Idea Details | wemake" },
    { name: "description", content: "View detailed information about an idea" },
  ];
};

export default function Idea() {
  return (
    <div className="space-y-10">
      <PageHero title="IdeaID #12121" subtitle="@UserName" />
      <div className="flex flex-col items-start justify-center space-y-4 max-w-screen-sm mx-auto gap-10">
        <div className="flex flex-col items-start space-y-4">
          <h3 className="w-full text-2xl font-bold text-center">Description</h3>
          <p className="italic text-center">
            A comprehensive online platform designed to seamlessly connect
            skilled freelancers with innovative startups, enabling them to
            collaborate on short-term, high-impact projects that accelerate
            business growth and provide valuable real-world experience for all
            participants.
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-px text-muted-foreground text-sm">
            <EyeIcon className="w-4 h-4" />
            <span>100</span>
          </div>
          <span className="text-muted-foreground text-sm">10 hours ago</span>
          <Button
            variant="ghost"
            className="flex items-center gap-2 hover:bg-transparent cursor-pointer group"
          >
            <HeartIcon className="w-4 h-4 group-hover:text-red-500 transition-colors duration-200" />
            <span>100</span>
          </Button>
        </div>
        <div className="flex w-full items-center justify-center">
          <Button variant="default" size="lg" className="cursor-pointer">
            <span>Claim idea now &rarr;</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
