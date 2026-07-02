// MDA 진행상태 — Claude가 작업하며 갱신. 대시보드가 폴링해 렌더.
window.MDA_STATE = {
  project: "MIDAS Design Agent",
  subtitle: "온사이트 디자인 시스템 역설계 · 검증",
  updatedAt: "2026-06-25 / 현장요약 보고서 실내용 빌드 + GNB 연결",
  now: { phase: "Phase 0", step: "현장요약 보고서 = 소스 실내용으로 재빌드(가짜 제거). GNB 탭에 3화면 연결(지도/리스트/현장요약)" },

  // 파이프라인 상태: done | active | pending
  pipeline: [
    { id: "S1", name: "Ingest",     desc: "MD→IR",        status: "pending" },
    { id: "S2", name: "Concept",    desc: "컨셉3+시드",    status: "pending" },
    { id: "S3", name: "DesignSys",  desc: "토큰 확장",     status: "pending" },
    { id: "S4", name: "Pages",      desc: "트리 조립",     status: "pending" },
    { id: "S5", name: "Prototype",  desc: "링크/플로우",   status: "pending" },
    { id: "S6", name: "Render",     desc: "HTML 출력",     status: "pending" }
  ],

  // 로드맵: done | active | pending  / gate: passed | open | locked
  roadmap: [
    { id: "Phase 0", title: "온사이트 DS 역설계·검증", status: "active",  gate: "open",   note: "Figma 시안 → 토큰추출 → 재생성 → audit" },
    { id: "Phase 1", title: "결정론 엔진 제품화",        status: "pending", gate: "locked", note: "contracts→S6→S4→S1" },
    { id: "Phase 2", title: "자연어 입력 확장",          status: "pending", gate: "locked", note: "" },
    { id: "Phase 3", title: "컨셉 3종 생성 + 결합",      status: "pending", gate: "locked", note: "references md 참조" }
  ],

  // Pass 체크리스트
  passes: {
    A: { title: "Pass A — Foundation 토큰", items: [
      { label: "Color (semantic + status 5단계)", done: true },
      { label: "Typography (Pretendard 10단계)",   done: true },
      { label: "Radius / Effect",                  done: true },
      { label: "Spacing (8pt 기본, 실측 보정 대기)", done: false }
    ]},
    B: { title: "Pass B — Component (화면 한꼭지씩)", items: [
      { label: "공통 유틸바 (전역색·알림 status)", done: false },
      { label: "List (리스트뷰/현장관리)", done: false },
      { label: "Detail (계측결과/해석)", done: false },
      { label: "Form/Setting (계측설정/설정)", done: false },
      { label: "Report (현장/계측 보고서)", done: false },
      { label: "Map/Monitoring (지도뷰/통합보기)", done: false }
    ]}
  },

  // 추출 카운트
  tokens: { color: 60, type: 32, spacing: 9, radius: 5, component: 31 },

  // audit: match = ok | partial | fail
  audit: [
    { screen: "사이트뷰(지도뷰)", match: "partial", gaps: "로고 글리프·마커 종류·변화량 줄바꿈 (경미)" },
    { screen: "리스트뷰(테이블)", match: "ok", gaps: "행 ⋯ 액션메뉴 미연결" },
    { screen: "프로젝트 생성(모달/폼)", match: "ok", gaps: "-" },
    { screen: "현장요약(보고서)", match: "ok", gaps: "소스 실내용 추출(2026년3월4주차·전체요약3현장·AI요약·계측/예측현황). GNB 연결" },
    { screen: "GNB 서비스홈 (3탭+유틸)", match: "ok", gaps: "로고·공통유틸 실 SVG, 픽셀 일치" },
    { screen: "GNB 프로젝트 (6탭+유틸)", match: "ok", gaps: "심볼·타이틀·유틸 실 SVG, 픽셀 일치" },
    { screen: "리스트뷰 (정밀 재구성)", match: "ok", gaps: "GNB 컴포넌트 재사용+정밀 테이블+Pagination" },
    { screen: "Pagination 컴포넌트", match: "ok", gaps: "node 500:588, 상태 4종, 픽셀 일치" },
    { screen: "Button (5스타일×5사이즈)", match: "ok", gaps: "node 17:3880, 상태 포함" },
    { screen: "Checkbox·Radio·Toggle", match: "ok", gaps: "blue accent, 상태·라벨" },
    { screen: "Input / Dropdown", match: "ok", gaps: "field 상태 6종 / trigger+menu·체크박스·그룹" }
  ],

  // 전체 단계 트리 (status: done|active|pending). 현재 위치 = active.
  stages: [
    { id: "Phase 0", title: "온사이트 DS 역설계·검증", status: "active", steps: [
      { label: "레포·골격·현황판 구축", status: "done" },
      { label: "IA 수신 · 인벤토리 · 추출계획 수립", status: "done" },
      { label: "Pass A — Foundation 토큰 추출 (color/type/radius)", status: "done" },
      { label: "사이트뷰(지도뷰) 재생성 + audit — 거의 일치", status: "done" },
      { label: "리스트뷰·생성모달·현장요약 재생성 — archetype 4개 커버", status: "done" },
      { label: "Pass B 정밀모드 — GNB 컴포넌트 픽셀일치 (노드별 추출)", status: "done" },
      { label: "Pass B — 컴포넌트 1개씩 정밀 추출 (노드 링크 수신)", status: "active" },
      { label: "Pass B — 컴포넌트 추출 (시안별 누적)", status: "pending" },
      { label: "DS로 화면 재생성 (Handlebars)", status: "pending" },
      { label: "원본 vs 재생성 audit → 구멍 보강", status: "pending" },
      { label: "Gate 0 — 재생성 ≈ 원본 입증", status: "pending" }
    ]},
    { id: "Phase 1", title: "결정론 엔진 제품화", status: "pending", steps: [
      { label: "contracts — 단계 간 JSON 스키마 고정", status: "pending" },
      { label: "S6 Render 엔진 (트리→HTML)", status: "pending" },
      { label: "S4 Pages 조립 (패턴×IR)", status: "pending" },
      { label: "S1 Ingest (MD→IR, LLM)", status: "pending" },
      { label: "Gate 1 — 일관된 결정론 출력", status: "pending" }
    ]},
    { id: "Phase 2", title: "자연어 입력 확장", status: "pending", steps: [
      { label: "자연어 → IR 변환 (S1 앞단)", status: "pending" }
    ]},
    { id: "Phase 3", title: "컨셉 3종 생성 + 결합", status: "pending", steps: [
      { label: "references md 탑재 → 컨셉 시드 3개 (S2)", status: "pending" },
      { label: "S3 ramp 엔진으로 DS 3종 생성", status: "pending" },
      { label: "고정DS / 생성DS 어댑터 결합", status: "pending" }
    ]}
  ],

  // 활동 로그 (최신 위)
  activity: [
    { time: "06-25", text: "현장요약 보고서 재빌드 — 소스(node 10142:16628) 실내용 추출: 2026년 3월 4주차, 전체요약 3현장(△△67%·○○42%·□□23%), AI요약 단락, 계측현황(자동12/수동72·INC-15·34.8mm·2차대비116%), 예측현황. GNB 탭에 3화면 링크 연결(target=_parent)" },
    { time: "06-25", text: "소스 충실도 정리 — 임의 추가분 제거. Button=소스 축 그대로(Primary/Filled/Outline/Clear, Size 6, Danger 가짜 제거). Input error 제거. tokens 추정값 provisional 표시. sitesummary 가짜 수치→'—'+배너(원본 판독불가). siteview/listview 데이터=Figma 목업 소스라 유지. 규칙: 소스만, 막히면 질문" },
    { time: "06-25", text: "폼 원자 컴포넌트 6종 빌드 — Button·Checkbox·Radio·Toggle·Input·Dropdown. 선택컨트롤 accent=blue-50. 갤러리 등록" },
    { time: "06-25", text: "공식 파운데이션 정합 — 컬러(node 1:435)·타이포(9:1336) 수신. emerald 풀램프·yellow·status 그라데이션·Display3/Headline2 반영. 네이밍 컨벤션(99밝음→10어두움) 확정" },
    { time: "06-25", text: "리스트뷰 정밀 재구성 — GNB 컴포넌트 재사용(iframe?tab=1), 6열 테이블 실측, Pagination 컴포넌트(node 500:588) 신설·연결" },
    { time: "06-25", text: "GNB 우측 아이콘 → 벡터 SVG로 재작성. 날씨·디스플레이는 g transform 합성, 사이렌·벨 단일SVG. width/height 명시로 blob 버그 해결. 크리스프·왜곡0" },
    { time: "06-22", text: "GNB 2종 정밀 — 서비스홈(탭3) + 프로젝트(탭6, 강남역 지하차도). 공통유틸 풀세트(날씨·사이렌·벨·디스플레이모드·아바타) 별도 노드서 실추출" },
    { time: "06-22", text: "GNB 정밀 컴포넌트 완성 — 로고/사이렌/벨/plus 실 SVG 추출, 픽셀 일치. 정확도 문제 해결" },
    { time: "06-22", text: "방식 전환: 화면 통째 근사 → 컴포넌트 노드별 정밀 추출 (Pass B). 컴포넌트 갤러리 신설" },
    { time: "06-22", text: "리스트뷰(테이블)·생성모달(폼)·현장요약(보고서) 재생성. archetype 4개 커버. 컴포넌트 18개" },
    { time: "06-22", text: "신규 토큰: Display2(48)·Heading3/4·Orange-48·Blue-55·p-6 spacing 발견 → tokens.css 반영" },
    { time: "06-22", text: "사이트뷰 재생성 → 원본 audit: 거의 일치. 컴포넌트 11개 추출. Gate 0 청신호" },
    { time: "06-22", text: "get_design_context로 1920 캔버스 실측 → siteview.html 빌드 (지도=정적 image280)" },
    { time: "06-22", text: "Pass A 완료 — 컬러38·타입25·radius5 추출. Primary=Emerald #1bb9cd, status 5단계 확정. tokens.css 생성" },
    { time: "06-22", text: "사이트뷰 5종 추출 — 지도뷰·검색필터·확인모달. Figma Variables 잘 정리됨" },
    { time: "06-22", text: "IA 수신 — 계측 모니터링 SaaS. archetype 6종 매핑. status·density가 DS 척추" },
    { time: "06-22", text: "추출계획: Pass A 대표화면 3개 선별 (통합보기·홈·유틸바)" },
    { time: "06-22", text: "현황판에 메뉴 추가 — PRD · 스펙 · 단계 페이지" },
    { time: "06-22", text: "현황판 대시보드 구축 (자동 폴링)" },
    { time: "06-22", text: "레포 생성 · 골격 · 메모리 적재 완료" },
    { time: "06-22", text: "Figma 첫 링크(Pass A) 대기 중" }
  ]
};
