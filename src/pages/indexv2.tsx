import Header from "@/components/Headerv2";
import Footer from "@/components/Footer";
import { bannerImages, section1Text, section2} from "@/data/homev2";
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
          <div className="absolute inset-0 flex flex-col  justify-center text-white z-10">
            <h1 className="text-5xl font-bold mb-4 ml-6 ">
              정밀한 기술이 만드는
              <br />
              내일의 기업 수만
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl ml-6">
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
        <section
          className="relative w-full h-[600px] bg-cover bg-center text-white"
          style={{ 
            backgroundImage: `url('${section2.bgImage}')` }}
        >
          {/* 어두운 반투명 오버레이 */}
          <div className="absolute inset-0 bg-black/40" />

          {/* 좌측 상단 SUMAN */}
          <div className="absolute top-8 left-12 z-10">
            <span className="text-xl font-semibold">SUMAN</span>
          </div>

          {/*우측 상단 ceo 인사말 버튼 */}
          <div className="absolute top-8 right-12 z-10">
            <button className="cursor-pointer px-4 py-2 bg-gray-500 text-black text-sm rounded-full shadow hover:bg-gray-200">
              CEO 인사말 →
            </button>
          </div>

          {/* 가운데 텍스트 */}
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              {section2.title}
            </h2>
            <p className="text-sm md:text-base max-w-3xl text-white/90 leading-relaxed whitespace-pre-line">
              {section2.description}
            </p>
          </div>
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
