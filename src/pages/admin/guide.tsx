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
          <GuideSection title="개발 환경" icon={Code}>
            <div className="space-y-6">
              {/* 기술 스택 */}
              <div>
                <h4 className="font-semibold text-white mb-3">사용 기술 스택 - 프론트와 백엔드 모두 Render.com에 배포되어 있습니다.</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">Frontend</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Next.js 13 (App Router)</li>
                      <li>• TypeScript</li>
                      <li>• Tailwind CSS</li>
                      <li>• Zustand (Auth Store)</li>
                      <li>• Axios / SWR</li>
                      <li>• Lucide React Icons</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h5 className="font-semibold text-white mb-3">Backend</h5>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Django 4.x + Django REST Framework</li>
                      <li>• PostgreSQL</li>
                      <li>• Docker / docker-compose</li>
                      <li>• Google Analytics Data API</li>
                      <li>• 서비스 계정 기반 인증</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 프로젝트 구조 */}
              <div>
                <h4 className="font-semibold text-white mb-3">프론트엔드 폴더 구조</h4>
                <CodeBlock title="suman 프로젝트 구조" language="bash">
          {`suman/
          ├── public/
          ├── src/
          │   ├── components/         # 공통 UI 컴포넌트
          │   ├── data/               # 정적 텍스트, 번역 데이터, 슬로건, 연혁 등
          │   ├── lib/                # axios 인스턴스 등 API 모듈
          │   ├── pages/              # Next.js 라우팅 페이지
          │   │   ├── admin/          # 관리자 페이지 (dashboard, faq, recruit 등)
          │   │   └── company/        # 회사소개 하위 페이지
          │   ├── stores/             # zustand 상태 관리 (auth 등)
          │   └── styles/             # Tailwind 기반 CSS 설정
          ├── .env.local              # 환경변수 (백엔드 URL 등)
          ├── next.config.js
          ├── tsconfig.json
          └── package.json`}
                </CodeBlock>
              </div>

              {/* 개발 조건 */}
              <div>
                <h4 className="font-semibold text-white mb-3">개발 및 빌드 환경</h4>
                <div className="bg-slate-800/50 rounded-lg p-4 text-sm text-slate-300 space-y-2">
                  <p>• Node.js v18 이상 권장</p>
                  <p>• VSCODE IDE에서 `npm install` 또는 `pnpm install` 후 개발 가능</p>
                  <p>• 로컬에서 `npm run dev` 실행 시 <code>localhost:3000</code>에서 작동</p>
                  <p>• 정적 빌드는 <code>npm run build</code></p>
                </div>
              </div>

              {/* 주의 사항 */}
              <div>
                <h4 className="font-semibold text-white mb-3">주의사항</h4>
                <ul className="text-sm text-slate-300 list-disc pl-5 space-y-1">
                  <li><strong>임의 수정금지</strong>: `/src/pages`에 있는 폴더의 코드를 임의로 수정하시면 배포시 문제가 발생할 수 있습니다.</li>
                  <li><strong>정적 텍스트 수정</strong>: 슬로건/인재상/연혁 등은 백엔드가 아닌 `/data` 파일에서 수정해야 반영됩니다.</li>
                  <li><strong>관리자 인증</strong>: JWT 토큰 + localStorage 기반이며 `zustand`로 관리됩니다. 임의 수정 금지</li>
                  <li><strong>빌드 오류</strong>: TypeScript 문법 에러가 발생하면 배포 실패할 수 있으므로 사전 확인 필수</li>
                </ul>
              </div>
            </div>
          </GuideSection>


          {/* 메뉴 구조 */}
          <GuideSection title="중요) 코드 수정 가이드" icon={FileText}>
            <div className="space-y-4">
              <p>
                기본적인 문구, 이미지, 슬로건, 인재상 등 한/영 문구 수정은 별도의 API가 아닌
                <code className="text-blue-400">/data</code> 폴더 내의 정적 TypeScript 파일을 통해 관리됩니다. <br />반드시 이곳에서만 문구를 수정해주세요.
                <code className="text-blue-400">/pages</code> 내부 폴더에서 임의로 수정하시면 배포가 불가능해질 수도 있습니다.
              </p>

              <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                <p className="text-slate-300">예시:</p>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li><code>/data/home.ts</code> - 메인 페이지 텍스트 (한/영 다국어 지원)</li>
                  <li><code>/data/philosophy.ts</code> - 인재상 및 핵심 가치</li>
                  <li><code>/data/history.ts</code> - 회사 연혁</li>
                  <li><code>/data/faq.ts</code> - FAQ 데이터</li>
                </ul>
              </div>

              <CodeBlock title="문구 수정 예시" language="ts">
          {`// /data/home.ts
          export const homeContent = {
            kor: {
              slogan: "정밀한 기술이 만드는 내일의 기업",
              description: "혁신적인 솔루션과 최적의 서비스를 제공합니다.",
            },
            eng: {
              slogan: "Tomorrow's enterprise built with precision",
              description: "We deliver innovative solutions and optimized service.",
            }
          };`}
              </CodeBlock>

              <p className="text-sm text-slate-400">
                ⚠ 변경 시에는 <strong>TypeScript 문법 오류</strong>가 나지 않도록 유의해 주세요.
              </p>
            </div>
          </GuideSection>

          {/* 기능 사용법 */}
          <GuideSection title="CI/CD 및 배포 구조" icon={Globe}>
            <div className="space-y-4">
              <p>
                이 프로젝트는 <strong>GitHub Organization</strong> 저장소에 등록되어 있으며,
                <strong>Render</strong> 플랫폼을 통해 자동 배포됩니다.
              </p>

              <div className="bg-slate-800/50 rounded-lg p-4 space-y-2 text-slate-300 text-sm">
                <p>🛠 <strong>배포 구조:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>프론트: Render의 static site (Next.js 빌드 결과물)</li>
                  <li>백엔드: Django + PostgreSQL (Render web service)</li>
                  <li>CI/CD: 수정후 Push하면 GitHub Organization를 통한 자동 빌드 + 배포</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-lg p-4 space-y-2 text-slate-300 text-sm">
                <p>🛠 <strong>Render 내부 설정 정보</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>현재 프론트와 백엔드는 각각 다른 Render 계정에서 실행중입니다. 주로 이용하실 계정은 프론트 계정입니다.</li>
                  <li>프론트와 백엔드 소스코드는 GitHub주소를 통해 연결되어 있습니다. 주소는 다음과 같습니다: https://github.com/BLUEMOON-SUMAN</li>
                  <li>현재 커스텀도메인을 통해 www.suman.co.kr를 사용중입니다.</li>
                  <li>Enviornment탭 내부 Environment Variables는 카카오맵 API/ Django key / GA server Key 등을 받기 위한 암호가 등록되어 있습니다.</li>
                </ul>
              </div>
              

              <p className="text-sm text-slate-400">
                ⚠️ 배포 중단이나 실패 시에는 Render.com 페이지에서 my workspace 이동, Events 탭에서 로그 확인 가능
              </p>
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