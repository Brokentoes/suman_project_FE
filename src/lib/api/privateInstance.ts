//--------------------------------------------------
//             관리자용 axios (토큰인증)
//--------------------------------------------------

import axios from 'axios';
import { useAuthStore } from '@/stores/useAuthStore';

const privateInstance = axios.create({
  baseURL: 'https://suman-project-cap5.onrender.com/api/', // API 주소.
  timeout: 5000,
});

// accessToken 자동 삽입 자동 주입 코드 인터셉터
privateInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// accessToken 만료 시 refreshToken 응답 인터셉터
privateInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401이고, 이미 재시도한 요청이 아니라면
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        // refresh 요청
        const refreshToken = localStorage.getItem('refreshToken');
        const res = await axios.post('http://suman-project-cap5.onrender.com/api/token/refresh/', {
          refresh: refreshToken,
        });

        const newAccessToken = res.data.access;

        // 저장 및 갱신
        localStorage.setItem('accessToken', newAccessToken);
        useAuthStore.getState().updateAccessToken(newAccessToken); // zustand 상태도 갱신

        // 기존 요청에 새로운 토큰 붙여 재시도
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return privateInstance(originalRequest);
      } catch (refreshError) {
        console.error('🔒 자동 갱신 실패: 로그아웃 처리');
        useAuthStore.getState().logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
    }
)

export default privateInstance;
