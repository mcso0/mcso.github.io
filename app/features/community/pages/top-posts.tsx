import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Top Posts | wemake Community" },
    {
      name: "description",
      content: "Most popular posts in the wemake community",
    },
  ];
};

export function loader() {
  return {
    posts: Array.from({ length: 10 }, (_, index) => ({
      id: `top-post-${index + 1}`,
      title: `Top Discussion: ${
        [
          "Building Your First Startup",
          "Remote Work Tips",
          "Tech Career Advice",
          "Design Principles",
          "Coding Best Practices",
        ][index % 5]
      }`,
      description:
        "This post has gained significant attention from the community members",
      commentCount: 50 + Math.floor(Math.random() * 100),
      viewCount: 1000 + Math.floor(Math.random() * 5000),
      likeCount: 100 + Math.floor(Math.random() * 300),
      upvoteCount: 200 + Math.floor(Math.random() * 500),
    })),
  };
}

export default function TopPosts() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Top Posts
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Most popular posts in the wemake community
          </p>
        </div>
      </div>
    </div>
  );
}
