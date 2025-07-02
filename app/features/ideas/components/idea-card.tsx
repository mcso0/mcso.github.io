import { Link } from "react-router";
import { cn } from "~/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import {
  EyeIcon,
  HeartIcon,
  ArrowRightIcon,
  LockIcon,
  MessageCircleIcon,
  UserIcon,
} from "lucide-react";

// IdeaCard 컴포넌트의 props 타입을 정의합니다
// 아이디어 정보를 동적으로 표시할 수 있도록 만들어요
interface IdeaCardProps {
  id: string; // 아이디어 ID (링크에 사용)
  title: string; // 아이디어 제목
  viewCount: number; // 조회수
  timeAgo: string; // 시간 정보 (예: 12 hours ago)
  likeCount: number; // 좋아요 수
  isClaimed?: boolean; // 아이디어 소유 여부
  commentCount: number; // 댓글 수
}

// IdeaCard 컴포넌트
// 아이디어 카드를 props로 받은 데이터로 렌더링합니다
export default function IdeaCard({
  id,
  title,
  viewCount,
  timeAgo,
  likeCount,
  isClaimed = false,
  commentCount,
}: IdeaCardProps) {
  return (
    <Card className="w-full hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer gap-2">
      <Link to={`/ideas/${id}`} className="w-full">
        <CardHeader className="cursor-pointer">
          <CardTitle>
            <span
              className={cn(
                "text-lg font-medium leading-relaxed tracking-tight",
                isClaimed &&
                  "bg-muted-foreground text-muted-foreground selection:bg-muted-foreground selection:text-muted-foreground"
              )}
            >
              {title}
            </span>
          </CardTitle>
        </CardHeader>
      </Link>
      <CardFooter className="flex justify-between mt-4 gap-4">
        <div className="flex items-center justify-start gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-px">
            <EyeIcon className="w-4 h-4" />
            <span>{viewCount}</span>
          </div>
          <span>{timeAgo}</span>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button
            variant="ghost"
            className="flex items-center gap-2 hover:bg-transparent cursor-pointer group"
          >
            <HeartIcon className="w-4 h-4 group-hover:text-red-500 transition-colors duration-200" />
            <span>{likeCount}</span>
          </Button>
          {!isClaimed ? (
            <Button
              variant="default"
              className="flex items-center gap-2 cursor-pointer"
            >
              <span>Claim idea</span>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="flex items-center gap-1 cursor-not-allowed hover:bg-transparent"
              disabled={true}
            >
              <LockIcon className="w-4 h-4" />
              <span>Claimed</span>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
