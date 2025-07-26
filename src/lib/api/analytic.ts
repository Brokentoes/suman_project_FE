import publicInstance from "./publicInstance";

// --------------------------
//     방문자추이 데이터 요청 - public
// --------------------------
export interface VisitorData {
  yearMonth: number;
  visitors: number;
}

export const fetchMonthlyVisitors = async (): Promise<VisitorData[]> => {
  const response = await publicInstance.get<VisitorData[]>('analytics/monthly-visitors/');
  return response.data;
};