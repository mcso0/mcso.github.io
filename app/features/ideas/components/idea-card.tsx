import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { EyeIcon, HeartIcon, ArrowRightIcon } from "lucide-react";

// IdeaCard 컴포넌트의 props 타입을 정의합니다
// 아이디어 정보를 동적으로 표시할 수 있도록 만들어요
interface IdeaCardProps {
  id: string;           // 아이디어 ID (링크에 사용)
  title: string;        // 아이디어 제목
  viewCount: number;    // 조회수
  timeAgo: string;      // 시간 정보 (예: 12 hours ago)
  likeCount: number;    // 좋아요 수
}

// IdeaCard 컴포넌트
// 아이디어 카드를 props로 받은 데이터로 렌더링합니다
export default function IdeaCard({
  id,
  title,
  viewCount,
  timeAgo,
  likeCount,
}: IdeaCardProps) {
  return (
    <Card className="w-full hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer gap-2">
      <Link to={`/ideas/${id}`} className="w-full">
        <CardHeader className="cursor-pointer">
          <CardTitle className="text-xl">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <EyeIcon className="w-4 h-4" />
          <span>{viewCount}</span>
          <span className="mx-1">•</span>
          <span>{timeAgo}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end mt-4 gap-4">
        <Button variant="ghost" className="flex items-center gap-2 hover:bg-transparent cursor-pointer group">
          <HeartIcon className="w-4 h-4 group-hover:text-red-500 transition-colors duration-200" />
          <span>{likeCount}</span>
        </Button>
        <Button variant="default" className="flex items-center gap-2 cursor-pointer">
          <span>Claim idea</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
} 