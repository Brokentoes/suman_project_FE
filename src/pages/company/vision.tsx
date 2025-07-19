import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

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
    hidden: {
      opacity: 0, // 초기 상태: 박스 전체가 보이지 않음
      x: -100,
      backgroundColor: "rgba(255, 255, 255, 0)", // 초기 배경은 완전 투명
    },
    visible: {
      opacity: 1, // 최종 상태: 박스 전체가 보이게 됨
      x: 0,
      backgroundColor: "rgba(255, 255, 255, 0.4)", // 최종 배경은 70% 불투명한 흰색
      transition: {
        duration: 0.4, // 애니메이션 지속 시간
        ease: "easeOut",
        when: "beforeChildren", // 부모 애니메이션이 끝난 후 자식 애니메이션 시작 (선택 사항)
        // 또는 staggerChildren: 0.1 과 같은 방식으로 자식 요소를 지연시킬 수도 있습니다.
      } as Transition,
    },
  };

  const rndBoxRightInVariants = {
    hidden: {
      opacity: 0, // 초기 상태: 박스 전체가 보이지 않음
      x: 100, // 오른쪽에서 나타나므로 x 시작 값은 양수
      backgroundColor: "rgba(0, 0, 0, 0)", // 초기 배경은 완전 투명 (이미지이므로 필요 없을 수 있지만 일관성을 위해 추가)
    },
    visible: {
      opacity: 1, // 최종 상태: 박스 전체가 보이게 됨
      x: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)", // 배경 이미지 위에 텍스트 오버레이가 있으므로, 오버레이의 투명도 조절용 (필요시 조정)
      transition: {
        duration: 0.4, // 애니메이션 지속 시간
        ease: "easeOut",
        when: "beforeChildren", // 부모 애니메이션이 끝난 후 자식 애니메이션 시작 (텍스트가 이미지 위에 나타나므로 유용)
      } as Transition,
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
    <>
    <Head>
      <title>비전 | 수만</title>
    </Head>
    <Layout>
      <HeroSection
        title="기업 비전"
        subtitle="Vision"
        backgroundImage="/images/company_hero.png"
      />

      <BreadcrumbSection path="회사소개 > 기업 비전" />

      {/* Vision 섹션에 Framer Motion 적용 */}
      <motion.section
        className="vision-section bg-white py-20 px-4 md:px-8"
        variants={fadeInRiseVariants} // 정의된 fadeInRiseVariants 사용
        initial="hidden" // 초기 상태는 hidden
        whileInView="visible" // 뷰포트에 들어오면 visible 상태로 전환
        viewport={{ once: true, amount: 0.3 }} // 한 번만 애니메이션, 30% 보이면 실행
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 text-left">Vision</h2>

          <div className="vision-neo-area -mt-30 flex flex-col md:flex-row items-center justify-between ">
            <div className="md:w-1/2 text-left">
              <p className="text-gray-800 font-semibold text-[30px] mb-2">
                NEO '24 5th 6015
              </p>
              <h3 className="text-4xl font-bold text-blue-600 text-[50px] leading-tight">
                확신의 종합 솔루션 서비스
              </h3>
              <h3 className="text-4xl font-bold text-gray-800 text-[50px] leading-tight">
                회사로의 도약
              </h3>
              <p className="text-[25px] text-gray-500 mt-8">
                새롭게 성장하고 도약하는 2025년
                <br /> 5년 한 매출액 600억원, 순이익 150억 달성!
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
                    x="110" // 2024 영역 내 적절한 x 좌표 (조정 필요)
                    y="350" // 2024 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="50"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="transition-all duration-300 group-hover:fill-gray-200"
                  >
                    2024
                  </text>
                  <text
                    x="110" // 2024 영역 내 적절한 x 좌표 (조정 필요)
                    y="380" // 2024 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="24"
                    textAnchor="middle"
                    className={`transition-opacity duration-300 ${
                      hoveredSection === "2024" ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    →
                  </text>

                  {/* Detailed text for 2024 */}
                  <foreignObject
                    x="40"
                    y="380"
                    width="140"
                    height="80"
                    className={`transition-opacity duration-300 ${
                      hoveredSection === "2024" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      className="font-size-60 text-center text-white" // 배경색 제거
                    >
                      제2시험센터 구축
                      <br />
                      반도체 정밀가공분야 진입
                    </div>
                  </foreignObject>
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
                    x="310" // 2026 영역 내 적절한 x 좌표 (조정 필요)
                    y="650" // 2026 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="60"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="transition-all duration-300 group-hover:fill-gray-200"
                  >
                    2026
                  </text>
                  <text
                    x="310" // 2026 영역 내 적절한 x 좌표 (조정 필요)
                    y="680" // 2026 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="24"
                    textAnchor="middle"
                    className={`transition-opacity duration-300 ${
                      hoveredSection === "2026" ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    →
                  </text>

                  {/* Detailed text for 2026 */}
                  <foreignObject
                    x="240"
                    y="670"
                    width="140"
                    height="80"
                    className={`transition-opacity duration-300 ${
                      hoveredSection === "2026" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      className="font-size-60 text-center text-white" // 배경색 제거
                    >
                      전지모듈, 장비 및
                      <br />
                      모빌리티 분야 확장
                    </div>
                  </foreignObject>
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
                    y="400" // 2028 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="70"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="transition-all duration-300 group-hover:fill-gray-200"
                  >
                    2028
                  </text>
                  <text
                    x="750" // 2028 영역 내 적절한 x 좌표 (조정)
                    y="430" // 2028 영역 내 적절한 y 좌표 (조정)
                    fill="white"
                    fontSize="24"
                    textAnchor="middle"
                    className={`transition-opacity duration-300 ${
                      hoveredSection === "2028" ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    →
                  </text>

                  {/* Detailed text for 2028 */}
                  <foreignObject
                    x="690"
                    y="420" // 위치 조정
                    width="140"
                    height="80"
                    className={`transition-opacity duration-300 ${
                      hoveredSection === "2028" ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      className="font-size-60 text-center text-white " // 배경색 제거
                    >
                      매출 600억
                      <br />
                      순이익 150억원 목표
                    </div>
                  </foreignObject>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Core Value 섹션 */}
      <section className="core-value-section bg-white -mt-3 0 *:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
            Core Value
          </h2>
          <p className="text-[50px] font-bold text-gray-800 mb-12 text-left">
            끊임없이 변화하는 시대
            <br />
            우리는 유연함과 전문성으로 대응합니다
          </p>

          <motion.div
            className="core-value-boxes grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8" // gap-8을 gap-x-12 (가로 간격)로 늘림
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* 각 Core Value 박스에 배경 이미지 및 텍스트 오버레이 적용 */}
            <motion.div
              className="relative flex flex-col justify-end p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[350px]" // min-h를 350px로 늘림
              variants={itemRiseVariants}
              style={{
                backgroundImage: 'url("/images/vision_Flex.png")', // 이미지 경로
                backgroundSize: "cover",
                backgroundPosition: "center",
                // clipPath 다시 추가 및 픽셀 값 30px로 증가
                clipPath:
                  "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
              }}
            >
              {/* 이미지 위에 어두운 오버레이 추가 (텍스트 가독성 향상) */}
              <div
                className="absolute inset-0 bg-black opacity-40 rounded-lg"
                style={{
                  // 오버레이에도 동일한 clipPath 적용
                  clipPath:
                    "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                }}
              ></div>
              <div className="relative text-white">
                {" "}
                {/* 텍스트를 이미지 위에 올리기 위해 relative */}
                <h3 className="text-[25px] font-semibold mb-2">유연조직</h3>
                <p className="text-[15px]">
                  급변하는 시장에 유연하게 반응하며
                  <br />
                  끊임없이 혁신하는 조직입니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col justify-end p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[350px]" // min-h를 350px로 늘림
              variants={itemRiseVariants}
              style={{
                backgroundImage: 'url("/images/vision_pro.png")', // 이미지 경로
                backgroundSize: "cover",
                backgroundPosition: "center",
                // clipPath 다시 추가 및 픽셀 값 30px로 증가
                clipPath:
                  "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
              }}
            >
              <div
                className="absolute inset-0 bg-black opacity-40 rounded-lg"
                style={{
                  // 오버레이에도 동일한 clipPath 적용
                  clipPath:
                    "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                }}
              ></div>
              <div className="relative text-white">
                <h3 className="text-[25px] font-semibold mb-2">전문인력</h3>
                <p className="text-[15px]">
                  각 분야 최고의 전문성을 갖춘
                  <br />
                  인력들이 모여
                  <br />
                  차별화된 가치를 제공합니다.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col justify-end p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[350px]" // min-h를 350px로 늘림
              variants={itemRiseVariants}
              style={{
                backgroundImage: 'url("/images/vision_tek.png")', // 이미지 경로
                backgroundSize: "cover",
                backgroundPosition: "center",
                // clipPath 다시 추가 및 픽셀 값 30px로 증가
                clipPath:
                  "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
              }}
            >
              <div
                className="absolute inset-0 bg-black opacity-40 rounded-lg"
                style={{
                  // 오버레이에도 동일한 clipPath 적용
                  clipPath:
                    "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                }}
              ></div>
              <div className="relative text-white">
                <h3 className="text-[25px] font-semibold mb-2">기술융합</h3>
                <p className="text-[15px]">
                  기술의 경계를 허물고 융합하여
                  <br />
                  미래를 선도하는
                  <br />
                  기술 혁신을 이루어갑니다
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col justify-end p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[350px]" // min-h를 350px로 늘림
              variants={itemRiseVariants}
              style={{
                backgroundImage: 'url("/images/vision_rnbd.png")', // 이미지 경로
                backgroundSize: "cover",
                backgroundPosition: "center",
                // clipPath 다시 추가 및 픽셀 값 30px로 증가
                clipPath:
                  "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
              }}
            >
              <div
                className="absolute inset-0 bg-black opacity-40 rounded-lg"
                style={{
                  // 오버레이에도 동일한 clipPath 적용
                  clipPath:
                    "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                }}
              ></div>
              <div className="relative text-white">
                <h3 className="text-[25px] font-semibold mb-2">R&BD</h3>
                <p className="text-[15px]">
                  지속적인 R&D 투자를 통해
                  <br />
                  기술 혁신을 넘어 실질적인
                  <br />
                  비즈니스 성과를 창출합니다.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* R&D 섹션 */}
      <motion.section
        className="rnd-section bg-dark-navy text-white py-20 px-4 md:px-8 rounded-t-3xl overflow-hidden relative"
        variants={rndSectionRiseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // once: false로 설정
        style={{
          backgroundImage: 'url("/images/vision_R&D_bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* z-0 추가 */}
        <div className="max-w-7xl mx-auto relative z-10">
          {" "}
          {/* z-10 추가하여 콘텐츠가 오버레이 위로 오게 함 */}{" "}
          <h2 className="text-xl font-bold mb-4 text-left">R&D</h2>
          <p className="text-[40px] font-bold mb-12 text-left">
            끊임없는 연구개발과 스마트 공정 혁신을 통해
            <br />
            제조 효율의 새로운 기준을 만들어갑니다
          </p>
          <div className="rnd-content flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 flex flex-col items-end pr-0">
              <motion.div
                className="bg-white/40 rounded-lg p-6 mb-4 w-72 backdrop-blur-sm" // 배경을 흰색 투명도로 변경
                variants={rndBoxLeftInVariants}
              >
                <p className="text-[25px] text-white font-semibold mb-2">
                  R&D 기획
                </p>
                <p className="text-[15px] text-white">
                  PJT 운영 및 R&D 사업화 전략수립
                </p>
              </motion.div>

              <motion.div
                className="bg-white/40 rounded-lg p-6 w-72 backdrop-blur-sm" // 배경을 흰색 투명도로 변경
                variants={rndBoxLeftInVariants}
              >
                <p className="text-[25px] text-white font-semibold mb-2">R&D</p>
                <p className="text-[15px] text-white">
                  단계별 연구 ITEM 초기개발 / 차별화
                </p>
              </motion.div>
            </div>

            <motion.div
              className="hidden md:flex flex-col justify-center items-center h-full"
              variants={processLineVariants}
            >
              <svg
                width="188"
                height="71"
                viewBox="0 0 188 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_534_627"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="188"
                  height="71"
                >
                  <rect width="20" height="71" fill="black" />
                  <rect x="42" width="20" height="71" fill="black" />
                  <rect x="84" width="20" height="71" fill="black" />
                  <rect x="126" width="20" height="71" fill="black" />
                  <rect x="168" width="20" height="71" fill="black" />
                </mask>
                <g mask="url(#mask0_534_627)">
                  <rect
                    x="-23"
                    width="226"
                    height="71"
                    fill="url(#paint0_linear_534_627)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_534_627"
                    x1="-23"
                    y1="35.5"
                    x2="203"
                    y2="35.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <div className="md:w-1/2 flex flex-col justify-center pl-0">
              <motion.div
                className="relative w-full h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                style={{ backgroundImage: 'url("/images/vision_dev.png")' }} // 이 부분은 기존 이미지이므로 그대로 둠
                variants={rndBoxRightInVariants}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-4">
                  <p className="text-gray-300 text-[15px] mb-1">
                    제조기술 효율성 극대화
                  </p>
                  <p className="text-[25px] font-semibold">
                    R&BD 조기 사업화 / 차세대 성장동력 확보
                  </p>
                  <p className="text-[20px] text-gray-300">
                    단계별 ITEM Launching / 사업화
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
    </>
  );
}
