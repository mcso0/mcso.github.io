import { Link } from "react-router";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../common/components/ui/card";
import { Badge } from "../../../common/components/ui/badge";
import { Button } from "../../../common/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../common/components/ui/avatar";

export interface TeamCardProps {
  id: string;
  author: {
    username: string;
    avatarUrl: string;
    avatarFallback: string;
  };
  lookingFor: string[];
  projectDescription: string;
}

export function TeamCard({
  id,
  author,
  lookingFor,
  projectDescription,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer gap-4 transition-colors duration-200">
        <CardHeader className="flex">
          <CardTitle className="flex flex-wrap gap-1 items-center text-base leading-loose">
            {/* 팀장 정보 */}
            <Badge
              variant={"secondary"}
              className="inline-flex shadow-sm items-center text-base gap-1"
            >
              <span>@{author.username}</span>
              <Avatar className="size-5">
                <AvatarFallback>{author.avatarFallback}</AvatarFallback>
                <AvatarImage src={author.avatarUrl} />
              </Avatar>
            </Badge>

            <span className="text-base">is looking for</span>

            {/* 찾고 있는 역할들 */}
            {lookingFor.map((role, index) => (
              <Badge key={index} variant={"secondary"} className="text-base">
                {role}
              </Badge>
            ))}

            <span>to build</span>
            <span> {projectDescription}</span>
          </CardTitle>
        </CardHeader>

        <CardFooter className="flex justify-end">
          <Button variant={"link"} className="px-2">
            Join Team &rarr;
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
