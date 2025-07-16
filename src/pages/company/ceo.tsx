import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, type Transition } from "framer-motion";
import BreadcrumbSection from "@/components/BreadcrumbSection"; // BreadcrumbSection 컴포넌트 임포트

export default function CeoPage() {
  // Framer Motion Variants 정의는 그대로 유지
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const slideInLeftBottom = {
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  return (
    <>
      <Header />

      {/* 히어로 섹션 (재사용) - "CEO 인사말" 제목 */}
      <section
        className="hero-section relative bg-cover bg-center h-[300px] flex items-center text-white"
        style={{
          backgroundImage: 'url("/images/history-hero-bg.png")', // You might want a different hero image for CEO
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">CEO 인사말</h1>
          <p className="text-lg md:text-xl font-medium">Greetings from CEO</p>
        </div>
      </section>

      {/* 서브 내비게이션 (Breadcrumb) 섹션 (재사용) - BreadcrumbSection 컴포넌트 사용 */}
      <BreadcrumbSection path="회사소개 > CEO 인사말" />

      {/* CEO 인사말 섹션 */}
      <main className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12">
          {/* 텍스트 컬럼 */}
          <motion.div
            className="ceo-text-column md:w-3/5 text-gray-700 leading-relaxed"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              미래를 선도하는 기술, <br />
              변화와 혁신으로 함께 나아갑니다.
            </h2>
            <p className="mb-4 text-lg">
              안녕하십니까? (주)수만 그룹 대표이사 임태형입니다.
            </p>
            <p className="mb-4">
              저희 (주)수만 그룹은 창립 이래 끊임없는 **도전과 혁신**을 통해
              미래 산업을 선도하는 기업으로 성장해 왔습니다. 급변하는 시장 환경
              속에서도 고객 여러분의 기대를 뛰어넘는 **최고의 기술과 서비스**를
              제공하기 위해 모든 임직원이 한마음 한뜻으로 노력하고 있습니다.
            </p>
            <p className="mb-4">
              **품질, 신뢰, 그리고 지속 가능한 성장**은 저희 (주)수만 그룹의
              핵심 가치입니다. 우리는 첨단 기술 개발과 끊임없는 연구 투자를 통해
              산업의 새로운 지평을 열고, 사회에 긍정적인 영향을 미치는 기업이
              되고자 합니다.
            </p>
            <p className="mb-4">
              앞으로도 고객 여러분의 목소리에 귀 기울이고, 급변하는 시대의
              요구에 부응하며, 더 나은 미래를 함께 만들어가는 **동반자**로서
              최선을 다하겠습니다. 저희의 기술과 열정이 고객 여러분의 성공과
              함께하는 든든한 파트너가 되겠습니다. 변함없는 관심과 성원
              부탁드립니다. 감사합니다.
            </p>
            {/* 서명 영역 (왼쪽 아래에서 나타나게) */}
            <motion.p
              className="signature-area text-lg font-semibold text-gray-800 mt-8"
              variants={slideInLeftBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              (주) 수만 그룹 대표이사 임태형{" "}
              <img
                src="/images/signature.png"
                alt="임태형 대표이사 서명"
                className="w-40 h-auto inline-block align-middle ml-2"
              />
            </motion.p>
          </motion.div>

          {/* 이미지 플레이스홀더 */}
          <motion.div
            className="ceo-image-column md:w-2/5 flex items-center justify-center"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="placeholder-image w-full h-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-2xl"
              style={{
                minHeight: "400px",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {/* 실제 CEO 이미지로 교체하세요 */}
              <img
                src="/images/image_419e40.png" // 실제 CEO 이미지 경로로 변경하세요
                alt="SUMAN CEO"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
