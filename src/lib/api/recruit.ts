// /lib/api/recruit.ts
import instance from './axios';

export interface Recruitment {
  id: number;
  title: string;
  content: string;
  postedAt: string;
}

export interface CreateRecruitmentData {
  title: string;
  content: string;
}

export interface UpdateRecruitmentData {
  title: string;
  content: string;
}

// API 에러 타입 정의
export interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

// 공통 에러 처리 함수
const handleApiError = (error: any, defaultMessage: string): ApiError => {
  const apiError: ApiError = {
    message: defaultMessage,
    status: error.response?.status,
    data: error.response?.data
  };

  // 서버에서 보낸 에러 메시지가 있으면 사용
  if (error.response?.data?.message) {
    apiError.message = error.response.data.message;
  } else if (error.response?.data?.error) {
    apiError.message = error.response.data.error;
  } else if (error.message) {
    apiError.message = error.message;
  }

  console.error('API Error:', {
    url: error.config?.url,
    method: error.config?.method,
    status: error.response?.status,
    data: error.response?.data,
    message: apiError.message
  });

  return apiError;
};

// -------------------------------------
//            전체 공고 조회
// -------------------------------------
export const fetchRecruitments = async (): Promise<Recruitment[]> => {
  try {
    const response = await instance.get<Recruitment[]>('recruit/');
    console.log(response)
    return response.data;
  } catch (error: any) {
    const apiError = handleApiError(error, '채용공고를 불러오지 못했습니다.');
    throw apiError;
  }
};

// -------------------------------------
//            신규 공고 등록
// -------------------------------------
export const createRecruitment = async (data: CreateRecruitmentData): Promise<Recruitment> => {
  try {
    // 입력값 검증
    if (!data.title?.trim()) {
      throw new Error('제목을 입력해주세요.');
    }
    if (!data.content?.trim()) {
      throw new Error('내용을 입력해주세요.');
    }

    const response = await instance.post<Recruitment>('recruit/', {
      title: data.title.trim(),
      description: data.content.trim()
    });
    
    return response.data;
  } catch (error: any) {
    const apiError = handleApiError(error, '채용공고 등록에 실패했습니다.');
    throw apiError;
  }
};

// -------------------------------------
//            기존 공고 수정
// -------------------------------------
export const updateRecruitment = async (
  id: number,
  data: UpdateRecruitmentData
): Promise<Recruitment> => {
  try {
    // 입력값 검증
    if (!data.title?.trim()) {
      throw new Error('제목을 입력해주세요.');
    }
    if (!data.content?.trim()) {
      throw new Error('내용을 입력해주세요.');
    }

    const response = await instance.put<Recruitment>(`recruit/${id}/`, {
      title: data.title.trim(),
      description: data.content.trim()
    });
    return response.data;
    
  } catch (error: any) {
    const apiError = handleApiError(error, '채용공고 수정에 실패했습니다.');
    throw apiError;
  }
};

// -------------------------------------
//            기존 공고 삭제
// -------------------------------------
export const deleteRecruitment = async (id: number): Promise<void> => {
  try {
    await instance.delete(`recruit/${id}/`);
  } catch (error: any) {
    const apiError = handleApiError(error, '채용공고 삭제에 실패했습니다.');
    throw apiError;
  }
};

// // 전체 공고 조회
// export const fetchRecruitments = async (): Promise<Recruitment[]> => {
//   try {
//     const response = await baseURL.get<Recruitment[]>('recruit/');
//     console.log(response)
//     return response.data;
//   } catch (error: any) {
//     const apiError = handleApiError(error, '채용공고를 불러오지 못했습니다.');
//     throw apiError;
//   }
// };


// // 신규 공고 등록
// export const createRecruitment = async (data: CreateRecruitmentData): Promise<Recruitment> => {
//   try {
//     // 입력값 검증
//     if (!data.title?.trim()) {
//       throw new Error('제목을 입력해주세요.');
//     }
//     if (!data.description?.trim()) {
//       throw new Error('내용을 입력해주세요.');
//     }

//     const response = await baseURL.post<Recruitment>('/recruit/', {
//       title: data.title.trim(),
//       description: data.description.trim()
//     });
    
//     return response.data;
//   } catch (error: any) {
//     const apiError = handleApiError(error, '채용공고 등록에 실패했습니다.');
//     throw apiError;
//   }
// };

// // 기존 공고 수정
// export const updateRecruitment = async (
//   id: number,
//   data: UpdateRecruitmentData
// ): Promise<Recruitment> => {
//   try {
//     // 입력값 검증
//     if (!data.title?.trim()) {
//       throw new Error('제목을 입력해주세요.');
//     }
//     if (!data.description?.trim()) {
//       throw new Error('내용을 입력해주세요.');
//     }

//     const response = await baseURL.put<Recruitment>(`/recruit/${id}/`, {
//       title: data.title.trim(),
//       description: data.description.trim()
//     });
//     return response.data;
    
//   } catch (error: any) {
//     const apiError = handleApiError(error, '채용공고 수정에 실패했습니다.');
//     throw apiError;
//   }
// };

// // 기존 공고 삭제
// export const deleteRecruitment = async (id: number): Promise<void> => {
//   try {
//     await baseURL.delete(`/recruit/${id}/`);
//   } catch (error: any) {
//     const apiError = handleApiError(error, '채용공고 삭제에 실패했습니다.');
//     throw apiError;
//   }
// };

// 공고 검색 (필요시 사용)
// export const searchRecruitments = async (keyword: string): Promise<Recruitment[]> => {
//   try {
//     const response = await baseURL.get<Recruitment[]>(`/recruit/?search=${encodeURIComponent(keyword)}`);
//     return response.data;
//   } catch (error: any) {
//     const apiError = handleApiError(error, '채용공고 검색에 실패했습니다.');
//     throw apiError;
//   }
// };

// 공고 상태별 조회 (필요시 사용)
// export const fetchRecruitmentsByStatus = async (status: string): Promise<Recruitment[]> => {
//   try {
//     const response = await baseURL.get<Recruitment[]>(`/recruit/?status=${status}`);
//     return response.data;
//   } catch (error: any) {
//     const apiError = handleApiError(error, '채용공고를 불러오지 못했습니다.');
//     throw apiError;
//   }
// };