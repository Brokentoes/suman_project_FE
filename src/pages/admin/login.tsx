// pages/admin/login.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/useAuthStore';

export default function AdminLogin() {
  const router = useRouter();
  const { isLoggedIn, login, init } = useAuthStore();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    init(); // localStorage 값으로 로그인 상태 초기화
    if (isLoggedIn) {
      router.replace('/admin/dashboard');
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();



    // 실제 서비스에서는 서버에서 인증해야 함 //
            // 실제 서비스전 변경 필요//
    // 실제 서비스에서는 서버에서 인증해야 함 //
    if (username === 'admin' && password === '1234') {
      login(); // Zustand + localStorage 업데이트
      router.replace('/admin');
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };




  return (
    <div style={{ padding: '2rem' }}>
      <h1>관리자 로그인</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>아이디</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
