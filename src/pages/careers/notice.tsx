// ci.tsx
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection"; // BreadcrumbSection 컴포넌트 임포트
import { motion, type Transition } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function CIPage() {
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
        <title>채용공고 | 수만</title>
      </Head>
      <Layout>
        <HeroSection
          title="CI"
          subtitle="Corporate Identity"
          backgroundImage="/images/company_hero.png"
        />

        {/* BreadcrumbSection 컴포넌트 사용 */}
        <BreadcrumbSection path="회사소개 > CI" />

        <div className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              className="flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <Image
                src="/images/ci-full-content.png"
                alt="SUMAN Corporate Identity"
                className="max-w-full h-auto object-contain shadow-lg rounded-lg"
                width={100}
                height={100}
              />
              <p className="mt-8 text-lg text-gray-700 text-center">
                수만(SUMAN)의 CI는 기업의 핵심 가치인 신뢰, 기술, 경쟁력을
                시각적으로 표현합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}
