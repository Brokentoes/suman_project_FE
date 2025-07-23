import instance from "@/lib/api/axios";

// --------------------------
//     분석 데이터 요청 (GET)
// --------------------------
export const getAnalyticData = async () => {
  const response = await instance.get('analytics/');
  console.log('📥 고객분석데이터 GET 요청:', response.data);
  return response.data;
};