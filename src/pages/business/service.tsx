import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { serviceContent } from "@/data/service";
import { useLangStore } from "@/stores/langStore";
import Head from "next/head";

interface SectionList {
  maintitle: string;
  mainsubtitle: string;
  production: string;
  measurement: string;
  process: string;
  processsub: string;
  production2: string;
  production2sub: string;
}


export default function ServicePage() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);
  const { lang } = useLangStore();
  const { equipmentList, measurementEquipmentList, productCategories, footerText } =
    serviceContent[lang];
  const allEquipment = [...equipmentList, ...measurementEquipmentList];
  const section: SectionList | undefined = serviceContent[lang].sectionList?.[0];

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } as Transition,
    },
  };

  const leftAlignTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const initialDisplayCount = 10;

  return (
    <>
      <Head>
        <title>기술소개 | 수만</title>
      </Head>
      <Layout>
        <HeroSection
          title="기술 소개"
          subtitle="SUMAN"
          backgroundImage="/images/business_hero.png"
        />

        <BreadcrumbSection path="사업분야 > 기술소개" />

      {/* 1. Main Equipment Section  */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-base sm:text-lg lg:text-2xl font-semibold tracking-wide mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftAlignTextVariants}
          >
            Main Equipment
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-[1.3]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftAlignTextVariants}
          >
            {section?.maintitle}
            <br />
            {section?.mainsubtitle}
          </motion.p>
        </div>
      </div>
      {/* 2. 생산가공 / 조립 & 신뢰성 (측정 / 분석) Section */}
      <div className="relative z-0 bg-[#000B24] pt-20 pb-60">
         <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/business/layer.png"
              alt="배경 이미지"
              fill
              style={{ objectFit: "cover", objectPosition:"top"}}
              priority
            />
          </div>

        <div className="max-w-7xl mx-auto ">
          <motion.div
            className={`relative transition-all duration-500 ease-in-out ${
              showAllEquipment
                ? "max-h-[5000px] overflow-visible"
                : "max-h-[530px] overflow-hidden"
            }`}
          >
            {/* 생산가공 / 조립 */}
            <motion.button
              className="text-base sm:text-lg bg-[#505050]/40 text-white rounded-full px-6 py-1 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={leftAlignTextVariants}
            >
              {section?.production}
            </motion.button>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {equipmentList.map((equipment, index) => (
                <motion.div
                  key={`prod-${index}`} // Unique key
                  className="relative bg-white/10 rounded-lg whitespace-pre-line overflow-hidden shadow-lg w-full h-50 p-2 border-2 border-gray-400/10"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="w-full h-28 relative mb-2">
                    {equipment.image && (
                      <Image
                        src={equipment.image}
                        alt={equipment.name}
                        fill
                        style={{objectFit:"cover"}}
                        className="rounded-[10px]"
                      />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#434343]/30 text-center py-2 flex items-center justify-center border border-gray-500/10 ">
                    <p className="text-base font-medium text-white text-center">
                      {equipment.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 신뢰성 (측정 / 분석) 섹션 */}
            <button className="text-base sm:text-lg bg-[#505050]/40 text-white rounded-full px-6 py-1 mb-16 mt-28">
              {section?.measurement}
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {" "}
              {measurementEquipmentList.map((equipment, index) => (
                <motion.div
                  key={`meas-${index}`} 
                  className="relative bg-white/10 rounded-lg whitespace-pre-line overflow-hidden shadow-lg w-full h-50 p-2 border-2 border-gray-400/10"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  
                  <div className="w-full h-28 relative mb-2">
                    {equipment.image && (
                    <Image
                      src={equipment.image}
                      alt={equipment.name}
                      fill
                      className="object-cover rounded-[10px]"
                    />
                  )}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[#434343]/30 text-center py-2 flex items-center justify-center border border-gray-500/10 ">
                    <p className="text-base font-medium text-white text-center">
                      {equipment.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {allEquipment.length > initialDisplayCount && (
            <div className="mt-10 mb-10 text-right">
              <button
                onClick={() => setShowAllEquipment(!showAllEquipment)}
                className="text-lg text-gray-200 hover:text-white font-md cursor-pointer"
              >
                {showAllEquipment ? "간략히 보기" : "전체 설비 보기"} →
              </button>
            </div>
          )}
          </div>
        </div>

      {/* 3. Process Section */}
      <motion.div
        className="bg-white py-20 px-4 md:px-8 text-black rounded-[60px] mt-[-220px] relative z-10 pb-[250px]"
        initial={{ y: 300, opacity: 1 }} // y값을 더 크게 설정하여 화면 밖에서 시작, opacity는 1로 유지
        whileInView={{ y: 0, transition: { duration: 0.8, ease: "easeOut" } }} // 원래 위치로 이동, opacity는 유지
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-base sm:text-lg lg:text-2xl font-semibold tracking-wide mt-10 mb-10">Process</h2>
          <p className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-[1.3]">
            {section?.process}
            <br />
            {section?.processsub}
          </p>

          <div className="mt-16 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full mt-14">
              {/* 1단계: 컨셉 및 개발 / 가공설계*/}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src="/images/service_design.png"
                    alt="컨셉 및 개발 / 가공설계"
                    fill
                    className="object-contain"
                  />

                </div>
                <p className="text-lg font-semibold">컨셉 및 개발 / 가공설계</p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-4xl text-gray-400">→</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_order.png"
                      alt="발주 (소재/부품)"
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">
                    발주
                    <br />
                    (소재/부품)
                  </p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-4xl text-gray-400">→</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_product.png"
                      alt="가공/제작"
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">가공/제작</p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-4xl text-gray-400">→</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_test.png"
                      alt="최종검사"
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">최종검사</p>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-4xl text-gray-400">→</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 relative mb-4">
                    <Image
                      src="/images/service_deliver.png"
                      alt="납품 및 피드백"
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <p className="text-lg font-semibold">납품 및 피드백</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      {/* 4. Products Section - Process 섹션 위에 겹쳐지도록 설정 */}
      <motion.div
        className="relative z-20 bg-[#000B24] pt-20 pb-35 px-4 md:px-8 rounded-t-[60px] mt-[-100px] overflow-hidden"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* 배경 이미지 */}
        <div 
          className="absolute inset-0 pointer-events-none flex bg-no-repeat bg-top bg-contain"
          style={{backgroundImage:"url('/images/business/Group 124.png')"}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {" "}
          {/* This div needs to remain to center the content within the full-width section */}
          <h2 className="text-white text-base sm:text-lg lg:text-2xl font-semibold tracking-wide mb-10">Products</h2>
          <p className="text-white text-xl md:text-2xl lg:text-4xl font-bold tracking-wide leading-[1.3] mb-12">
            {section?.production2}
            <br />
            {section?.production2sub}
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            variants={{
              visible: {
                transition: {staggerChildren: 0.1},
              },
            }}
          >
            {productCategories.map((product, index) => (
              <motion.div
                key={index}
                className="bg-[#7E7E7E]/25 rounded-[30px] overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out group mt-15 hover:bg-white"
                variants={itemVariants}
              >
                <div className="relative w-full h-44 mx-auto mt-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  {product.label && (
                    <span className="tracking-wide font-light text-[#CACACA] text-base transition-colors duration-300 group-hover:text-gray-700">
                      {product.label}
                    </span>
                  )}
                  <h3 className="tracking-wide text-2xl font-semibold text-white mb-1 mt-5 transition-colors duration-300 group-hover:text-black">
                    {product.name}
                  </h3>
                  <p className="tracking-wide font-light text-[#CACACA] text-sm mb-7 transition-colors duration-300 group-hover:text-gray-700">
                    {product.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="text-[#B2B2B2] font-light text-sm md:text-base mt-7 text-right tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            {footerText}          
          </motion.p>
        </div>{" "}
      </motion.div>
    </Layout>

    </>
  );
}