import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import Image from "next/image";

import Head from "next/head";
import Link from "next/link";
import { homeContentKor } from "@/data/home";
import { GetStaticProps } from "next";
import type { HomePageProps } from "@/types/home";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      content: homeContentKor,
    },
  };
};

export default function HomePage({ content }: HomePageProps) {
  const labelClass =
    "text-base sm:text-lg lg:text-2xl font-semibold text-black";
  const buttonClass =
    "text-sm sm:text-base bg-gray-100 text-gray-800 rounded-full px-4 py-2 hover:bg-gray-300 transition";

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" } as Transition,
    },
  };

  return (
    <>
      <Head>
        <title>(주) 수만 | 2차전지·반도체 신뢰성 장비 전문 기업</title>
        <meta
          name="description"
          content="수만은 2차전지 생산 장비와 반도체 신뢰성 평가 장비를 개발하는 정밀 제조 기업입니다."
        />
        <meta
          name="keywords"
          content="수만, 주식회사 수만, SUMAN, suman, 정밀기술, 2차전지 장비, 반도체 신뢰성"
        />
        <meta
          property="og:title"
          content="(주) 수만 | 정밀 제조 기술의 선두주자"
        />
        <meta
          property="og:description"
          content="2차전지 생산 장비와 반도체 신뢰성 평가 시스템을 제공하는 정밀 기술 기업, 수만."
        />
        <meta
          property="og:image"
          content="https://www.suman.co.kr/images/logo_suman.png"
        />
        <meta property="og:url" content="https://www.suman.co.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="수만" />
        <link rel="icon" sizes="16x16" href="/images/logo.ico" />
      </Head>

      <Header />

      <main>
        <section className="relative h-screen">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/main_banner_1.mp4" type="video/mp4" />
            브라우저가 video 태그를 지원하지 않습니다.
          </video>

          <div className="absolute inset-0 flex flex-col justify-center text-white z-10 px-6 md:px-30 text-center md:text-left items-center md:items-start">
            <motion.h1
              className="text-xl md:text-3xl font-bold mb-3 md:mb-4  tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              SUMAN
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-5 md:mb-7 leading-snug md:leading-[1.3] tracking-wide whitespace-pre-line"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              {content.section1Text.title}
            </motion.h2>
            <motion.p
              className="text-base md:text-xl text-gray-300 max-w-[90%] md:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
            >
              {content.section1Text.subtitle}
            </motion.p>
          </div>
        </section>

        <section
          className="relative w-full  min-h-[900px] bg-cover bg-center text-white  px-6"
          style={{ aspectRatio: "1440/400" }}
        >
          <Image
            src={content.section2.bgImage}
            alt="배경"
            fill
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          <motion.div
            className="relative z-20 w-full pt-20 px-6 md:px-[120px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p
              className={
                "text-base sm:text-lg lg:text-2xl font-semibold text-white"
              }
            >
              Vision
            </p>
            <div className="flex-grow" />
            <Link href="/company/vision">
              <button className="text-sm sm:text-base bg-gray-600 text-gray-100 rounded-full px-4 py-2 hover:bg-gray-300 transition">
                {content.section2.buttonLabel}
              </button>
            </Link>
          </motion.div>

          <div className="relative z-20 w-full px-6 md:px-[60px] lg:px-[120px] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 h-auto md:h-[550px]">
            <motion.div
              className="w-full md:w-[55%] max-w-full md:max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-7 tracking-wide text-white">
                {content.section2.title}
              </h2>
              <p className="text-sm md:text-sm lg:text-xl text-white/70 leading-relaxed whitespace-pre-line tracking-wide">
                {content.section2.description}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-[50%] flex flex-wrap gap-6 justify-start md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {(content.section2.keywords as string[]).map((title, idx) => (
                <motion.div
                  key={idx}
                  className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-white/10 border border-white/10 flex flex-col justify-center items-center text-sm md:text-base text-white backdrop-blur-sm hover:bg-white/20 transition"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="font-bold text-base md:text-lg lg:text-xl tracking-wide">
                    {title}
                  </p>
                  <p className="text-xs md:text-xs lg:text-base tracking-wide">
                    {content.section2.translations?.[idx] ?? ""}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <motion.section
          className="relative z-30 -mt-40 bg-white py-25 px-4 md:px-6 rounded-t-[40px] md:rounded-t-[60px]"
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="relative z-20 w-full pt-20 px-6 md:px-[120px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className={labelClass}>Solutions</p>
            <div className="flex-grow" />
            <Link href="/business/service">
              <motion.button
                className={buttonClass}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                제품 및 설비 바로가기 →
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="text-left text-black mb-20 max-w-7xl mx-[30px] md:mx-[120px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-0 md:mb-3 tracking-wide text-black">
              {content.section3.title}
            </h2>
            <p className=" text-xl md:text-2xl lg:text-4xl font-bold tracking-wide">
              {content.section3.subtitle}
            </p>
          </motion.div>

          <div className="w-full px-[60px] md:px-[120px] lg:px-[160px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10">
              {content.section3.cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-[150px] md:h-[200px] lg:h-[550px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-out"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="relative w-full h-full">
                    {" "}
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="100%"
                      priority
                    />
                    <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
                  </div>

                  <div className="absolute bottom-0 lg:bottom-3 z-20 w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-white text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wide leading-tight sm:leading-snug">
                    <p className="text-xs md:text-sm lg:text-lg mb-1 md:mb-2 lg:mb-7 ">
                      {card.subtitle}
                    </p>
                    <h3 className="text-base md:text-lg lg:text-2xl font-bold mb-1 md:mb-1 lg:mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-xs lg:text-base text-gray-300">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="relative z-30 bg-white px-4 md:px-6"
          initial={{ opacity: 1, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="text-left text-black mb-20 max-w-7xl mx-[30px] md:mx-[120px] text-base sm:text-lg lg:text-2xl font-semibold tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <p className={labelClass}>Service</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-wide text-gray-900 leading-tight mb-5">
              고객 맞춤형 장비/제조 서비스를 제공합니다
            </h2>

            <p className="text-sm md:text-sm lg:text-xl text-gray-700 leading-relaxed mb-8">
              수만은 고객의 특정한 요구사항을 면밀히 분석하여 <br />
              최적화된 맞춤형 장비 및 설비, 최고 품질의 정밀 가공 부품을
              제공함으로써
              <br /> 혁신적인 솔루션과 지속적인 기술 지원을 통해 고객 비즈니스의
              성공을 이끌어갑니다.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center relative z-10 mt-20 lg:h-[400px]">
            <div className="flex-1 lg:pr-0 text-left mb-12 lg:mb-0 hidden lg:block" />{" "}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 lg:gap-0 relative w-full lg:h-full">
              <motion.div
                className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
                           mb-8 lg:mb-0
                           lg:absolute lg:right-10 lg:top-5 lg:-translate-y-1/2 lg:transform-none/* Reset transform for PC */
                           overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={circleVariants}
              >
                <Image
                  src="/images/index_solution.jpg"
                  alt="솔루션 서비스"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent rounded-full z-10" />
                <h3 className="text-2xl font-semibold pb-5 z-20">
                  솔루션 서비스
                </h3>
              </motion.div>

              <motion.div
                className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
                           mb-8 lg:mb-0
                           lg:absolute lg:right-40 lg:-translate-x-1/2 lg:bottom-120 lg:transform-none /* Reset transform for PC */
                           overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={circleVariants}
              >
                <Image
                  src="/images/index_equipment.png"
                  alt="맞춤형 장비/설비"
                  fill
                  className="object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent rounded-full z-10" />
                <h3 className="text-2xl font-semibold pb-5 z-20">
                  맞춤형 장비/설비
                </h3>
              </motion.div>

              <motion.div
                className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
                           lg:absolute lg:left-100 lg:bottom-140 lg:transform-none /* Reset transform for PC */
                           overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={circleVariants}
              >
                <Image
                  src="/images/index_parts.png"
                  alt="정밀 가공 부품"
                  fill
                  className="object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent rounded-full z-10" />
                <h3 className="text-2xl font-semibold pb-5 z-20">
                  정밀 가공 부품
                </h3>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className="relative w-full mt-0">
          <Image
            src={content.footer_banner[0]}
            alt="footer banner"
            width={1440}
            height={220}
            className="w-full object-cover"
            style={{ aspectRatio: "1440/220" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 pointer-events-none transfrom translate-x-20">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold md:font-semibold lg:font-bold mb-2 md:mb-4 lg:mb-7 tracking-wide">
              Contact us
            </h2>
            <Link href="/support/contact">
              <button className="cursor-pointer pointer-events-auto border border-gray-300 text-xs md:text-xs lg:text-sm text-white px-4 py-1 lg:px-12 lg:py-0.8 flex items-center gap-2 hover:bg-gray-300 hover:text-black transition tracking-wide">
                문의하기{" "}
                <span className="text-xs md:text-sm lg:text-base">→</span>
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
