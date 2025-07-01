import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { UserIcon } from "lucide-react";

// PostCard 컴포넌트의 props 타입을 정의합니다
// 커뮤니티 포스트 정보를 동적으로 표시할 수 있도록 만들어요
interface PostCardProps {
  id: string;           // 포스트 ID (링크에 사용)
  title: string;        // 토론 제목
  author: string;       // 작성자 이름
  category: string;     // 카테고리 (예: Productivity)
  timeAgo: string;      // 시간 정보 (예: 12 hours ago)
  authorAvatarUrl?: string;   // 프로필 이미지 URL (옵션)
}

// PostCard 컴포넌트
// 커뮤니티 토론 카드를 props로 받은 데이터로 렌더링합니다
export default function PostCard({
  id,
  title,
  author,
  category,
  timeAgo,
  authorAvatarUrl,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`}>
      <Card className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer gap-4 transition-colors duration-200">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-14">
            <AvatarFallback>
              <UserIcon className="size-4" />
            </AvatarFallback>
            {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex items-center flex-start gap-2 text-sm leading-tight text-muted-foreground">
              <span className="font-semibold">{author}</span>
              <span>•</span>
              <span>{category}</span>
              <span>•</span>
              <span>{timeAgo}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" className="p-0" asChild>
            <Link
              to={`/community/${id}`}
              className="flex flex-row items-center"
            >
              <span>Reply &rarr;</span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
} 