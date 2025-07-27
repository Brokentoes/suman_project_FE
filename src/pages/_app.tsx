import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteChange = (url: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-50XKFW176B', {
        page_path: url,
      });
    }
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
    <Head>
      <title>(주) 수만</title>
      <meta name="description" content="수만 주식회사는 2차전지 검사 장비, 신뢰성 평가, 자동화 솔루션을 전문으로 하는 기술 기반 기업입니다." />
      <meta name="keywords" content="수만, 2차전지, 검사장비, 신뢰성 평가, 자동화, 장비 제조" />
      <meta property="og:title" content="(주) 수만" />
      <meta property="og:image" content="http://www.suman.co.kr/images/logo_suman.png" />
      <meta name="google-site-verification" content="iT2-OO3Wat9zt_bq-t7Y0F24HWiIyWTz_OsvEyvLd9c" />
      <meta name="naver-site-verification" content="b90c2478a5b6431a748fa0e68d931f04dc9e4fa9" />
      <link rel="icon" sizes="16x16" href="/images/logo.ico" />
    </Head>
      {/* GA4 스크립트 삽입 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-50XKFW176B`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-50XKFW176B', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
