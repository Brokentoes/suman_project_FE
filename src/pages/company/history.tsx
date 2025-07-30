import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import BreadcrumbSection from "@/components/BreadcrumbSection";
import { motion, type Transition } from "framer-motion";
import Head from "next/head";
import { useLangStore } from "@/stores/langStore";
import { historyText } from "@/data/history";

export default function HistoryPage() {
  const { lang } = useLangStore();
  const text = historyText[lang];

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
        <title>{text.title} | SUMAN</title>
      </Head>
      <Layout>
        <HeroSection
          title={text.title}
          subtitle={text.subtitle}
          backgroundImage="/images/sub_banner/company_banner.png"
        />
        <BreadcrumbSection path={`회사소개 > ${text.title}`} />

        <section className="relative w-full h-[700px]">
          <div
            className="absolute inset-0 bg-cover z-0"
            style={{
              backgroundImage: "url('/images/history_suman.png')",
              backgroundPosition: "center 70%",
            }}
          >
            <div className="absolute inset-0 bg-[#020c23]/85 z-10" />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-8 xl:px-0 py-24 text-white"
            >
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 tracking-wide whitespace-pre-line">
                {`${text.highlight.line1}\n${text.highlight.line2}\n${text.highlight.line3}`}
              </h2>

              <ul className="text-xl flex-col items-start space-y-6 mt-7 tracking-wide">
                {text.bulletList.map((item, index) => (
                  <motion.li
                    key={index}
                    className="relative w-fit bg-white/15 text-white font-medium py-3.5 px-6 rounded-full z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.2,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="absolute top-[620px] right-[360px] z-20 text-right text-sm text-gray-400 drop-shadow-md space-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>{text.salesInfo.revenue}</p>
              <p>{text.salesInfo.employees}</p>
            </motion.div>
          </div>
        </section>

        <section className="main-history-timeline py-28 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-left">
            <motion.h2
              className="text-base sm:text-lg lg:text-2xl font-semibold text-black mb-28"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {text.aboutUsTitle}
            </motion.h2>

            <div className="max-w-5xl mx-auto relative pl-26 md:pl-36">
              <motion.div
                className="absolute left-[150px] top-12 h-full border-l-2 border-dashed border-gray-300"
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "100%" }}
                transition={{ duration: 1.0, delay: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.div
                className="timeline-container relative"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {text.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-entry mb-10 relative"
                    variants={fadeInRiseVariants}
                  >
                    <div className="flex items-center absolute -left-2 top-[18px] ml-[-24px]">
                      <h3 className="timeline-year text-3xl md:text-3xl font-bold text-black bg-white pr-4 z-10 -translate-x-full">
                        {item.year}
                      </h3>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-[30px] w-[870px] ml-[60px] md:ml-[100px]">
                      <p className="text-2xl font-bold text-black tracking-wide ml-4">
                        {item.stage}
                      </p>
                    </div>

                    {item.details.map((line, idx) => (
                      <motion.div
                        key={idx}
                        className="timeline-item mb-3 relative ml-[90px] md:ml-[155px]"
                        variants={timelineItemVariants}
                      >
                        <p className="text-lg text-[#4C4C4C] font-semibold tracking-wide">
                          <span dangerouslySetInnerHTML={{ __html: line }} />
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <hr className="my-8 border-gray-200" />
      </Layout>
    </>
  );
}
