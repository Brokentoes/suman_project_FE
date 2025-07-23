// 기본 도메인 주소 통합 관리 인스턴스
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://suman-project-cap5.onrender.com/api/', // API 주소.
  timeout: 5000,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export default instance;