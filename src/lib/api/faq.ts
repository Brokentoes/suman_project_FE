// FAQ관련 API함수
import publicInstance from "./publicInstance";
import privateInstance from "./privateInstance";
import { isPrimaryPointer } from "framer-motion";

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
// -------------------------------------
//       전체 FAQ 조회 - publicInstance
// -------------------------------------
export const fetchFAQs = async (): Promise<FAQ[]> => {
  try {
    const response = await publicInstance.get<FAQ[]>('faqs/');
    console.log("FAQ GET성공: ",response);
    return response.data;
  } catch (error: any) {
    console.error('FAQ 조회 실패:', error);
    throw new Error('FAQ를 불러오지 못했습니다.');
  }
};

// -------------------------------------
//      신규 FAQ 등록 - privateInstance
// -------------------------------------
export const createFAQ = async (data: CreateFAQData): Promise<FAQ> => {
  try {
    // 입력값 검증
    if (!data.question?.trim()) {
      throw new Error('질문을 입력해주세요.');
    }
    if (!data.answer?.trim()) {
      throw new Error('답변을 입력해주세요.');
    }
    if (!data.category) {
      throw new Error('카테고리를 입력해주세요.');
    }
    // 요청 데이터 로그 출력
    const payload = {
      question: data.question.trim(),
      answer: data.answer.trim(),
      category: data.category,
      is_published: data.is_published,
    };
    console.log('[📦 POST 요청 payload]', payload);

    const response = await privateInstance.post<FAQ>('faqs/', {
      question: data.question.trim(),
      answer: data.answer.trim(),
      category: data.category,
      is_published: data.is_published
    });
    console.log('POST요청성공')
    return response.data;
  } catch (error: any) {
    console.error('FAQ 등록 실패:', error);
    throw new Error('FAQ 등록에 실패했습니다.');
  }
};

// -------------------------------------
//      기존 FAQ 수정 - privateInstance
// -------------------------------------
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
    if (!data.category) {
      throw new Error('카테고리를 입력해주세요.');
    }

    const response = await privateInstance.put<FAQ>(`faqs/${id}/`, {
      question: data.question.trim(),
      answer: data.answer.trim(),
      category: data.category,
      is_published: data.is_published
    });
    return response.data;
    
  } catch (error: any) {
    console.error('FAQ 수정 실패:', error);
    throw new Error('FAQ 수정에 실패했습니다.');
  }
};

// -------------------------------------
//       기존 FAQ 삭제 - privateInstance
// -------------------------------------
export const deleteFAQ = async (id: number): Promise<void> => {
  try {
    await privateInstance.delete(`faqs/${id}/`);
  } catch (error: any) {
    console.error('FAQ 삭제 실패:', error);
    throw new Error('FAQ 삭제에 실패했습니다.');
  }
};