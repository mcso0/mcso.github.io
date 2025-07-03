import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../common/components/ui/card";
import { Badge } from "../../../common/components/ui/badge";
import { Button } from "../../../common/components/ui/button";
import { CircleDollarSignIcon, MapPinIcon, ArrowRightIcon } from "lucide-react";

export interface JobCardProps {
  id: string;
  company: string;
  companyLogoUrl: string;
  companyHq: string;
  title: string;
  postedAt: string;
  type: string;
  positionLocation: string;
  salary: string;
  additionalBadges?: string[];
}

export function JobCard({
  id,
  company,
  companyLogoUrl,
  companyHq,
  title,
  postedAt,
  type,
  salary,
  positionLocation,
}: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`}>
      <Card className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer gap-2 transition-colors duration-200">
        <CardHeader className="flex flex-col gap-2">
          {/* 회사 로고와 회사 이름, 게시일 */}
          <div className="flex items-center gap-2 mb-2">
            <img
              src={companyLogoUrl}
              alt={`${company} Logo`}
              className="size-6 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company}</span>
              <span className="text-xs text-muted-foreground">{postedAt}</span>
            </div>
          </div>
          {/* 직무 제목 */}
          <CardTitle className="flex flex-row justify-start items-end gap-2 leading-tight tracking-tight">
            <span className="text-accent-foreground">{title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-row justify-start items-center gap-2 mb-2">
          <Badge variant="outline">{type}</Badge>
          <Badge variant="outline">{positionLocation}</Badge>
        </CardContent>

        <CardFooter className="flex justify-between items-end gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-start items-center gap-2">
              <CircleDollarSignIcon className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {salary}
              </span>
            </div>
            <div className="flex flex-row justify-start items-center gap-2">
              <MapPinIcon className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {companyHq}
              </span>
            </div>
          </div>
          <Button
            variant="default"
            className="flex flex-row gap-1 text-sm cursor-pointer"
            size="sm"
          >
            Apply Now
            <ArrowRightIcon className="size-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
