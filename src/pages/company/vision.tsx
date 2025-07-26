import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function VisionPage() {
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
      opacity: 0,
      x: -100,
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      x: 0,
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
      } as Transition,
    },
  };

  const rndBoxRightInVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      x: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
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

  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  // 클라이언트에서 컴포넌트가 마운트되었는지 확인하는 상태
  const [isClient, setIsClient] = useState(false);

  // 컴포넌트가 클라이언트에서 마운트될 때 isClient 상태를 true로 설정
  useEffect(() => {
    setIsClient(true);
  }, []);

  const svgViewBox = "0 0 1047 810";

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
          variants={fadeInRiseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 text-left">
              Vision
            </h2>

            <div className="vision-neo-area -mt-30 flex flex-col md:flex-row items-center justify-between ">
              <div className="md:w-1/2 text-left">
                <p className="text-gray-800 font-semibold text-[30px] mb-2">
                  NEO &apos;24 5th 6015
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
                  height="810px"
                  viewBox={svgViewBox}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="vision-infographic-svg"
                >
                  {/* isClient가 true일 때만 인터랙티브 SVG 그룹을 렌더링 */}
                  {isClient && (
                    <>
                      <g
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredSection("2024")}
                        onMouseLeave={() => setHoveredSection(null)}
                      >
                        <image
                          href="/images/vision_arrow3.png" // 실제 이미지 경로
                          x="0"
                          y="160"
                          width="260"
                          height="405"
                          className="transition-all duration-300 group-hover:opacity-70 group-hover:scale-[1.02]"
                        />
                        <text
                          x="110"
                          y="350"
                          fill="white"
                          fontSize="50"
                          fontWeight="bold"
                          textAnchor="middle"
                          className="transition-all duration-300 group-hover:fill-gray-200"
                        >
                          2024
                        </text>
                        <text
                          x="110"
                          y="380"
                          fill="white"
                          fontSize="24"
                          textAnchor="middle"
                          className={`transition-opacity duration-300 ${
                            hoveredSection === "2024"
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                        >
                          →
                        </text>

                        <foreignObject
                          x="40"
                          y="380"
                          width="140"
                          height="80"
                          className={`transition-opacity duration-300 ${
                            hoveredSection === "2024"
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <div className="font-size-60 text-center text-white">
                            제2시험센터 구축
                            <br />
                            반도체 정밀가공분야 진입
                          </div>
                        </foreignObject>
                      </g>

                      <g
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredSection("2026")}
                        onMouseLeave={() => setHoveredSection(null)}
                      >
                        <image
                          href="/images/vision_arrow2.png" // 실제 이미지 경로
                          x="90"
                          y="490"
                          width="440"
                          height="380"
                          className="transition-all duration-300 group-hover:opacity-70 group-hover:scale-[1.02]"
                        />
                        <text
                          x="310"
                          y="650"
                          fill="white"
                          fontSize="60"
                          fontWeight="bold"
                          textAnchor="middle"
                          className="transition-all duration-300 group-hover:fill-gray-200"
                        >
                          2026
                        </text>
                        <text
                          x="310"
                          y="680"
                          fill="white"
                          fontSize="24"
                          textAnchor="middle"
                          className={`transition-opacity duration-300 ${
                            hoveredSection === "2026"
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                        >
                          →
                        </text>

                        <foreignObject
                          x="240"
                          y="670"
                          width="140"
                          height="80"
                          className={`transition-opacity duration-300 ${
                            hoveredSection === "2026"
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <div className="font-size-60 text-center text-white">
                            전지모듈, 장비 및
                            <br />
                            모빌리티 분야 확장
                          </div>
                        </foreignObject>
                      </g>

                      <g
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredSection("2028")}
                        onMouseLeave={() => setHoveredSection(null)}
                      >
                        <image
                          href="/images/vision_arrow1.png" // 실제 이미지 경로
                          x="500"
                          y="0"
                          width="550"
                          height="788"
                          className="transition-all duration-300 group-hover:opacity-70 group-hover:scale-[1.02]"
                        />
                        <text
                          x="750"
                          y="400"
                          fill="white"
                          fontSize="70"
                          fontWeight="bold"
                          textAnchor="middle"
                          className="transition-all duration-300 group-hover:fill-gray-200"
                        >
                          2028
                        </text>
                        <text
                          x="750"
                          y="430"
                          fill="white"
                          fontSize="24"
                          textAnchor="middle"
                          className={`transition-opacity duration-300 ${
                            hoveredSection === "2028"
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                        >
                          →
                        </text>

                        <foreignObject
                          x="690"
                          y="420"
                          width="140"
                          height="80"
                          className={`transition-opacity duration-300 ${
                            hoveredSection === "2028"
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          <div className="font-size-60 text-center text-white">
                            매출 600억
                            <br />
                            순이익 150억원 목표
                          </div>
                        </foreignObject>
                      </g>
                    </>
                  )}
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
              className="core-value-boxes grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="relative flex flex-col justify-end p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[350px]"
                variants={itemRiseVariants}
                style={{
                  backgroundImage: 'url("/images/vision_Flex.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  clipPath:
                    "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-40 rounded-lg"
                  style={{
                    clipPath:
                      "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                  }}
                ></div>
                <div className="relative text-white">
                  <h3 className="text-[25px] font-semibold mb-2">유연조직</h3>
                  <p className="text-[15px]">
                    급변하는 시장에 유연하게 반응하며
                    <br />
                    끊임없이 혁신하는 조직입니다.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative flex flex-col justify-end p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[350px]"
                variants={itemRiseVariants}
                style={{
                  backgroundImage: 'url("/images/vision_pro.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  clipPath:
                    "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-40 rounded-lg"
                  style={{
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
                className="relative flex flex-col justify-end p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[350px]"
                variants={itemRiseVariants}
                style={{
                  backgroundImage: 'url("/images/vision_tek.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  clipPath:
                    "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-40 rounded-lg"
                  style={{
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
                className="relative flex flex-col justify-end p-4 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[350px]"
                variants={itemRiseVariants}
                style={{
                  backgroundImage: 'url("/images/vision_rnbd.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  clipPath:
                    "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                }}
              >
                <div
                  className="absolute inset-0 bg-black opacity-40 rounded-lg"
                  style={{
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
          viewport={{ once: false, amount: 0.3 }}
          style={{
            backgroundImage: 'url("/images/vision_R&D_bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-xl font-bold mb-4 text-left">R&D</h2>
            <p className="text-[40px] font-bold mb-12 text-left">
              끊임없는 연구개발과 스마트 공정 혁신을 통해
              <br />
              제조 효율의 새로운 기준을 만들어갑니다
            </p>
            <div className="rnd-content flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 flex flex-col items-end pr-0">
                <motion.div
                  className="bg-white/40 rounded-lg p-6 mb-4 w-72 backdrop-blur-sm"
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
                  className="bg-white/40 rounded-lg p-6 w-72 backdrop-blur-sm"
                  variants={rndBoxLeftInVariants}
                >
                  <p className="text-[25px] text-white font-semibold mb-2">
                    R&D
                  </p>
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
                  style={{ backgroundImage: 'url("/images/vision_dev.png")' }}
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
