// src/components/BreadcrumbSection.tsx
import React from "react";

interface BreadcrumbSectionProps {
  path: string; // 예: "회사소개 > CI"
}

export default function BreadcrumbSection({ path }: BreadcrumbSectionProps) {
  return (
    <section className="breadcrumb-section bg-gray-700 py-4 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-md">{path}</p>
      </div>
    </section>
  );
}
