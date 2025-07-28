// history.tsx
import Layout from "@/components/Layout"; // Layout 컴포넌트 임포트
import HeroSection from "@/components/HeroSection"; // HeroSection 컴포넌트 임포트
import BreadcrumbSection from "@/components/BreadcrumbSection"; // BreadcrumbSection 컴포넌트 임포트
import { motion, type Transition} from "framer-motion";
import Head from "next/head";

export default function HistoryPage() {
  // Framer Motion variants
  const fadeInRiseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" } as Transition,
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 자식 요소들이 0.2초 간격으로 나타남
        delayChildren: 0.2, // 컨테이너 애니메이션 후 0.3초 뒤 자식 애니메이션 시작
      },
    },
  };

  // 타임라인 항목의 개별 애니메이션
  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" } as Transition,
    },
  };


  return (
    <>
    <Head>
      <title>연혁 | 수만</title>
    </Head>
    <Layout>
    {/* Layout 컴포넌트로 전체 페이지 내용을 감쌉니다.*/}
    
      {/* HeroSection 컴포넌트 사용 */}
      <HeroSection
        title={
          <span className="text-5xl font-bold tracking-wide">연 혁</span>}
        subtitle={
          <span className="text-xl font-bold tracking-wide px-2">History</span>
        }
        backgroundImage="/images/sub_banner/company_banner.png" // 해당 페이지에 맞는 배경 이미지 경로
      />
    

      {/* BreadcrumbSection 컴포넌트 사용 */}
      <BreadcrumbSection path="회사소개 > 연혁" />

      {/* 새로운 섹션 추가: "SUMAN은 끊임없는 혁신..." - DESIGN MODIFIED */}
      <section className="relative w-full h-[700px]">
        
        <div 
          className="absolute inset-0 bg-cover z-0"
          style={{
            backgroundImage: "url('/images/history_suman.png')",
            backgroundPosition: "center 70%"
          }}>
          <div className="absolute inset-0 bg-[#020c23]/85 z-10" />
           {/* 좌측 텍스트 내용 */}
          <motion.div 
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease:"easeOut"}}
            viewport={{once:true}}
            className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 xl:px-0 py-24 text-white"
          >
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 tracking-wide">
              <p className="mb-2.5">SUMAN은 </p>
              <p className="mb-2.5">끊임없는 혁신과 신시장 개척을 통해 </p>
              <p>신뢰성 있는 기업으로 성장하였습니다.</p>
            </h2>

            <ul className="text-xl flex-col items-start space-y-6 mt-7 tracking-wide">
              {[
                '신산업분야 가공 / 장비 및 모듈화 사업 진출',
                '자동차 / 전기전자 정밀가공 / 장비 분야 확대',
                '자동차 정밀가공 사업 진출'
              ].map((text, index) => (
                <motion.li
                  key={index}
                  className="relative w-fit bg-white/15 text-white font-medium py-3.5 px-6 rounded-full z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.2, // ✨ 순차적으로 나옴 (1.0s, 1.3s, 1.6s)
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>


          {/* 우측 이미지 (Company Growth Arrow) 및 매출/임직원 정보 */}
         <motion.div 
            className="absolute top-[620px] right-[360px] z-20 text-right text-sm text-gray-400 drop-shadow-md space-y-1"
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
          <p>
            <span className="font-semibold">매출액</span>&nbsp;&nbsp;&nbsp;&nbsp;77억원 (2023년도 기준)
          </p>
          <p>
            <span className="font-semibold">임직원 수</span>&nbsp;&nbsp;&nbsp;40명 (2024년도 기준)
          </p>
        </motion.div>

        </div>

        <svg
          className="absolute inset-0 mx-auto my-auto z-20 opacity-80 pointer-events-none"
          viewBox="0 0 700 300"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >          
          <defs>
            <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="white" stop-opacity="0" />
              <stop offset="100%" stop-color="white" stop-opacity="1" />
            </linearGradient>
          </defs>


          <motion.path
            d="M 150 233 Q 460 243, 555 138"
            stroke="url(#arrow-gradient)"
            strokeWidth="6"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
          />

          {/* 화살촉 (선 끝점 기준 좌상단/좌하단으로 뾰족하게) */}
          <motion.path
            d="M 563 123 L 562 145 L 542 137 Z"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.8,       // 선 다 그려진 직후
              duration: 0.1  // "톡!" 하고 바로 등장
            }}
          />

        </svg>


      </section>

      {/* main 태그는 Layout에서 이미 처리했으므로, 여기서는 div로 변경 */}
      <div className="content-wrapper">
        {/* 연혁 타임라인 섹션: 이미지와 동일하게 화면 중앙 정렬 및 제목 부분 스타일링 */}
        <section className="main-history-timeline py-28 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-left">
            {/* Changed text-xl to text-3xl to make it larger */}
            <motion.h2
              className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-28"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              About us
            </motion.h2>            
            {/* 타임라인 본문 (선, 항목들)을 별도의 중앙 정렬 컨테이너로 감싸기 */}
            <div className="max-w-5xl mx-auto relative pl-26 md:pl-36">
              <motion.div
                className="absolute left-[150px] top-12 h-full border-l-2 border-dashed border-gray-300"
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "100%" }}
                transition={{
                  duration: 1.0,
                  delay: 1.5, 
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              />
              {/* 전체 타임라인을 오른쪽으로 이동 */}
              <motion.div
                className="timeline-container relative" // 세로선 기본 설정
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* 2014년 섹션 */}
                <motion.div
                  className="timeline-entry mb-10 relative"
                  variants={fadeInRiseVariants}
                >
                  <div className="flex items-center absolute -left-2 top-[18px] ml-[-24px]">
                    <h3 className="timeline-year text-3xl md:text-3xl font-bold text-black bg-white pr-4 z-10 -translate-x-full">
                      2014
                    </h3>
                    {/* 점 제거되었음 */}
                  </div>
                  {/* "창업단계" 제목 */}
                  <div className="bg-gray-100 p-6 rounded-[30px] w-[870px] ml-[60px] md:ml-[100px]">
                    <p className="text-2xl font-bold text-black tracking-wide ml-4">창업 단계</p>
                  </div>
                </motion.div>
                {/* 2014년 세부 항목 */}
                <motion.div
                  className="timeline-item mb-8 relative ml-[60px] md:ml-[140px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-black font-bold tracking-wide "> ⦁ &nbsp;자동차 정밀가공 사업 진출</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-10 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">(주) 수만 설립 (2014년 4월)</p>
                </motion.div>

                {/* 2015~2020년 섹션 */}
                <motion.div
                  className="timeline-entry mt-16 mb-10 relative"
                  variants={fadeInRiseVariants}
                >
                  <div className="flex items-center absolute -left-2 top-[21px] ml-[-24px]">
                    <h3 className="timeline-year text-3xl md:text-3xl font-bold text-black bg-white pr-4 z-10 -translate-x-full">
                      2015 - 2020
                    </h3>
                    {/* 점 제거되었음 */}
                  </div>
                  {/* "시장 진입 단계" 제목 */}
                  <div className="bg-gray-100 p-6 rounded-[30px] w-full ml-[60px] md:ml-[100px]">
                    <p className="text-2xl font-bold text-black tracking-wide ml-4">
                      시장 진입 단계
                    </p>
                  </div>
                </motion.div>
                {/* 2015~2020년 세부 항목 */}
                <motion.div
                  className="timeline-item mb-8 relative ml-[100px] md:ml-[140px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-black font-bold tracking-wide">
                    ⦁ &nbsp;사업분야 확대 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자동차/전기전자 정밀가공/장비 분야 확대
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">기업부설연구소 설립 및 인증</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">
                    ISO 9001 / ISO 14001 / ISO 45001 획득
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">
                    특허 제 10-1640080호 외 권리 확보
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">
                    자동차 및 전기전자 분야 정밀 가공 매출처 확대
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">기술평가우수기업인증</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">벤처기업인증 / 뿌리기업인증</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-10 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">
                    소재부품기업인증 / Clean사업장 인정
                  </p>
                </motion.div>

                {/* 2021 ~ 현재 섹션 */}
                <motion.div
                  className="timeline-entry mt-16 mb-10 relative"
                  variants={fadeInRiseVariants}
                >
                  <div className="flex items-center absolute -left-2 top-[20px] ml-[-24px]">
                    <h3 className="timeline-year text-3xl md:text-3xl font-bold text-black bg-white pr-4 z-10 -translate-x-full">
                      2021 - 현재
                    </h3>
                    {/* 점 제거되었음 */}
                  </div>
                  {/* "성장단계" 제목 */}
                  <div className="bg-gray-100 p-6 rounded-[30px] w-full ml-[60px] md:ml-[100px]">
                    <p className="text-2xl font-bold text-black tracking-wide ml-4">성장 단계</p>
                  </div>
                </motion.div>
                {/* 2021~현재 세부 항목 */}
                <motion.div
                  className="timeline-item mb-8 relative ml-[60px] md:ml-[140px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-black font-bold tracking-wide ">
                    ⦁ &nbsp;변화/구조혁신 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;신산업분야 가공/장비 및 모듈화 사업 진출
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">산업 분야 및 사업분야 확대</p>
                </motion.div>
                {/* 상세 설명: 들여쓰기 및 작은 글씨 (마커 없음) */}
                <div className="ml-[80px] md:ml-[155px] mb-2 tracking-wide">
                  <motion.p
                    className="text-[#8C8C8C] text-base font-semibold "
                    variants={timelineItemVariants}
                  >
                    뿌리산업 ➔  2차전지 분야 확대
                  </motion.p>
                </div>
                <div className="ml-[80px] md:ml-[155px] mb-5 tracking-wide">
                  <motion.p
                    className="text-[#8C8C8C] text-base font-semibold"
                    variants={timelineItemVariants}
                  >
                    부품 정밀가공 ➔  정밀가공, 모듈화 서비스
                  </motion.p>
                </div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">벤처기업인증 갱신 (2022년)</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">뿌리기업인증 갱신 (2022년)</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">
                    소재부품장비 전문기업인증 (2022년)
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">
                    구조혁신사업 대상자 선정 (중진공)
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">신사옥 이전 (2022년)</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-10 relative ml-[90px] md:ml-[155px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">
                    매출 분야 확대 및 매출 200%이상 고성장
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute left-0 top-[1%] w-12 h-12 bg-[#0f172a] rounded-full border-[12px] border-gray-200 ml-32"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute left-0 top-[22%] w-12 h-12 bg-[#0f172a] rounded-full border-[12px] border-gray-200 ml-32"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.div
                className="absolute left-0 top-[61%] w-12 h-12 bg-[#0f172a] rounded-full border-[12px] border-gray-200 ml-32"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </section>
      </div>
      <hr className="my-8 border-gray-200" />

    </Layout>
    </>
  );
}
