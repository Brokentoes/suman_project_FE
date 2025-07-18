
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { bannerImages, section1Text, section2, section3} from "@/data/home";
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
            브라우저가 video 태그를 지원하지 않습니다.
          </video>

          {/* 텍스트 (기존과 동일) */}
          <div className="absolute inset-0 flex flex-col justify-center text-white z-10">
            <h1 className = "text-3xl font-bold mb-4 ml-30"> SUMAN </h1>
            <h2 className="text-6xl font-bold mb-7 ml-30 leading-[1.3]">
              정밀한 기술이 만드는
              <br />
              내일의 기업
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl ml-30">
              {section1Text.subtitle}
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
                제품 및 설비 바로가기 →
              </button>
          </div>

          {/*큰 타이틀*/}
          <div className="text-left text-black mb-10 max-w-7xl mx-[120px] ">
            <h2 className="text-4xl font-bold">{section3.title}</h2>
            <p className="mt-3 text-4xl font-bold">{section3.subtitle}</p>
          </div>
          {/* 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-15 max-w-7xl mx-auto">
            {section3.cards.map((card, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-end rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 ease-out min-h-[400px]"
                style={{
                  backgroundImage: `url(${card.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* 하단 블랙 그라데이션 */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black via-black/90 to-transparent z-0" />

                {/* 텍스트 */}
                <div className="relative z-10 p-6 text-white">
                  <p className="text-sm text-gray-300">{card.subtitle}</p> 
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="text-sm mt-1">{card.description}</p>
                </div>
              </div>


            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
