import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "New Posts | wemake Community" },
    { name: "description", content: "Latest posts from the wemake community" },
  ];
};

export function loader() {
  return {
    posts: Array.from({ length: 12 }, (_, index) => ({
      id: `new-post-${index + 1}`,
      title: `New: ${
        [
          "Startup Idea Validation",
          "Job Interview Tips",
          "Product Launch Strategy",
          "Tech Stack Decisions",
          "User Experience Research",
        ][index % 5]
      }`,
      description: "Fresh perspective and new ideas from community members",
      commentCount: Math.floor(Math.random() * 20),
      viewCount: Math.floor(Math.random() * 300),
      likeCount: Math.floor(Math.random() * 50),
      upvoteCount: Math.floor(Math.random() * 100),
    })),
  };
}

export default function NewPosts() {
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            New Posts
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Latest posts from the wemake community
          </p>
        </div>
      </div>
    </div>
  );
}
