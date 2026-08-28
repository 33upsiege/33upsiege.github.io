export const personalInfo = {
  name: '김재형',
  phone: '010.2905.3332',
  email: 'emah@nate.com',
  portfolio: 'https://33upsiege.github.io',
  tagline: '7년차 프론트엔드 엔지니어',
  summary: [
    'Next.js 기반 글로벌 플랫폼 서비스 및 이벤트 페이지 개발 및 운영 경험',
    '서비스 요구사항과 데이터 구조를 바탕으로 화면, 컴포넌트 구조 설계, 상태 관리, 인터랙션 및 데이터 시각화 구현',
    'SWR 기반 서버 상태 캐싱과 API 요청 최적화를 통한 데이터 정합성 및 서비스 안정성 개선',
    '모바일 웹뷰 연동, 반응형 UI 및 크로스브라우징 대응'
  ]
}

export interface ProjectImage {
  thumb: string  // 1200px — 갤러리 썸네일
  full: string   // 1920px — 라이트박스
}

export interface Project {
  name: string
  period: string
  contribution: {
    team?: string
    ownership: string
    scope: string
  }
  highlights: string[]
  metrics?: string[]
  troubleshooting?: {
    problem: string
    alternatives: string
    decision: string
    result: string
  }
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
    company: '넥슨유니버스',
    period: '2024.07 – 2026.06',
    duration: '2년',
    type: '',
    role: '프론트엔드 엔지니어',
    description: 'MapleStory Universe 웹 플랫폼 개발, 고도화 및 유지보수',
    projects: [
      {
        name: '1주년 프로모션 프로젝트',
        period: '2026.04 – 2026.06',
        contribution: {
          team: '4명 (FE 1 · BE 1 · 디자인 1 · 기획 1)',
          ownership: '프론트엔드 단독 담당',
          scope: '화면 구조 설계, API 연동, 상태별 UI, 반응형 UI, 인터랙션 구현 및 운영 대응'
        },
        highlights: [
          'MapleStory Universe 오픈 1주년을 기념하여 인게임 재화 사용량 기반 페이백 프로모션 웹 페이지 개발',
          '유저 지갑 주소 기반 페이백 대상 여부 및 보상 수량 조회 기능 구현',
          '대규모 이벤트 트래픽을 고려하여 정적 리소스 최적화 및 페이지 렌더링 비용 최소화',
          '불필요한 API 호출을 줄이기 위해 예외 케이스 분기, 요청 조건 제어, 캐싱 전략 적용',
          '조회 결과, 클레임 가능 여부, 제한 사유 등 서버 응답 상태에 따른 UI 분기 및 사용자 피드백 처리',
          '데스크톱 및 모바일 환경에 대응하는 반응형 UI 구현',
          '프로모션 페이지의 몰입감을 높이기 위한 인터랙션, 애니메이션, 시각 효과 구현',
        ],
        metrics: [
          '조건부 요청과 SWR 캐싱을 적용해 화면 재진입 시 발생하던 중복 API 호출 제거',
          'PC·모바일 2개 환경에 대응하고 이미지 포맷·로딩 전략을 최적화해 초기 렌더링 부담 완화'
        ],
        tags: ['Next.js', 'TypeScript', 'SWR', 'Responsive UI', 'Animation']
      },
      {
        name: '라이브 서비스 기능 고도화 및 유지보수',
        period: '2025.08 – 2026.02',
        contribution: {
          team: '1명 (FE 1)',
          ownership: '단독 진행',
          scope: '크로스브라우징, 동적 콘텐츠, NXPC 시세, 데이터 시각화 및 서버 상태 관리'
        },
        highlights: [
          '크로스브라우징 대응 (Chrome / Edge / Firefox / Safari)',
          '· PDF embed -> iframe 전환 작업 (Safari 미지원)',
          '· Safari Date 파싱 오류 -> YYYY/MM/DD 포맷 변환',
          '· 폰트 불일치 -> 공통 폰트 채택',
          '백오피스 연동 동적 콘텐츠 시스템 구축 (약관 / 배너 / 공지사항 노출 조건 기반 렌더링)',
          '게시글 이모티콘 반응 시스템: SWR 캐싱 + API 호출 디바운스로 요청 최소화',
          'NXPC 시세 실시간 반영: SSE 검토 후 Polling 채택, 조건부 요청으로 서버 부하 최소화',
          '인터랙션 중심 플랫폼 기능 레이어 개발 (패럴랙스 스크롤, 애니메이션, 정적 리소스 분리 및 캐싱)',
          'D3.js 차트 커스터마이징 및 Git Submodule 기반 재사용 구조 설계',
          'BFF 기반 RESTful API 연동, SWR 서버 상태, 컴포넌트 단위 로컬 상태 분리로 복잡도 최소화',
        ],
        metrics: [
          'NXPC 시세를 60초 주기로 갱신하고 화면 활성·노출 조건에 따라 요청을 중단해 불필요한 호출 억제',
          'WebSocket 장애 핫픽스 이후 브라우저 멈춤 현상 해소 및 핵심 API 응답 정상화',
          'Chrome·Edge·Firefox·Safari 4종 브라우저의 주요 호환성 이슈 대응'
        ],
        troubleshooting: {
          problem: 'NXPC 시세를 WebSocket으로 실시간 제공했으나, 서비스 오픈 직후 트래픽이 집중되면서 다른 API 응답까지 지연되고 일부 브라우저가 멈추는 장애가 발생해 즉시 핫픽스가 필요',
          alternatives: '단방향 시세 스트림에 적합하고 연결 관리 비용이 낮은 SSE 전환을 백엔드에 제안했지만 백엔드 인력, 대응 시간, 신규 스트리밍 API 개발, 검증 범위를 고려하면 긴급 배포 일정 내 적용하기 어렵다고 판단',
          decision: '이미 운영 중인 시세 조회 API를 활용한 Polling으로 전환하고 화면 비활성화, 탭 미노출 시 요청을 중단하고, 중복 요청 방지와 갱신 주기 제어를 적용해 트래픽 증가 핸들링(억제)',
          result: '신규 백엔드 개발 없이 긴급 배포를 완료했으며 브라우저 멈춤과 타 API 응답 지연을 해소했다. 실시간성은 내부 서비스 허용 범위의 갱신주기(60초) 로 유지'
        },
        tags: ['Next.js', 'TypeScript', 'SWR', 'D3.js', 'GitLab CI/CD'],
        images: [
          { thumb: '/images/uv_01.jpg', full: '/images/full/uv_01.jpg' },
          { thumb: '/images/uv_02.jpg', full: '/images/full/uv_02.jpg' },
          { thumb: '/images/uv_03.jpg', full: '/images/full/uv_03.jpg' },
        ]
      },
      {
        name: 'AI 기반 개발 워크플로우 도입',
        period: '2025.11 – 2026.05',
        contribution: {
          team: '5명 (FE 5)',
          ownership: '워크로그 자동화 도구 커스터마이징 담당 및 팀 공동 도입',
          scope: '워크로그 자동화, 개발 환경 설정 자동화, AI 기반 리뷰, 리팩토링 프로세스 정립'
        },
        highlights: [
          'GitLab 커밋 기록 기반 Jira 워크로그 자동 생성 도구 커스터마이징 (Claude Code hooks 활용)',
          'Claude Code CLI 활용 환경변수 자동화 및 반복 작업 스프린트 생산성 향상',
          'Claude Code CLI, ChatGPT 등을 활용해 코드 리뷰, 리팩토링 초안 검토, 반복 작업 자동화에 활용',
        ],
        metrics: [
          '5명 규모 프론트엔드 팀에 커밋 기반 Jira 워크로그 자동 생성 도구 도입',
          '환경 설정과 반복 명령을 자동화해 수동 작업 절차 축소'
        ],
        tags: ['Claude Code']
      },
      {
        name: '아이템 강화(스타캐치) 미니게임 웹 구현',
        period: '2025.06 – 2025.07',
        contribution: {
          team: '1명 (FE 1)',
          ownership: '단독 진행',
          scope: '게임 인터랙션, 입력, 판정 로직, 단계별 상태 및 결과 UI 구현'
        },
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
        contribution: {
          team: '4명 (FE 1 · BE 1 · 디자인 1 · 기획 1)',
          ownership: 'FE 단독 진행',
          scope: '이벤트 페이지 구조 설계, API 연동, 캐싱·예외 처리 및 사용자 피드백 구현'
        },
        highlights: [
          '목표 10만명 규모 사전예약 이벤트 페이지 — 대규모 트래픽 대응 구조 설계',
          'SWR 캐싱 전략 + 정적 리소스 분리 + API 디바운스 적용으로 네트워크 요청 최소화',
          '예외 처리 및 사용자 피드백 로직 전체 구현',
        ],
        metrics: [
          '목표 10만 명 규모의 사전예약 트래픽을 고려한 페이지 구조 설계',
          '캐싱·디바운스·정적 리소스 분리로 화면 재진입 시 반복 API 요청 억제'
        ],
        tags: ['Next.js', 'SWR', 'CDN', 'TypeScript']
      },
      {
        name: 'D3.js 기반 인게임 아이템 강화 차트 구현',
        period: '2024.11 – 2024.12',
        contribution: {
          team: '6명 (FE 2 · BE 2 · 디자인 1 · 기획 1)',
          ownership: '프론트엔드 공동 담당 (담당 도메인 단독 개발)',
          scope: '담당 도메인의 데이터 가공, 차트 구조 설계, 확대, 축소 및 필터 인터랙션 구현'
        },
        highlights: [
          '게임 내 아이템 강화 시도 횟수, 사용 재화 데이터 시각화',
          'Line / Bar 차트 + Zoom In/Out 인터랙션 + 필터 기능 구현',
        ],
        metrics: [
          'Line·Bar 2종 차트와 확대·축소 및 필터 인터랙션 구현',
          '공통 차트 구조를 서로 다른 2개 도메인에 적용'
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
        contribution: {
          team: '4명 (FE 1 · BE 1 · 디자인 1 · 기획 1)',
          ownership: 'FE 단독 진행',
          scope: 'SPA 구조, 랭킹, 검색 UI, 공용 라이브러리 확장 및 배포'
        },
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
    // type: '정규직',
    role: '프론트엔드 엔지니어',
    description: '한정판 상품 정가품 검수 기반 리셀 플랫폼 FE 개발',
    projects: [
      {
        name: 'Vue2 -> React18 마이그레이션',
        period: '2023.11 – 2024.01',
        contribution: {
          team: '3명 (FE 3)',
          ownership: '상태 관리 구조 설계 주도 및 결제·상품 상세 영역 전담',
          scope: '서버·공유·로컬 상태 분리 기준 수립, 결제 및 상품 상세 컴포넌트 마이그레이션'
        },
        highlights: [
          'Vue2 기반 결제 및 상품 상세 화면을 React 18로 마이그레이션',
          '서버 상태는 React Query, 컴포넌트 로컬 상태는 useState, 화면 간 공유 상태는 Zustand로 분리하는 상태 관리 기준 설계',
          'React Query의 캐싱과 요청 상태 관리를 활용해 API 데이터와 클라이언트 상태 간 책임 분리',
          '다단계 컴포넌트 간 Prop Drilling이 발생하던 공유 상태를 Zustand로 전환해 컴포넌트 결합도 완화',
          'React Hook Form 기반 입력값 및 유효성 검증 구조 적용',
          'Emotion 기반 스타일링 적용으로 유지보수성 및 확장성 개선',
        ],
        metrics: [
          '결제·상품 상세 2개 핵심 영역을 Vue2에서 React 18로 전환',
          '서버·공유·로컬 3종 상태를 React Query·Zustand·useState로 분리해 관리 기준 수립'
        ],
        tags: ['React 18', 'Zustand', 'React Query', 'Emotion', 'TypeScript']
      },
      {
        name: 'SEO 개발',
        period: '2023.08 – 2023.09',
        contribution: {
          team: '2명 (FE 1 · BE 1)',
          ownership: '기획 협의 및 프론트엔드 단독 담당',
          scope: 'PC·모바일 SEO 진단, sitemap 자동화, 대량 데이터 처리 및 장애 복구'
        },
        highlights: [
          '모바일 웹, PC 페이지 검색엔진 최적화 작업 단독 수행',
          'Nuxt 서버 미들웨어 기반 sitemap.xml 자동 생성 (Google Search Console 접근 시 자동 업데이트)',
          '이슈 해결: 대량 데이터 처리 시 브라우저 중단 -> async/await 비동기 분할 처리 + 복구 로직 구현',
        ],
        metrics: [
          'PC·모바일 2개 채널의 전체 공개 페이지 sitemap 생성·갱신 자동화',
          '대량 URL 처리 중 발생하던 브라우저 중단을 해소하고 실패 구간 재처리 구조 확보'
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
        contribution: {
          team: '4명 (FE 1 · BE 1 · 디자인 1 · 기획 1)',
          ownership: 'FE 단독 진행',
          scope: '현대카드 API·iframe 연동, 결제 결과 처리, 리다이렉트 및 실서비스 배포'
        },
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
        name: '제품 검수 애플리케이션 개발 (Android WebView)',
        period: '2022.03 – 2022.04',
        contribution: {
          team: '3명 (FE 1 · BE 1 · Android 1)',
          ownership: 'WebView 프론트엔드 영역 전담',
          scope: 'Android WebView에 탑재되는 검수 화면, 카메라·바코드·QR 연동 및 실시간 현황 대시보드 구현'
        },
        highlights: [
          'Android 개발자가 구축한 WebView 컨테이너에 탑재되는 사내 검수용 웹 애플리케이션 개발',
          'WebRTC(getUserMedia)를 활용한 카메라 접근과 바코드·QR 코드 인식 기능 구현',
          '검수 결과 입력 및 실시간 검수 현황 대시보드 UI 구현',
          'Android 개발자와 WebView 실행 환경 및 카메라 권한·기기별 동작 방식 협의',
        ],
        metrics: [
          '기기별 카메라 선택 로직을 적용해 갤럭시 단말에서 광각 카메라가 기본 선택되던 문제 해소',
          '바코드·QR 인식을 도입해 상품 정보 수기 입력 단계 축소'
        ],
        troubleshooting: {
          problem: '일부 갤럭시 단말에서 getUserMedia 호출 시 광각 카메라가 기본 선택되어 바코드와 QR 코드 인식이 어려운 문제가 발생',
          alternatives: '기본 facingMode 지정과 사용자의 수동 카메라 전환 방식을 검토했으나, 단말별 카메라 선택 결과가 일관되지 않고 검수 작업 단계가 늘어나는 한계가 존재',
          decision: 'enumerateDevices()로 사용 가능한 카메라 목록을 조회하고 기기 ID를 기준으로 적절한 후면 카메라를 선택하도록 구현',
          result: '갤럭시 단말의 광각 카메라 오선택 문제를 해소하고 바코드·QR 인식 동작을 안정화'
        },
        tags: ['WebRTC', 'WebView', 'Android'],
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
        contribution: {
          team: '5명 (FE 2 · BE 1 · 디자인 1 · 기획 1)',
          ownership: '메인·상품 상세·결제 페이지 프론트엔드 전담',
          scope: '웹 초기 구조, 메인, 상품 상세, 결제, 앱 웹뷰 인터페이스 및 상태 복구 구현'
        },
        highlights: [
          '앱 전용 서비스를 웹으로 확장하는 프로젝트에서 메인·상품 상세·결제 페이지 프론트엔드 전담',
          '상품 탐색부터 상세 조회와 결제로 이어지는 핵심 구매 여정 구현',
          '모바일 앱 WebView 환경을 고려한 반응형 UI와 앱-웹 인터페이스 연동',
          '결제 오류 후 reload 시 Vuex Store가 초기화되는 문제를 sessionStorage 기반상태 복구 로직으로 해결'
        ],
        metrics: [
          '메인·상품 상세·결제 3개 핵심 페이지를 웹으로 확장해 구매 여정 전 구간 구현',
          '결제 오류 후 새로고침 시 상태 유실로 인한 재입력 사례를 해소'
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
        contribution: {
          team: '3명 (FE 1 · BE 1 · 기획 1)',
          ownership: '관리자 대시보드 프론트엔드 단독 담당',
          scope: '거래, 검수, 포인트 등 시각화, Polling 갱신, 차트 기반 모니터링 UI 구현'
        },
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
        contribution: {
          ownership: '프론트엔드 개발 담당',
          scope: '프론트엔드 아키텍처, 상태 관리, 운영 기능, 공통 모듈 및 배포 환경 구축'
        },
        highlights: [
          'Angular 10 + TypeScript 기반 백오피스 플랫폼 설계 및 개발 (사내 패션 MD 운영 마케팅 인원 대상)',
          'RxJS(NgRx Store) 상태 관리, 페이지별 Module 분리, 공통 컴포넌트 Shared Module 분리 설계',
          'MD 상품 CRUD, 공지사항, 카테고리 매칭, Excel 업/다운로드, Drag & Drop 상품 정렬 구현',
          'Docker 기반 컨테이너 구성 및 Rancher 자동화 배포 환경 구축',
        ],
        metrics: [
          '상품·공지·카테고리·Excel·정렬 등 5개 주요 백오피스 운영 기능 구현',
          'Docker·Rancher 2개 도구를 활용해 수동 배포 절차를 단일 파이프라인으로 전환'
        ],
        tags: ['Angular 10', 'NgRx', 'RxJS', 'TypeScript', 'Docker']
      },
      {
        name: 'Showa.kr 소개 페이지 개발',
        period: '2021.02 – 2021.03',
        contribution: {
          ownership: '프론트엔드 개발 담당',
          scope: '런칭 페이지, 공지사항 CRUD 및 iOS·Android DeepLink 연동'
        },
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
        contribution: {
          ownership: '프론트엔드 개발 담당',
          scope: '차트·위젯 모듈 설계, 사용자 대시보드 및 데이터 흐름 시각화 구현'
        },
        highlights: [
          'HighChart 기반 사용자 설정 가능한 위젯, 대시보드 컴포넌트 모듈화',
          'Bar, Line, Sankey, Scatter, Pie, Sunburst, Word Cloud, HeatMap 등 다양한 차트 구현',
          'vis.js 활용 AI - DB - Client 데이터 흐름 시각화',
        ],
        metrics: [
          'Bar·Line·Sankey·Scatter·Pie·Sunburst·Word Cloud·HeatMap 등 8종 이상의 차트를 공통 위젯으로 모듈화'
        ],
        tags: ['Angular', 'HighCharts', 'TypeScript']
      },
      {
        name: 'Polling 기반 데이터 모니터링 개발',
        period: '2020.03',
        contribution: {
          ownership: '프론트엔드 개발 담당',
          scope: 'RxJS Polling 파이프라인, 갱신 주기 설정, 요청 병합 및 테이블 UI 구현'
        },
        highlights: [
          'RxJS Observable 기반 Polling 로직 구현 (forkJoin, debounceTime 활용, 서버 과부하 방지 설계)',
          '동적 시간 설정 기능 및 Pagination 기반 테이블 구현',
        ],
        tags: ['Angular', 'RxJS', 'Polling']
      },
      {
        name: 'WebSocket 기반 플랫폼 공유 기능 개발',
        period: '2019.07 – 2019.08',
        contribution: {
          ownership: '프론트엔드 개발 담당',
          scope: '실시간 공유·댓글, 화면 캡처 및 Socket.io 이벤트 연동'
        },
        highlights: [
          'Socket.io 기반 실시간 페이지 공유, html2Canvas 화면 캡처, 공유 콘텐츠 기반 댓글(채팅) 기능 개발',
        ],
        tags: ['Socket.io', 'WebSocket', 'html2Canvas']
      },
      {
        name: '신규 플랫폼 개발 (하이투자증권)',
        period: '2019.12 – 2020.02',
        contribution: {
          ownership: '프론트엔드 개발 담당',
          scope: 'Angular 재구축, 컴포넌트 모듈 설계, 지도·위험도 데이터 시각화'
        },
        highlights: [
          'Angular 6 -> Angular 9 재구축: 모듈 집합 구조 -> 컴포넌트 단위 Module 분리 설계',
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

export const education = {
  school: '한국방송예술진흥원',
  period: '2011.03 – 2014.02',
  major: '방송기술',
  status: '중퇴'
}
