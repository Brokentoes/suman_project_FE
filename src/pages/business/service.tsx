import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ServicePage() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } as Transition,
    },
  };

  const sectionTitleVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" } as Transition,
    },
  };

  const leftAlignTextVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  interface EquipmentItem {
    name: string;
    image: string;
  }

  const productionAndAssemblyEquipment: EquipmentItem[] = [
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

  const reliabilityEquipment: EquipmentItem[] = [
    { name: "85호기 (측정)", image: "/images/85_machine.png" },
    {
      name: "조각기 (측정)",
      image: "/images/engraving_machine.png",
    },
    { name: "MCT (측정)", image: "/images/mct.png" },
  ];

  const allEquipmentList: EquipmentItem[] = [
    ...productionAndAssemblyEquipment,
    ...reliabilityEquipment,
  ];

  interface ProductCategoryItem {
    name: string;
    subtitle: string;
    image: string;
  }

  const productCategories: ProductCategoryItem[] = [
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

  const initialEquipmentCount = 10;

  return (
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
            variants={sectionTitleVariants}
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

      {/* 2. 생산가공 / 조립 및 신뢰성 섹션 통합 */}
      <div className="bg-gray-800 pt-20 pb-[250px] relative z-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h3 className="text-2xl font-semibold text-white mb-8">
            생산가공 / 조립
          </h3>
          <motion.div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-500 ease-in-out ${
              showAllEquipment
                ? "max-h-[5000px] overflow-visible"
                : "max-h-[400px] overflow-hidden"
            }`}
          >
            {productionAndAssemblyEquipment
              .slice(
                0,
                showAllEquipment
                  ? productionAndAssemblyEquipment.length
                  : initialEquipmentCount
              )
              .map((equipment, index) => (
                <motion.div
                  key={`prod-${index}`}
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

            {showAllEquipment && (
              <>
                <h3 className="text-2xl font-semibold text-white mt-12 mb-8 col-span-full">
                  신뢰성 (측정 / 분석)
                </h3>
                {reliabilityEquipment.map((equipment, index) => (
                  <motion.div
                    key={`meas-${index}`}
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-4"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    {equipment.image && (
                      <div className="w-full h-24 relative mb-2">
                        {" "}
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
              </>
            )}
          </motion.div>
          {allEquipmentList.length > initialEquipmentCount && (
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
        className="bg-white py-20 px-4 md:px-8 text-black rounded-t-xl mt-[-150px] relative z-10 pb-[250px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInVariants}
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
        className="py-20 px-4 md:px-8 text-white rounded-t-xl mt-[-150px] relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInVariants}
        style={{
          // 기존 푸른색 배경을 Tailwind CSS의 bg-gray-800 대신 rgba 값으로 직접 지정
          backgroundColor: "rgba(31, 41, 55, 1)",
          // 그 위에 이미지를 추가. 'repeat' 속성을 사용하여 패턴처럼 반복 가능
          backgroundImage: 'url("/images/service_product_bg.png")', // <--- 여기에 원하는 이미지 경로를 넣어주세요 (예: 작은 패턴, 노이즈 질감 등)
          backgroundSize: "auto", // 'cover', 'contain', 'auto', '100% 100%' 등 원하는 크기 조절 방식 선택
          backgroundRepeat: "repeat", // 'no-repeat', 'repeat-x', 'repeat-y' 등 원하는 반복 방식 선택
          backgroundPosition: "center", // 이미지 위치 조정
          // backgroundBlendMode: 'overlay', // (선택 사항) 배경색과 이미지 블렌딩 모드
          // opacity: 0.8, // (선택 사항) 섹션 전체의 투명도 조절
        }}
      >
        {/* 기존의 반투명 오버레이를 유지하여 텍스트 가독성 확보 */}
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        {/* 콘텐츠는 오버레이 위에 오도록 z-index 설정 */}
        <div className="max-w-7xl mx-auto relative z-10">
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
                className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out group"
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
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-black transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {product.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
