import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, type Transition } from "framer-motion";

export default function CIPage() {
  // Framer Motion variants for section animations
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
      <Header />

      {/* 히어로 섹션 (재사용) - "CI" 제목 */}
      <section
        className="hero-section relative bg-cover bg-center h-[300px] flex items-center text-white"
        style={{
          backgroundImage: 'url("/images/history-hero-bg.png")', // You might want a different hero image for CI
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">CI</h1>
          <p className="text-lg md:text-xl font-medium">Corporate Identity</p>
        </div>
      </section>

      {/* 서브 내비게이션 (Breadcrumb) 섹션 (재사용) */}
      <section className="breadcrumb-section bg-gray-700 py-4 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-md">회사소개 &gt; CI</p>
        </div>
      </section>

      {/* CI 이미지 섹션 - Entire CI content as one image */}
      <main className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            {/* CI 이미지 전체를 넣을 곳 */}
            {/* 실제 CI 이미지 경로로 변경해주세요. (예: /images/ci-full-content.png) */}
            <img
              src="/images/ci-full-content.png" // Replace with your actual full CI content image path
              alt="SUMAN Corporate Identity"
              className="max-w-full h-auto object-contain shadow-lg rounded-lg" // Added styling for image display
            />
            {/* 이미지 아래에 필요하다면 캡션이나 추가 설명 */}
            <p className="mt-8 text-lg text-gray-700 text-center">
              수만(SUMAN)의 CI는 기업의 핵심 가치인 신뢰, 기술, 경쟁력을
              시각적으로 표현합니다.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
