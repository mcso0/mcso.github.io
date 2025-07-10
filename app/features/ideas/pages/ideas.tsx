import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Ideas | wemake" },
    { name: "description", content: "Share and discover innovative ideas" },
  ];
};

export function loader() {
  return {
    ideas: Array.from({ length: 12 }, (_, index) => ({
      id: `idea-${index + 1}`,
      title: `Innovative Idea ${index + 1}`,
      description: `${
        [
          "AI-powered",
          "Blockchain-based",
          "IoT-enabled",
          "Mobile-first",
          "Cloud-native",
        ][index % 5]
      } solution for ${
        ["healthcare", "education", "finance", "retail", "entertainment"][
          index % 5
        ]
      }`,
      commentCount: Math.floor(Math.random() * 30),
      viewCount: Math.floor(Math.random() * 500),
      likeCount: Math.floor(Math.random() * 80),
      upvoteCount: Math.floor(Math.random() * 150),
    })),
  };
}

export default function Ideas() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Ideas
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Share and discover innovative ideas from the community
          </p>
        </div>
      </div>
    </div>
  );
}
