import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";

export default function TalentPage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 자식 요소들이 0.2초 간격으로 나타남
        delayChildren: 0.3, // 컨테이너 애니메이션 후 0.3초 뒤 자식 애니메이션 시작
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

  return (
    <Layout>
      <HeroSection
        title="인재상"
        subtitle="Our Talent"
        backgroundImage="/images/talent-hero-bg.jpg" // 적절한 배경 이미지로 변경
      />

      {/* 서브 내비게이션 (Breadcrumb) 섹션 */}
      <section className="breadcrumb-section bg-gray-700 py-4 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-md">회사소개 &gt; 인재상</p>
        </div>
      </section>

      {/* 인재상 본문 섹션 */}
      <div className="content-wrapper py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              (주)수만그룹은 이런 인재를 찾습니다.
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              도전과 혁신을 통해 끊임없이 성장하며, <br />
              고객과 사회에 기여하는 열정적인 인재를 기다립니다.
            </p>
          </motion.div>

          {/* 인재상 카드 섹션 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            {/* Talent Card 1: 도전하는 인재 (Challenging Talent) */}
            <motion.div
              className="flex flex-col items-center p-8 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemRiseVariants}
            >
              <div className="bg-blue-600 p-4 rounded-full mb-6 text-white text-3xl">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 4h6m-3 0V4m0 0l3 3m-3-3L9 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                도전하는 인재
              </h3>
              <p className="text-gray-600 text-center">
                새로운 가능성을 탐구하고 <br />
                변화를 두려워하지 않으며 <br />
                끊임없이 목표에 도전합니다.
              </p>
            </motion.div>

            {/* Talent Card 2: 혁신하는 인재 (Innovative Talent) */}
            <motion.div
              className="flex flex-col items-center p-8 bg-green-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemRiseVariants}
            >
              <div className="bg-green-600 p-4 rounded-full mb-6 text-white text-3xl">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.25 5.25 0 001.06 4.943l14.288-14.288A5.25 5.25 0 0019 3l-9 3m0 0l-3 1m3-1l.716-.358m1.427-.714a.75.75 0 00-.714-.714L10 6m.714.714l1.428-1.428M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                혁신하는 인재
              </h3>
              <p className="text-gray-600 text-center">
                창의적인 사고와 유연한 자세로 <br />
                새로운 가치를 창출하고 <br />
                기술 발전을 이끌어갑니다.
              </p>
            </motion.div>

            {/* Talent Card 3: 협력하는 인재 (Collaborative Talent) */}
            <motion.div
              className="flex flex-col items-center p-8 bg-purple-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemRiseVariants}
            >
              <div className="bg-purple-600 p-4 rounded-full mb-6 text-white text-3xl">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2M7 20v-2a3 3 0 013-3h4a3 3 0 013 3v2M9 9h6m-3 0v6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                협력하는 인재
              </h3>
              <p className="text-gray-600 text-center">
                열린 마음으로 소통하고 <br />
                다양성을 존중하며 <br />
                함께 시너지를 창출합니다.
              </p>
            </motion.div>
          </motion.div>

          {/* 인재상 이미지 (예시) */}
          <motion.div
            className="flex justify-center items-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <Image
              src="/images/talent-group.png" // 실제 팀 이미지 또는 인재상 관련 이미지 경로로 변경
              alt="SUMAN Team"
              width={800}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
