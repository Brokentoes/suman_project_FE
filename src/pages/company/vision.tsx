import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useLangStore } from "@/stores/langStore";
import {
  visionHeroText,
  visionMainText,
  visionCoreValue,
  visionRndText,
} from "@/data/vision";

export default function VisionPage() {
  const { lang } = useLangStore();
  const hero = visionHeroText[lang];
  const main = visionMainText[lang];
  const core = visionCoreValue[lang];
  const rnd = visionRndText[lang];

  const fadeInRiseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" } as Transition,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const rndSectionRiseVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        when: "beforeChildren",
      } as Transition,
    },
  };

  const rndBoxLeftInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
      } as Transition,
    },
  };

  const rndBoxRightInVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
      } as Transition,
    },
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <>
      <Head>
        <title>{hero.title} | 수만</title>
      </Head>
      <Layout>
        <HeroSection
          title={hero.title}
          subtitle={hero.subtitle}
          backgroundImage="/images/sub_banner/company_banner.png"
        />

        <BreadcrumbSection path="회사소개 > 기업 비전" />

        {/* Vision Main */}
        <motion.section
          className="bg-white py-20 px-4 md:px-8"
          variants={fadeInRiseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800">Vision</h2>
            <div className="mt-12">
              <p className="text-gray-800 font-semibold text-[30px] mb-2">
                {main.topLabel}
              </p>
              <h3 className="text-4xl font-bold text-blue-600 text-[50px] leading-tight">
                {main.blueTitle}
              </h3>
              <h3 className="text-4xl font-bold text-gray-800 text-[50px] leading-tight">
                {main.blackTitle}
              </h3>
            </div>
          </div>
        </motion.section>

        {/* Core Value */}
        <section className="bg-white px-4 md:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {core.sectionTitle}
            </h2>
            <p className="text-[50px] font-bold text-gray-800 mb-12 whitespace-pre-line">
              {core.sectionDesc}
            </p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {core.cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col justify-end p-4 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 ease-out min-h-[380px]"
                  variants={itemRiseVariants}
                  style={{
                    backgroundImage: `url(/images/vision_${index === 0 ? "Flex" : index === 1 ? "pro" : index === 2 ? "tek" : "rnbd"}.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    clipPath:
                      "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                  }}
                >
                  <div
                    className="absolute inset-0 bg-black opacity-40"
                    style={{
                      clipPath:
                        "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
                    }}
                  ></div>
                  <div className="relative text-white">
                    <h3 className="text-[25px] font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-[15px] whitespace-pre-line">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* R&D */}
        <motion.section
          className="bg-dark-navy text-white py-20 px-4 md:px-8"
          variants={rndSectionRiseVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            backgroundImage: 'url("/images/vision_R&D_bg.png")',
            backgroundSize: "cover",
            backgroundPosition: "center 245px",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-left">{rnd.sectionTitle}</h2>
            <p className="text-[40px] font-bold mb-12 text-left whitespace-pre-line">
              {rnd.sectionDesc}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 flex flex-col items-end">
                {rnd.leftBoxes.map((box, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/40 rounded-4xl p-3 mb-4 w-72 h-23 backdrop-blur-sm"
                    variants={rndBoxLeftInVariants}
                  >
                    <p className="text-[25px] text-white font-semibold mb-2 text-center">
                      {box.title}
                    </p>
                    <p className="text-[15px] text-white text-center whitespace-pre-line">
                      {box.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <motion.div
                  className="relative w-full h-[400px] bg-cover bg-center rounded-lg overflow-hidden"
                  style={{ backgroundImage: 'url("/images/vision_dev.png")' }}
                  variants={rndBoxRightInVariants}
                >
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/100 via-[79%] to-transparent p-4">
                    <p className="text-gray-300 text-[15px] mb-1">{rnd.rightBox.sub}</p>
                    <p className="text-[25px] font-semibold">{rnd.rightBox.title}</p>
                    <p className="text-[20px] text-gray-300">{rnd.rightBox.desc}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </Layout>
    </>
  );
}
