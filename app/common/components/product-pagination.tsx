import { useSearchParams } from "react-router";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/common/components/ui/pagination";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * 제품 페이지네이션 컴포넌트의 Props 타입
 * @param totalPages - 전체 페이지 수
 */
type ProductPaginationProps = {
  totalPages: number;
};

/**
 * 제품 목록의 페이지네이션을 처리하는 컴포넌트
 * URL의 query parameter를 사용하여 현재 페이지를 추적하고,
 * 이전/다음 페이지 버튼과 페이지 번호를 표시합니다.
 */
export default function ProductPagination({
  totalPages,
}: ProductPaginationProps) {
  // URL에서 현재 페이지 번호를 가져옴 (기본값: 1)
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  return (
    <Pagination className="flex items-center gap-2 justify-center">
      <PaginationContent>
        {/* 이전 페이지 버튼 영역 */}
        {page === 1 ? (
          // 첫 번째 페이지일 때: 비활성화된 Previous 버튼 표시
          <PaginationItem>
            <Button variant="ghost" className="gap-1 px-2.5 sm:pl-2.5" disabled>
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
          </PaginationItem>
        ) : (
          // 첫 번째 페이지가 아닐 때: 클릭 가능한 Previous 버튼 표시
          <PaginationItem>
            <PaginationPrevious to={`?page=${page - 1}`} />
          </PaginationItem>
        )}

        {/* 이전 페이지 번호 표시 (현재 페이지가 1이 아닐 때만) */}
        {page === 1 ? null : (
          <PaginationItem>
            <PaginationLink to={`?page=${page - 1}`}>{page - 1}</PaginationLink>
          </PaginationItem>
        )}

        {/* 현재 페이지 번호 (활성화 상태로 표시) */}
        <PaginationItem>
          <PaginationLink to={`?page=${page}`} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>

        {/* 다음 페이지 버튼 및 번호 영역 */}
        {page === totalPages ? (
          // 마지막 페이지일 때: 비활성화된 Next 버튼 표시
          <PaginationItem>
            <Button variant="ghost" className="gap-1 px-2.5 sm:pr-2.5" disabled>
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </PaginationItem>
        ) : (
          // 마지막 페이지가 아닐 때: 다음 페이지 번호와 Next 버튼 표시
          <>
            {/* 다음 페이지 번호 */}
            <PaginationItem>
              <PaginationLink to={`?page=${page + 1}`}>
                {page + 1}
              </PaginationLink>
            </PaginationItem>

            {/* 다음 페이지가 마지막 페이지가 아닐 때만 생략 표시(...) 추가 */}
            {page + 1 === totalPages ? null : (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Next 버튼 */}
            <PaginationItem>
              <PaginationNext to={`?page=${page + 1}`} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
