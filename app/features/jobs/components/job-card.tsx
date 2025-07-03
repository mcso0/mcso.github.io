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
  company: {
    name: string;
    logo: string;
  };
  title: string;
  postedAt: string;
  employmentType: string;
  workType: string;
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  location: string;
  additionalBadges?: string[];
}

export function JobCard({
  id,
  company,
  title,
  postedAt,
  employmentType,
  workType,
  salary,
  location,
  additionalBadges = [],
}: JobCardProps) {
  const formatSalary = () => {
    return `${salary.currency} ${salary.min.toLocaleString()} - ${
      salary.currency
    } ${salary.max.toLocaleString()}`;
  };

  return (
    <Link to={`/jobs/${id}`}>
      <Card className="hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer gap-2 transition-colors duration-200">
        <CardHeader className="flex flex-col gap-2">
          {/* 회사 로고와 회사 이름, 게시일 */}
          <div className="flex items-center gap-2 mb-2">
            <img
              src={company.logo}
              alt={`${company.name} Logo`}
              className="size-6 rounded-full"
            />
            <div className="space-x-2">
              <span className="text-accent-foreground">{company.name}</span>
              <span className="text-xs text-muted-foreground">{postedAt}</span>
            </div>
          </div>
          {/* 직무 제목 */}
          <CardTitle className="flex flex-row justify-start items-end gap-2 leading-tight tracking-tight">
            <span className="text-accent-foreground">{title}</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-row justify-start items-center gap-2 mb-2">
          <Badge variant="outline">{employmentType}</Badge>
          <Badge variant="outline">{workType}</Badge>
          {additionalBadges.map((badge, index) => (
            <Badge key={index} variant="outline">
              {badge}
            </Badge>
          ))}
        </CardContent>

        <CardFooter className="flex justify-between items-end gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-start items-center gap-2">
              <CircleDollarSignIcon className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {formatSalary()}
              </span>
            </div>
            <div className="flex flex-row justify-start items-center gap-2">
              <MapPinIcon className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">
                {location}
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
