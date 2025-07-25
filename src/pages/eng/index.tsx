
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { bannerImages, section1Text, section3, sectionCertifications} from "@/data/home";
import { useEffect, useState } from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import Head from 'next/head';
import { homeContentEng } from "@/data/home";
import { GetStaticProps } from 'next';
import type { HomePageProps } from "@/types/home";


export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      content: homeContentEng
    }
  }
}

export default function HomePage({ content }: HomePageProps) {

  // 자동 슬라이드 (5초마다)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % t.bannerImages.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);
  // const handleDotClick = (index: number) => {
  //   setCurrent(index);
  // };

  const visibleCerts = content.sectionCertifications.certifications.slice(0, 8);


  return (
    <>

    <Head>
        <title>SUMAN</title>
        <meta name="description" content="Suman, the company shaping tomorrow with precision technology. We offer innovative solutions and optimal services." />
        <meta name="keywords" content="Suman, corporate solutions, innovative technology, precision engineering" />
        <meta property="og:title" content="Suman Co., Ltd." />
        <meta property="og:description" content="A company shaping tomorrow with precision technology" />
        <meta name="google-site-verification" content="iT2-OO3Wat9zt_bq-t7Y0F24HWiIyWTz_OsvEyvLd9c" />
        <meta property="og:type" content="website" />
        <link rel="icon" sizes="16x16" href="/images/logo.ico" />
    </Head>

      <Header />

      <main>
        {/* Section 1 */}
        <section className="relative w-full h-screen overflow-hidden justify-center">
          {/* 영상 배경 */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="/videos/main_banner_1.mp4" type="video/mp4" />
            sorry, this browser can not provide video
          </video>

          {/* 텍스트 (기존과 동일) */}
          <div className="absolute inset-0 flex flex-col justify-center text-white z-10">
            <h1 className = "text-3xl font-bold mb-4 ml-30"> SUMAN </h1>
            <h2 className="text-6xl font-bold mb-7 ml-30 leading-[1.3]">
              {content.section1Text.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl ml-30">
              {content.section1Text.subtitle}
            </p>
          </div>
        </section>


        {/* 섹션 2 */}
        {/* <section
          className="relative w-full h-[600px] bg-cover bg-center text-white"
          style={{ 
            backgroundImage: `url('${section2.bgImage}')` }}
        > */}
          {/* 어두운 반투명 오버레이 */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}

          {/* 좌측 상단 SUMAN */}
          {/* <div className="absolute top-8 left-30 z-10">
            <span className="text-xl font-semibold">Suman</span>
          </div> */}

          {/*우측 상단 ceo 인사말 버튼 */}
          {/* <div className="absolute top-8 right-12 z-10">
            <button className="cursor-pointer px-4 py-2 bg-gray-500 text-black text-sm rounded-full shadow hover:bg-gray-200">
              CEO 인사말 →
            </button>
          </div> */}

          {/* 가운데 텍스트 */}
          {/* <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              {section2.title}
            </h2>
            <p className="text-sm md:text-base max-w-3xl text-white/90 leading-relaxed whitespace-pre-line">
              {section2.description}
            </p>
          </div>
        </section> */}

        {/* 섹션 3 */}
        <section className="bg-white py-25 px-6 ">
          {/*상단 라벨 + 버튼 */}
          <div className="flex items-center mb-10 w-full max-w-8xl px-[120px]">
              <p className="text-2xl text-black font-semibold">Solutions</p>

              {/* 중앙 여백 */}
              <div className="flex-grow" />

              {/* 버튼 */}
              <button className="text-base border text-black border-gray-400 rounded-full px-4 py-2 hover:bg-gray-100 transition">
                View all achievements →
              </button>
          </div>

          {/*큰 타이틀*/}
          
          <div className="text-left text-black mb-20 max-w-7xl mx-[120px] ">
            <h2 className="text-4xl font-bold">{content.section3.title}</h2>
            <p className="mt-3 text-4xl font-bold">{content.section3.subtitle}</p>
          </div>

          <div className="w-full px-[160px]">
            <div className="grid grid-cols-4 gap-20">
              {content.section3.cards.map((card, index) => (
                <div
                  key={index}
                  className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-out"
                >
                  {/* 이미지 영역 (원본 비율 유지) */}
                  <div className="relative w-full h-[500px] "> {/* 비율 조절 가능 */}
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="100%"
                      priority
                    />
                    {/* 하단 블랙 그라데이션 */}
                    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="absolute z-20 p-6 text-white bottom-1">
                    <p className="text-lg  mb-3">{card.subtitle}</p>
                    <h3 className="text-2xl font-bold mb-1">{card.title}</h3>
                    <p className="text-base text-gray-300">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/*section3_certifications*/}
        <section className="bg-white py-40 px-6">
          <div className="flex items-center mb-10 w-full max-w-8xl px-[120px]">
            <p className="text-2xl text-black font-semibold">Certifications</p>
          </div>

          <div className="text-left text-black whitespace-pre-line mb-5 max-w-7xl mx-[120px]">
            <h2 className="text-4xl font-bold leading-normal ">{content.sectionCertifications.title}</h2>
          </div>
          <div className="flex gap-2 mt-4 px-[120px]">
            {content.sectionCertifications.tags.map((tag, i) => (
              <span 
                key={i} 
                className="bg-gray-100 text-blue-700 px-3 py-0.3 font-medium">
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-15 mt-30 px-[120px]">
              {[0, 1].map((rowIndex) => {
                const certGroup = visibleCerts.slice(rowIndex * 4, rowIndex * 4 + 4);
                const fromLeft = rowIndex % 2 === 0;

                return (
                  <motion.div
                    key={rowIndex}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-20"
                    initial={{ x: fromLeft ? -200 : 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1.3 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    {certGroup.map((cert, i) => (
                      <div key={i} className="relative group text-center">
                        <button
                          title={cert.label}
                          className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate"
                        >
                          {cert.label}
                        </button>
                        {cert.img && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block z-10">
                            <img
                              src={cert.img}
                              alt={cert.label}
                              className="w-64 rounded shadow-xl opacity-0 transition duration-300 group-hover:opacity-100"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-6 flex justify-end px-[120px]">
              <p className="text-xs text-gray-400 mb-2">{content.sectionCertifications.legal}</p>
              <button className="flex items-center gap-2 text-gray-800 bg-white px-4 py-2 rounded-full hover:font-semibold transition tracking-wide">
                Explore Products
                <span className="text-xl">→</span>
              </button>
            
            </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


