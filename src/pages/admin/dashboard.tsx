import { useEffect } from 'react';
import { Shield, Users, MessageSquare, HelpCircle, Settings, BarChart3, Activity, BookOpenText } from 'lucide-react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/useAuthStore';
import AdminHeader from '@/components/AdminHeader';

export default function AdminDashboard() {
  const router = useRouter();
  const { isLoggedIn, init } = useAuthStore();

    useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/admin/login');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;


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

  // 임시 방문자 수 - 수정필요.
  const stats = [
    { label: '총 방문자', value: '3', change: '+12%', icon: Activity },
    { label: '활성 채용공고', value: '8', change: '+2', icon: Users },
    { label: '미처리 문의', value: '23', change: '-5', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                  <p className="text-white text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-green-400 text-sm mt-1">{stat.change}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
              </div>
            </div>
          ))}
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
