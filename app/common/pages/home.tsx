import type { Route } from "./+types/home";
import type { MetaFunction } from "react-router";
import ProductCard from "~/features/products/components/product-card";
import PostCard from "~/features/community/components/post-card";
import IdeaCard from "~/features/ideas/components/idea-card";
import { JobCard } from "~/features/jobs/components/job-card";
import { TeamCard } from "~/features/teams/components/team-card";
import { Link } from "react-router";
import Footer from "../components/page-footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { MainBanner } from "../components/main-banner";

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
    <div className="space-y-40">
      <MainBanner />
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
            viewCount={12}
            commentCount={12}
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
        {Array.from({ length: 11 }).map((_, index) => (
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
      {/* 최근 채용공고 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            Find your dream job.
          </p>
          <Link
            to="/jobs"
            className="inline-flex items-center justify-start p-0 mt-2 text-sm font-medium no-underline text-primary hover:text-primary/80 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Explore all jobs &rarr;
          </Link>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <JobCard
            id="JobId"
            company="Apple"
            companyLogoUrl="https://github.com/apple.png"
            companyHq="San Francisco, CA"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="Full-Time"
            positionLocation="Remote"
            salary="$ 100,000 - $ 120,000"
          />
        ))}
      </div>
      {/* 팀메이트 찾기 */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Find your TeamMates
          </h2>
          <p className="text-xl font-light text-muted-foreground">
            Join a team looking for a new member
          </p>
          <Link
            to="/teams"
            className="inline-flex items-center justify-start p-0 mt-2 text-sm font-medium no-underline text-primary hover:text-primary/80 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Explore all teams &rarr;
          </Link>
        </div>
        {Array.from({ length: 11 }).map((_, index) => (
          <TeamCard
            id="lynn-social-platform"
            leaderName="Lynn"
            leaderAvatarUrl="https://github.com/inthetiger.png"
            leaderAvatarFallback="L"
            positions={[
              "React Developer",
              "Backend Developer",
              "Product Manager",
              "UI/UX Designer",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
