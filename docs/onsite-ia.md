# 온사이트(Onsite) IA — 계측 모니터링 SaaS

> 지반/구조물 계측·해석·현장관리 제품. Phase 0 역설계 대상.

## 공통 유틸 (상단 전역바)
- 날씨 정보
- 디스플레이 모드: **심플 / 디테일** ← density 토큰 2벌 신호
- 위험 알림 / 사이렌 ← status 컬러 최상위(critical)
- 일반 알림
- 사용자 메뉴

## 서비스 홈 GNB
- 지도뷰 — Map/Monitoring
- 리스트뷰 — List
- 현장 요약 — Dashboard

## 프로젝트 GNB
- 프로젝트 홈 — Dashboard
- 계측
  - 통합보기 — Monitoring/Dashboard (차트·status 밀집)
  - 계측 결과 — Detail (+차트/테이블)
  - 계측 설정 — Form/Setting
- 해석 — Detail (분석/시각화)
- 현장 관리 — List
- 보고서
  - 현장 보고서 — Report/Detail
  - 계측 보고서 — Report/Detail
- 설정 — Setting/Form

## archetype 매핑 요약
Dashboard/Monitoring · List · Detail · Form/Setting · Report · Map
→ 패턴화 가설 충족. 6종 패턴으로 대부분 커버.

## DS 척추 (이 제품 특수성)
1. **status 멀티레벨 컬러**: 안전/정상 · 주의 · 경고 · 위험 · 사이렌(critical). 모니터링 제품의 핵심.
2. **density 모드**: 심플/디테일 → spacing·typography 토큰을 모드별로. inset 토큰 2벌 검토.

## 추출 계획 (2-pass)
- **Pass A (Foundation)**: 대표화면 = ① 계측 통합보기(차트·status·KPI 밀집) ② 프로젝트 홈 or 현장 요약(레이아웃·타입위계) ③ 공통 유틸바(전역색·알림 상태). color/type/spacing/radius만.
- **Pass B (Component, 한꼭지씩)**: List → Detail → Form → Report 순. 매 추출마다 기존 토큰 참조·네이밍 통일(Claude가 정규화 레이어).

## 네이밍 정책
원본 Figma 네임 개판 → 그대로 안 씀. Claude가 깨끗한 3-tier(primitive→semantic→component)로 재명명. 같은 값 중복 네임은 1개로 수렴.
