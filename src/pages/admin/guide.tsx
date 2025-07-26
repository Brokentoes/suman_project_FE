import React, { useState } from 'react';
import { Users, MessageSquare, HelpCircle, Settings, BarChart3, Activity, Book, ChevronDown, ChevronRight, Code, FileText, Globe, Database, Lock, Zap, LucideIcon } from 'lucide-react';
import AdminHeader from '@/components/AdminHeader';
import { withAdminAuth } from '@/components/WithAdminAuth';

// 섹션 컴포넌트
interface GuideSectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function GuideSection({ title, icon: Icon, children, defaultOpen = false }: GuideSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition-all duration-200 rounded-xl"
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg border border-blue-500/30">
            <Icon className="h-6 w-6 text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        ) : (
          <ChevronRight className="h-5 w-5 text-slate-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="pl-16 text-slate-300 leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// 카드 컴포넌트
interface InfoCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: "blue" | "green" | "purple" | "red" | "orange";
}

// function InfoCard({ title, description, icon: Icon, color = "blue" }: InfoCardProps) {
//   const colorClasses = {
//     blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-400",
//     green: "from-green-500/20 to-green-600/20 border-green-500/30 text-green-400",
//     purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 text-purple-400",
//     red: "from-red-500/20 to-red-600/20 border-red-500/30 text-red-400",
//     orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 text-orange-400"
//   };

//   return (
//     <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-200">
//       <div className="flex items-start space-x-4">
//         <div className={`p-3 bg-gradient-to-r ${colorClasses[color]} rounded-lg border`}>
//           <Icon className="h-6 w-6" />
//         </div>
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
//           <p className="text-slate-300 leading-relaxed">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// 코드 블록 컴포넌트
interface CodeBlockProps {
  title: string;
  language: string;
  children: React.ReactNode;
}

function CodeBlock({ title, language, children }: CodeBlockProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
      <div className="bg-white/5 px-4 py-2 border-b border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-300">{title}</span>
          <span className="text-xs text-slate-400 uppercase">{language}</span>
        </div>
      </div>
      <div className="p-4">
        <pre className="text-sm text-slate-300 overflow-x-auto">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}

const AdminGuidePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/*Header*/}
      <AdminHeader />
      
      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* 서브헤더 */}
        <div className="flex items-center mb-8">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-4">
            <Book className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">관리자 가이드</h1>
            <p className="text-slate-300 mt-2">시스템 사용법 및 개발 가이드</p>
          </div>
        </div>

        {/* 빠른 시작 카드들 */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <InfoCard 
            title="빠른 시작" 
            description="관리자 페이지의 기본 기능과 사용법을 알아보세요."
            icon={Zap}
            color="green"
          />
          <InfoCard 
            title="기능 설명" 
            description="각 메뉴별 상세 기능과 활용 방법을 확인하세요."
            icon={Settings}
            color="blue"
          />
          <InfoCard 
            title="개발 가이드" 
            description="소스코드 구조와 개발 환경 설정을 안내합니다."
            icon={Code}
            color="purple"
          />
        </div> */}

        {/* 가이드 섹션들 */}
        <div className="space-y-6">
          {/* 시스템 개요 */}
          <GuideSection title="시스템 개요" icon={Globe} defaultOpen={true}>
            <div className="space-y-4">
              <p>
                이 관리자 페이지는 웹사이트의 전반적인 관리 기능을 제공합니다. 
                현대적인 React 기반으로 구축되어 있으며, 직관적인 UI/UX를 통해 
                효율적인 관리가 가능합니다.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-blue-300 mb-2">주요 특징</h4>
                <ul className="text-sm space-y-1 text-slate-300">
                  <li>• 반응형 디자인 지원</li>
                  <li>• 실시간 데이터 업데이트</li>
                  <li>• 직관적인 사용자 인터페이스</li>
                  <li>• 모듈화된 컴포넌트 구조</li>
                </ul>
              </div>
            </div>
          </GuideSection>

          {/* 메뉴 구조 */}
          <GuideSection title="메뉴 구조" icon={BarChart3}>
            <div className="space-y-4">
              <p>
                관리자 페이지는 다음과 같은 메뉴 구조로 구성되어 있습니다.
                각 메뉴는 특정 관리 기능을 담당합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-3">주요 메뉴</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center"><Users className="h-4 w-4 mr-2 text-blue-400" /> 사용자 관리</li>
                    <li className="flex items-center"><MessageSquare className="h-4 w-4 mr-2 text-green-400" /> 게시판 관리</li>
                    <li className="flex items-center"><HelpCircle className="h-4 w-4 mr-2 text-purple-400" /> FAQ 관리</li>
                    <li className="flex items-center"><Settings className="h-4 w-4 mr-2 text-orange-400" /> 시스템 설정</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-3">추가 기능</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center"><BarChart3 className="h-4 w-4 mr-2 text-blue-400" /> 통계 및 분석</li>
                    <li className="flex items-center"><Activity className="h-4 w-4 mr-2 text-green-400" /> 시스템 모니터링</li>
                    <li className="flex items-center"><Lock className="h-4 w-4 mr-2 text-red-400" /> 보안 관리</li>
                    <li className="flex items-center"><Book className="h-4 w-4 mr-2 text-purple-400" /> 도움말 및 가이드</li>
                  </ul>
                </div>
              </div>
            </div>
          </GuideSection>

          {/* 기능 사용법 */}
          <GuideSection title="기능 사용법" icon={Settings}>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">FAQ 관리</h4>
                <p className="mb-4">
                  자주 묻는 질문을 효율적으로 관리할 수 있습니다. 
                  카테고리별로 분류하여 사용자가 쉽게 찾을 수 있도록 구성되어 있습니다.
                </p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h5 className="font-semibold text-green-300 mb-2">주요 기능</h5>
                  <ul className="text-sm space-y-1 text-slate-300">
                    <li>• 새로운 FAQ 등록 및 수정</li>
                    <li>• 카테고리별 분류 관리</li>
                    <li>• 게시/비공개 상태 관리</li>
                    <li>• 실시간 미리보기 제공</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">사용자 관리</h4>
                <p className="mb-4">
                  등록된 사용자들의 정보를 관리하고 권한을 설정할 수 있습니다.
                  사용자 활동 로그도 함께 확인할 수 있습니다.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-300 mb-2">관리 항목</h5>
                  <ul className="text-sm space-y-1 text-slate-300">
                    <li>• 사용자 정보 수정</li>
                    <li>• 권한 등급 관리</li>
                    <li>• 계정 상태 관리</li>
                    <li>• 활동 로그 조회</li>
                  </ul>
                </div>
              </div>
            </div>
          </GuideSection>

          {/* 개발 환경 */}
          <GuideSection title="개발 환경" icon={Code}>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">기술 스택</h4>
                <p className="mb-4">
                  이 프로젝트는 최신 웹 기술 스택을 사용하여 구축되었습니다.
                  확장성과 유지보수성을 고려한 모던 아키텍처를 채택했습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">Frontend</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• React 18</li>
                      <li>• Tailwind CSS</li>
                      <li>• Lucide React Icons</li>
                      <li>• Modern JavaScript (ES6+)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">Backend</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Node.js</li>
                      <li>• Express.js</li>
                      <li>• PostgreSQL / MongoDB</li>
                      <li>• RESTful API</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">프로젝트 구조</h4>
                <CodeBlock title="디렉토리 구조" language="text">
{`/admin
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   └── Layout.jsx
│   ├── faq/
│   │   ├── FAQList.jsx
│   │   └── FAQForm.jsx
│   └── user/
│       ├── UserList.jsx
│       └── UserForm.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── FAQ.jsx
│   └── Guide.jsx
├── hooks/
│   └── useAPI.js
├── utils/
│   └── helpers.js
└── styles/
    └── globals.css`}
                </CodeBlock>
              </div>
            </div>
          </GuideSection>

          {/* API 문서 */}
          <GuideSection title="API 문서" icon={Database}>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">API 엔드포인트</h4>
                <p className="mb-4">
                  관리자 페이지에서 사용하는 주요 API 엔드포인트들입니다.
                  모든 API는 RESTful 규칙을 따르며 JSON 형식으로 데이터를 교환합니다.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2">FAQ 관리 API</h5>
                    <CodeBlock title="FAQ API 예시" language="javascript">
{`// FAQ 목록 조회
GET /api/admin/faqs

// FAQ 등록
POST /api/admin/faqs
{
  "category": "카테고리",
  "question": "질문",
  "answer": "답변",
  "is_published": true
}

// FAQ 수정
PUT /api/admin/faqs/:id
{
  "category": "수정된 카테고리",
  "question": "수정된 질문",
  "answer": "수정된 답변",
  "is_published": false
}

// FAQ 삭제
DELETE /api/admin/faqs/:id`}
                    </CodeBlock>
                  </div>

                  <div>
                    <h5 className="font-semibold text-white mb-2">사용자 관리 API</h5>
                    <CodeBlock title="User API 예시" language="javascript">
{`// 사용자 목록 조회
GET /api/admin/users

// 사용자 정보 수정
PUT /api/admin/users/:id
{
  "name": "이름",
  "email": "이메일",
  "role": "권한",
  "status": "활성화"
}

// 사용자 삭제
DELETE /api/admin/users/:id`}
                    </CodeBlock>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>

          {/* 추가 정보 */}
          <GuideSection title="추가 정보" icon={FileText}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-3">업데이트 내역</h4>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-white">v1.0.0 (2025.07.16)</p>
                        <p className="text-sm text-slate-300">초기 관리자 페이지 구축 완료</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-white">v1.1.0 (예정)</p>
                        <p className="text-sm text-slate-300">통계 대시보드 추가</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">문의 및 지원</h4>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-slate-300 mb-2">
                    시스템 사용 중 문제가 발생하거나 추가 기능이 필요한 경우 
                    개발팀으로 문의해 주세요.
                  </p>
                  <div className="text-sm text-slate-400">
                    <p>• 이메일: admin@example.com</p>
                    <p>• 내선: 1234</p>
                    <p>• 업무시간: 평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </GuideSection>
        </div>
      </div>
    </div>
  );
};

export default withAdminAuth(AdminGuidePage);