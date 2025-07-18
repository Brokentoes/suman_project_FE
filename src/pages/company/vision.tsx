import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import { useState } from "react";

export default function VisionPage() {
  // Framer Motion Variants 정의 (이전과 동일)
  const fadeInRiseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" } as Transition,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemRiseVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" } as Transition,
    },
  };

  const rndSectionRiseVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        when: "beforeChildren",
      } as Transition,
    },
  };

  const rndBoxLeftInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const rndBoxRightInVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const processLineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } as Transition,
    },
  };

  // State to manage which section is being hovered
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // 제공된 SVG의 viewBox 값
  // viewBox의 y 시작점을 0으로 유지하여 상단이 잘리지 않도록 합니다.
  const svgViewBox = "0 0 1047 810";

  // 제공된 SVG의 path 데이터
  const path2024 =
    "M241.259 141.379L48.189 204.165C-10.1302 328.285 -19.2576 429.502 48.2686 546.235L238.893 437.067C238.893 437.067 194.044 381.064 197.242 308.381C199.98 246.143 229.026 169.663 241.259 141.379Z";
  const path2026 =
    "M455.976 517.794C455.976 517.794 373.221 539.969 255.742 468.336L75.7278 601.697C75.7278 601.697 220.874 848.158 518.39 804.407L455.976 517.794Z";
  const path2028 =
    "M577.664 788.217L493.324 513.713C620.072 435.665 631.033 329.861 620.671 286.714C592.841 296.168 535.795 316.165 530.252 320.526C524.708 324.886 636.138 108.861 692.546 0.302551L1046.75 123.43L920.543 166.83C920.543 166.83 1035.51 627.202 577.664 788.217Z";

  return (
    <Layout>
      <HeroSection
        title="기업 비전"
        subtitle="Vision"
        backgroundImage="/images/vision-hero-bg.png"
      />

      <BreadcrumbSection path="회사소개 > 기업 비전" />

      <section className="vision-section bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-10 text-left">
            Vision
          </h2>

          <div className="vision-neo-area flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            <div className="md:w-1/2 text-left">
              <p className="text-blue-600 font-semibold text-xl mb-2">
                NEO '24 5th 6015
              </p>
              <h3 className="text-4xl font-bold text-gray-800 leading-tight">
                확신의 중심 솔루션 서비스
                <br />
                회사의 도약
              </h3>
              <p className="text-xs text-gray-500 mt-8">
                새롭게 성장하고 도약하는 2025 / 5년 한 매출액 600억원, 순이익
                150억 달성
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <svg
                width="100%"
                // height를 고정하여 잘리지 않도록 하고, viewBox에 맞게 조정
                height="810px"
                viewBox={svgViewBox} // 제공된 SVG의 viewBox 값 사용
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="vision-infographic-svg"
              >
                {/* SVG Definitions for linear gradients */}
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="82.3517"
                    y1="135.612"
                    x2="182.724"
                    y2="510.208"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2152BC" />
                    <stop offset="1" stopColor="#0F2556" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1"
                    x1="242.322"
                    y1="471.932"
                    x2="343.934"
                    y2="851.153"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2152BC" />
                    <stop offset="1" stopColor="#0F2556" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_1"
                    x1="685.277"
                    y1="2.25018"
                    x2="874.56"
                    y2="708.664"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2152BC" />
                    <stop offset="1" stopColor="#0F2556" />
                  </linearGradient>
                </defs>

                {/* 2024 Section */}
                <g
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSection("2024")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <path
                    d={path2024} // 2024 영역의 정확한 path 데이터
                    fill="url(#paint0_linear_0_1)" // 제공된 그라데이션 ID 사용
                    className="transition-all duration-300 group-hover:opacity-70 group-hover:scale-[1.02]"
                  />
                  {/* hover 시 오버레이 효과 */}
                  {hoveredSection === "2024" && (
                    <path
                      d={path2024}
                      fill="rgba(37, 99, 235, 0.3)" // Tailwind blue-500에 해당하는 rgba 값
                      className="transition-all duration-300 animate-pulse"
                    />
                  )}

                  <text
                    x="150" // 2024 영역 내 적절한 x 좌표 (조정 필요)
                    y="250" // 2024 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="40"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="transition-all duration-300 group-hover:fill-gray-200"
                  >
                    2024
                  </text>
                  <text
                    x="150" // 2024 영역 내 적절한 x 좌표 (조정 필요)
                    y="290" // 2024 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="24"
                    textAnchor="middle"
                    className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    →
                  </text>

                  {/* Detailed text for 2024 */}
                  {hoveredSection === "2024" && (
                    <foreignObject x="80" y="320" width="140" height="80">
                      {" "}
                      {/* 위치 조정 */}
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="text-xs text-center text-white bg-black bg-opacity-70 p-2 rounded"
                      >
                        제2시험센터 구축
                        <br />
                        반도체 생산기공 분야 전환
                      </div>
                    </foreignObject>
                  )}
                </g>

                {/* 2026 Section */}
                <g
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSection("2026")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <path
                    d={path2026} // 2026 영역의 정확한 path 데이터
                    fill="url(#paint1_linear_0_1)" // 제공된 그라데이션 ID 사용
                    className="transition-all duration-300 group-hover:opacity-70 group-hover:scale-[1.02]"
                  />
                  {hoveredSection === "2026" && (
                    <path
                      d={path2026}
                      fill="rgba(37, 99, 235, 0.3)"
                      className="transition-all duration-300 animate-pulse"
                    />
                  )}
                  <text
                    x="300" // 2026 영역 내 적절한 x 좌표 (조정 필요)
                    y="600" // 2026 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="40"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="transition-all duration-300 group-hover:fill-gray-200"
                  >
                    2026
                  </text>
                  <text
                    x="300" // 2026 영역 내 적절한 x 좌표 (조정 필요)
                    y="640" // 2026 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="24"
                    textAnchor="middle"
                    className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    →
                  </text>

                  {/* Detailed text for 2026 */}
                  {hoveredSection === "2026" && (
                    <foreignObject x="230" y="670" width="140" height="80">
                      {" "}
                      {/* 위치 조정 */}
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="text-xs text-center text-white bg-black bg-opacity-70 p-2 rounded"
                      >
                        전지모듈, 장비 및
                        <br />
                        모빌리티 분야 확장
                      </div>
                    </foreignObject>
                  )}
                </g>

                {/* 2028 Section */}
                <g
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredSection("2028")}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <path
                    d={path2028} // 2028 영역의 정확한 path 데이터
                    fill="url(#paint2_linear_0_1)" // 제공된 그라데이션 ID 사용
                    className="transition-all duration-300 group-hover:opacity-70 group-hover:scale-[1.02]"
                  />
                  {hoveredSection === "2028" && (
                    <path
                      d={path2028}
                      fill="rgba(37, 99, 235, 0.3)"
                      className="transition-all duration-300 animate-pulse"
                    />
                  )}
                  <text
                    x="750" // 2028 영역 내 적절한 x 좌표 (조정)
                    y="250" // 2028 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="40"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="transition-all duration-300 group-hover:fill-gray-200"
                  >
                    2028
                  </text>
                  <text
                    x="750" // 2028 영역 내 적절한 x 좌표 (조정)
                    y="290" // 2028 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="24"
                    textAnchor="middle"
                    className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    →
                  </text>

                  {/* Detailed text for 2028 */}
                  {hoveredSection === "2028" && (
                    <foreignObject x="680" y="320" width="140" height="80">
                      {" "}
                      {/* 위치 조정 */}
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        className="text-xs text-center text-white bg-black bg-opacity-70 p-2 rounded"
                      >
                        매출 600억
                        <br />
                        순이익 150억 원 달성 목표
                      </div>
                    </foreignObject>
                  )}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value 섹션 (이전과 동일) */}
      <section className="core-value-section bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
            Core Value
          </h2>
          <p className="text-3xl font-bold text-gray-800 mb-12 text-left">
            끊임없이 변화하는 시대
            <br />
            우리는 유연함과 완벽성으로 대응합니다
          </p>

          <motion.div
            className="core-value-boxes grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300 ease-out"
              variants={itemRiseVariants}
            >
              <img
                src="/images/core-value-1.png"
                alt="유연한 조직"
                className="w-full h-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                유연한 조직
              </h3>
              <p className="text-sm text-gray-600">
                변화하는 시대에 유연하게 반응하고
                <br />
                혁신을 일상화하는 조직입니다.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300 ease-out"
              variants={itemRiseVariants}
            >
              <img
                src="/images/core-value-2.png"
                alt="전문적 분석"
                className="w-full h-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                전문적 분석
              </h3>
              <p className="text-sm text-gray-600">
                각 분야 최고의 전문성을 갖춘
                <br />
                인력들이 모여
                <br />
                차별화된 경쟁력을 제공합니다.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300 ease-out"
              variants={itemRiseVariants}
            >
              <img
                src="/images/core-value-3.png"
                alt="기술적 확장"
                className="w-full h-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                기술적 확장
              </h3>
              <p className="text-sm text-gray-600">
                기술적 한계를 극복하고 끊임없이
                <br />
                새로운 도전을 시도하는
                <br />
                기술 혁신을 이루어갑니다.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300 ease-out"
              variants={itemRiseVariants}
            >
              <img
                src="/images/core-value-4.png"
                alt="미래를 위한 도약"
                className="w-full h-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">R&BD</h3>
              <p className="text-sm text-gray-600">
                지속적인 R&D 투자를 통해
                <br />
                기술 혁신을 넘어 실질적인
                <br />
                비즈니스 성과를 창출합니다.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* R&D 섹션 (이전과 동일) */}
      <motion.section
        className="rnd-section bg-blue-950 text-white py-20 px-4 md:px-8 rounded-t-3xl overflow-hidden"
        variants={rndSectionRiseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          {" "}
          <h2 className="text-xl font-bold mb-4 text-left">R&D</h2>
          <p className="text-3xl font-bold mb-12 text-left">
            끊임없는 연구개발과 스마트 공정 혁신을 통해
            <br />
            제조 효율의 새로운 기준을 만들어갑니다
          </p>
          <div className="rnd-content flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 flex flex-col items-end pr-0">
              <motion.div
                className="bg-blue-800 bg-opacity-70 rounded-lg p-6 mb-4 w-72"
                variants={rndBoxLeftInVariants}
              >
                <p className="text-xl font-semibold mb-2">R&D 기획</p>
                <p className="text-sm text-gray-300">
                  PJT 운영 및 R&D 사업화 전략수립
                </p>
              </motion.div>

              <motion.div
                className="bg-blue-800 bg-opacity-70 rounded-lg p-6 w-72"
                variants={rndBoxLeftInVariants}
              >
                <p className="text-xl font-semibold mb-2">R&D</p>
                <p className="text-sm text-gray-300">
                  단계별 연구 ITEM 초기개발 / 차별화
                </p>
              </motion.div>
            </div>

            <motion.div
              className="hidden md:flex flex-col justify-center items-center h-full"
              variants={processLineVariants}
            >
              <img
                src="/images/process-line.png"
                alt="Process Line"
                className="h-64 object-contain"
              />
            </motion.div>

            <div className="md:w-1/2 flex flex-col justify-center pl-0">
              <motion.div
                className="relative w-full h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                style={{ backgroundImage: 'url("/images/rnd-meeting.png")' }}
                variants={rndBoxRightInVariants}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4">
                  <p className="text-gray-300 text-sm mb-1">
                    제조기술 효율성 극대화
                  </p>
                  <p className="text-xl font-semibold">
                    R&BD 조기 사업화 / 차세대 성장동력 확보
                  </p>
                  <p className="text-sm text-gray-300">
                    단계별 ITEM Launching / 사업화
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}
