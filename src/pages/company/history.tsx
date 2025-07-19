// history.tsx
import Layout from "@/components/Layout"; // Layout 컴포넌트 임포트
import HeroSection from "@/components/HeroSection"; // HeroSection 컴포넌트 임포트
import BreadcrumbSection from "@/components/BreadcrumbSection"; // BreadcrumbSection 컴포넌트 임포트
import { motion, type Transition } from "framer-motion";

export default function HistoryPage() {
  // Framer Motion variants
  const fadeInRiseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" } as Transition,
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 자식 요소들이 0.2초 간격으로 나타남
        delayChildren: 0.3, // 컨테이너 애니메이션 후 0.3초 뒤 자식 애니메이션 시작
      },
    },
  };

  // 타임라인 항목의 개별 애니메이션
  const timelineItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" } as Transition,
    },
  };

  return (
    <Layout>
    {/* Layout 컴포넌트로 전체 페이지 내용을 감쌉니다.*/}
    
      {/* HeroSection 컴포넌트 사용 */}
      <HeroSection
        title={
          <span className="text-xl font-semibold tracking-normal">SUMAN</span>}
        subtitle={
          <span className="text-5xl font-bold tracking-[0.25em]">연 혁</span>
        }
        backgroundImage="/images/company_hero.png" // 해당 페이지에 맞는 배경 이미지 경로
      />
    

      {/* BreadcrumbSection 컴포넌트 사용 */}
      <BreadcrumbSection path="회사소개 > 연혁" />

      {/* 새로운 섹션 추가: "SUMAN은 끊임없는 혁신..." - DESIGN MODIFIED */}
      <section className="relative w-full h-[500px]">
        
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/history_suman.png')"
          }}>
          <div className="absolute inset-0 bg-[#1e293b]/85 z-10" />
           {/* 좌측 텍스트 내용 */}
          <div className="relative z-20 max-w-6xl mx-auto px-4 py-16 text-white">
            <h2 className="text-3xl font-medium mb-4">
              <p className="mb-2">SUMAN은 </p>
              <p className="mb-2">끊임없는 혁신과 신시장 개척을 통해 </p>
              <p>신뢰성 있는 기업으로 성장하였습니다.</p>
            </h2>
            <ul className="text-lg flex-col items-start space-y-6">
              <li className="relative w-fit bg-[#4A6178] text-white font-medium py-2 px-6 rounded-full z-10">
                신산업분야 가공 / 장비 및 모듈화 사업 진출
              </li>
              <li className="relative w-fit bg-[#4A6178] text-white font-medium py-2 px-6 rounded-full z-10">
                자동차 / 전기전자 정밀가공 / 장비 분야 확대
              </li>
              <li className="relative w-fit bg-[#4A6178] text-white font-medium py-2 px-6 rounded-full z-10">
                자동차 정밀가공 사업 진출
              </li>
            </ul>
          </div>

          {/* 우측 이미지 (Company Growth Arrow) 및 매출/임직원 정보 */}
          <div className="relative flex flex-col justify-center items-center h-full min-h-[300px] md:min-h-auto z-[100]">
            <img
              src="/images/image_31aa9b.jpg" // Use the new background image with the arrow
              alt="Company Growth Arrow"
              className="absolute inset-0 w-full h-full object-cover object-center z-10"
            />
            <div className="absolute bottom-[500px] right-[200px] z-[99999] text-left text-sm text-white drop-shadow-md">
              <p className="mb-1">
                매출액 <span className="font-bold"> 77억원</span> (2023년도 기준)
              </p>
              <p>
                임직원 수 <span className="font-bold">40명</span> (2024년도
                기준)
              </p>
            </div>
          </div>
        </div>

          

        
        {/* Company Growth text - positioned to match image */}
        <div className="absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-20 text-white text-5xl font-extrabold whitespace-nowrap hidden md:block">
          
        </div>

        <img
          src="/images/arrowww_suman.png"
          alt="Company Growth Arrow"
          className="absolute top-[35%] left-[35%] w-[900px] z-20 opacity-90 pointer-events-none"
        />
      </section>

      {/* main 태그는 Layout에서 이미 처리했으므로, 여기서는 div로 변경 */}
      <div className="content-wrapper">
        {/* 연혁 타임라인 섹션: 이미지와 동일하게 화면 중앙 정렬 및 제목 부분 스타일링 */}
        <section className="main-history-timeline py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-left">
            {/* Changed text-xl to text-3xl to make it larger */}
            <h2 className="text-3xl font-bold text-black mb-20">About us</h2>
            {/* 타임라인 본문 (선, 항목들)을 별도의 중앙 정렬 컨테이너로 감싸기 */}
            <div className="max-w-5xl mx-auto relative pl-10 md:pl-20">
              
              {/* 전체 타임라인을 오른쪽으로 이동 */}
              <motion.div
                className="timeline-container relative border-l-4 border-dotted border-gray-400" // 세로선 기본 설정
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
                  <div className="flex items-center absolute -left-2 top-[8px] ml-[-24px]">
                    <h3 className="timeline-year text-4xl md:text-4xl font-bold text-black bg-white pr-4 z-10 -translate-x-full">
                      2014
                    </h3>
                    {/* 점 제거되었음 */}
                  </div>
                  {/* "창업단계" 제목 */}
                  <div className="bg-gray-100 p-3 rounded-lg w-full ml-[60px] md:ml-[100px]">
                    <p className="text-xl font-bold text-black">창업단계</p>
                  </div>
                </motion.div>
                {/* 2014년 세부 항목 */}
                <motion.div
                  className="timeline-item mb-2 relative ml-[60px] md:ml-[100px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black"> ● 자동차 정밀가공 사업 진출</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-10 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">(주) 수만 설립 (2014년 4월)</p>
                </motion.div>

                {/* 2015~2020년 섹션 */}
                <motion.div
                  className="timeline-entry mt-16 mb-10 relative"
                  variants={fadeInRiseVariants}
                >
                  <div className="flex items-center absolute -left-2 top-[8px] ml-[-24px]">
                    <h3 className="timeline-year text-4xl md:text-4xl font-bold text-black bg-white pr-4 z-10 -translate-x-full">
                      2015 - 2020
                    </h3>
                    {/* 점 제거되었음 */}
                  </div>
                  {/* "시장 진입 단계" 제목 */}
                  <div className="bg-gray-100 p-3 rounded-lg w-full ml-[60px] md:ml-[100px]">
                    <p className="text-xl font-bold text-black">
                      시장 진입 단계
                    </p>
                  </div>
                </motion.div>
                {/* 2015~2020년 세부 항목 */}
                <motion.div
                  className="timeline-item mb-2 relative ml-[100px] md:ml-[100px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    ● 사업분야 확대 자동차 / 전기전자 정밀가공 / 장비 분야 확대
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">기업부설연구소 설립 및 인증</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    ISO 9001 / ISO 14001 / ISO 45001 획득
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    특허 제 10-1640080호 외 권리 확보
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    자동차 및 전기전자 분야 정밀 가공 매출처 확대
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">기술평가우수기업인증</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">벤처기업인증 / 뿌리기업인증</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-10 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    소재부품기업인증 / Clean사업장 인정
                  </p>
                </motion.div>

                {/* 2021 ~ 현재 섹션 */}
                <motion.div
                  className="timeline-entry mt-16 mb-10 relative"
                  variants={fadeInRiseVariants}
                >
                  <div className="flex items-center absolute -left-2 top-[8px] ml-[-24px]">
                    <h3 className="timeline-year text-4xl md:text-4xl font-bold text-black bg-white pr-4 z-10 -translate-x-full">
                      2021 - 현재
                    </h3>
                    {/* 점 제거되었음 */}
                  </div>
                  {/* "성장단계" 제목 */}
                  <div className="bg-gray-100 p-3 rounded-lg w-full ml-[60px] md:ml-[100px]">
                    <p className="text-xl font-bold text-black">성장단계</p>
                  </div>
                </motion.div>
                {/* 2021~현재 세부 항목 */}
                <motion.div
                  className="timeline-item mb-2 relative ml-[60px] md:ml-[100px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    ● 변화 / 구조혁신 신산업분야 가공 / 장비 및 모듈화 사업 진출
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">산업 분야 및 사업분야 확대</p>
                </motion.div>
                {/* 상세 설명: 들여쓰기 및 작은 글씨 (마커 없음) */}
                <div className="ml-[80px] md:ml-[130px] mb-2">
                  <motion.p
                    className="text-gray-600 text-sm"
                    variants={timelineItemVariants}
                  >
                    뿌리산업 -&gt; 2차전지 분야 확대
                  </motion.p>
                </div>
                <div className="ml-[80px] md:ml-[130px] mb-2">
                  <motion.p
                    className="text-gray-600 text-sm"
                    variants={timelineItemVariants}
                  >
                    부품 정밀가공 -&gt; 정밀가공, 모듈화 서비스
                  </motion.p>
                </div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">벤처기업인증 갱신 (2022년)</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">뿌리기업인증 갱신 (2022년)</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    소재부품장비 전문기업인증 (2022년)
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    구조혁신사업 대상자 선정 (중진공)
                  </p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-2 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">신사옥 이전 (2022년)</p>
                </motion.div>
                <motion.div
                  className="timeline-item mb-10 relative ml-[90px] md:ml-[115px]"
                  variants={timelineItemVariants}
                >
                  <p className="text-black">
                    매출 분야 확대 및 매출 200%이상 고성장
                  </p>
                </motion.div>
              </motion.div>
              <div className="absolute left-0 top-[0%] w-14 h-14 bg-[#0f172a] rounded-full border-[14px] border-gray-200 ml-13" />
              <div className="absolute left-0 top-[21%] w-14 h-14 bg-[#0f172a] rounded-full border-[14px] border-gray-200 ml-13" />
              <div className="absolute left-0 top-[61%] w-14 h-14 bg-[#0f172a] rounded-full border-[14px] border-gray-200 ml-13" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
