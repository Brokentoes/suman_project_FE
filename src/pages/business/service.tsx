import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ServicePage() {
  const [showAllEquipment, setShowAllEquipment] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } as Transition,
    },
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" } as Transition,
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
    { name: "85호기", image: "/images/equipment/85-machine.jpg" },
    { name: "조각기", image: "/images/equipment/engraving-machine.jpg" },
    { name: "MCT", image: "/images/equipment/mct.jpg" },
    { name: "레이저마킹기", image: "/images/equipment/laser-marking.jpg" },
    { name: "자동포장기", image: "/images/equipment/auto-packaging.jpg" },
    { name: "CNC 가공기", image: "/images/equipment/cnc-machine.jpg" },
    { name: "CNC ROUTER", image: "/images/equipment/cnc-router.jpg" },
    {
      name: "3D PRINT 대면적 3D PRINT",
      image: "/images/equipment/3d-print.jpg",
    },
    {
      name: "CO2 LAZER CUTTER",
      image: "/images/equipment/co2-laser-cutter.jpg",
    },
    {
      name: "DIGITAL FLAT CUTTER",
      image: "/images/equipment/digital-flat-cutter.jpg",
    },
    { name: "CNC 가공기", image: "/images/equipment/cnc-machine-2.jpg" },
    { name: "CNC ROUTER", image: "/images/equipment/cnc-router-2.jpg" },
  ];

  const measurementEquipmentList = [
    { name: "BS호기", image: "/images/equipment/bs-machine-measurement.jpg" },
    {
      name: "조각기",
      image: "/images/equipment/engraving-machine-measurement.jpg",
    },
    { name: "MCT", image: "/images/equipment/mct-measurement.jpg" },
  ];

  const productCategories = [
    {
      name: "이차전지",
      subtitle: "정밀 부품 / 모듈 설계",
      image: "/images/products/secondary-battery.jpg",
    },
    {
      name: "전기전자",
      subtitle: "정밀 부품 / 모듈 설계기술",
      image: "/images/products/electrical-electronics.jpg",
    },
    {
      name: "반도체",
      subtitle: "정밀 부품 / 모듈 설계 / 자동화 기술 통합",
      image: "/images/products/semiconductor.jpg",
    },
    {
      name: "자동차",
      subtitle: "정밀 가공 기술",
      image: "/images/products/automotive.jpg",
    },
  ];

  // 초기에 보여줄 설비 아이템 개수 (5열 2행)
  const initialEquipmentCount = 10; // lg:grid-cols-5 기준 2줄 = 10개

  return (
    <Layout>
      <HeroSection
        title="기술 소개"
        subtitle="SUMAN"
        backgroundImage="/images/history-hero-bg.png"
      />

      <BreadcrumbSection path="사업분야 > 기술소개" />

      {/* Main Equipment Section */}
      <div className="bg-gray-100 py-20">
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
            className="text-xl text-left text-gray-600 mb-16"
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
        <div className="bg-gray-800 rounded-lg shadow-xl py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h3 className="text-2xl font-semibold text-white mb-8">
              생산가공 / 조립
            </h3>
            {/* 🎯 부모 motion.div에서 initial, whileInView, variants 제거 */}
            <motion.div
              className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 transition-all duration-500 ease-in-out ${
                showAllEquipment
                  ? "max-h-[5000px] overflow-visible" // '전체 설비 보기' 시, 충분히 큰 높이로 확장
                  : "max-h-[300px] overflow-hidden" // 초기에는 2줄 정도를 담을 수 있는 높이로 제한 (이 값은 실제 아이템 높이에 따라 조절 필요)
              }`}
            >
              {equipmentList
                .slice(
                  0,
                  showAllEquipment
                    ? equipmentList.length
                    : initialEquipmentCount
                )
                .map((equipment, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-4"
                    variants={itemVariants} // 개별 아이템의 애니메이션은 유지
                    initial="hidden" // 개별 아이템은 뷰포트 진입 시 애니메이션 되도록 유지
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
            </motion.div>
            {equipmentList.length > initialEquipmentCount && (
              <div className="mt-8 text-right">
                <button
                  onClick={() => setShowAllEquipment(!showAllEquipment)}
                  className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                >
                  {showAllEquipment ? "간략히 보기" : "전체 설비 보기"} →
                </button>
              </div>
            )}

            {/* 신뢰성 (측정 / 분석) 섹션 */}
            <h3 className="text-2xl font-semibold text-white mt-12 mb-8">
              신뢰성 (측정 / 분석)
            </h3>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
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
              {measurementEquipmentList.map((equipment, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center p-4"
                  variants={itemVariants}
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-red-700 py-20 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionTitleVariants}
          >
            Process
          </motion.h2>
          <motion.p
            className="text-lg mb-8 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            제조 및 품질 프로세스는 자재 선정부터 최종 검사까지
            <br />
            제품의 신뢰성과 고객 만족을 보장하도록 설계되어 있습니다
          </motion.p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionTitleVariants}
          >
            Products
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-12 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            정밀 부품, 모듈, 자동화 장비까지
            <br />
            미래 산업에 필요한 핵심 솔루션을 제조합니다
          </motion.p>

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
                className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
