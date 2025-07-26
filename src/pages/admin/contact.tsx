import { useEffect, useState } from 'react';
import { fetchInquiries, markInquiryAsRead } from '@/lib/api/contact';
import { MessageSquare, Mail, User, Building, FileText, CheckCircle, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import  AdminHeader from '@/components/AdminHeader';
import { withAdminAuth } from '@/components/WithAdminAuth';

interface Inquiry {
  id: number;
  name: string;
  affiliation: string;
  phone: string;
  email: string;
  contect: string;
  treatment: boolean;
  created_at: Date;
}

const AdminContactPage = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // 페이지 진입 시 get 요청으로 문의 리스트 로드
  useEffect(() => {
  const fetchInquiriesList = async () => {
    try {
      console.log('문의 리스트 불러오기 시작');
      const data = await fetchInquiries();
      setInquiries(data);
    } catch (err) {
      console.error('문의 리스트 불러오기 실패:', err);
    }
  };

  fetchInquiriesList();
}, []);

    // 읽음 처리 함수
  const handleMarkAsRead = async (id: number) => {
    try {
      await markInquiryAsRead(id);
      console.log(`문의id: ${id} 읽음 처리 완료`);
      // 처리된 항목 상태 업데이트
      setInquiries(prev =>
        prev.map(item => (item.id === id ? { ...item, treatment: true } : item))
      );
    } catch (err) {
      console.error(`❌ 문의id: ${id} 읽음 처리 실패:`, err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AdminHeader />
      <div className="p-8">
        {/* 페이지 헤더 */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">문의폼 관리</h1>
            <p className="text-slate-300 mt-1">읽지않은 문의부터 상단에 배치됩니다.</p>
          </div>
        </div>

        {inquiries.length === 0 ? (
          <div className="text-center py-16">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm inline-block">
              <MessageSquare className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-300 text-lg">문의 내역이 없습니다.</p>
              <p className="text-slate-500 text-sm mt-2">새로운 문의가 오면 여기에 표시됩니다.</p>
            </div>
          </div>
        ) : (
          <ul className="space-y-6">
            {inquiries.map((inquiry) => {
              const isExpanded = expandedId === inquiry.id;

              return (
                <li
                  key={inquiry.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 cursor-pointer hover:bg-slate-700/50 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/10 transform hover:scale-[1.02]"
                  onClick={() =>
                    setExpandedId(isExpanded ? null : inquiry.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-blue-400" />
                        <div>
                          <p className="text-sm text-slate-400">이름</p>
                          <p className="text-white font-semibold">{inquiry.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Building className="h-5 w-5 text-emerald-400" />
                        <div>
                          <p className="text-sm text-slate-400">소속</p>
                          <p className="text-slate-200">{inquiry.affiliation}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-sm text-slate-400">이메일</p>
                          <p className="text-slate-200">{inquiry.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {inquiry.treatment ? (
                        <span className="flex items-center space-x-1 text-emerald-400 bg-emerald-900/20 px-3 py-1 rounded-full text-sm">
                          <CheckCircle className="h-4 w-4" />
                          <span>읽음</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 text-orange-400 bg-red-900/20 px-3 py-1 rounded-full text-sm">
                          <Eye className="h-4 w-4" />
                          <span>읽지않음</span>
                        </span>
                      )}
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-slate-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-700/50">
                      <div className="flex items-center space-x-2 mb-4">
                        <FileText className="h-5 w-5 text-slate-400" />
                        <p className="text-slate-300 font-medium">문의내용:</p>
                      </div>
                      <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-600/30 mb-6">
                        <p className="whitespace-pre-wrap text-slate-200 leading-relaxed">
                          {inquiry.contect}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        {inquiry.treatment ? (
                          <span className="flex items-center space-x-2 text-emerald-400 font-semibold">
                            <CheckCircle className="h-5 w-5" />
                            <span>이미 읽음</span>
                          </span>
                        ) : (
                          <button
                            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                            onClick={(e) => {
                              e.stopPropagation(); // 부모 클릭 방지
                              handleMarkAsRead(inquiry.id);
                            }}
                          >
                            <Eye className="h-4 w-4" />
                            <span>읽음처리</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default withAdminAuth(AdminContactPage);