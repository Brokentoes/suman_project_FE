import publicInstance from "./publicInstance";

export interface LoginResponse {
  access: string;
  refresh: string;
}

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await publicInstance.post<LoginResponse>('token/', {
      username,
      password,
    });
    if (!response) {
      throw new Error('아이디 또는 비밀번호가 잘못되었습니다.');
    }

    const data = await response.data;
    console.log('🎫 로그인 성공:', data);
    return { access: data.access, refresh: data.refresh };
  } catch (error) {
    console.error('❌ 로그인 실패:', error);
    throw error;
  }
};
