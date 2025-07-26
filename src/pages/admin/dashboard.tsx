import { useEffect, useState } from 'react';
import { Users, MessageSquare, HelpCircle, BarChart3, Activity, BookOpenText } from 'lucide-react';
import { useRouter } from 'next/router';
import AdminHeader from '@/components/AdminHeader';
import {fetchMonthlyVisitors } from '@/lib/api/analytic';
import { withAdminAuth } from '@/components/WithAdminAuth';
import  MonthlyVisitorsChart  from '@/components/VisitorsChart';

interface AnalyticData {
  total_users: number;
  change_percentage: number;
}

function AdminDashboard() {
  const router = useRouter();
  const [data, setData] = useState<{ yearMonth: number; visitors: number }[]>([]);

// 방문자 추이 분석 데이터 요청 - 페이지 접속시 요청
  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchMonthlyVisitors();
        setData(result);
        console.log('방문자데이터: ',result);
      } catch (err) {
        console.error('Failed to load visitor data:', err);
      }
    };
    loadData();
  }, []);

  const menuItems = [
    {
      title: '채용 관리',
      description: '채용 공고 및 지원자 관리',
      icon: Users,
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800',
      path: '/admin/recruit'
    },
    {
      title: '문의폼 관리',
      description: '고객 문의 및 응답 관리',
      icon: MessageSquare,
      color: 'from-green-500 to-green-700',
      hoverColor: 'hover:from-green-600 hover:to-green-800',
      path: '/admin/contact'
    },
    {
      title: 'FAQ 관리',
      description: '자주 묻는 질문 관리',
      icon: HelpCircle,
      color: 'from-purple-500 to-purple-700',
      hoverColor: 'hover:from-purple-600 hover:to-purple-800',
      path: '/admin/faq'
    },
    {
      title: '시스템 가이드',
      description: '홈페이지 설정 가이드',
      icon: BookOpenText,
      color: 'from-gray-500 to-gray-700',
      hoverColor: 'hover:from-gray-600 hover:to-gray-800',
      path: '/admin/guide'
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <AdminHeader />
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h2 className="text-xl font-bold mb-4 text-white">월별 방문자 추이</h2>
              <MonthlyVisitorsChart data={data} />
            </div>
        </div>

        {/* Main Menu */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 mr-2 text-blue-400" />
            관리 메뉴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${item.color} ${item.hoverColor} p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                onClick={() => {
                  router.push(item.path)
                  console.log(`Navigate to: ${item.path}`);
                }}
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <item.icon className="h-12 w-12 text-white/90" />
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg opacity-30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default withAdminAuth(AdminDashboard);
