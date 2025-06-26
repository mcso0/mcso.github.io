import type { MetaFunction } from "react-router";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  ChevronUpIcon,
  EyeIcon,
  HeartIcon,
  MessageCircleIcon,
} from "lucide-react";

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
    <div className="px-20">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today
          </p>
        </div>
        <div>
          <Link to={"/products/productId"}>
            <Card className="w-full flex flex-row justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-900">
              <CardHeader className="w-full">
                <CardTitle className="w-full text-2xl font-semibold leading-none tracking-tight">
                  Product 1
                </CardTitle>
                <CardDescription className="w-full text-muted-foreground text-sm">
                  Product description
                </CardDescription>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-px text-sm text-muted-foreground">
                    <MessageCircleIcon className="w-4 h-4" />
                    <span>12</span>
                  </div>
                  <div className="flex items-center gap-px text-sm text-muted-foreground">
                    <EyeIcon className="w-4 h-4" />
                    <span>12</span>
                  </div>
                  <div className="flex items-center gap-px text-sm text-muted-foreground">
                    <HeartIcon className="w-4 h-4" />
                    <span>12</span>
                  </div>
                </div>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="flex flex-col h-14">
                  <ChevronUpIcon className="size-4 shrink-0" />
                  <span>120</span>
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
