// contact.tsx
import { useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout"; // Layout 컴포넌트 임포트
import HeroSection from "@/components/HeroSection"; // HeroSection 컴포넌트 임포트
import BreadcrumbSection from "@/components/BreadcrumbSection"; // BreadcrumbSection 컴포넌트 임포트
import { motion, type Transition } from "framer-motion"; // motion, Transition 임포트
import Head from "next/head"; // Head 임포트

export default function InquiryFormPage() {
  // 컴포넌트 이름을 페이지에 맞게 변경
  const [form, setForm] = useState({
    name: "",
    affiliation: "",
    phone: "",
    email: "",
    contect: "", // 오타: 'contect' -> 'content' 또는 'contactContent'
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://192.168.100.106:8000/api/Inquiries/", form);
      alert("문의가 등록되었습니다.");
      // 폼 초기화
      setForm({
        name: "",
        affiliation: "",
        phone: "",
        email: "",
        contect: "",
      });
    } catch (error) {
      alert("등록 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  const fadeInVariants = {
    // ci.tsx에서 가져온 애니메이션 Variants
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } as Transition,
    },
  };

  return (
    <>
      <Head>
        <title>고객 문의 | 수만</title> {/* 페이지 타이틀 설정 */}
      </Head>
      <Layout>
        <HeroSection
          title="고객 문의"
          subtitle="Customer Inquiry"
          backgroundImage="/images/company_hero.png"
        />

        <BreadcrumbSection path="고객지원 > 문의하기" />

        <div className="content-wrapper py-20 px-4 md:px-8 bg-white flex justify-center items-center">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
            >
              <section className="max-w-3xl mx-auto">
                {" "}
                {/* 기존 InquiryForm의 section 태그 */}
                <h2 className="text-2xl font-bold mb-8 text-center">
                  고객 문의
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6 text-sm">
                  {/* 이름 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      이름<span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {/* 소속 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      소속<span className="text-red-500">*</span>
                    </label>
                    <input
                      name="affiliation"
                      value={form.affiliation}
                      onChange={handleChange}
                      required
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {/* 연락처 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      연락처<span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="예: 010-1234-5678"
                      required
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {/* 이메일 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      E-mail<span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      required
                      className="flex-1 border border-gray-300 px-3 py-2"
                    />
                  </div>
                  {/* 문의내용 */}
                  <div className="flex">
                    <label className="w-24 font-semibold">
                      문의내용<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="contect" // 오타 주의: 'contect'
                      value={form.contect}
                      onChange={handleChange}
                      required
                      className="flex-1 border border-gray-300 px-3 py-2 min-h-[150px]"
                    />
                  </div>
                  {/* 제출 버튼 */}
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 hover:bg-blue-700 transition"
                    >
                      등록
                    </button>
                  </div>
                </form>
              </section>
            </motion.div>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
      </Layout>
    </>
  );
}
