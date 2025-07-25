// index.tsx에 들어가는 문구

export const homeContentKor = {
//--------------------------------------------
//                   KOR
//--------------------------------------------  
    bannerImages: [
      '/images/banner1.png',
      '/images/banner2.png',
      '/images/banner3.png',
    ],

    section1Text: {
      title: '정밀한 기술이 만드는 내일의 기업',
      subtitle: '수만은 정밀 제조 분야의 깊은 know-how를 바탕으로, 고객 맞춤형 솔루션을 제공합니다.',
    },

    section3: {
      title: '정밀 부품, 모듈, 자동화 장비까지',
      subtitle: '미래 산업에 필요한 핵심 솔루션을 제조합니다',
      cards: [
        {
          title: '이차전지',
          subtitle: 'Secondary Battery',
          description: '고정밀 부품 / 모듈 설계',
          img: '/images/main_secondary_battery.png',
        },
        {
          title: '전기·전자',
          subtitle: 'Electrical & Electronics',
          description: '고정밀 부품 / 맞춤형 설비제작기술',
          img: '/images/main_electronics.png',
        },
        {
          title: '반도체',
          subtitle: 'Semiconductor',
          description: '고정밀 부품 / 솔루션 서비스 기술 융합',
          img: '/images/main_semiconductor.png',
        },
        {
          title: '자동차',
          subtitle: 'Mobility',
          description: '고정밀 가공기술',
          img: '/images/main_mobility.png',
        },
      ],
    },
    sectionCertifications: {
      title: '정부기관의 인증을 비롯해\nISO 품질·환경·안전경영 시스템을 모두 구축하여\n고객 중심의 고신뢰 생산 체계를 갖추고 있습니다.',
      tags: ['Technology Certification', 'Quality Assurance'],
      certifications: [
        { label: 'ISO 9001', img: null },
        { label: 'ISO 14001', img: null },
        { label: 'ISO 45001', img: null },
        { label: '벤처기업확인서', img: '/images/main_venture.png' },
        { label: '소·부·장 전문기업', img: null },
        { label: '뿌리기업확인서', img: null },
        { label: '중소기업확인서', img: null },
        { label: '품질환경안전', img: null },
      ],
      legal: '지식재산권·특허 등록 "피스톤링 제조장치 및 제조 방법"외 6건 보유',
    },
};

//--------------------------------------------
//                   ENG
//--------------------------------------------
export const homeContentEng = {
    bannerImages: [
      '/images/banner1.png',
      '/images/banner2.png',
      '/images/banner3.png',
    ],
    section1Text: {
      title: 'Tomorrow company that creates precision technology',
      subtitle: 'With deep know-how in precision manufacturing, SUMAN provides customized solutions.',
    },
    
    section3: {
      title: 'From Precision Parts to Automation Systems',
      subtitle: 'We manufacture essential solutions for future industries',
      cards: [
        {
          title: 'Secondary Battery',
          subtitle: 'Secondary Battery',
          description: 'Precision parts / module design',
          img: '/images/main_secondary_battery.png',
        },
        {
          title: 'Electrical & Electronics',
          subtitle: 'Electrical & Electronics',
          description: 'Precision parts / customized equipment manufacturing',
          img: '/images/main_electronics.png',
        },
        {
          title: 'Semiconductor',
          subtitle: 'Semiconductor',
          description: 'Fusion of precision parts / solution service technology',
          img: '/images/main_semiconductor.png',
        },
        {
          title: 'Mobility',
          subtitle: 'Mobility',
          description: 'Precision machining technology',
          img: '/images/main_mobility.png',
        },
      ],
    },
    sectionCertifications: {
      title: 'We are certified by government institutions and have established ISO-based quality, environment, and safety management systems.',
      tags: ['Technology Certification', 'Quality Assurance'],
      certifications: [
        { label: 'ISO 9001', img: null },
        { label: 'ISO 14001', img: null },
        { label: 'ISO 45001', img: null },
        { label: 'Venture Company Certificate', img: '/images/main_venture.png' },
        { label: 'Materials & Parts Specialist', img: null },
        { label: 'Root Company Certificate', img: null },
        { label: 'SME Certificate', img: null },
        { label: 'Quality/Environment/Safety', img: null },
      ],
      legal: 'Holding 6 intellectual property rights including "Piston Ring Manufacturing Device and Method"',
    },
};
