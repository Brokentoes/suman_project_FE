import instance from './axios';

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  is_published: boolean;
}

export interface CreateFAQData {
  question: string;
  answer: string;
  category: string;
  is_published: boolean;
}

export interface UpdateFAQData {
  question: string;
  answer: string;
  category: string;
  is_published: boolean;
}

// 전체 FAQ 조회
export const fetchFAQs = async (): Promise<FAQ[]> => {
  try {
    const response = await instance.get<FAQ[]>('faqs/');
    return response.data;
  } catch (error: any) {
    console.error('FAQ 조회 실패:', error);
    throw new Error('FAQ를 불러오지 못했습니다.');
  }
};

// 신규 FAQ 등록
export const createFAQ = async (data: CreateFAQData): Promise<FAQ> => {
  try {
    // 입력값 검증
    if (!data.question?.trim()) {
      throw new Error('질문을 입력해주세요.');
    }
    if (!data.answer?.trim()) {
      throw new Error('답변을 입력해주세요.');
    }
    if (!data.category?.trim()) {
      throw new Error('카테고리를 입력해주세요.');
    }

    const response = await instance.post<FAQ>('faqs/', {
      question: data.question.trim(),
      answer: data.answer.trim(),
      category: data.category.trim(),
      is_published: data.is_published
    });
    
    return response.data;
  } catch (error: any) {
    console.error('FAQ 등록 실패:', error);
    throw new Error('FAQ 등록에 실패했습니다.');
  }
};

// 기존 FAQ 수정
export const updateFAQ = async (
  id: number,
  data: UpdateFAQData
): Promise<FAQ> => {
  try {
    // 입력값 검증
    if (!data.question?.trim()) {
      throw new Error('질문을 입력해주세요.');
    }
    if (!data.answer?.trim()) {
      throw new Error('답변을 입력해주세요.');
    }
    if (!data.category?.trim()) {
      throw new Error('카테고리를 입력해주세요.');
    }

    const response = await instance.put<FAQ>(`faqs/${id}/`, {
      question: data.question.trim(),
      answer: data.answer.trim(),
      category: data.category.trim(),
      is_published: data.is_published
    });
    return response.data;
    
  } catch (error: any) {
    console.error('FAQ 수정 실패:', error);
    throw new Error('FAQ 수정에 실패했습니다.');
  }
};

// 기존 FAQ 삭제
export const deleteFAQ = async (id: number): Promise<void> => {
  try {
    await instance.delete(`faqs/${id}/`);
  } catch (error: any) {
    console.error('FAQ 삭제 실패:', error);
    throw new Error('FAQ 삭제에 실패했습니다.');
  }
};