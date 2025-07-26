//--------------------------------------------------
//             비로그인용 axios (토큰인증X)
//--------------------------------------------------

import axios from 'axios';

const publicInstance = axios.create({
  baseURL: 'https://suman-project-cap5.onrender.com/api/', // API 주소.
  timeout: 5000,
});

export default publicInstance;