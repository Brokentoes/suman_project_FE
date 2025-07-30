import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { homeContentEng } from "@/data/home";
import { GetStaticProps } from "next";
import type { HomePageProps } from "@/types/home";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      content: homeContentEng,
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
        <title>SUMAN | 2차전지·반도체 신뢰성 장비 전문 기업</title>
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
            <Link href="eng/company/vision">
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
            <Link href="eng/business/service">
              <motion.button
                className={buttonClass}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Explore Our Products & Equipment →
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
            className="text-left text-black mb-20 max-w-7xl mx-[30px] md:mx-[120px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <p className={labelClass}>Service</p>
            <br />
            <br />
            <h2 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              We provide customized equipment<br /> and manufacturing services<br />tailored to your needs.
            </h2>
            <br />
            <br />
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              Suman thoroughly analyzes each customer specific requirements<br />to deliver optimized custom equipment, facilities,<br />and high-quality precision-machined parts.
            </p>
          </motion.div>

          {/* Modified parent container for circles */}
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center relative z-10 mt-20 lg:h-[400px]">
            {/* The lg:h-[400px] on the parent ensures enough vertical space for PC layout */}
            <div className="flex-1 lg:pr-0 text-left mb-12 lg:mb-0 hidden lg:block" />{" "}
            {/* Hidden on mobile */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 lg:gap-0 relative w-full lg:h-full">
              {/* 솔루션 서비스 Circle */}
              <motion.div
                className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
                           mb-8 lg:mb-0
                           lg:absolute lg:right-30 lg:top-5 lg:-translate-y-1/2 lg:transform-none/* Reset transform for PC */
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
                  	Solution Services
                </h3>
              </motion.div>

              {/* 맞춤형 장비/설비 Circle */}
              <motion.div
                className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
                           mb-8 lg:mb-0
                           lg:absolute lg:right-60 lg:-translate-x-1/2 lg:bottom-120 lg:transform-none /* Reset transform for PC */
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
                  Customized Equipment
                </h3>
              </motion.div>

              {/* 정밀 가공 부품 Circle */}
              <motion.div
                className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
                           lg:absolute lg:left-80 lg:bottom-140 lg:transform-none /* Reset transform for PC */
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
                  Precision-Machined Components
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
                Click{" "}
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




// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// // import { section1Text, section2, section3, sectionCertifications, footer_banner} from "@/data/home";
// import { useState } from "react";
// import {motion, AnimatePresence} from "framer-motion";
// import Image from "next/image";

// import Head from 'next/head';
// import Link from "next/link";
// import { homeContentEng, homeContentKor } from "@/data/home";
// import { GetStaticProps } from 'next';
// import type { HomePageProps } from "@/types/home";



// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       content: homeContentEng
//     }
//   }
// }

// export default function HomePage({ content }: HomePageProps) {


//   const [showMore, setShowMore] = useState(false);
//   const handleToggleMore = () => setShowMore(prev => !prev);

//   const visibleCerts = content.sectionCertifications.certifications.slice(0,8);
//   const moreCerts = content.sectionCertifications.certifications.slice(8);

//   const labelClass = "text-base sm:text-lg lg:text-2xl font-semibold text-black";
//   const buttonClass = "text-sm sm:text-base bg-gray-100 text-gray-800 rounded-full px-4 py-2 hover:bg-gray-300 transition";

//   return (
//     <>

//     <Head>
//         <title>SUMAN</title>
//         <meta name="description" content="정밀한 기술이 만드는 내일의 기업, 수만. 혁신적인 솔루션과 최적의 서비스를 제공합니다." />
//         <meta name="keywords" content="수만, SUMAN, 기업솔루션, 혁신기술, 정밀기술" />
//         <meta property="og:title" content="(주) 수만" />
//         <meta property="og:description" content="정밀한 기술이 만드는 내일의 기업" />
//         <meta property="og:type" content="website" />
//         <meta name="google-site-verification" content="iT2-OO3Wat9zt_bq-t7Y0F24HWiIyWTz_OsvEyvLd9c" />
//         <meta name="naver-site-verification" content="b90c2478a5b6431a748fa0e68d931f04dc9e4fa9" />
//         <link rel="icon" sizes="16x16" href="/images/logo.ico" />
//     </Head>

//       <Header />

//       <main>
//         {/* Section 1 */}
//         <section className="relative h-screen">
//           {/* 영상 배경 */}
//           <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
//             <source src="/videos/main_banner_1.mp4" type="video/mp4" />
//             Browser Error.
//           </video>

//           {/* 텍스트 (기존과 동일) */}
//           <div className="absolute inset-0 flex flex-col justify-center text-white z-10 px-6 md:px-30 text-center md:text-left items-center md:items-start">
//             <motion.h1 
//               className = "text-xl md:text-3xl font-bold mb-3 md:mb-4  tracking-wide"
//               initial={{opacity:0, y:20}}
//               animate={{opacity:1, y:0}}
//               transition={{duration:1}}
//               viewport={{once:true}}
//             > 
//               SUMAN 
//             </motion.h1>
//             <motion.h2 
//               className="text-4xl md:text-6xl font-bold mb-5 md:mb-7 leading-snug md:leading-[1.3] tracking-wide whitespace-pre-line"
//               initial={{opacity:0, y: 30}}
//               animate={{opacity:1, y: 0}}
//               transition={{duration:1.2}}
//               viewport={{once:true}}
//             >
//               {content.section1Text.title}
//             </motion.h2>
//             <motion.p 
//               className="text-base md:text-xl text-gray-300 max-w-[90%] md:max-w-3xl"
//               initial={{opacity:0, y: 20}}
//               animate={{opacity:1, y: 0}}
//               transition={{duration:1.4}}
//               viewport={{once:true}}
//             >
//               {content.section1Text.subtitle}
//             </motion.p>
//           </div>
//         </section>
        

//         {/* 섹션 2 */}
//         <section
//           className="relative w-full  min-h-[900px] bg-cover bg-center text-white  px-6"
//           style={{ aspectRatio: '1440/400' }}
//         >
//           {/* 배경 이미지 */}
//           <Image
//             src={content.section2.bgImage}
//             alt="배경"
//             fill
//             className="absolute inset-0 w-full h-full object-cover z-0"
//           />

//           {/* Vision + 버튼 */}
//           <motion.div 
//             className="relative z-20 w-full pt-20 px-6 md:px-[120px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mb-10"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true ,amount:0.3}}
//           >
//             <p className={"text-base sm:text-lg lg:text-2xl font-semibold text-white"}>Vision</p>
//             <div className="flex-grow" />
//             <Link href="/company/vision">
//               <button className="text-sm sm:text-base bg-gray-600 text-gray-100 rounded-full px-4 py-2 hover:bg-gray-300 transition">
//                 {content.section2.buttonLabel}
//               </button>
//             </Link>
//           </motion.div>

//           {/* 본문 텍스트 */}
//           <div className="relative z-20 w-full px-6 md:px-[60px] lg:px-[120px] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 h-auto md:h-[550px]">
//             {/* 왼쪽 텍스트 */}
//             <motion.div 
//               className="w-full md:w-[55%] max-w-full md:max-w-3xl"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.2 }}
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-7 tracking-wide text-white">
//                 {content.section2.title}
//               </h2>
//               <p className="text-sm md:text-sm lg:text-xl text-white/70 leading-relaxed whitespace-pre-line tracking-wide">
//                 {content.section2.description}
//               </p>
//             </motion.div>

//             {/* 오른쪽 동그라미 */}
//             <motion.div 
//               className="w-full md:w-[50%] flex flex-wrap gap-6 justify-start md:justify-end"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true ,amount:0.3 }}
//             >
//               {(content.section2.keywords as string[]).map((title, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="w-28 h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full bg-white/10 border border-white/10 flex flex-col justify-center items-center text-sm md:text-base text-white backdrop-blur-sm hover:bg-white/20 transition"
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: idx * 0.3, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   <p className="font-bold text-base md:text-lg lg:text-xl tracking-wide">{title}</p>
//                   <p className="text-xs md:text-xs lg:text-base tracking-wide">{content.section2.translations?.[idx] ?? ""}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//         </section>

//         {/* 섹션 3 */}
//         <motion.section 
//           className="relative z-30 -mt-40 bg-white py-25 px-4 md:px-6 rounded-t-[40px] md:rounded-t-[60px]"
//           initial={{ opacity:1,  y: 100}}
//           whileInView={{ opacity: 1 , y: 0}}
//           transition={{ duration: 1.2 , ease:"easeOut"}}
//           viewport={{ once: true , amount:0.3}}
//           >
//           {/*상단 라벨 + 버튼 */}
//           <motion.div 
//             className="relative z-20 w-full pt-20 px-6 md:px-[120px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mb-10"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true,amount:0.3 }}
//           >
//             <p className={labelClass}>Solutions</p>
//             <div className="flex-grow" />
//             <Link href="/business/service">
//               <motion.button 
//                 className={buttonClass}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 viewport={{ once: true ,amount:0.3}}
//               >              
//                 Go to Products & Equipment →
//               </motion.button>
//             </Link>
//           </motion.div>

//           {/*큰 타이틀*/}
          
//           <motion.div 
//             className="text-left text-black mb-20 max-w-7xl mx-[30px] md:mx-[120px]"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1}} 
//             viewport={{ once: true,amount:0.3 }}
//           >
//             <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-0 md:mb-3 tracking-wide text-black">{content.section3.title}</h2>
//             <p className=" text-xl md:text-2xl lg:text-4xl font-bold tracking-wide">{content.section3.subtitle}</p>
//           </motion.div>

//           <div className="w-full px-[60px] md:px-[120px] lg:px-[160px]">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10">
//               {content.section3.cards.map((card, index) => (
//                 <motion.div

//                   key={index}
//                   className="relative w-full h-[150px] md:h-[200px] lg:h-[500px] overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-out"
//                   initial={{ x: -100, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                   viewport={{ once: true ,amount:0.3}}
//                 >
//                   {/* 이미지 영역 (원본 비율 유지) */}
//                   <div className="relative w-full h-full"> {/* 비율 조절 가능 */}
//                     <Image
//                       src={card.img}
//                       alt={card.title}
//                       fill
//                       className="object-cover"
//                       sizes="100%"
//                       priority
//                     />

//                     {/* 하단 블랙 그라데이션 */}
//                     <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
//                   </div>

//                   {/* 텍스트 영역 */}
//                   <div className="absolute bottom-0 lg:bottom-3 z-20 w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-white text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wide leading-tight sm:leading-snug">
//                     <p className="text-xs md:text-sm lg:text-lg mb-1 md:mb-2 lg:mb-7 ">{card.subtitle}</p>
//                     <h3 className="text-base md:text-lg lg:text-2xl font-bold mb-1 md:mb-1 lg:mb-2">{card.title}</h3>
//                     <p className="text-xs md:text-xs lg:text-base text-gray-300">{card.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>


//         <motion.section
//           className="relative z-30 bg-white px-4 md:px-6"
//           initial={{ opacity: 1, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           <motion.div
//             className="text-left text-black mb-20 max-w-7xl mx-[30px] md:mx-[120px]"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             variants={fadeInVariants}
//           >
//             <p className={labelClass}>Service</p>
//             <br />
//             <br />
//             <h2 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
//               고객 맞춤형 장비/제조 <br />
//               서비스를 제공합니다
//             </h2>
//             <br />
//             <br />
//             <p className="text-2xl text-gray-700 leading-relaxed mb-8">
//               수만은 고객의 특정한 요구사항을 면밀히 분석하여 <br />
//               최적화된 맞춤형 장비 및 설비, 최고 품질의 정밀 가공 부품을
//               제공함으로써
//               <br /> 혁신적인 솔루션과 지속적인 기술 지원을 통해 고객 비즈니스의
//               성공을 이끌어갑니다.
//             </p>
//           </motion.div>

//           {/* Modified parent container for circles */}
//           <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center relative z-10 mt-20 lg:h-[400px]">
//             {/* The lg:h-[400px] on the parent ensures enough vertical space for PC layout */}
//             <div className="flex-1 lg:pr-0 text-left mb-12 lg:mb-0 hidden lg:block" />{" "}
//             {/* Hidden on mobile */}
//             <div className="flex-1 flex flex-col items-center justify-center gap-8 lg:gap-0 relative w-full lg:h-full">
//               {/* 솔루션 서비스 Circle */}
//               <motion.div
//                 className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
//                            mb-8 lg:mb-0
//                            lg:absolute lg:right-30 lg:top-5 lg:-translate-y-1/2 lg:transform-none/* Reset transform for PC */
//                            overflow-hidden"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 variants={circleVariants}
//               >
//                 <Image
//                   src="/images/index_solution.jpg"
//                   alt="솔루션 서비스"
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent rounded-full z-10" />
//                 <h3 className="text-2xl font-semibold pb-5 z-20">
//                   솔루션 서비스
//                 </h3>
//               </motion.div>

//               {/* 맞춤형 장비/설비 Circle */}
//               <motion.div
//                 className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
//                            mb-8 lg:mb-0
//                            lg:absolute lg:right-60 lg:-translate-x-1/2 lg:bottom-120 lg:transform-none /* Reset transform for PC */
//                            overflow-hidden"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 variants={circleVariants}
//               >
//                 <Image
//                   src="/images/index_equipment.png"
//                   alt="맞춤형 장비/설비"
//                   fill
//                   className="object-cover "
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent rounded-full z-10" />
//                 <h3 className="text-2xl font-semibold pb-5 z-20">
//                   맞춤형 장비/설비
//                 </h3>
//               </motion.div>

//               {/* 정밀 가공 부품 Circle */}
//               <motion.div
//                 className="relative w-64 h-64 rounded-full flex flex-col justify-end items-center text-center text-white p-5 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-default
//                            lg:absolute lg:left-80 lg:bottom-140 lg:transform-none /* Reset transform for PC */
//                            overflow-hidden"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 variants={circleVariants}
//               >
//                 <Image
//                   src="/images/index_parts.png"
//                   alt="정밀 가공 부품"
//                   fill
//                   className="object-cover "
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent rounded-full z-10" />
//                 <h3 className="text-2xl font-semibold pb-5 z-20">
//                   정밀 가공 부품
//                 </h3>
//               </motion.div>
//             </div>
//           </div>
//         </motion.section>
//         {/* <section 
//           className="relative z-30 -mt-20 bg-white py-50 px-6"
//         >
//           {/*상단 라벨 + 버튼
//           <motion.div 
//             className="relative z-20 w-full pt-20 px-6 md:px-[120px] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mb-10"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true ,amount:0.3}}
//           >
//             <p className={labelClass}>Certifications</p>
//             <div className="flex-grow" />
//             <button
//               onClick={handleToggleMore}
//               className={buttonClass}
//               title="더보기"
//             >
//               View All Achievements
//               <span className="ml-2 text-lg">{showMore ? "-" : "+"}</span>
//             </button>
//           </motion.div>


//           <motion.div
//             className="text-left text-black whitespace-pre-line mb-4 max-w-7xl mx-[30px] md:mx-[120px]"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true ,amount:0.3}}
//           >
//             <p className="text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-7 tracking-wide text-black leading-[1.3]">{content.sectionCertifications.title}</p>
//           </motion.div>

//           {/*태그*
//           <motion.div
//             className="flex gap-2 mt-1 sm:mt-8 lg:mt-8 px-8 md:px-[120px] lg:px-[120px]"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1}}
//             viewport={{ once: true,amount:0.3 }}
//           >
//             {content.sectionCertifications.tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className="bg-gray-100 text-blue-700 px-3 py-0.3 text-xs lg:text-lg font-medium"
//               >

//                 {tag}
//               </span>
//             ))}
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-1 gap-15 mt-30 px-[120px]">
//               {[0, 1].map((rowIndex) => {
//                 const certGroup = visibleCerts.slice(rowIndex * 4, rowIndex * 4 + 4);
//                 const fromLeft = rowIndex % 2 === 0;

//                 return (
//                   <motion.div
//                     key={rowIndex}
//                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20"
//                     initial={{ x: fromLeft ? -200 : 200, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1.3 }}
//                     transition={{ duration: 1 }}
//                     viewport={{ once: true }}
//                   >
//                     {certGroup.map((cert, i) => (
//                       <div key={i} className="group text-center">
//                         {!cert.img && (
//                           <button
//                             title={cert.label}
//                             className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate tracking-wide"
//                           >
//                             {cert.label}
//                           </button>
//                         )}

//                         {cert.img && (
//                           <>
//                             <button
//                               title={cert.label}
//                               className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate tracking-wide group-hover:hidden"
//                             >
//                               {cert.label}
//                             </button>

//                             <div className="w-48 mx-auto transition-all duration-500 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96">
//                               <Image
//                                 src={cert.img}
//                                 alt={cert.label}
//                                 width={192}
//                                 height={192}
//                                 className="rounded shadow-xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 mt-3"
//                               />
//                             </div>
//                           </>
//                         )}
//                       </div>
//                     ))}
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/*추가 인증 출력
//             <AnimatePresence initial={false}>
//               {showMore && (
//                 <motion.div
//                   className="overflow-visible px-[120px] mt-15"
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.2, ease: "easeInOut" }}
//                 >
//                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-20 mt-10 pb-6">
//                     {moreCerts.map((cert, i) => (
//                       <div key={i} className="group text-center col-span-1">
//                         {!cert.img && (
//                           <button
//                             title={cert.label}
//                             className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate tracking-wide"
//                           >
//                             {cert.label}
//                           </button>
//                         )}
//                         {cert.img && (
//                           <>
//                             <button
//                               title={cert.label}
//                               className="w-full py-3 px-5 bg-white shadow rounded-full text-lg font-semibold text-gray-800 hover:shadow-lg transition truncate tracking-wide group-hover:hidden"
//                             >
//                               {cert.label}
//                             </button>

//                             <div className="w-48 mx-auto transition-all duration-500 ease-in-out max-h-0 overflow-hidden group-hover:max-h-96">
//                               <Image
//                                 src={cert.img}
//                                 alt={cert.label}
//                                 width={192}
//                                 height={192}
//                                 className="rounded shadow-xl transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 mt-3"
//                               />
//                             </div>
//                           </>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <motion.div className="px-4 sm:px-6 lg:px-[120px] flex flex-col items-end gap-2"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//               viewport={{ once: true }}
//             >
//               {!showMore && (
//                 <p className="text-sm lg:text-base text-gray-400 tracking-wide mt-6">
//                   {content.sectionCertifications.legal}
//                 </p>
//               )}
//             </motion.div>
//           </section> */}
      
//           {/* section5_footer_banner */}
//           <section className="relative w-full mt-20">
//             <Image
//               src={content.footer_banner[0]}
//               alt="footer banner"
//               width={1440}
//               height={220}
//               className="w-full object-cover"
//               style={{ aspectRatio:'1440/220'}}
//             />
//             <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 pointer-events-none transfrom translate-x-20">
//               <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold md:font-semibold lg:font-bold mb-2 md:mb-4 lg:mb-7 tracking-wide">Contact us</h2>
//               <Link href="/support/contact">
//                 <button className="pointer-events-auto border border-gray-300 text-xs md:text-xs lg:text-sm text-white px-4 py-1 lg:px-12 lg:py-0.8 flex items-center gap-2 hover:bg-gray-300 hover:text-black transition tracking-wide">
//                   	Click me <span className="text-xs md:text-sm lg:text-base">→</span>
//                 </button>
//               </Link>
//             </div>
//           </section>
//        </main>
//       <Footer />
//     </>
//   );
// }
