import Layout from "@/components/Layout"; // 새로운 Layout 컴포넌트 임포트
import HeroSection from "@/components/HeroSection"; // 새로운 HeroSection 컴포넌트 임포트
import BreadcrumbSection from "@/components/BreadcrumbSection"; // BreadcrumbSection 컴포넌트 임포트 (추가)
import { motion, type Transition } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function OrganizationChartPage() {
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
      <title>조직도 | 수만</title>
    </Head>
    <Layout>
      {" "}
      {/* 모든 페이지 내용을 Layout 컴포넌트로 감쌉니다. */}
      <HeroSection
        title="조직도"
        subtitle="Organization Chart"
        backgroundImage="/images/company_hero.png" // 해당 페이지에 맞는 배경 이미지 경로
      />
      {/* 서브 내비게이션 (Breadcrumb) 섹션: BreadcrumbSection 컴포넌트 사용 */}
      <BreadcrumbSection path="회사소개 > 조직도" />
      {/* 조직도 이미지 섹션 */}
      {/* main 태그는 Layout에서 이미 처리했으므로, 여기서는 div로 변경 */}
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
              src="/images/organization_suman.png" // 실제 조직도 이미지 경로로 변경하세요
              alt="SUMAN Organization Chart"
              className="max-w-full h-auto object-contain shadow-lg rounded-lg"
              width={100}
              height={100}
            />
          </motion.div>
        </div>
      </div>
    </Layout>
    </>
  );
}
