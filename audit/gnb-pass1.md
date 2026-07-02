# Audit — GNB 컴포넌트 (정밀 추출)

- **날짜**: 2026-06-22
- **원본**: node 5047:26275 (`audit/figma-ref/gnb-5047-26275.png`, 1920×72)
- **재생성**: `onsite-ds/components/gnb/gnb.html` + `gnb.css`
- **방식**: get_design_context(disableCodeConnect) → 실 구조·치수 + 에셋 13개 실 SVG 추출

## 결과: 픽셀 일치 ✓

| 요소 | 값(원본 그대로) |
|---|---|
| 높이 / 패딩 / bg | 72 / 0 30 / rgba(255,255,255,.98) |
| border-bottom | 1px bluegray-85 #e5e7eb |
| 로고 | 실 SVG 9조각(심볼 #29BDD0 + ONSITE GEOTECH 워드마크), 196.1×21.6 px좌표 배치 |
| nav 탭 | 16/SemiBold, active=bluegray-20 + 3px bluegray-30 밑줄, inactive=bluegray-50 |
| 사이렌(warn) | 실 SVG 28.24×25.15 |
| 벨 + N뱃지 | 실 SVG(body/clap) + danger 원형 뱃지 |
| 아바타 | 32 round, bluegray-55 bg, "김" 13/Medium |
| CTA | bluegray-30(#374151) h48 r8 px12 py14, "프로젝트 생성" 15/SemiBold + plus SVG |

## 직전 근사 대비 교정
높이 64→72 · nav 14M→16SB · 밑줄 2px→3px · 아바타 bg-muted→bluegray-55 · CTA bluegray-20 h38→bluegray-30 h48 · 제네릭 벨→실 사이렌+벨 SVG.

## 버그 메모
절대배치 `<img>`에 width/height:100% + inset 4방향 → right/bottom 무시되어 컨테이너 꽉 채움(겹침). replaced element는 left/top/width/height px 명시로 해결.

## 추가 (2차) — GNB 2종 + 공통유틸
- **서비스홈 GNB** (node 14021:15304): 탭 3개(지도뷰·리스트뷰어·현장요약). 직전 2탭 오류 교정.
- **프로젝트 GNB** (node 14001:159357): 좌측 프로젝트 심볼 + "강남역 지하차도 공사" ⌄, 탭 6개(프로젝트홈·계측·해석·보고서·현장관리·설정).
- **공통 유틸세트** (참고노드 12952:19089, 별도 파일 ZBz3…): 날씨(28° 구름많음)·사이렌·벨·디스플레이모드·아바타(틸 #1bb9cd). 실 SVG/PNG 추출. IA의 "공통 유틸"과 일치.
- 파일: `gnb/gnb.html`(서비스) · `gnb/gnb-project.html`(프로젝트), css 공유.
- 버그: 절대배치 img width/height:100% 겹침 → px 명시. 드롭다운 화살표 rotate 교정.

## 후속
siteview/listview/sitesummary의 근사 GNB를 이 정밀 컴포넌트로 교체 예정.
