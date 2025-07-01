import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { EyeIcon, UserIcon } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  avatarUrl?: string;
  category: string;
  timeAgo: string;
  viewCount: number;
}

export function PostCard({
  id,
  title,
  author,
  avatarUrl,
  category,
  timeAgo,
  viewCount,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`} className="w-full">
      <Card className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer gap-4 transition-colors duration-200">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-14">
            <AvatarFallback>
              <UserIcon className="size-4" />
            </AvatarFallback>
            {avatarUrl && <AvatarImage src={avatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex items-center flex-start gap-2 text-sm leading-tight text-muted-foreground">
              <span className="font-semibold">{author}</span>
              <span>{category}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <div className="flex w-full items-center justify-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <EyeIcon className="w-4 h-4" />
              <span>{viewCount}</span>
            </div>
            <span className="text-sm text-muted-foreground">{timeAgo}</span>
          </div>
          <Button variant="link" className="p-0" asChild>
            <span>Reply &rarr;</span>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
