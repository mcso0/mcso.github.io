import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { Textarea } from "~/common/components/ui/textarea";

export default function ProductNewReview() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    rating: 0,
    title: "",
    content: "",
    userName: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.rating || !formData.title || !formData.content || !formData.userName) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 실제 프로젝트에서는 여기서 API 호출을 합니다
      await new Promise(resolve => setTimeout(resolve, 1000)); // 시뮬레이션
      
      alert("리뷰가 성공적으로 등록되었습니다!");
      navigate(`/products/${productId}/reviews`);
    } catch (error) {
      alert("리뷰 등록 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (currentRating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => handleRatingClick(index + 1)}
        className={`text-2xl ${
          index < currentRating ? "text-yellow-400" : "text-gray-300"
        } hover:text-yellow-400 transition-colors`}
      >
        ★
      </button>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">새 리뷰 작성</h1>
          <p className="text-gray-600">제품 ID: {productId}</p>
        </div>

        {/* 리뷰 작성 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>리뷰를 작성해주세요</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 사용자 이름 */}
              <div>
                <Label htmlFor="userName">작성자 이름 *</Label>
                <Input
                  id="userName"
                  type="text"
                  placeholder="이름을 입력해주세요"
                  value={formData.userName}
                  onChange={(e) => handleInputChange("userName", e.target.value)}
                  className="mt-1"
                />
              </div>

              {/* 평점 */}
              <div>
                <Label>평점 *</Label>
                <div className="flex items-center gap-2 mt-2">
                  {renderStars(formData.rating)}
                  <span className="ml-2 text-gray-600">
                    {formData.rating > 0 ? `${formData.rating}/5` : "평점을 선택해주세요"}
                  </span>
                </div>
              </div>

              {/* 리뷰 제목 */}
              <div>
                <Label htmlFor="title">리뷰 제목 *</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="리뷰 제목을 입력해주세요"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="mt-1"
                />
              </div>

              {/* 리뷰 내용 */}
              <div>
                <Label htmlFor="content">리뷰 내용 *</Label>
                <Textarea
                  id="content"
                  placeholder="제품에 대한 자세한 리뷰를 작성해주세요..."
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  className="mt-1 min-h-[120px]"
                />
                <p className="text-sm text-gray-500 mt-1">
                  최소 10자 이상 작성해주세요.
                </p>
              </div>

              {/* 작성 가이드라인 */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">작성 가이드라인</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 실제 사용 경험을 바탕으로 작성해주세요</li>
                  <li>• 구체적인 기능이나 장단점을 포함해주세요</li>
                  <li>• 다른 사용자에게 도움이 되는 정보를 제공해주세요</li>
                  <li>• 부적절한 내용은 관리자에 의해 삭제될 수 있습니다</li>
                </ul>
              </div>

              {/* 제출 버튼 */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(`/products/${productId}/reviews`)}
                  disabled={isSubmitting}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? "등록 중..." : "리뷰 등록"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 미리보기 섹션 */}
        {(formData.title || formData.content) && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>미리보기</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{formData.userName || "작성자"}</span>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={index < formData.rating ? "text-yellow-400" : "text-gray-300"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-semibold">{formData.title || "리뷰 제목"}</h3>
                <p className="text-gray-700">{formData.content || "리뷰 내용이 여기에 표시됩니다."}</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 