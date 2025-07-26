import type { Route } from "./+types/jobs";
import PageHero from "~/common/components/page-hero";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { JOB_TYPE, LOCATION_TYPE, SALARY_RANGES } from "../constants";
import { useSearchParams } from "react-router";
import { cn } from "~/lib/utils";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "jobs | wemake" },
    { name: "description", content: "Find your dream job!" },
  ];
};

export default function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onFilterClick = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-10">
      <PageHero
        title="Jobs"
        subtitle="Companies looking for makers"
        className=""
      />
      <div className="grid grid-cols-6 gap-16">
        {/* Sidebar */}
        <div className="space-y-4 col-span-1 space-y-10 sticky top-28 self-start">
          {/* type */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Type</h3>
            <div className="flex flex-wrap gap-4">
              {JOB_TYPE.map(type => (
                <Button
                  key={type.value}
                  className={cn(
                    type.value === searchParams.get("type")
                      ? "!bg-accent"
                      : "hover:cursor-pointer"
                  )}
                  variant="outline"
                  size="sm"
                  onClick={() => onFilterClick("type", type.value)}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
          {/* location */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              Location
            </h3>
            <div className="flex flex-wrap gap-4">
              {LOCATION_TYPE.map(location => (
                <Button
                  key={location.value}
                  className={cn(
                    location.value === searchParams.get("location")
                      ? "!bg-accent"
                      : "hover:cursor-pointer"
                  )}
                  variant="outline"
                  size="sm"
                  onClick={() => onFilterClick("location", location.value)}
                >
                  {location.label}
                </Button>
              ))}
            </div>
          </div>

          {/* salary range */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">
              Salary Range
            </h3>
            <div className="flex flex-wrap gap-4">
              {SALARY_RANGES.map(salary => (
                <Button
                  key={salary}
                  className={cn(
                    salary === searchParams.get("salary")
                      ? "!bg-accent"
                      : "hover:cursor-pointer"
                  )}
                  variant="outline"
                  size="sm"
                  onClick={() => onFilterClick("salary", salary)}
                >
                  {salary}
                </Button>
              ))}
            </div>
          </div>
        </div>
        {/* Job List */}
        <div className="grid grid-cols-3 col-span-5 gap-8">
          {Array.from({ length: 54 }).map((_, index) => (
            <JobCard
              key={index}
              id={`job-${index + 1}`}
              company="Company"
              companyLogoUrl="https://via.placeholder.com/150"
              companyHq="Company HQ"
              title="Job Title"
              postedAt="2 days ago"
              type="Full-time"
              salary="100000"
              positionLocation="Remote"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
