import type { MetaFunction } from "react-router";
import ProductCard from "~/features/products/components/product-card";
import PostCard from "~/features/community/components/post-card";
import IdeaCard from "~/features/ideas/components/idea-card";
import { Link } from "react-router";

// 메타데이터를 정의하는 함수입니다.
// 이 함수는 웹페이지의 제목과 설명을 설정합니다.
// - title: 브라우저 탭에 표시되는 페이지 제목
// - description: 검색 엔진이나 소셜 미디어에서 사용되는 페이지 설명
// content는 웹페이지의 설명을 담는 속성입니다. 검색 엔진이나 소셜 미디어에서 페이지를 미리보기할 때 이 내용이 표시됩니다.
export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function Home() {
  return (
    <div className="px-20 space-y-20">
      {/* 오늘의 제품 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            The best products made by our community today
          </p>
          <Link
            to="/products/leaderboard"
            className="inline-flex items-center justify-start p-0 mt-2 text-sm font-medium no-underline text-primary hover:text-primary/80 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Explore all products &rarr;
          </Link>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={`product-${index + 1}`}
            id={`product-${index + 1}`}
            name={`Product ${index + 1}`}
            description={`Product description ${index + 1}`}
            commentCount={12}
            viewCount={12}
            likeCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      {/* 최근 토론 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            The latest discussions from our community
          </p>
          <Link
            to="/products/community"
            className="inline-flex items-center justify-start p-0 mt-2 text-sm font-medium no-underline text-primary hover:text-primary/80 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Explore all discussions &rarr;
          </Link>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <PostCard
            key={`post-${index + 1}`}
            id={`post-${index + 1}`}
            title={`what is ${index + 1}`}
            author={`Author ${index + 1}`}
            authorAvatarUrl="https://github.com/apple.png"
            category={`Category ${index + 1}`}
            timeAgo={`${index + 1} hours ago`}
          />
        ))}
      </div>
      {/* Ideas GPT */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Ideas GPT
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            Find ideas for your next project.
          </p>
          <Link
            to="/products/ideas-gpt"
            className="inline-flex items-center justify-start p-0 mt-2 text-sm font-medium no-underline text-primary hover:text-primary/80 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Explore all ideas &rarr;
          </Link>
        </div>
          <IdeaCard
            id="ideasId"
            title="A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business."
            viewCount={123}
            timeAgo="12 hours ago"
            likeCount={120}
          />
      </div>
    </div>
  );
}
