import { Link, useParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
Card,
CardContent,
CardHeader,
CardTitle,
} from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";

interface Review {
id: string;
userName: string;
rating: number;
title: string;
content: string;
createdAt: string;
helpful: number;
}

export default function ProductReviews() {
const { productId } = useParams<{ productId: string }>();

// 실제 프로젝트에서는 productId를 사용해 API에서 리뷰 데이터를 가져옵니다
const mockReviews: Review[] = [
{
id: "1",
userName: "김개발자",
rating: 5,
title: "정말 유용한 제품입니다!",
content:
"이 제품을 사용해본 결과 정말 만족스럽습니다. 기능이 풍부하고 사용하기 쉬워요.",
createdAt: "2024-01-15",
helpful: 12,
},
{
id: "2",
userName: "박프론트",
rating: 4,
title: "괜찮은 도구네요",
content:
"전반적으로 좋은 제품이지만 몇 가지 개선할 점이 있어 보입니다. 그래도 추천합니다.",
createdAt: "2024-01-10",
helpful: 8,
},
{
id: "3",
userName: "이백엔드",
rating: 5,
title: "완벽한 솔루션",
content:
"제가 찾던 바로 그 기능들이 모두 들어있어요. 개발 효율성이 크게 향상되었습니다.",
createdAt: "2024-01-05",
helpful: 15,
},
];

const averageRating =
mockReviews.reduce((sum, review) => sum + review.rating, 0) /
mockReviews.length;

const renderStars = (rating: number) => {
return Array.from({ length: 5 }, (\_, index) => (
<span
key={index}
className={index < rating ? "text-yellow-400" : "text-gray-300"} >
★
</span>
));
};

return (
<div className="space-y-10">
<div className="">
{/_ 헤더 _/}
<div className="mb-8">
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-3xl font-bold mb-2">제품 리뷰</h1>
<p className="text-gray-600">제품 ID: {productId}</p>
</div>
<Link to={`/products/${productId}/reviews/new`}>
<Button>리뷰 작성하기</Button>
</Link>
</div>

          {/* 리뷰 통계 */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <div className="text-sm text-gray-600">
                    {mockReviews.length}개 리뷰
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map(stars => {
                      const count = mockReviews.filter(
                        r => r.rating === stars
                      ).length;
                      const percentage = (count / mockReviews.length) * 100;
                      return (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-8">
                            {count}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 리뷰 목록 */}
        <div className="space-y-6">
          {mockReviews.map(review => (
            <Card key={review.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{review.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-gray-600">
                        {review.userName}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {review.createdAt}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <Badge variant="secondary">{review.rating}.0</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{review.content}</p>
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm">
                    👍 도움됨 ({review.helpful})
                  </Button>
                  <Button variant="ghost" size="sm">
                    신고
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 더 보기 버튼 */}
        <div className="text-center mt-8">
          <Button variant="outline">더 많은 리뷰 보기</Button>
        </div>
      </div>
    </div>

);
}
