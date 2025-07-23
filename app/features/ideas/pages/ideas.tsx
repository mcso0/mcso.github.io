import type { Route } from "./+types/ideas";
import PageHero from "~/common/components/page-hero";
import IdeaCard from "../components/idea-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "IdeaGPT | wemake" },
    { name: "description", content: "Find ideas for your next project" },
  ];
};

export default function Ideas() {
  return (
    <div className="space-y-10">
      <PageHero title="IdeaGPT" subtitle="Find ideas for your next project" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <IdeaCard
            key={`idea-${index + 1}`}
            id={`idea-${index + 1}`}
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            viewCount={123}
            timeAgo="12 hours ago"
            likeCount={120}
            isClaimed={index % 2 === 0}
            commentCount={12}
          />
        ))}
      </div>
    </div>
  );
}
