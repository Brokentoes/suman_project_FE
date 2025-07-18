// gtag관련 글로벌 타입 지정
export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
