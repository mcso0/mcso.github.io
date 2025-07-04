import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Community | wemake" },
    { name: "description", content: "Join the wemake community discussions" },
  ];
};

export function loader() {
  return {
    posts: Array.from({ length: 15 }, (_, index) => ({
      id: `post-${index + 1}`,
      title: `Community Post ${index + 1}`,
      description: `This is a great discussion about ${
        ["technology", "startups", "careers", "design", "development"][
          index % 5
        ]
      }`,
      commentCount: Math.floor(Math.random() * 50),
      viewCount: Math.floor(Math.random() * 1000),
      likeCount: Math.floor(Math.random() * 100),
      upvoteCount: Math.floor(Math.random() * 200),
    })),
  };
}

export default function Community() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Community
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Join discussions with the wemake community
          </p>
        </div>
      </div>
    </div>
  );
}
