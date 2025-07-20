import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";

// 카드 개별 컴포넌트
function TalentCard({ traitData, bgImage }: { traitData: { title: string; desc: string }, bgImage: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative flex flex-col justify-end p-6 rounded-lg shadow-md overflow-hidden min-h-[500px]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath:
          "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-40 rounded-lg"
        style={{
          clipPath:
            "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)",
        }}
      ></div>
      <div className="relative z-10 text-white">
        <h3 className="text-2xl font-bold mb-2 whitespace-pre-line">{traitData.title}</h3>
        <p className="text-sm whitespace-pre-line leading-relaxed">{traitData.desc}</p>
      </div>
    </motion.div>
  );
}

export default function TalentPage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemRiseVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" } as Transition,
    },
  };

  const traits = [
    {
      key: "sincerity",
      title: "성실한 인재",
      desc: "맡은 바 책임을 다하며\n성실하게 일하는 자세를 지닌 인재",
    },
    {
      key: "challenge",
      title: "도전하는 인재",
      desc: "새로운 가능성을 탐구하고\n끊임없이 도전하는 인재",
    },
    {
      key: "creativity",
      title: "창의적인 인재",
      desc: "유연한 사고로\n새로운 가치를 창출하는 인재",
    },
    {
      key: "communication",
      title: "소통하는 인재",
      desc: "열린 마음으로 소통하고\n팀워크를 중시하는 인재",
    },
    {
      key: "passion",
      title: "열정적인 인재",
      desc: "자신의 일에 몰입하고\n뜨거운 열정으로 성과를 내는 인재",
    },
  ];

  return (
    <Layout>
      <HeroSection
        title="인재상"
        subtitle="Our Talent"
        backgroundImage="/images/talent-hero-bg.jpg"
      />

      <section className="breadcrumb-section bg-gray-700 py-4 px-4 md:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-md">회사소개 &gt; 인재상</p>
        </div>
      </section>

      <div className="content-wrapper py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              (주)수만그룹은 이런 인재를 찾습니다.
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              도전과 혁신을 통해 끊임없이 성장하며, <br />
              고객과 사회에 기여하는 열정적인 인재를 기다립니다.
            </p>
          </motion.div>

          {/* 카드 그리드 */}
          <motion.div
            className="grid grid-cols-12 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            {/* 위 3개 카드 */}
            {traits.slice(0, 3).map((trait) => (
              <motion.div key={trait.key} className="col-span-12 md:col-span-4" variants={itemRiseVariants}>
                <TalentCard
                  traitData={{ title: trait.title, desc: trait.desc }}
                  bgImage={`/images/talent_${trait.key}.jpg`}
                />
              </motion.div>
            ))}

            {/* 아래 2개 카드 (중앙 정렬 교차 배치) */}
            <motion.div className="col-span-12 md:col-start-3 md:col-span-4" variants={itemRiseVariants}>
              <TalentCard
                traitData={{ title: traits[3].title, desc: traits[3].desc }}
                bgImage={`/images/talent_${traits[3].key}.jpg`}
              />
            </motion.div>
            <motion.div className="col-span-12 md:col-span-4" variants={itemRiseVariants}>
              <TalentCard
                traitData={{ title: traits[4].title, desc: traits[4].desc }}
                bgImage={`/images/talent_${traits[4].key}.jpg`}
              />
            </motion.div>
          </motion.div>

          {/* 인재상 관련 이미지 */}
          <motion.div
            className="flex justify-center items-center mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <Image
              src="/images/talent-group.png"
              alt="SUMAN Team"
              width={800}
              height={450}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
