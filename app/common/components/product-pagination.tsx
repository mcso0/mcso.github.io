import { useSearchParams } from "react-router";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "~/common/components/ui/pagination"
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


type ProductPaginationProps = {
  totalPages: number;
}

export default function ProductPagination({
  totalPages,   
}: ProductPaginationProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) ?? 1;
   

  return (
    <Pagination className="flex items-center gap-2 justify-center">
      <PaginationContent>
        {page === 1 ? <PaginationItem>
         <Button variant="ghost" className="gap-1 px-2.5 sm:pl-2.5" disabled>
            <ChevronLeft className="w-4 h-4" />
            Previous
         </Button>
       </PaginationItem>
         : (
        <PaginationItem>
          <PaginationPrevious to={`?page=${page - 1}`} />
        </PaginationItem>
        )}
        {page === 1 ? null : (
        <PaginationItem>
            <PaginationLink to={`?page=${page - 1}`}>{page - 1}</PaginationLink>
        </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink to={`?page=${page}`} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        {page === totalPages ? 
            <PaginationItem>
                <Button variant="ghost" className="gap-1 px-2.5 sm:pr-2.5" disabled>
                    Next
                    <ChevronRight className="w-4 h-4" /> 
                </Button>
            </PaginationItem>
         : (
            <>
            <PaginationItem>
                <PaginationLink to={`?page=${page + 1}`}>{page + 1}</PaginationLink>
            </PaginationItem>
            {page + 1 === totalPages ? null : (
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
            )}
            <PaginationItem>
                <PaginationNext to={`?page=${page + 1}`} />
            </PaginationItem>
          </>   
        )}
      </PaginationContent>
    </Pagination>
  )
}
