// certifications.tsx
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const homeContentKor = {
  sectionCertifications: {
    title:
      "정부기관의 인증을 비롯해\nISO 품질·환경·안전경영 시스템을 모두 구축하여\n고객 중심의 고신뢰 생산 체계를 갖추고 있습니다.",
    tags: ["Technology Certification", "Quality Assurance"],
    certifications: [
      { label: "ISO 9001", img: "/images/Certifications/ISO_9001.png" },
      { label: "ISO 14001", img: "/images/Certifications/ISO_14001.png" },
      { label: "ISO 45001", img: "/images/Certifications/ISO_45001.png" },
      {
        label: "기업부설연구소",
        img: "/images/Certifications/기업부설연구소 인정서.png",
      },
      {
        label: "벤처기업 확인서",
        img: "/images/Certifications/main_venture.png",
      },
      {
        label: "소재 부품 장비 전문기업",
        img: "/images/Certifications/소재부품장비 전문기업확인서.png",
      },
      {
        label: "피스톤링 제조기술 특허",
        img: "/images/Certifications/특허_피스톤제조.png",
      },
      {
        label: "스웰링 측정용 지그 특허",
        img: "/images/Certifications/특허_스웰링측정용지그.png",
      },
      {
        label: "전력관리시스템 특허",
        img: "/images/Certifications/특허_전력관리시스템.png",
      },
      {
        label: "전선가공장치 특허",
        img: "/images/Certifications/특허_전선가공장치.png",
      },
      {
        label: "주물성형분리장치 특허",
        img: "/images/Certifications/특허_주물성형분리장치.png",
      },
    ],
    legal: "위 내용은 2023년 12월 31일 기준입니다.",
  },
};

export default function CIPage() {
  const [showMore, setShowMore] = useState(false);
  const handleToggleMore = () => setShowMore((prev) => !prev);

  const visibleCerts =
    homeContentKor.sectionCertifications.certifications.slice(0, 8);
  const moreCerts =
    homeContentKor.sectionCertifications.certifications.slice(8);

  const labelClass =
    "text-base sm:text-lg lg:text-2xl font-semibold text-black";
  const buttonClass =
    "text-sm sm:text-base bg-gray-100 text-gray-800 rounded-full px-4 py-2 hover:bg-gray-300 transition";

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  return (
    <>
      <Head>
        <title>인증 현황 | 수만</title>
      </Head>
      <Layout>
        <HeroSection
          title="인증 현황"
          subtitle="Certifications"
          backgroundImage="/images/sub_banner/company_banner.png"
        />

        <BreadcrumbSection path="회사소개 > 인증 현황" />

        {/* 메인 콘텐츠 섹션 */}
        <section className="relative z-30 bg-white py-20 px-4 md:px-8 flex justify-center items-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* 상단 라벨 */}
            <motion.div
              className="relative z-20 w-full pt-0 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mb-10" // pt-20 제거, px-6 md:px-[120px] 제거
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className={labelClass}>Certifications</p>
              <div className="flex-grow" />
            </motion.div>

            {/* 섹션 제목 */}
            <motion.div
              className="text-left text-black whitespace-pre-line mb-4 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-7 tracking-wide text-black leading-[1.3]">
                {homeContentKor.sectionCertifications.title}
              </p>
            </motion.div>

            <motion.div
              className="flex gap-2 mt-1 sm:mt-8 lg:mt-8 w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {homeContentKor.sectionCertifications.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-blue-700 px-3 py-0.3 text-xs lg:text-lg font-medium"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* "전체 업적 현황" 버튼 */}
            <motion.div
              className="w-full flex justify-end mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={handleToggleMore}
                className={buttonClass}
                title="더보기"
              >
                전체 업적 보기
                <span className="ml-2 text-lg">{showMore ? "-" : "+"}</span>
              </button>
            </motion.div>

            {/* 주 8개 인증 */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-15 mt-30 w-full">
              {" "}
              {[0, 1].map((rowIndex) => {
                const certGroup = visibleCerts.slice(
                  rowIndex * 4,
                  rowIndex * 4 + 4
                );
                const fromLeft = rowIndex % 2 === 0;

                return (
                  <motion.div
                    key={rowIndex}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20"
                    initial={{ x: fromLeft ? -200 : 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1.3 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    {certGroup.map((cert, i) => (
                      <div key={i} className="group text-center">
                        {!cert.img && (
                          <button
                            title={cert.label}
                            className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate tracking-wide"
                          >
                            {cert.label}
                          </button>
                        )}

                        {cert.img && (
                          <>
                            <button
                              title={cert.label}
                              className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate tracking-wide group-hover:hidden"
                            >
                              {cert.label}
                            </button>

                            <div className="w-48 mx-auto transition-all duration-500 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96">
                              <Image
                                src={cert.img}
                                alt={cert.label}
                                width={192}
                                height={192}
                                className="rounded shadow-xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 mt-3"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>

            {/* 추가 인증 출력 */}
            <AnimatePresence initial={false}>
              {showMore && (
                <motion.div
                  className="overflow-visible w-full mt-15"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 mt-10 pb-6">
                    {moreCerts.map((cert, i) => (
                      <div key={i} className="group text-center col-span-1">
                        {!cert.img && (
                          <button
                            title={cert.label}
                            className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate tracking-wide"
                          >
                            {cert.label}
                          </button>
                        )}
                        {cert.img && (
                          <>
                            <button
                              title={cert.label}
                              className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate tracking-wide group-hover:hidden"
                            >
                              {cert.label}
                            </button>

                            <div className="w-48 mx-auto transition-all duration-500 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96">
                              <Image
                                src={cert.img}
                                alt={cert.label}
                                width={192}
                                height={192}
                                className="rounded shadow-xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 mt-3"
                              />
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="w-full flex flex-col items-end gap-2 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {!showMore && (
                <p className="text-sm lg:text-base text-gray-400 tracking-wide">
                  {homeContentKor.sectionCertifications.legal}
                </p>
              )}
            </motion.div>
          </div>
        </section>
        <hr className="my-8 border-gray-200 w-full" />
      </Layout>
    </>
  );
}
