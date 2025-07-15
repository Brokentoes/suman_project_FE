import Image from 'next/image';
import Link from "next/link";
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useState } from 'react';

// Header Items
const NAV_ITEMS = [
  {
    label: '회사소개',
    href: '/company/ceo',
    submenu: [
      { label: 'CEO 인사말', href: '/company/ceo' },
      { label: '기업 비전', href: '/company/vision' },
      { label: '연혁', href: '/company/history' },
      { label: '조직도', href: '/company/org' },
      { label: 'CI', href: '/company/ci' },
      { label: '오시는 길', href: '/company/location' },
    ],
  },
  {
    label: '사업분야',
    href: '/business/service',
    submenu: [
      { label: '서비스 소개', href: '/business/service' },
      { label: '제품 소개', href: '/business/product' },
    ],
  },
  {
    label: '인재채용',
    href: '/careers/philosophy',
    submenu: [
      { label: '인재상', href: '/careers/philosophy' },
      { label: '채용공고', href: '/careers/notice' },
    ],
  },
  {
    label: '고객지원',
    href: '/support/faq',
    submenu: [
      { label: 'FAQ', href: '/support/faq' },
      { label: '문의하기', href: '/support/contact' },
    ],
  },
];


export default function Header() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="w-full bg-white/60 backdrop-blur-sm shadow fixed top-0 z-50">
      {/* 로고 버튼 */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo_suman.png"
            alt="회사 로고"
            width={60}
            height={60}
            className="cursor-pointer"
            role="button"
          />
        </Link>

      {/* 메뉴 : 호버링시 하위 메뉴 토글*/}  
        <nav className="flex space-x-10 text-sm font-medium text-gray-700">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={item.label}
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Link href={item.href} className="hover:text-blue-600">
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* 언어변경 버튼 */}
        <LanguageSwitcher /> 
      </div>

      {/* 추가 하위 메뉴 영역 */}
      {hoveredIndex !== null && (
        <div
          className="absolute top-full left-0 w-full bg-white border-t shadow z-40"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex space-x-6 text-sm text-gray-700 justify-center">
            {NAV_ITEMS[hoveredIndex].submenu.map((sub) => (
              <Link
                key={sub.label}
                href={sub.href}
                className="hover:text-blue-600 whitespace-nowrap"
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
