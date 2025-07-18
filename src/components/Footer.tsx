"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-black text-sm mt-20">
      {/* 상단 레이아웃 */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
        {/* 왼쪽: 로고 + 슬로건 */}
        <div className="flex flex-col items-start space-y-3">
          <Image
            src="/images/logo_suman.png"
            alt="logo"
            width={60}
            height={60}
          />
          <p className="text-lg font-semibold leading-tight">
            패러다임을 바꾸는
            <br />
            선재산업의 글로벌 리더
          </p>
        </div>

        {/* 오른쪽: 메뉴 영역 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-2/3">
          {/* 메뉴 그룹 */}
          <div>
            <p className="font-semibold mb-2">회사소개</p>
            <ul className="space-y-1">
              <li>
                <Link href="/company/ceo">CEO 인사말</Link>
              </li>
              <li>
                <Link href="/company/vision">기업 비전</Link>
              </li>
              <li>
                <Link href="/company/history">연혁</Link>
              </li>
              <li>
                <Link href="/company/org">조직도</Link>
              </li>
              <li>
                <Link href="/company/ci">CI</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">사업분야</p>
            <ul className="space-y-1">
              <li>
                <Link href="/business/products">제품 소개</Link>
              </li>
              <li>
                <Link href="/business/services">서비스 소개</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">인재채용</p>
            <ul className="space-y-1">
              <li>
                <Link href="/recruit/people">인재상</Link>
              </li>
              <li>
                <Link href="/recruit/notices">채용공지</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">고객지원</p>
            <ul className="space-y-1">
              <li>
                <Link href="/support/channel">소통채널</Link>
              </li>
              <li>
                <Link href="/support/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/support/location">오시는 길</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="border-t border-gray-300" />

      {/* 하단 레이아웃 */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* 왼쪽 텍스트 */}
        <div>
          <p>
            ㈜ SUMAN | 주소: 대전광역시 대덕구 문평서로17번길 105(문평동) |
            사업자등록번호: 318-81-00161
          </p>
          <p>
            대표전화 : 042-934-1517 | FAX : 042-934-1516 | E-Mail :
            suman20140411@suman.co.kr{" "}
          </p>
        </div>

        {/* 오른쪽 링크 */}
        <div className="flex flex-wrap gap-4 text-gray-500">
          <Link href="/privacy">개인정보 보호정책</Link>
          <Link href="/reject-email">이메일 무단 수집거부</Link>
        </div>
      </div>
    </footer>
  );
}
