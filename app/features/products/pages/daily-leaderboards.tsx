/**
 * Daily Leaderboards Page
 *
 * 일일 리더보드를 표시하는 페이지입니다. URL 파라미터로 받은 연/월/일에 해당하는
 * 최고의 제품들을 목록으로 보여주며, 이전/다음 날짜로 네비게이션할 수 있습니다.
 *
 * @features
 * - URL 파라미터 검증 (Zod 스키마 활용)
 * - 날짜 유효성 검사 (Luxon DateTime 활용)
 * - 미래 날짜 접근 방지
 * - 타입 세이프 라우팅 (React Router v7)
 * - 이전/다음 날짜 네비게이션
 * - 제품 목록 표시 및 페이지네이션
 * - 에러 경계 처리
 */

// React Router v7의 타입 세이프 라우팅을 위한 Route 타입 import
// 이 타입들은 React Router의 typegen 기능으로 자동 생성됩니다
import type { Route } from "./+types/daily-leaderboards";

// Luxon: 강력한 날짜/시간 처리 라이브러리
// DateTime 객체를 사용해 날짜 생성, 조작, 포맷팅, 시간대 변환 등을 처리
import { DateTime } from "luxon";

// React Router v7의 데이터 로딩 및 에러 처리 유틸리티
import { data, isRouteErrorResponse } from "react-router";

// Zod: TypeScript 우선 스키마 검증 라이브러리
// 런타임에서 데이터 구조를 검증하고 타입 안전성을 보장
import * as z from "zod";

// UI 컴포넌트들
import PageHero from "~/common/components/page-hero";
import ProductCard from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import ProductPagination from "~/common/components/product-pagination";

/**
 * URL 파라미터 스키마 정의
 *
 * Zod를 사용해 URL에서 받은 파라미터들을 검증하고 타입 변환합니다.
 * z.coerce.number()는 문자열로 받은 값을 숫자로 자동 변환합니다.
 *
 * @see https://github.com/colinhacks/zod - Zod 공식 문서
 */
const paramsSchema = z.object({
  year: z.coerce.number(), // 연도: 문자열 → 숫자 변환
  month: z.coerce.number(), // 월: 문자열 → 숫자 변환
  day: z.coerce.number(), // 일: 문자열 → 숫자 변환
});

/**
 * 페이지 메타데이터 함수
 *
 * React Router v7의 meta 함수로 페이지의 <title> 등 메타데이터를 설정합니다.
 * 이 함수는 서버 사이드 렌더링 시에도 실행되어 SEO에 중요한 역할을 합니다.
 *
 * @see https://reactrouter.com/start/framework/route-module - Route Module API
 */
export const meta: Route.MetaFunction = () => {
  return [{ title: "Daily Leaderboards | wemake" }];
};

/**
 * 데이터 로더 함수
 *
 * React Router v7의 loader는 페이지 컴포넌트가 렌더링되기 전에 실행되어
 * 필요한 데이터를 미리 가져옵니다. 서버 사이드에서도 실행됩니다.
 *
 * @param params - URL 파라미터 객체 (/:year/:month/:day)
 * @returns 검증된 날짜 데이터 또는 에러 Response
 *
 * @throws {Response} 400 - 잘못된 파라미터/날짜/미래 날짜인 경우
 *
 * @see https://reactrouter.com/start/framework/route-module#loader
 */
export const loader = ({ params }: Route.LoaderArgs) => {
  // 1. Zod 스키마로 URL 파라미터 검증 및 타입 변환
  const { success, data: parsedDate } = paramsSchema.safeParse(params);
  if (!success) {
    // 파라미터가 올바르지 않으면 400 에러 응답
    throw data(
      {
        error_code: "INVALID_PARAMS",
        error_message: "Invalid date format",
      },
      { status: 400 }
    );
  }

  // 2. Luxon DateTime 객체 생성 및 유효성 검사
  // DateTime.fromObject()로 연/월/일 객체를 DateTime으로 변환
  // setZone()으로 한국 시간대 설정
  const date = DateTime.fromObject(parsedDate).setZone("Asia/Seoul");

  // Luxon의 isValid 속성으로 날짜 유효성 확인 (예: 2월 30일 같은 잘못된 날짜)
  if (!date.isValid) {
    throw data(
      {
        error_code: "INVALID_DATE",
        error_message: "Invalid date",
      },
      { status: 400 }
    );
  }

  // 3. 미래 날짜 접근 방지
  // DateTime.now()로 현재 시간 가져오고 startOf('day')로 자정으로 설정
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "FUTURE_DATE",
        error_message: "Future date",
      },
      { status: 400 }
    );
  }

  // 검증이 완료된 날짜 데이터 반환
  return {
    ...parsedDate,
  };
};

/**
 * 메인 페이지 컴포넌트
 *
 * React Router v7의 Route.ComponentProps 타입을 사용해
 * loader에서 반환한 데이터의 타입 안전성을 보장합니다.
 *
 * @param loaderData - loader 함수에서 반환한 데이터 (년/월/일)
 * @returns JSX 렌더링 결과
 *
 * @see https://reactrouter.com/explanation/type-safety - Type Safety
 */
export default function DailyLeaderboards({
  loaderData,
}: Route.ComponentProps) {
  // Luxon DateTime 객체들 생성
  // fromObject()로 loader 데이터를 DateTime 객체로 변환
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });

  // 날짜 계산: Luxon의 minus()/plus()로 이전/다음 날 계산
  const previousDay = urlDate.minus({ days: 1 });
  const nextDay = urlDate.plus({ days: 1 });

  // 오늘 날짜인지 확인: equals()로 정확한 날짜 비교
  const isToday = urlDate.equals(
    DateTime.now().setZone("Asia/Seoul").startOf("day")
  );

  return (
    <div className="space-y-10">
      {/* 페이지 제목 영역 */}
      <PageHero
        title={`The best products of ${urlDate.toLocaleString(
          DateTime.DATE_FULL
        )}`}
        subtitle={``}
      />

      {/* 날짜 네비게이션 버튼들 */}
      <div className="flex items-center gap-2 justify-center">
        {/* 이전 날짜로 이동 버튼 */}
        <Button variant="secondary" asChild className="px-4">
          <Link
            to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}
          >
            &larr; {previousDay.toFormat("yy.MM.dd")}
          </Link>
        </Button>

        {/* 다음 날짜로 이동 버튼 (오늘이 아닌 경우만 활성화) */}
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}
            >
              {nextDay.toFormat("yy.MM.dd")} &rarr;
            </Link>
          </Button>
        ) : (
          // 오늘인 경우 비활성화된 버튼 표시
          <Button variant="secondary" disabled>
            {nextDay.toFormat("yy.MM.dd")} &rarr;
          </Button>
        )}
      </div>

      {/* 제품 목록 영역 */}
      <div className="space-y-10 w-full max-w-screen-md mx-auto">
        {/* 임시 데이터로 11개의 제품 카드 렌더링 */}
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={`product-${index + 1}`}
            id={`product-${index + 1}`}
            name={`Product ${index + 1}`}
            description={`Product description ${index + 1}`}
            commentCount={12}
            viewCount={12}
            likeCount={12}
            upvoteCount={120}
          />
        ))}
      </div>

      {/* 페이지네이션 컴포넌트 */}
      <ProductPagination totalPages={10} />
    </div>
  );
}

/**
 * 에러 경계 컴포넌트
 *
 * React Router v7의 ErrorBoundary는 loader나 컴포넌트에서
 * 에러가 발생했을 때 렌더링되는 폴백 UI입니다.
 *
 * @param error - 발생한 에러 객체
 * @returns 에러 UI JSX
 *
 * @see https://reactrouter.com/start/framework/route-module#errorboundary
 */
export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  // React Router의 Response 에러인지 확인
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }

  // 일반 JavaScript Error 객체인 경우
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  // 알 수 없는 에러인 경우
  return <div>Unknown errorr</div>;
};
