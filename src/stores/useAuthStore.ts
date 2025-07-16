// login페이지에서 로그인 성공시 권한이 있음을 저장
import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  init: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  login: () => {
    localStorage.setItem('isLoggedIn', 'true');
    set({ isLoggedIn: true });
  },
  logout: () => {
    localStorage.removeItem('isLoggedIn');
    set({ isLoggedIn: false });
  },
  init: () => {
    const saved = localStorage.getItem('isLoggedIn') === 'true';
    set({ isLoggedIn: saved });
  },
}));

