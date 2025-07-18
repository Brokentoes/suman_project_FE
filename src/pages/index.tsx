// import Header from "@/components/Header"; // Header 컴포넌트 임포트
// import Footer from "@/components/Footer"; // Footer 컴포넌트 임포트
// import { useEffect, useState } from "react";
// import Image from "next/image";

// // Assuming these are defined in your data/home.ts file
// // export const bannerImages = ["/path/to/your/image1.jpg", "/path/to/your/image2.jpg"];
// // export const section1Text = { subtitle: "귀사의 비즈니스 성공을 위한 혁신적인 솔루션과 최적의 서비스를 제공합니다." };

// export default function HomePage() {
//   const [current, setCurrent] = useState(0);

//   // Define bannerImages and section1Text here or import them from a data file
//   // (Your original code snippet had these defined internally, so keeping them here)
//   const bannerImages = [
//     "/images/main-banner1.jpg", // Replace with your actual image paths
//     "/images/main-banner2.jpg",
//   ];
//   const section1Text = {
//     subtitle:
//       "귀사의 비즈니스 성공을 위한 혁신적인 솔루션과 최적의 서비스를 제공합니다.",
//   };

//   // Automatic slide (every 5 seconds)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % bannerImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [bannerImages.length]);

//   const handleDotClick = (index: number) => {
//     setCurrent(index);
//   };

//   return (
//     <>
//       {/* Header 컴포넌트 추가 */}
//       <Header />

//       <main>
//         {/* Section 1: Main Banner with Text Overlay */}
//         <section className="relative w-full max-h-[100vh] overflow-hidden">
//           {/* Slide Banner */}
//           <div
//             className="flex transition-transform duration-1000 ease-in-out w-full h-[90vh] mb-10"
//             style={{
//               transform: `translateX(-${current * 100}%)`,
//               width: `${bannerImages.length * 100}%`,
//             }}
//           >
//             {bannerImages.map((src, index) => (
//               <div
//                 key={index}
//                 className="relative w-full h-screen flex-shrink-0"
//               >
//                 <Image
//                   src={src}
//                   alt={`배너 ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   priority={index === 0}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Fixed Text Overlay */}
//           <div className="absolute inset-0 flex flex-col justify-center text-white z-10 p-6 md:p-12">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4 ml-6 drop-shadow-lg">
//               정밀한 기술이 만드는
//               <br />
//               내일의 기업 수만
//             </h1>
//             <p className="text-lg md:text-xl text-gray-200 max-w-2xl ml-6 drop-shadow-md">
//               {section1Text.subtitle}
//             </p>
//           </div>

//           {/* Banner Indicator Dots */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
//             {bannerImages.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   current === index ? "bg-blue-600" : "bg-white/60"
//                 } hover:bg-blue-400 transition`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Section 2: Company Introduction - "산업을 움직이는 기술, 수만" */}
//         <section className="min-h-[60vh] flex flex-col justify-center items-center bg-gray-100 px-4 py-16 text-center relative overflow-hidden">
//           {/* Background image for Section 2, similar to the provided image */}
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/images/section2-bg.jpg" // Replace with an appropriate background image
//               alt="Global Earth Background"
//               fill
//               className="object-cover opacity-30" // Adjust opacity as needed
//             />
//           </div>
//           <div className="relative z-10 flex flex-col items-center">
//             <div className="flex justify-between items-center w-full max-w-4xl mb-8">
//               <span className="text-2xl font-semibold text-blue-800">
//                 SUMAN
//               </span>
//               <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors flex items-center">
//                 CEO 인사말
//                 <svg
//                   className="ml-2 w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <h2 className="text-4xl font-bold mb-6 text-gray-900">
//               산업을 움직이는 기술, <span className="text-blue-600">수만</span>
//             </h2>
//             <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
//               수만은 2차전지 생산 장비 및 신뢰성 평가 시스템을 설계·제작하는
//               전문 기업입니다.
//               <br />
//               대전 R&D 센터에서 축적한 기술력과 천안 공장의 생산 인프라를
//               기반으로, 고객 맞춤형 고신뢰성 솔루션을 제공합니다.
//             </p>
//           </div>
//         </section>

//         {/* Section 3: Solutions / Products */}
//         <section className="min-h-[80vh] flex flex-col justify-center items-center bg-white px-4 py-16">
//           <div className="flex justify-between items-center w-full max-w-6xl mb-12">
//             <h2 className="text-3xl font-bold text-gray-900">
//               정밀 부품, 모듈, 자동화 장비까지
//               <br />
//               미래 산업에 필요한 핵심 솔루션을 제조합니다
//             </h2>
//             <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition-colors flex items-center">
//               제품 및 솔루션 바로가기
//               <svg
//                 className="ml-2 w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
//             {/* Solution Card 1: Secondary Battery */}
//             <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 group">
//               <Image
//                 src="/images/secondary-battery.jpg" // Replace with actual image
//                 alt="Secondary Battery"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
//                 <div className="text-white">
//                   <span className="block text-sm font-semibold mb-1 opacity-75">
//                     Secondary Battery
//                   </span>
//                   <h3 className="text-xl font-bold">이차전지</h3>
//                 </div>
//               </div>
//             </div>

//             {/* Solution Card 2: Electrical & Electronics */}
//             <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 group">
//               <Image
//                 src="/images/electrical-electronics.jpg" // Replace with actual image
//                 alt="Electrical & Electronics"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
//                 <div className="text-white">
//                   <span className="block text-sm font-semibold mb-1 opacity-75">
//                     Electrical & Electronics
//                   </span>
//                   <h3 className="text-xl font-bold">전기전자</h3>
//                 </div>
//               </div>
//             </div>

//             {/* Solution Card 3: Semiconductor */}
//             <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 group">
//               <Image
//                 src="/images/semiconductor.jpg" // Replace with actual image
//                 alt="Semiconductor"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
//                 <div className="text-white">
//                   <span className="block text-sm font-semibold mb-1 opacity-75">
//                     Semiconductor
//                   </span>
//                   <h3 className="text-xl font-bold">반도체</h3>
//                 </div>
//               </div>
//             </div>

//             {/* Solution Card 4: Mobility */}
//             <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 group">
//               <Image
//                 src="/images/mobility.jpg" // Replace with actual image
//                 alt="Mobility"
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
//                 <div className="text-white">
//                   <span className="block text-sm font-semibold mb-1 opacity-75">
//                     Mobility
//                   </span>
//                   <h3 className="text-xl font-bold">자동차</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Section 4: Certifications */}
//         <section className="min-h-[70vh] flex flex-col items-center bg-gray-50 px-4 py-16">
//           <h2 className="text-3xl font-bold mb-12 text-gray-900">
//             Certifications
//           </h2>
//           <p className="text-xl text-center text-gray-700 max-w-4xl mb-12 leading-relaxed">
//             정부기관의 인정을 비롯해
//             <br />
//             <span className="font-bold text-blue-600">
//               ISO 품질·환경·안경영 시스템을 모두 구축하여
//             </span>
//             <br />
//             고객 중심의 고신뢰 생산 체계를 갖추고 있습니다.
//           </p>

//           <div className="flex space-x-4 mb-16">
//             <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
//               Technology Certification
//             </button>
//             <button className="px-6 py-3 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
//               Quality Assurance
//             </button>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full max-w-6xl">
//             {/* Certification Card 1 */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <Image
//                 src="/images/iso9001.png"
//                 alt="ISO 9001"
//                 width={80}
//                 height={80}
//                 className="mb-4"
//               />{" "}
//               {/* Replace with actual icon */}
//               <span className="text-lg font-semibold text-gray-800">
//                 ISO 9001
//               </span>
//             </div>
//             {/* Certification Card 2 */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <Image
//                 src="/images/iso14001.png"
//                 alt="ISO 14001"
//                 width={80}
//                 height={80}
//                 className="mb-4"
//               />{" "}
//               {/* Replace with actual icon */}
//               <span className="text-lg font-semibold text-gray-800">
//                 ISO 14001
//               </span>
//             </div>
//             {/* Certification Card 3 */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <Image
//                 src="/images/iso45001.png"
//                 alt="ISO 45001"
//                 width={80}
//                 height={80}
//                 className="mb-4"
//               />{" "}
//               {/* Replace with actual icon */}
//               <span className="text-lg font-semibold text-gray-800">
//                 ISO 45001
//               </span>
//             </div>
//             {/* Certification Card 4 */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <Image
//                 src="/images/venture-company.png"
//                 alt="벤처기업확인서"
//                 width={80}
//                 height={80}
//                 className="mb-4"
//               />{" "}
//               {/* Replace with actual icon */}
//               <span className="text-lg font-semibold text-gray-800">
//                 벤처기업확인서
//               </span>
//             </div>
//             {/* Certification Card 5 */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <Image
//                 src="/images/specialized-company.png"
//                 alt="소부장 전문기업"
//                 width={80}
//                 height={80}
//                 className="mb-4"
//               />{" "}
//               {/* Replace with actual icon */}
//               <span className="text-lg font-semibold text-gray-800">
//                 소부장 전문기업
//               </span>
//             </div>
//             {/* Certification Card 6 */}
//             <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <Image
//                 src="/images/patent.png"
//                 alt="뿌리기업확인서"
//                 width={80}
//                 height={80}
//                 className="mb-4"
//               />{" "}
//               {/* Replace with actual icon */}
//               <span className="text-lg font-semibold text-gray-800">
//                 뿌리기업확인서
//               </span>
//             </div>
//           </div>

//           <p className="text-sm text-gray-500 mt-10">
//             *기타 인증서는 회사소개 - 핵심역량 - 제조공정 및 외주생산부문 참고
//           </p>
//         </section>

//         {/* Section 5: Contact Us */}
//         <section className="min-h-[40vh] flex flex-col justify-center items-center bg-gray-900 text-white px-4 py-16 relative">
//           <div className="absolute inset-0 z-0 opacity-40">
//             <Image
//               src="/images/contact-us-bg.jpg" // Replace with an appropriate background image
//               alt="Contact Us Background"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="relative z-10 flex flex-col items-center">
//             <h2 className="text-4xl font-bold mb-8">Contact us</h2>
//             <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center">
//               문의하기
//               <svg
//                 className="ml-3 w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M14 5l7 7m0 0l-7 7m7-7H3"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </section>
//       </main>

//       {/* Footer 컴포넌트 추가 */}
//       <Footer />
//     </>
//   );
// }
import Header from "@/components/Headerv2";
import Footer from "@/components/Footer";
import { bannerImages, section1Text, section2, section3} from "@/data/homev2";
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
        <section className="bg-white py-20 px-6">
          {/*상단 라벨 + 버튼 */}
          <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
            <p className="text-sm text-gray-400">Solutions</p>
              <button className="text-sm border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition">
                제품 및 설비 바로가기 →
              </button>
          </div>
          {/*큰 타이틀*/}
          <div className="text-left mb-10 max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold">{section3.title}</h2>
            <p className="mt-2 text-black text-base">{section3.subtitle}</p>
          </div>
          {/*카드 그리드*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {section3.cards.map((card, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md bg-black text-white flex flex-col  transition hover:scale-105 hover:shadow-lg"
              >
                <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-300">{card.subtitle}</p>
                  <h3 className="text-lg font-semibold mt-1">{card.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{card.description}</p>
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
