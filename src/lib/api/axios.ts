// 기본 도메인 주소 통합 관리 인스턴스
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://172.31.81.155:8000/api/', // API 주소. 여기를 변경하면 전체 api
  timeout: 5000,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export default instance;