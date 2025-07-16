import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react'; // 리엑트 아이콘 라이브러리
import { fetchFAQs } from '@/lib/api/faq';

// FAQ 인터페이스 정의
interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  is_published: boolean;
}

const FAQPage = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [displayCount, setDisplayCount] = useState(5);

  useEffect(() => {
    const loadFAQs = async () => {
      try {
        setLoading(true);
        const data = await fetchFAQs();
        // is_published가 true인 FAQ만 필터링
        const publishedFAQs = data.filter(faq => faq.is_published);
        setFaqs(publishedFAQs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'FAQ를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadFAQs();
  }, []);

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const showMore = () => {
    setDisplayCount(prev => prev + 5); // 더보기를 누르면 5개씩 추가됨. (초기값 5개)
  };

  const displayedFaqs = faqs.slice(0, displayCount);
  const hasMore = displayCount < faqs.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">FAQ를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            SUMAN에 관한
          </h1>
          <h2 className="text-2xl font-semibold text-gray-800">
            궁금하신 사항을 확인하세요
          </h2>
        </div>

        {/* FAQ 목록 */}
        <div className="space-y-4">
          {displayedFaqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* 카테고리 */}
              <div className="px-6 py-2 bg-gray-50 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-600">{faq.category}</span>
              </div>
              
              {/* 질문 */}
              <div 
                className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(faq.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.has(faq.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </div>

              {/* 답변 */}
              {openItems.has(faq.id) && (
                <div className="px-6 py-4 border-t border-gray-200 bg-blue-50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">A</span>
                    </div>
                    <div className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 더보기 버튼 */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={showMore}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <Plus className="h-5 w-5 mr-2" />
              더보기 ({displayCount} / {faqs.length})
            </button>
          </div>
        )}

        {/* FAQ가 없을 때 */}
        {faqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">등록된 FAQ가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQPage;