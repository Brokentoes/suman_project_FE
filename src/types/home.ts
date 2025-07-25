// index.tsx Props 타입 정의
export interface HomePageProps {
  content:{
    bannerImages: string[];
    section1Text: {
      title: string;
      subtitle: string;
    };
    section3: {
      title: string;
      subtitle: string;
      cards: Array<{
        img: string;
        title: string;
        subtitle: string;
        description: string;
      }>;
    };
    sectionCertifications: {
      title: string;
      tags: string[];
      certifications: Array<{
        label: string;
        img?: string | null;
      }>;
      legal: string;
    };
  }
}
