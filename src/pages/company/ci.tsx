import Header from "@/components/Header";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import { motion, type Transition } from "framer-motion";
import HeroSection from "@/components/HeroSection";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } as Transition },
};

export default function OrgPage() {
  return (
    <Layout>
      <Head>
        <title>CI | 수만</title>
      </Head>

      <Header />

      <HeroSection
        title="CI"
        subtitle="CI"
        backgroundImage="/images/sub_banner/company_banner.png"
      />

      <BreadcrumbSection path="회사소개 > CI" />

      <main className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
          <motion.div
            className="w-full max-w-7xl"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-800 inline-block">
                Coporate Identity
              </h2>
              <div
                className="h-1 mt-2"
                style={{
                  width: "23%",
                  background: "linear-gradient(to right, #2E3092, #ED1B23)",
                }}
              ></div>
              <br />
              <p className="text-xl text-gray-600 leading-relaxed mt-8">
                수만(SUMAN)의 CI는 기업의 핵심 가치인 신뢰, 기술, 정밀성을
                시각적으로 표현하고 있습니다.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>

            <div className="mb-12">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">Logo</h3>
              <br />
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                붉은 S는 열정과 에너지, 파란 M은 기술력과 신뢰를 의미하며, 두
                문자의 결합은 기술을 통해 가치를 연결하는 수만의 철학을
                상징합니다.
              </p>
              <br />
              <br />
              <br />

              <div className="flex flex-col md:flex-row justify-around items-center ">
                <div className="relative w-64 h-64 flex items-center justify-center rounded-lg ">
                  <Image
                    src="/images/ci.png"
                    alt="SUMAN Logo with Grid"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>

                <div className="relative w-64 h-64 flex items-center justify-center rounded-lg ">
                  <Image
                    src="/images/ci_color.png"
                    alt="SUMAN Color Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <br />
            <br />

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-30 mt-12 w-full">
              <div
                className="w-80 p-6 rounded-lg shadow-md flex flex-col justify-between"
                style={{ backgroundColor: "#ED1B23", position: "relative" }}
              >
                <div className="flex items-center mb-2">
                  <h4 className="text-white text-xl font-semibold inline-block pt-2">
                    SUMAN
                    <br />
                    RED
                  </h4>
                  <div className="absolute top-[43px] left-[130px] w-42 h-0.5 bg-white"></div>
                </div>

                <div className="text-right">
                  <p className="text-white text-sm">PANTONE 485 C</p>
                  <p className="text-white text-sm">CMYK 0/100/100/0</p>
                  <p className="text-white text-sm">RGB 237/27/35</p>
                  <p className="text-white text-sm">HEX #ED1B23</p>
                </div>
              </div>

              <div
                className="w-80 p-6 rounded-lg shadow-md flex flex-col justify-between"
                style={{ backgroundColor: "#2E3092", position: "relative" }}
              >
                <div className="flex items-center mb-2">
                  <h4 className="text-white text-xl font-semibold inline-block pt-2">
                    SUMAN
                    <br />
                    BLUE
                  </h4>
                  <div className="absolute top-[43px] left-[130px] w-42 h-0.5 bg-white"></div>
                </div>

                <div className="text-right">
                  <p className="text-white text-sm">PANTONE 2736 C</p>
                  <p className="text-white text-sm">CMYK 100/100/0/39</p>
                  <p className="text-white text-sm">RGB 46/48/146</p>
                  <p className="text-white text-sm">HEX #2E3092</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <hr className="my-8 border-gray-200 w-full" />
    </Layout>
  );
}
