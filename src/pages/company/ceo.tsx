import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, type Transition } from "framer-motion";
import BreadcrumbSection from "@/components/BreadcrumbSection"; // BreadcrumbSection 컴포넌트 임포트
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Head from "next/head";

export default function CeoPage() {
  function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        setVisible(window.scrollY > 200);
      };

      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-30 right-6 z-50 bg-[#0c1221] text-white p-3 rounded shadow-md hover:opacity-90 transition-opacity"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )
    );
  }
  
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
    <Head>
      <title>CEO인사말 | 수만</title>
    </Head>
    
      <Header />

      {/* 히어로 섹션 (재사용) - "CEO 인사말" 제목 */}
      <section
        className="hero-section relative bg-cover bg-center h-[300px] flex items-center text-white"
        style={{
          backgroundImage: 'url("/images/company_hero.png")', // You might want a different hero image for CEO
          backgroundPosition: "center top",
        }}
      >
        
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 w-full flex items-center justify-start px-4 md:px-8">
          <div className="text-left">
            <p className="uppercase text-sm md:text-base font-semibold tracking-wider mb-2 text-white/90 ml-[25px]">
            SUMAN
            </p>
            <h1 className="text-3xl md:text-5xl font-normal leading-tight text-white">
              정밀한 기술이 만드는<br />
              내일의 기업 <span className="text-white font-semibold">수만</span>
            </h1>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              <span>
                <span className="text-blue-600 font-bold">SUMAN</span>
                <span className="text-black font-bold">을</span>
              </span>
              <br />
              <span className="text-black font-bold">
                찾아주신 고객 여러분, 반갑습니다.
              </span>
            </h2>
            <p className="mb-4 text-lg">
              안녕하십니까.
            </p>
            <p className="mb-4">
              (주)수만 기업은 정밀 가공 기술을 기반으로 자동차, 전기전자, 이차전지 산업에<br />
              필요한 부품과 모듈, 장비를 설계, 제조하는 전문 기업입니다.<br />
              저희는 끊임없는 기술 혁신과 철저한 품질 관리를 통해 고객이 신뢰할 수 있는<br />
              제품을 공급해왔으며, 산업의 변화 속에서도 유연하고 정직한 기술력으로<br />
              지속 가능한 성장을 이어가고 있습니다.<br />
              앞으로도 수만 기업은 고객여러분의 성공과 함께하는 든든한 파트너가 되겠습니다.<br />
              변함없는 관심과 성원 부탁드립니다.
            </p>
            <p className="mb-4">
              감사합니다.
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

      <ScrollToTopButton />

      <Footer />
    </>
  );
}
