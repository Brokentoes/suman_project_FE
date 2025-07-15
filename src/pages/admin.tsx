import { useState } from 'react';
import axios from 'axios';

interface Recruitment {
  id: number;
  title: string;
  content: string;
  postedAt: string;
}

interface Inquiry {
  id: number;
  name: string;
  affiliation: string;
  phone: string;
  email: string;
  contect: string;
  created_at: string;
  treatment: boolean;
}

const AdminPage = () => {
  const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loadingRecruitments, setLoadingRecruitments] = useState(false);
  const [loadingInquiries, setLoadingInquiries] = useState(false);

  const handleFetchRecruitments = () => {
    setLoadingRecruitments(true);
    setError(null);

    axios
      .get<Recruitment[]>('https://virtserver.swaggerhub.com/bluemoon/api/recruitments')
      .then((res) => {
        setRecruitments(res.data);
      })
      .catch((err) => {
        console.error('채용공고 불러오기 실패:', err);
        setError('채용공고 로딩 실패');
      })
      .finally(() => {
        setLoadingRecruitments(false);
      });
  };

  const handleFetchInquiries = () => {
    setLoadingInquiries(true);
    setError(null);

    axios
      .get<Inquiry[]>('https://virtserver.swaggerhub.com/bluemoon/api/inquiries')
      .then((res) => {
        setInquiries(res.data);
      })
      .catch((err) => {
        console.error('문의 폼 불러오기 실패:', err);
        setError('문의 폼 로딩 실패');
      })
      .finally(() => {
        setLoadingInquiries(false);
      });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">관리자 페이지</h1>

      {/* 채용공고 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">채용공고 관리</h2>
        <button
          onClick={handleFetchRecruitments}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          disabled={loadingRecruitments}
        >
          {loadingRecruitments ? '불러오는 중...' : '채용공고 불러오기'}
        </button>

        <ul className="mt-4 space-y-4">
          {recruitments.map((job) => (
            <li key={job.id} className="border p-4 rounded shadow-sm">
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p className="text-sm text-gray-500">
                게시일: {new Date(job.postedAt).toLocaleDateString()}
              </p>
              <p className="mt-2">{job.content}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 문의폼 관리 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">문의폼 관리</h2>
        <button
          onClick={handleFetchInquiries}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          disabled={loadingInquiries}
        >
          {loadingInquiries ? '불러오는 중...' : '문의 내역 불러오기'}
        </button>

        <ul className="mt-4 space-y-4">
          {inquiries.map((inquiry) => (
            <li key={inquiry.id} className="border p-4 rounded shadow">
              <p><strong>이름:</strong> {inquiry.name}</p>
              <p><strong>소속:</strong> {inquiry.affiliation}</p>
              <p><strong>연락처:</strong> {inquiry.phone}</p>
              <p><strong>이메일:</strong> {inquiry.email}</p>
              <p><strong>내용:</strong> {inquiry.contect}</p>
              <p><strong>작성일:</strong> {new Date(inquiry.created_at).toLocaleString()}</p>
              <p><strong>처리상태:</strong> {inquiry.treatment ? '완료' : '미처리'}</p>
            </li>
          ))}
        </ul>
      </section>

      {error && <p className="text-red-600 mt-6">{error}</p>}
    </div>
  );
};

export default AdminPage;
