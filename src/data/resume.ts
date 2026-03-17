export const personalInfo = {
  name: '김재형',
  phone: '010.2905.3332',
  email: 'emah@nate.com',
  portfolio: 'https://33upsiege.github.io',
  tagline: '7년차 프론트엔드 엔지니어',
  summary: [
    'Next.js 기반 대규모 플랫폼 서비스 및 이벤트 페이지 개발 경험 보유',
    '대규모 트래픽 환경에서 UI 아키텍처 설계, 상태관리 전략, 인터랙션 구현, 데이터 시각화 담당',
    'SWR 기반 서버 상태 캐싱과 API 요청 최적화를 통한 성능 개선 및 안정적 서비스 운영',
    '모바일 웹뷰 연동 및 크로스브라우징 대응 경험 보유, 사용자 접점의 안정적인 서비스 운영에 집중'
  ]
}

export interface ProjectImage {
  thumb: string  // 1200px — 갤러리 썸네일
  full: string   // 1920px — 라이트박스
}

export interface Project {
  name: string
  period: string
  highlights: string[]
  tags?: string[]
  images?: ProjectImage[]
}

export interface Experience {
  company: string
  period: string
  duration: string
  type?: '정규직' | '계약직' | ''
  role: string
  description: string
  projects: Project[]
}

export const experiences: Experience[] = [
  {
    company: '주식회사 넥슨유니버스',
    period: '2024.07 – 재직중',
    duration: '1년 9개월',
    type: '',
    role: '프론트엔드 엔지니어',
    description: 'MapleStory Universe 웹 플랫폼 개발, 고도화 및 유지보수',
    projects: [
      {
        name: '라이브 서비스 기능 고도화 및 유지보수',
        period: '2025.08 – 2026.02',
        highlights: [
          '크로스브라우징 대응 (Chrome, Edge, Firefox, Safari) — PDF 렌더링 embed 브라우저별 동작 차이 → iframe 재작업, Safari Date 파싱 오류(YYYY-MM-DD 미지원) -> YYYY/MM/DD 포맷 변환 처리브라우저별 폰트 불일치 -> 공통 폰트 채택으로 통일',
          '백오피스 연동 동적 콘텐츠 시스템 구축 (약관 / 배너 / 공지사항 노출 조건 기반 렌더링)',
          '게시글 이모티콘 반응 시스템: SWR 캐싱 + API 호출 디바운스로 요청 최소화',
          'NXPC 시세 실시간 반영: SSE 검토 후 Polling 채택, 조건부 요청으로 서버 부하 최소화',
          '인터랙션 중심 플랫폼 기능 레이어 개발 (패럴랙스 스크롤, 애니메이션, 정적 리소스 분리 및 캐싱)',
          'D3.js 차트 커스터마이징 및 Git Submodule 기반 재사용 구조 설계',
          'BFF 기반 RESTful API 연동, SWR 서버 상태, 컴포넌트 단위 로컬 상태 분리로 복잡도 최소화',
        ],
        tags: ['Next.js', 'TypeScript', 'SWR', 'D3.js', 'GitLab CI/CD'],
        images: [
          { thumb: '/images/uv_01.jpg', full: '/images/full/uv_01.jpg' },
          { thumb: '/images/uv_02.jpg', full: '/images/full/uv_02.jpg' },
          { thumb: '/images/uv_03.jpg', full: '/images/full/uv_03.jpg' },
        ]
      },
      {
        name: 'AI 기반 개발 워크플로우 도입',
        period: '2025.11 – 2026.02',
        highlights: [
          'GitLab 커밋 기록 기반 Jira 워크로그 자동 생성 도구 커스터마이징 (Claude Code hooks 활용)',
          'Claude Code CLI 활용 환경변수 자동화 및 반복 작업 스프린트 생산성 향상',
          '설계 초안 검증 및 코드 개선안 비교, 검토를 통한 시간 단축 효과',
        ],
        tags: ['Claude Code']
      },
      {
        name: '아이템 강화(스타캐치) 미니게임 웹 구현',
        period: '2025.06 – 2025.07',
        highlights: [
          '오브젝트 좌우 이동 인터랙션 (애니메이션 + 입력 처리) 및 중앙 판정 영역 기반 성공/실패 로직 구현',
          '판정 결과에 따른 UI 상태 전환 및 강화 단계별 상태 관리',
        ],
        tags: ['React', 'TypeScript', 'Animation'],
        images: [
          { thumb: '/images/starcatch_1.jpg', full: '/images/full/starcatch_1.jpg' },
          { thumb: '/images/smithy_2.jpg',    full: '/images/full/smithy_2.jpg' },
          { thumb: '/images/modal_5.jpg',     full: '/images/full/modal_5.jpg' },
        ]
      },
      {
        name: '런칭 이벤트 및 사전예약 페이지 개발',
        period: '2025.03 – 2025.05',
        highlights: [
          '목표 10만명 규모 사전예약 이벤트 페이지 — 대규모 트래픽 대응 구조 설계',
          'SWR 캐싱 전략 + 정적 리소스 분리 + API 디바운스 적용으로 네트워크 요청 최소화',
          '예외 처리 및 사용자 피드백 로직 전체 구현',
        ],
        tags: ['Next.js', 'SWR', 'CDN', 'TypeScript']
      },
      {
        name: 'D3.js 기반 인게임 아이템 강화 차트 구현',
        period: '2024.11 – 2024.12',
        highlights: [
          '게임 내 아이템 강화 시도 횟수, 사용 재화 데이터 시각화',
          'Line / Bar 차트 + Zoom In/Out 인터랙션 + 필터 기능 구현',
        ],
        tags: ['D3.js', 'TypeScript', 'React'],
        images: [
          { thumb: '/images/dp_1.jpg', full: '/images/full/dp_1.jpg' },
          { thumb: '/images/dp_2.jpg', full: '/images/full/dp_2.jpg' },
        ]
      },
      {
        name: 'SPA 랭킹 페이지 개발',
        period: '2024.07 – 2024.09',
        highlights: [
          '베타 기간 수집 유저 데이터 기반 랭킹, 검색 페이지 개발',
          'SPA 구조 기반으로 페이지 설계 및 클라이언트 중심 인터랙션 구현',
          'SCSS Module 기반 스타일링, 사내 공용 라이브러리 확장 및 Nexus 기반 배포',
        ],
        tags: ['Next.js', 'SCSS Module', 'Nexus', 'TypeScript']
      },
    ]
  },
  {
    company: '무신사 soldout',
    period: '2021.09 – 2024.05',
    duration: '2년 9개월',
    type: '정규직',
    role: '프론트엔드 엔지니어',
    description: '한정판 상품 정가품 검수 기반 리셀 플랫폼 FE 개발',
    projects: [
      {
        name: 'Vue2 → React18 마이그레이션',
        period: '2023.11 – 2024.01',
        highlights: [
          '결제 및 상품 상세 페이지 포함 주요 컴포넌트 마이그레이션 (3인 협업)',
          'Zustand 전역 상태 관리 + React Query 데이터 페칭 + React Hook Form 폼 검증 도입',
          'Emotion 기반 스타일링 적용으로 유지보수성 및 확장성 개선',
        ],
        tags: ['React 18', 'Zustand', 'React Query', 'Emotion', 'TypeScript']
      },
      {
        name: 'SEO 개발 (단독 진행)',
        period: '2023.08 – 2023.09',
        highlights: [
          '모바일 웹, PC 페이지 검색엔진 최적화 작업 단독 수행',
          'Nuxt 서버 미들웨어 기반 sitemap.xml 자동 생성 (Google Search Console 접근 시 자동 업데이트)',
          '이슈 해결: 대량 데이터 처리 시 브라우저 중단 → async/await 비동기 분할 처리 + 복구 로직 구현',
        ],
        tags: ['Nuxt.js', 'SEO', 'xmlbuilder2'],
        images: [
          { thumb: '/images/web_searchConsole.jpg',    full: '/images/full/web_searchConsole.jpg' },
          { thumb: '/images/mobile_searchConsole.jpg', full: '/images/full/mobile_searchConsole.jpg' },
        ]
      },
      {
        name: '결제 시스템 개발 및 연동',
        period: '2022.10 – 2022.11',
        highlights: [
          '현대카드 결제 기능 추가 FE 단독 담당, 현대카드 API 연동 결제 페이지 개발 후 실서비스 배포',
          '카드사 결제 서비스 iframe 연동 및 결제 결과 데이터 기반 리다이렉트 처리 구현',
        ],
        tags: ['Vue.js', 'Payment API'],
        images: [
          { thumb: '/images/hyundai_1.jpg', full: '/images/full/hyundai_1.jpg' },
          { thumb: '/images/hyundai_2.jpg', full: '/images/full/hyundai_2.jpg' },
          { thumb: '/images/hyundai_3.jpg', full: '/images/full/hyundai_3.jpg' },
        ]
      },
      {
        name: '제품 검수 애플리케이션 개발 (Android Web App)',
        period: '2022.03 – 2022.04',
        highlights: [
          '사내 검수팀용 Android APK 기반 웹앱 — 바코드, QR 코드 인식 및 실시간 검수 현황 대시보드 구현',
          '이슈 해결: WebRTC(getUserMedia) 갤럭시 광각 카메라 기본 선택 문제 → enumerateDevices() 활용 기기 ID 기반 카메라 설정',
        ],
        tags: ['WebRTC', 'WebApp', 'Android'],
        images: [
          { thumb: '/images/confirm_0.jpg',       full: '/images/full/confirm_0.jpg' },
          { thumb: '/images/confirm_1.jpg',       full: '/images/full/confirm_1.jpg' },
          { thumb: '/images/confirm_2.jpg',       full: '/images/full/confirm_2.jpg' },
          { thumb: '/images/confirm_barcode.jpg', full: '/images/full/confirm_barcode.jpg' },
        ]
      },
      {
        name: 'Soldout Web 서비스 구축',
        period: '2022.01 – 2022.03',
        highlights: [
          '앱 전용 서비스 → 웹 서비스 확장: 초기 구조 설계 및 핵심 페이지(메인, 상품 상세, 결제 등) 구현',
          '모바일 앱 웹뷰 환경을 고려한 UI 구현 및 앱-웹 간 인터페이스 연동',
          '이슈 해결: 결제 오류 reload 시 store 초기화 문제 → sessionStorage 기반 상태 유지 로직 구현',
        ],
        tags: ['Vue.js', 'Vuex', 'SSR'],
        images: [
          { thumb: '/images/web1_.jpg', full: '/images/full/web1_.jpg' },
          { thumb: '/images/web2_.jpg', full: '/images/full/web2_.jpg' },
          { thumb: '/images/web3_.jpg', full: '/images/full/web3_.jpg' },
        ]
      },
      {
        name: 'Soldout Admin 현황판 개발',
        period: '2022.05 – 2022.07',
        highlights: [
          '거래 및 검수 현황, 포인트 금액 모니터링 대시보드 개발',
          'Polling 기반 실시간 데이터 업데이트 및 차트 라이브러리 활용 데이터 시각화',
        ],
        tags: ['Vue.js', 'ApexChart', 'Polling'],
        images: [
          { thumb: '/images/soldout_002.jpg', full: '/images/full/soldout_002.jpg' },
          { thumb: '/images/soldout_001.jpg', full: '/images/full/soldout_001.jpg' },
          { thumb: '/images/soldout_003.jpg', full: '/images/full/soldout_003.jpg' },
          { thumb: '/images/soldout_004.jpg', full: '/images/full/soldout_004.jpg' },
        ]
      },
    ]
  },
  {
    company: '루나소프트',
    period: '2020.10 – 2021.09',
    duration: '1년',
    type: '정규직',
    role: '프론트엔드 엔지니어',
    description: '백오피스 플랫폼 및 라이브 페이지 개발',
    projects: [
      {
        name: 'Showa 백오피스 Admin 플랫폼 개발',
        period: '2020.10 – 2021.08',
        highlights: [
          'Angular 10 + TypeScript 기반 백오피스 플랫폼 설계 및 전담 개발 (사내 패션 MD 운영 마케팅 인원 대상)',
          'RxJS(NgRx Store) 상태 관리, 페이지별 Module 분리, 공통 컴포넌트 Shared Module 분리 설계',
          'MD 상품 CRUD, 공지사항, 카테고리 매칭, Excel 업/다운로드, Drag & Drop 상품 정렬 구현',
          'Docker 기반 컨테이너 구성 및 Rancher 자동화 배포 환경 구축',
        ],
        tags: ['Angular 10', 'NgRx', 'RxJS', 'TypeScript', 'Docker']
      },
      {
        name: 'Showa.kr 소개 페이지 개발',
        period: '2021.02 – 2021.03',
        highlights: [
          'Angular 10, RxJS 기반 런칭 소개 페이지 개발, 공지사항 CRUD 및 DeepLink(iOS/Android 앱 연동) 구현',
        ],
        tags: ['Angular 10', 'RxJS', 'DeepLink']
      },
    ]
  },
  {
    company: '씨티아이랩',
    period: '2019.04 – 2020.10',
    duration: '1년 7개월',
    type: '정규직',
    role: '프론트엔드 엔지니어',
    description: '자사 AI 보안 솔루션 플랫폼 개발 및 유지보수',
    projects: [
      {
        name: 'AI 데이터 시각화 플랫폼 개발',
        period: '2019.09 – 2019.11',
        highlights: [
          'HighChart 기반 사용자 설정 가능한 위젯, 대시보드 컴포넌트 모듈화',
          'Bar, Line, Sankey, Scatter, Pie, Sunburst, Word Cloud, HeatMap 등 다양한 차트 구현',
          'vis.js 활용 AI - DB - Client 데이터 흐름 시각화',
        ],
        tags: ['Angular', 'HighCharts', 'TypeScript']
      },
      {
        name: 'Polling 기반 데이터 모니터링 개발',
        period: '2020.03',
        highlights: [
          'RxJS Observable 기반 Polling 로직 구현 (forkJoin, debounceTime 활용, 서버 과부하 방지 설계)',
          '동적 시간 설정 기능 및 Pagination 기반 테이블 구현',
        ],
        tags: ['Angular', 'RxJS', 'Polling']
      },
      {
        name: 'WebSocket 기반 플랫폼 공유 기능 개발',
        period: '2019.07 – 2019.08',
        highlights: [
          'Socket.io 기반 실시간 페이지 공유, html2Canvas 화면 캡처, 공유 콘텐츠 기반 댓글(채팅) 기능 개발',
        ],
        tags: ['Socket.io', 'WebSocket', 'html2Canvas']
      },
      {
        name: '신규 플랫폼 개발 (하이투자증권)',
        period: '2019.12 – 2020.02',
        highlights: [
          'Angular 6 → Angular 9 재구축: 모듈 집합 구조 → 컴포넌트 단위 Module 분리 설계',
          'Leaflet 활용 국가별 공격 정보 시각화, 탐지 결과 기반 위험도 차트 구현',
        ],
        tags: ['Angular', 'Leaflet', 'TypeScript']
      },
    ]
  }
]

export const skills = {
  core: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Vue.js', 'Angular'],
  state: ['SWR', 'React Query', 'Zustand', 'Vuex', 'NgRx / RxJS'],
  styling: ['Emotion', 'vanilla-extract', 'SCSS / CSS Modules', 'Tailwind CSS'],
  visualization: ['D3.js', 'HighCharts'],
  tooling: ['Git', 'Figma', 'Jira'],
}


export const certifications = [
  {
    name: 'Javascript, Java를 활용한 웹 응용SW개발자 양성과정',
    date: '2018.05',
    description: 'NCS 전공교과에 따라 응용SW 기초기술 활용, 프로그래밍 언어 활용, DB 구현, 화면 구현, 애플리케이션 구현, 홈페이지 제작 등 학습'
  }
]
