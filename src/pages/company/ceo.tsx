import Header from "@/components/Header";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { ceoText } from "@/data/ceo"
import { useLangStore } from "@/stores/langStore";
import { useState } from "react";

// Ceo인사말 애니메이션
const slideInLeft = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,

    y: 0,
    transition: { duration: 2, ease: "easeOut" } as Transition,
  },
};
// Ceo 이미지 애니메이션
const slideInRight = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" } as Transition,
  },
};
// 대표이사 서명 애니메이션
const slideInLeftBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } as Transition,
  },
};

export default function CeoPage() {
  const lang = useLangStore((state) => state.lang);
    const { intro, body, closing } = ceoText[lang];
    
    
  return (
    <Layout>
      <Head>
        <title>CEO인사말 | 수만</title>
      </Head>

      <Header />

      {/* "CEO 인사말" HeroSection */}
      <HeroSection
        title="CEO 인사말"
        subtitle="CEO Message"
        backgroundImage="/images/ceo_hero.png"
      />

      {/* 서브 내비게이션 (Breadcrumb) 섹션 */}
      <BreadcrumbSection path="회사소개 > CEO 인사말" />

      {/* CEO 인사말 섹션 */}
      <main className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12">
          <motion.div
            className="ceo-text-column md:w-[48%] text-gray-700 leading-relaxed"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
  {lang === "KOR" ? (
    <>
      <span className="text-blue-600 font-bold">SUMAN</span>
      <span className="text-black font-bold">을</span>
      <br />
      <span className="text-black font-bold">
        찾아주신 고객 여러분, 반갑습니다.
      </span>
    </>
  ) : (
    <>
      <span className="text-blue-600 font-bold">SUMAN</span>
      <br />
      <span className="text-black font-bold">
        Welcome, dear customers,
      </span>
    </>
  )}
</h2>
            <p className="mb-4 text-2xl">{intro}</p>
            <p className="mb-4 whitespace-pre-line">{body}</p>
            <p className="mb-4">{closing}</p>
            </motion.div>

            {/* 서명 영역 주석 
            <
              className="signature-area text-lg font-semibold text-gray-800 mt-8"
              variants={slideInLeftBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              (주) 수만 그룹 대표이사 임태형{" "}
              
              <Image
                src="/images/signature.png"
                alt="대표이사 서명"
                className="w-40 h-auto inline-block align-middle ml-2"
                width={100}
                height={100}
              />
              </motion.p>
            */}

          {/*Ceo 인사말과 Ceo이미지 사이 회색 실선 */}
          <div className="hidden md:block w-px min-h-[700px] bg-gray-300 self-stretch mr-8" />

          {/* 이미지 플레이스홀더 */}
          <motion.div
            className="ceo-image-column md:w-[48%] flex items-center justify-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="placeholder-image w-full flex items-center justify-center text-blue-500 font-bold text-2xl" // h-full 제거
              style={{
                height: "auto",
                maxHeight: "500px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {/* 실제 이미지가 있을 경우 여기서 교체하세요 */}
              <Image
                src="/images/ceo.jpeg" // 실제 CEO 이미지 경로로 변경하세요
                alt="SUMAN CEO"
                className="w-full h-full object-cover"
                width={700}
                height={500}
              />
            </div>
          </motion.div>
        </div>
      </main>
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
  );
}
