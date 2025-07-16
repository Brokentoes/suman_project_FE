import Layout from "@/components/Layout"; // 새로운 Layout 컴포넌트 임포트
import HeroSection from "@/components/HeroSection"; // 새로운 HeroSection 컴포넌트 임포트
import BreadcrumbSection from "@/components/BreadcrumbSection"; // BreadcrumbSection 컴포넌트 임포트 (추가)
import { motion, type Transition } from "framer-motion";

export default function VisionPage() {
  // Framer Motion Variants 정의
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

  // R&D 섹션 전체를 위한 Variant (아래에서 위로)
  const rndSectionRiseVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        when: "beforeChildren", // 자식 요소 애니메이션 시작 전에 부모 애니메이션 완료
      } as Transition,
    },
  };

  // R&D 기획, R&D 박스 왼쪽에서 나타나는 Variant
  const rndBoxLeftInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  // R&BD 조기 사업화 박스 오른쪽에서 나타나는 Variant
  const rndBoxRightInVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  // 진행도 이미지 왼쪽에서 나타나는 Variant
  const processLineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } as Transition,
    }, // 다른 박스보다 약간 늦게 시작
  };

  return (
    <Layout>
      <HeroSection
        title="기업 비전"
        subtitle="Vision"
        backgroundImage="/images/vision-hero-bg.png"
      />

      {/* 서브 내비게이션 (Breadcrumb) 섹션 - BreadcrumbSection 컴포넌트 사용 */}
      <BreadcrumbSection path="HOME > 기업 비전" />

      {/* Vision 본문 섹션 - 배경 너비 통일 */}
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
            {/* 인포그래픽 이미지 영역 - 애니메이션 및 상단 모서리 둥글게 처리 제외 */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/images/vision-infographic.png"
                alt="Vision Infographic"
                className="max-w-full h-auto"
              />
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

      {/* R&D 섹션 - 배경 및 제목/부제목 함께 아래에서 위로 올라오는 애니메이션 */}
      <motion.section
        className="rnd-section bg-blue-950 text-white py-20 px-4 md:px-8 rounded-t-3xl overflow-hidden"
        variants={rndSectionRiseVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // 뷰포트의 30% 보일 때 애니메이션 시작
      >
        <div className="max-w-7xl mx-auto">
          {" "}
          {/* max-w-7xl mx-auto 추가하여 너비 통일 */}
          <h2 className="text-xl font-bold mb-4 text-left">R&D</h2>
          <p className="text-3xl font-bold mb-12 text-left">
            끊임없는 연구개발과 스마트 공정 혁신을 통해
            <br />
            제조 효율의 새로운 기준을 만들어갑니다
          </p>
          {/* R&D 콘텐츠 (박스들과 이미지) - 개별 애니메이션 적용 */}
          <div className="rnd-content flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 flex flex-col items-end pr-0">
              <motion.div
                className="bg-blue-800 bg-opacity-70 rounded-lg p-6 mb-4 w-72"
                variants={rndBoxLeftInVariants}
                // initial="hidden" // 부모 섹션의 animate가 "visible"이 되면 자식들은 이 값을 상속받음
                // whileInView="visible" // 부모 섹션에서 whileInView를 사용하므로 여기서는 제거
                // viewport={{ once: true, amount: 0.3 }} // 부모 섹션에서 whileInView를 사용하므로 여기서는 제거
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

            {/* 진행도 이미지 추가 */}
            <motion.div
              className="hidden md:flex flex-col justify-center items-center h-full" // 데스크톱에서만 보이도록 hidden md:flex
              variants={processLineVariants}
              // initial="hidden" // 부모 섹션의 animate가 "visible"이 되면 자식들은 이 값을 상속받음
              // whileInView="visible" // 부모 섹션에서 whileInView를 사용하므로 여기서는 제거
              // viewport={{ once: true, amount: 0.3 }} // 부모 섹션에서 whileInView를 사용하므로 여기서는 제거
            >
              {/* process-line.png 이미지가 없으면 placeholder 사용 */}
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
