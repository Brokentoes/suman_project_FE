import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection"; // Added import
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { Herotext, traits as traitData } from "@/data/philosophy";
import { useLangStore } from "@/stores/langStore";
import { useState } from "react";

// TalentCard 컴포넌트
function TalentCard({
  traitData,
  bgImage,
}: {
  traitData: { title: string; desc: string };
  bgImage: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex flex-col justify-end min-h-[450px] rounded-2xl overflow-hidden shadow-xl group"
    >
      {/* 배경 이미지 */}
      <Image
        src={bgImage}
        alt={traitData.title}
        fill
        className="object-cover object-center absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-105 brightness-110 contrast-110"
      />

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

      {/* 텍스트 내용 */}
      <div className="relative z-20 p-6 text-white">
        <h3 className="text-3xl font-bold mb-2 whitespace-pre-line drop-shadow-md">
          {traitData.title}
        </h3>
        <p className="text-base whitespace-pre-line leading-relaxed text-white/90 drop-shadow-sm">
          {traitData.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function TalentPage() {
  const lang = useLangStore((state) => state.lang);
  const currentText = Herotext[lang];
  const traits = traitData[lang];

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        backgroundImage="/images/careers_hero.png"
      />

      {/* Replaced the manual breadcrumb section with BreadcrumbSection component */}
      <BreadcrumbSection path="인재 채용 > 인재상" />

      <div className="content-wrapper py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-6xl w-full mx-auto px-8 py-12 bg-gradient-to-r from-white via-blue-100/20 to-white backdrop-blur-md rounded-3xl border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 drop-shadow">
                {currentText.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 drop-shadow-sm max-w-3xl mx-auto">
                {currentText.desc}
              </p>
            </motion.div>
          </motion.div>

          {/* 카드 그리드 */}
          <motion.div
            className="grid grid-cols-12 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            {/* 위 3개 카드 */}
            {traits.slice(0, 3).map((trait) => (
              <motion.div
                key={trait.key}
                className="col-span-12 md:col-span-4"
                variants={itemRiseVariants}
              >
                <TalentCard
                  traitData={{ title: trait.title, desc: trait.desc }}
                  bgImage={trait.bgImage}
                />
              </motion.div>
            ))}

            {/* 아래 2개 카드 (중앙 정렬 교차 배치) */}
            <motion.div
              className="col-span-12 md:col-start-3 md:col-span-4"
              variants={itemRiseVariants}
            >
              <TalentCard
                traitData={{ title: traits[3].title, desc: traits[3].desc }}
                bgImage={traits[3].bgImage}
              />
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-4"
              variants={itemRiseVariants}
            >
              <TalentCard
                traitData={{ title: traits[4].title, desc: traits[4].desc }}
                bgImage={traits[4].bgImage}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
  );
}
