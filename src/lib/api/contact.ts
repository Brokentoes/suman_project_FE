import privateInstance from "./privateInstance";
import publicInstance from "./publicInstance";

export interface InquiryFormData {
  name: string;
  affiliation: string;
  phone: string;
  email: string;
  contect: string;
}
// -------------------------------------------
//            문의 등록 - public
// -------------------------------------------
 export const postInquiry = async (form: InquiryFormData) => {
  const response = await publicInstance.post("Inquiries/", form);
  return response.data;
};


// -------------------------------------
//      문의 전체 목록 조회 - public
// -------------------------------------
export const fetchInquiries = async () => {
  const response = await publicInstance.get('Inquiries/');
  console.log('📥 문의 리스트 GET 요청 결과:', response.data);
  return response.data;
};

// -------------------------------------
//      문의 읽음 처리- private
// -------------------------------------
export const markInquiryAsRead = async (id: number): Promise<void> => {
  try {
    console.log(`[📡 Patch] 문의 ID ${id} 읽음처리 요청`);
    await privateInstance.patch(`Inquiries/${id}/`, { treatment: true });
    console.log(`[✅ Patch] 문의 ID ${id} 읽음처리 완료`);
  } catch (error) {
    console.error(`[❌ Patch] 문의 ID ${id} 읽음처리 실패:`, error);
    throw error;
  }
};