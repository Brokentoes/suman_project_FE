import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, type Transition } from "framer-motion"; // 'type Transition' 임포트 추가

export default function CeoPage() {
  // Framer Motion Variants 정의: 애니메이션 상태를 미리 정의
  // Transition 타입을 명시적으로 지정하여 타입 오류 해결

  // CEO 인사말 텍스트 컬럼 (왼쪽에서 나타나게)
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 }, // 초기 상태 (숨겨진 상태)
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    }, // 'as Transition' 추가
  };

  // CEO 인사말 이미지 컬럼 (오른쪽에서 나타나게)
  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    }, // 'as Transition' 추가
  };

  // 서명 영역 (왼쪽 아래에서 나타나게)
  const slideInLeftBottom = {
    hidden: { opacity: 0, x: -50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    }, // 'as Transition' 추가
  };

  return (
    <>
      <Header />

      {/* 1. 상단 비주얼 섹션 - 애니메이션 없음 (이미지: image_419e40.png) */}
      <section
        className="hero-section relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">SUMAN</h1>
          <p className="text-xl md:text-3xl font-medium">
            정밀한 기술이 만드는 내일의 기업 수만
          </p>
        </div>
      </section>

      {/* 2. 서브 내비게이션 (Breadcrumb) 섹션 - 애니메이션 없음 */}
      <section className="breadcrumb-section bg-blue-900 py-4 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg">회사소개 &gt; CEO 인사말</p>
        </div>
      </section>

      {/* 3. CEO 인사말 본문 섹션 */}
      <main className="content-wrapper">
        <section className="ceo-message-section bg-white py-20 px-4 md:px-8">
          <div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-x-16">
            {/* 텍스트 컬럼 (왼쪽에서 나타나게) */}
            <motion.div
              className="ceo-text-column md:w-3/5 pr-8"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-4xl font-bold text-blue-800 mb-6 leading-tight">
                SUMAN을 찾아주신 고객 여러분, 반갑습니다.
              </h3>
              <p className="text-lg text-gray-700 mb-4">안녕하십니까.</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                (주)수만기업은 정밀 가공 기술을 기반으로 자동차, 전기전자,
                이차전지 산업에 필요한 부품 및 모듈, 장비를 설계·제조하는 전문
                기업입니다. 저희는 끊임없는 기술 혁신과 철저한 품질 관리를 통해
                고객이 신뢰할 수 있는 제품을 공급해왔으며, 변화의 속도에도
                유연하고 정직한 기술력으로 지속 가능한 성장을 이어가고 있습니다.
                앞으로도 수만 기업은 고객 여러분의 성공과 함께하는 든든한
                파트너가 되겠습니다. 변함없는 관심과 성원 부탁드립니다.
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

            {/* 이미지 플레이스홀더 (오른쪽에서 나타나게) */}
            <motion.div
              className="ceo-image-column md:w-2/5 flex items-center justify-center"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                className="placeholder-image w-full h-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-2xl"
                style={{ minHeight: "400px" }}
              >
                {/* 여기에 나중에 실제 이미지가 들어갈 예정입니다. */}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
