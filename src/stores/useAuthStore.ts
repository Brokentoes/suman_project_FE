// /stores/useAuthStore.ts - 이 코드로 교체
import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: (accessToken: string, refreshToken: string) => void; // 매개변수 추가
  logout: () => void;
  init: () => void;
  updateAccessToken: (newAccessToken: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  refreshToken: null,
  
  login: (accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('isLoggedIn', 'true');
    set({ 
      isLoggedIn: true, 
      accessToken, 
      refreshToken 
    });
  },
  
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isLoggedIn');
    set({ 
      isLoggedIn: false, 
      accessToken: null, 
      refreshToken: null 
    });
  },
  
  init: () => {
    const saved = localStorage.getItem('isLoggedIn') === 'true';
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    
    set({ 
      isLoggedIn: saved, 
      accessToken, 
      refreshToken 
    });
  },
  
  updateAccessToken: (newAccessToken: string) => {
    localStorage.setItem('accessToken', newAccessToken);
    set({ accessToken: newAccessToken });
  },
}));