// pages/support/inquiry.tsx or 적절한 위치

import { useState } from 'react';
import axios from 'axios';

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: '',
    affiliation: '',
    phone: '',
    email: '',
    contect: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://192.168.100.95:8000/api/Inquiries/', form);
      alert('문의가 등록되었습니다.');
    } catch (error) {
      alert('등록 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">고객 문의</h2>
      <form onSubmit={handleSubmit} className="space-y-6 text-sm">
        {/* 이름 */}
        <div className="flex">
          <label className="w-24 font-semibold">이름<span className="text-red-500">*</span></label>
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
          <label className="w-24 font-semibold">소속<span className="text-red-500">*</span></label>
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
          <label className="w-24 font-semibold">연락처<span className="text-red-500">*</span></label>
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
          <label className="w-24 font-semibold">E-mail<span className="text-red-500">*</span></label>
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
          <label className="w-24 font-semibold">문의내용<span className="text-red-500">*</span></label>
          <textarea
            name="contect"
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
  );
}
