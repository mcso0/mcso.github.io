import type { Route } from "./+types/jobs";
import { motion } from "motion/react";
import { Button } from "../../../common/components/ui/button";
import { Link, useSearchParams } from "react-router";
import PageHero from "~/common/components/page-hero";
import { JobCard } from "~/features/jobs/components/job-card";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "../constants";


// TODO: 추후 지구 효과 추가 예정
// import Earth from "../../../spline/earth";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "jobs | wemake" },
    { name: "description", content: "Find your dream job!" },
  ];
};

export default function Jobs() {
  // URL의 쿼리 파라미터를 관리하기 위한 React Router의 훅
  // searchParams: 현재 URL의 쿼리 파라미터 값
  // setSearchParams: 쿼리 파라미터를 업데이트하는 함수
  const [searchParams, setSearchParams] = useSearchParams();

  // 필터 변경 시 URL 쿼리 파라미터를 업데이트하는 함수
  // key: 필터의 종류 (예: jobType, location 등)
  // value: 선택된 필터 값
  const onFilterChange = (key: string, value: string) => {
    // 선택된 필터 값을 URL에 반영
    searchParams.set(key, value);
    // 페이지 파라미터 초기화 (필터가 변경되면 첫 페이지로 이동)
    searchParams.delete("page");
  }

  return (
    <div className="space-y-10">
      <PageHero
        title="Jobs"
        subtitle="Company looking for makers"
        className=""
      />
      {/* content */}
      <div className="grid grid-cols-6 gap-20 items-start">
        {/* 채용 정보 카드 - job card */}
          {/* col-span-4는 부모 그리드에서 4개의 컬럼을 차지하도록 설정합니다. 
            부모는 grid-cols-6으로 6개의 컬럼이 있고, 이 div는 그 중 4칸을 사용합니다. */}
        <div className="grid grid-cols-3 gap-5 col-span-4">
          {Array.from({ length: 11 }).map((_, index) => (
            <JobCard
            id="JobId"
            company="Apple"
            companyLogoUrl="https://github.com/apple.png"
            companyHq="San Francisco, CA"
            title="Software Engineer"
            postedAt="12 hours ago"
            type="Full-Time"
            positionLocation="Remote"
            salary="$ 100,000 - $ 120,000"
          />
        ))}
        </div>
        {/* sidebar */}
        <div className="col-span-2">
          <div className="flex flex-col items-start gap-8">
            {/* type */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-sm font-bold text-muted-foreground">Job Type</span>
              <div className="flex flex-wrap gap-3">
                {JOB_TYPES.map((type) => (
                  <Button variant="outline" className="cursor-pointer" key={type.value}>
                      {type.label}
                  </Button>
                ))}
            </div>
            </div>
            {/* location */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-sm font-bold text-muted-foreground">Location</span>
              <div className="flex flex-wrap gap-3">
                {LOCATION_TYPES.map((location) => (
                  <Button variant="outline" className="cursor-pointer" key={location.value}>
                    {location.label}
                  </Button>
                  ))}
              </div>
            </div>
            {/* salary */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-sm font-bold text-muted-foreground">Salary</span>
              <div className="flex flex-wrap gap-3">
                  {SALARY_RANGES.map((range) => (
                    <Button variant="outline" className="cursor-pointer" key={range}>
                      {range}
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
