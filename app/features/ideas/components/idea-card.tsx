import { Link } from "react-router";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  timeAgo: string;
  likeCount: number;
  claimed?: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  timeAgo,
  likeCount,
  claimed = false,
}: IdeaCardProps) {
  return (
    <Card className="p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer">
      <Link to={`/ideas/${id}`} className="w-full">
        <CardHeader className="p-0">
          <CardTitle className="text-base leading-relaxed font-semibold">
            <span
              className={cn(
                claimed
                  ? "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground"
                  : "",
                "text-base leading-relaxed font-semibold"
              )}
            >
              {title}
            </span>
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex w-full justify-between px-0 py-0">
        <div className="flex w-full items-center justify-start gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" />
            <span>{viewCount}</span>
          </div>
          <span className="text-sm text-muted-foreground">{timeAgo}</span>
        </div>

        <div className="flex items-center justify-end gap-3">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <HeartIcon className="w-4 h-4" />
            <span>{likeCount}</span>
          </div>
          {!claimed && (
            <Button
              variant="default"
              size="sm"
              className="text-xs cursor-pointer"
              asChild
            >
              <Link to={`/ideas/${id}/claim`}>Claim</Link>
            </Button>
          )}
          {claimed && (
            <Button
              variant="outline"
              size="sm"
              className="text-xs cursor-not-allowed flex items-center gap-1 text-muted-foreground"
              disabled={true}
            >
              <LockIcon className="w-4 h-4" />
              Claimed
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
