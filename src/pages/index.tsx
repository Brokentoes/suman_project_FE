import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bannerImages, section1Text } from "@/data/home";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  // 자동 슬라이드 (5초마다)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <Header />

      <main>
        {/* Section 1 */}
        <section className="relative w-full max-h-[100vh] overflow-hidden justify-center">
          {/* 슬라이드 배너 */}
          <div
            className="flex transition-transform duration-1000 ease-in-out w-full h-[90vh] mb-10"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${bannerImages.length * 100}%`,
            }}
          >
            {bannerImages.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-screen flex-shrink-0"
              >
                <Image
                  src={src}
                  alt={`배너 ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* 고정 텍스트 data/home.ts에서 문구 수정 가능*/}
          <div className="absolute inset-0 flex flex-col  justify-center text-black z-10">
            <h1 className="text-4xl font-bold mb-4 ml-6">
              정밀한 기술이 만드는
              <br />
              내일의 기업 수만
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl ml-6">
              {section1Text.subtitle}
            </p>
          </div>

          {/* 배너이미지 인디케이터 버튼 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-blue-600" : "bg-white/60"
                } hover:bg-blue-400 transition`}
              />
            ))}
          </div>
        </section>

        {/* 섹션 2 */}
        <section className="min-h-[80vh] flex flex-col bg-gray-50 px-4 py-4">
          <div className="flex justify-between items-center w-full p-2">
            <span className="text-1xl px-2 py-3 font-semibold">SUMAN</span>
            <button className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded">
              CEO인사말
            </button>
          </div>
          {/* <div className="text-1xl font-semibold mb-6 text-blue-900 top-0 left-0">SUMAN
            <button
              className="justify-end">
              d
            </button>
          </div> */}
          <h2 className="text-3xl mt-6 font-semibold text-center">
            산업을 움직이는 기술, 수만
          </h2>
          <h3 className="text-1xl mt-6 text-center">
            수만은 2차전지 생산 장비 및 신뢰성 평가 시스템을 설계·제작하는 전문
            기업입니다.
            <br />
            대전 R&D 센터에서 축적한 기술력과 천안 공장의 생산 인프라를
            기반으로, 고객 맞춤형 고신뢰성 솔루션을 제공합니다.
          </h3>
        </section>

        {/* 섹션 3 */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center bg-white px-4 py-4">
          <h2 className="text-3xl font-semibold mb-6">신뢰성 & 기술력 강조</h2>
          {/* 이미지 or 통계 or 파트너 로고 등 */}
        </section>
      </main>

      <Footer />
    </>
  );
}
