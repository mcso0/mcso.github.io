import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import {
  ChevronUpIcon,
  EyeIcon,
  HeartIcon,
  MessageCircleIcon,
} from "lucide-react";

// ProductCard 컴포넌트의 props 타입을 정의합니다
// 이렇게 타입을 정의하면 어떤 데이터가 필요한지 명확하게 알 수 있어요
interface ProductCardProps {
  id: string; // 제품 ID (링크 주소에 사용됩니다)
  name: string; // 제품 이름
  description: string; // 제품 설명
  commentCount: number; // 댓글 수
  viewCount: number; // 조회 수
  likeCount: number; // 좋아요 수
  upvoteCount: number; // 추천 수 (오른쪽 버튼의 숫자)
}

// ProductCard 컴포넌트
// 기존의 하드코딩된 값들을 props로 받아서 동적으로 표시합니다
export default function ProductCard({
  id,
  name,
  description,
  commentCount,
  viewCount,
  likeCount,
  upvoteCount,
}: ProductCardProps) {
  return (
    <Link to={`/products/${id}`}>
      <Card className="w-full flex flex-row justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-900">
        <CardHeader className="w-full">
          <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            {description}
          </CardDescription>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-px text-sm text-muted-foreground">
              <MessageCircleIcon className="w-4 h-4" />
              <span>{commentCount}</span>
            </div>
            <div className="flex items-center gap-px text-sm text-muted-foreground">
              <EyeIcon className="w-4 h-4" />
              <span>{viewCount}</span>
            </div>
            <div className="flex items-center gap-px text-sm text-muted-foreground">
              <HeartIcon className="w-4 h-4" />
              <span>{likeCount}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="py-0">
          <Button variant="outline" className="flex flex-col h-14">
            <ChevronUpIcon className="size-4 shrink-0" />
            <span>{upvoteCount}</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
