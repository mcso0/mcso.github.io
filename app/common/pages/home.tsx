import type { MetaFunction } from "react-router";
import { ProductCard } from "~/features/products/componets/product-card";

// 메타데이터를 정의하는 함수입니다.
// 이 함수는 웹페이지의 제목과 설명을 설정합니다.
// - title: 브라우저 탭에 표시되는 페이지 제목
// - description: 검색 엔진이나 소셜 미디어에서 사용되는 페이지 설명
// content는 웹페이지의 설명을 담는 속성입니다. 검색 엔진이나 소셜 미디어에서 페이지를 미리보기할 때 이 내용이 표시됩니다.
export const meta: MetaFunction = () => {
  return [
    { title: "Home | wemake" },
    { name: "description", content: "Welcome to wemake" },
  ];
};

export default function Home() {
  return (
    <div className="px-20">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today
          </p>
        </div>
        <div>
          <ProductCard
            productId="product-1"
            title="Product 1"
            description="Product description"
            commentCount={12}
            viewCount={12}
            likeCount={12}
            voteCount={120}
          />
        </div>
      </div>
    </div>
  );
}
