import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, type Transition } from "framer-motion";
import { useState } from "react"; // useState 훅을 가져옵니다.

export default function LocationPage() {
  // 어떤 지도가 열려 있는지 관리하는 상태 (null, '본사', '천안사업장', '시험센터' 중 하나)
  const [openMap, setOpenMap] = useState<string | null>(null);

  // 섹션 애니메이션을 위한 Framer Motion 변형
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  // 지도 펼치기/접기 애니메이션을 위한 트랜지션
  const mapTransition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
  };

  // 지도 URL (실제 지도 임베드 URL로 **반드시 교체해야 합니다**)
  const mapUrls: { [key: string]: string } = {
    본사: "https://map.naver.com/v5/entry/place/12345678?c=15,0,0,0,dh", // 본사 실제 지도 URL로 교체
    천안사업장: "https://map.naver.com/v5/entry/place/87654321?c=15,0,0,0,dh", // 천안사업장 실제 지도 URL로 교체
    시험센터: "https://map.naver.com/v5/entry/place/98765432?c=15,0,0,0,dh", // 시험센터 실제 지도 URL로 교체
  };

  // 지도 토글 함수
  const handleToggleMap = (location: string) => {
    // 현재 열린 지도와 클릭한 위치가 같으면 지도를 닫고, 다르면 해당 위치의 지도를 엽니다.
    setOpenMap((prevOpenMap) => (prevOpenMap === location ? null : location));
  };

  return (
    <>
      <Header />

      {/* 히어로 섹션 */}
      <section
        className="hero-section relative bg-cover bg-center h-[300px] flex items-center text-white"
        style={{
          backgroundImage: 'url("/images/history-hero-bg.png")', // 히어로 이미지 변경 고려
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">시설 위치</h1>
          <p className="text-lg md:text-xl font-medium">Location</p>
        </div>
      </section>

      {/* 서브 내비게이션 (Breadcrumb) 섹션 */}
      <section className="breadcrumb-section bg-gray-700 py-4 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-md">회사소개 &gt; 시설 위치 / 찾아오시는 길</p>
        </div>
      </section>

      {/* 찾아오시는 길 섹션 */}
      <main className="content-wrapper py-20 px-4 md:px-8 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <h2 className="text-3xl font-bold mb-8">찾아오시는 길</h2>

            <div className="space-y-6">
              {/* 본사 */}
              <div className="border border-gray-300 rounded-lg p-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggleMap("본사")}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">본사</h3>
                    <p className="text-gray-700">대전광역시 대덕구 문평서로</p>
                  </div>
                  {/* 파란색 지도 아이콘 */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-8 h-8 text-blue-600 transition-transform duration-300 ${
                      openMap === "본사" ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.56l-2.69 2.69a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.47 11.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L12 13.56l-2.69 2.69a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {/* 지도 iframe (접히고 펼쳐지는 애니메이션 적용) */}
                <motion.div
                  initial={false}
                  // openMap 상태에 따라 높이와 투명도 애니메이션
                  animate={{
                    height: openMap === "본사" ? "250px" : "0px",
                    opacity: openMap === "본사" ? 1 : 0,
                  }}
                  transition={mapTransition}
                  className="mt-4 overflow-hidden" // 접혔을 때 내용이 숨겨지도록 설정
                >
                  {openMap === "본사" && ( // 본사 지도가 열려 있을 때만 iframe 렌더링
                    <iframe
                      src={mapUrls.본사}
                      width="100%"
                      height="250"
                      allowFullScreen={true}
                      loading="lazy"
                      className="rounded-md"
                    ></iframe>
                  )}
                </motion.div>
              </div>

              {/* 천안사업장 (위 본사와 동일한 구조) */}
              <div className="border border-gray-300 rounded-lg p-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggleMap("천안사업장")}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">천안사업장</h3>
                    <p className="text-gray-700">G1 비즈캠퍼스 4F 401호</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-8 h-8 text-blue-600 transition-transform duration-300 ${
                      openMap === "천안사업장" ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.56l-2.69 2.69a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.47 11.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L12 13.56l-2.69 2.69a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openMap === "천안사업장" ? "250px" : "0px",
                    opacity: openMap === "천안사업장" ? 1 : 0,
                  }}
                  transition={mapTransition}
                  className="mt-4 overflow-hidden"
                >
                  {openMap === "천안사업장" && (
                    <iframe
                      src={mapUrls.천안사업장}
                      width="100%"
                      height="250"
                      allowFullScreen={true}
                      loading="lazy"
                      className="rounded-md"
                    ></iframe>
                  )}
                </motion.div>
              </div>

              {/* 시험센터 (위 본사와 동일한 구조) */}
              <div className="border border-gray-300 rounded-lg p-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggleMap("시험센터")}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">시험센터</h3>
                    <p className="text-gray-700">대전광역시 유성구 테크노2로</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-8 h-8 text-blue-600 transition-transform duration-300 ${
                      openMap === "시험센터" ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.56l-2.69 2.69a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.47 11.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L12 13.56l-2.69 2.69a.75.75 0 0 1-1.06-1.06l3.75-3.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openMap === "시험센터" ? "250px" : "0px",
                    opacity: openMap === "시험센터" ? 1 : 0,
                  }}
                  transition={mapTransition}
                  className="mt-4 overflow-hidden"
                >
                  {openMap === "시험센터" && (
                    <iframe
                      src={mapUrls.시험센터}
                      width="100%"
                      height="250"
                      allowFullScreen={true}
                      loading="lazy"
                      className="rounded-md"
                    ></iframe>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
