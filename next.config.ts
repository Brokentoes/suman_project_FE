import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 내보내기 설정
  output: 'export',
  
  // 이미지 최적화 비활성화 (정적 사이트에서 필요)
  images: {
    unoptimized: true,
  },
  
  // 후행 슬래시 추가 (선택사항)
  trailingSlash: true,
  
  // 베이스 경로 설정 (필요한 경우)
  // basePath: '',
  // assetPrefix: '',

  // 실험적 기능
  experimental: {
    // 필요한 경우에만 활성화
  },
}

module.exports = nextConfig;

// const nextConfig: NextConfig = {
//   /* config options here */

//   reactStrictMode: true,
// };

// export default nextConfig;
