// 공통 로그인 보호 컴포넌트 HOC -> 로그인 확인 전까지 렌더링 X
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/useAuthStore';
import type { ComponentType } from 'react';

export function withAdminAuth<P extends object>(WrappedComponent: ComponentType<P>) {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const { isLoggedIn, init } = useAuthStore();

    useEffect(() => {
      init();
      const token = localStorage.getItem('accessToken');
      if (!token || !isLoggedIn) {
        alert('관리자 로그인을 해주세요');
        router.replace('/admin/login'); // 토큰없으면 로그인페이지 이동
      }
    }, []);

    if (!isLoggedIn) return null;
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
}
