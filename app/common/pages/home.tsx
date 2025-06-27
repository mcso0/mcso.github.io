import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/componets/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { UserIcon } from "lucide-react";

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
            productId={`product-${index + 1}`}
            title={`Product ${index + 1}`}
            description={`Product description ${index + 1}`}
            commentCount={12}
            viewCount={12}
            likeCount={12}
            voteCount={120}
          />
        ))}
      </div>
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
        <Card className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer gap-4 transition-colors duration-200">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="size-14">
              <AvatarFallback>
                <UserIcon className="size-4" />
              </AvatarFallback>
              <AvatarImage src="https://github.com/apple.png" />
            </Avatar>
            <div className="space-y-2">
              <CardTitle>Discussion Title</CardTitle>
              <div className="flex items-center flex-start gap-2 text-sm leading-tight text-muted-foreground">
                <span className="font-semibold">Deny</span>
                <span>Productivity</span>
                <span className="ml-auto">12 hours ago</span>
                <span className="ml-auto">12 comments</span>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button variant="link" className="p-0" asChild>
              <Link
                to="/community/postId"
                className="flex flex-row items-center"
              >
                <span>Reply &rarr;</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
