// 문의관련 api의 endpoint는 Inquiries/
import axios from '@/lib/api/axios';

// -------------------------------------
//      문의 전체 목록 조회 (GET 방식)
// -------------------------------------
export const fetchInquiries = async () => {
  const response = await axios.get('Inquiries/');
  console.log('📥 문의 리스트 GET 요청 결과:', response.data);
  return response.data;
};

// -------------------------------------
//      문의 읽음 처리 (PUT 방식)
// -------------------------------------
export const markInquiryAsRead = async (id: number): Promise<void> => {
  try {
    console.log(`[📡 PUT] 문의 ID ${id} 읽음처리 요청`);
    await axios.put(`Inquiries/${id}/`, { treatment: true });
    console.log(`[✅ PUT] 문의 ID ${id} 읽음처리 완료`);
  } catch (error) {
    console.error(`[❌ PUT] 문의 ID ${id} 읽음처리 실패:`, error);
    throw error;
  }
};