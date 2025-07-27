import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ServicePage() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);

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

  const equipmentList = [
    { name: "85호기", image: "/images/85_machine.png" },
    { name: "조각기", image: "/images/engraving_machine.png" },
    { name: "MCT", image: "/images/mct.png" },
    { name: "레이저마킹기", image: "/images/service_machine.png" },
    { name: "자동포장기", image: "/images/service_machine.png" },
    { name: "CNC 가공기", image: "/images/service_machine.png" },
    { name: "CNC ROUTER", image: "/images/service_machine.png" },
    {
      name: "3D PRINT 대면적 3D PRINT",
      image: "/images/service_machine.png",
    },
    {
      name: "CO2 LAZER CUTTER",
      image: "/images/service_machine.png",
    },
    {
      name: "DIGITAL FLAT CUTTER",
      image: "/images/service_machine.png",
    },
    { name: "CNC 가공기", image: "/images/service_machine.png" },
    { name: "CNC ROUTER", image: "/images/service_machine.png" },
  ];

  const measurementEquipmentList = [
    { name: "3차원 측정기", image: "/images/85_machine.png" }, // Changed name
    {
      name: "2.5D 측정기", // Changed name
      image: "/images/engraving_machine.png",
    },
    { name: "현미경", image: "/images/mct.png" }, // Changed name
  ];

  // Combine both lists for easier management of "show all" logic
  const allEquipment = [...equipmentList, ...measurementEquipmentList];

  const productCategories = [
    {
      name: "이차전지",
      subtitle: "정밀 부품 / 모듈 설계",
      image: "/images/service_battery.png",
    },
    {
      name: "전기전자",
      subtitle: "정밀 부품 / 모듈 설계기술",
      image: "/images/service_electric.png",
    },
    {
      name: "반도체",
      subtitle: "정밀 부품 / 모듈 설계 / 자동화 기술 통합",
      image: "/images/service_semiconductor.png",
    },
    {
      name: "자동차",
      subtitle: "정밀 가공 기술",
      image: "/images/service_mobility.png",
    },
  ];

  // 초기에 보여줄 설비 아이템 개수 (5열 2행)
  const initialDisplayCount = 10; // This will now apply to the combined list

  return (
    <>
    <head>
        <title>기술소개 | 수만</title>
    </head>
    <Layout>
      <HeroSection
        title="기술 소개"
        subtitle="SUMAN"
        backgroundImage="/images/business_hero.png"
      />

      <BreadcrumbSection path="사업분야 > 기술소개" />

      {/* 1. Main Equipment Section  */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.h2
            className="text-4xl font-bold mb-4 text-gray-800 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftAlignTextVariants}
          >
            Main Equipment
          </motion.h2>
          <motion.p
            className="text-xl text-left text-gray-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftAlignTextVariants}
          >
            최적의 생산 환경을 위한
            <br />
            다양한 설비를 갖추고 있습니다
          </motion.p>
        </div>
      </div>

      {/* 2. 생산가공 / 조립 & 신뢰성 (측정 / 분석) Section */}
      <div className="bg-gray-800 pt-20 pb-[250px] relative z-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className={`transition-all duration-500 ease-in-out ${
              showAllEquipment
                ? "max-h-[5000px] overflow-visible"
                : "max-h-[400px] overflow-hidden"
            }`}
          >
            {/* 생산가공 / 조립 */}
            <h3 className="text-2xl font-semibold text-white mb-8">
              생산가공 / 조립
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {equipmentList.map((equipment, index) => (
                <motion.div
                  key={`prod-${index}`} // Unique key
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {equipment.image && (
                    <div className="w-full h-24 relative mb-2">
                      <Image
                        src={equipment.image}
                        alt={equipment.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                    </div>
                  )}
                  <p className="text-md font-medium text-white text-center">
                    {equipment.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* 신뢰성 (측정 / 분석) 섹션 */}
            <h3 className="text-2xl font-semibold text-white mt-12 mb-8">
              신뢰성 (측정 / 분석)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {" "}
              {/* Changed to lg:grid-cols-5 for consistency */}
              {measurementEquipmentList.map((equipment, index) => (
                <motion.div
                  key={`meas-${index}`} // Unique key
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {equipment.image && (
                    <div className="w-full h-24 relative mb-2">
                      {" "}
                      {/* Changed to h-24 for consistency */}
                      <Image
                        src={equipment.image}
                        alt={equipment.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                    </div>
                  )}
                  <p className="text-md font-medium text-white text-center">
                    {equipment.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {allEquipment.length > initialDisplayCount && (
            <div className="mt-8 text-right">
              <button
                onClick={() => setShowAllEquipment(!showAllEquipment)}
                className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
              >
                {showAllEquipment ? "간략히 보기" : "전체 설비 보기"} →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. Process Section */}
      <motion.div
        className="bg-white py-20 px-4 md:px-8 text-black rounded-t-xl mt-[-200px] relative z-10 pb-[250px]"
        initial={{ y: 300, opacity: 1 }} // y값을 더 크게 설정하여 화면 밖에서 시작, opacity는 1로 유지
        whileInView={{ y: 0, transition: { duration: 0.8, ease: "easeOut" } }} // 원래 위치로 이동, opacity는 유지
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Process</h2>
          <p className="text-lg mb-8 leading-relaxed">
            제조 및 품질 프로세스는 자재 선정부터 최종 검사까지
            <br />
            제품의 신뢰성과 고객 만족을 보장하도록 설계되어 있습니다
          </p>

          <div className="mt-16 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
              {/* 1단계: 컨셉 및 개발 / 가공설계*/}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src="/images/service_design.png"
                    alt="컨셉 및 개발 / 가공설계"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-lg font-semibold">컨셉 및 개발 / 가공설계</p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <span className="text-4xl text-gray-400">→</span>
              </div>

              {/* 2단계: 발주 (소재/부품)*/}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src="/images/service_order.png"
                    alt="발주 (소재/부품)"
                    layout="fill"
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

              {/* 3단계: 가공/제작*/}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src="/images/service_product.png"
                    alt="가공/제작"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-lg font-semibold">가공/제작</p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <span className="text-4xl text-gray-400">→</span>
              </div>

              {/* 4단계: 최종검사*/}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src="/images/service_test.png"
                    alt="최종검사"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <p className="text-lg font-semibold">최종검사</p>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <span className="text-4xl text-gray-400">→</span>
              </div>

              {/* 5단계: 납품 및 피드백*/}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 relative mb-4">
                  <Image
                    src="/images/service_deliver.png"
                    alt="납품 및 피드백"
                    layout="fill"
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
        className="bg-gray-800 py-20 px-4 md:px-8 text-white rounded-t-xl mt-[-200px] relative z-20 overflow-hidden" // overflow-hidden 추가
        initial={{ y: 200, opacity: 0 }} // Product 섹션은 Process 섹션 위에 겹치므로 Process 섹션과 같은 높이로 시작
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* 배경 이미지와 오버레이를 위한 div 추가 */}
        <div
          className="absolute inset-0" // 부모 motion.div에 대한 절대 위치 설정
          style={{
            backgroundImage: `url('/images/service_product_bg.png')`, // 배경 이미지 경로
            backgroundSize: "cover", // 이미지가 요소를 꽉 채우도록 설정
            backgroundPosition: "center", // 이미지를 가운데 정렬
            backgroundRepeat: "no-repeat", // 이미지가 반복되지 않도록 설정
          }}
        >
          {/* 어둡게 할 오버레이 div 추가 */}
          <div className="absolute inset-0 bg-gray-800 opacity-90"></div>{" "}
          {/* 검은색 반투명 오버레이 */}
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {" "}
          {/* This div needs to remain to center the content within the full-width section */}
          <h2 className="text-4xl font-bold mb-4">Products</h2>
          <p className="text-lg mb-12 leading-relaxed">
            정밀 부품, 모듈, 자동화 장비까지
            <br />
            미래 산업에 필요한 핵심 솔루션을 제조합니다
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {productCategories.map((product, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out group" /* Added 'group' class */
                variants={itemVariants}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 transition-colors duration-300 group-hover:bg-white">
                  {" "}
                  {/* Added hover:bg-white */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-black transition-colors duration-300">
                    {" "}
                    {/* Added group-hover:text-black */}
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {" "}
                    {/* Changed group-hover:text-gray-700 for better contrast */}
                    {product.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>{" "}
        {/* closing the max-w-7xl mx-auto div for centering content */}
      </motion.div>
    </Layout>
    </>
  );
}
