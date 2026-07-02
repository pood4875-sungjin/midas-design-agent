# Audit — 리스트뷰 + 현장요약 Pass 1

- **날짜**: 2026-06-22
- **원본**: nodes 5125:27750 / 7387:63898 / 5125:66298 (리스트뷰 3종), 10142:16628 (현장요약)
- **재생성**: `screens/listview.html`, `screens/sitesummary.html`

## 리스트뷰 (List archetype) — 일치 ✓
| 영역 | 일치 | 비고 |
|---|---|---|
| GNB 3탭 + CTA | ✓ | 지도뷰/리스트뷰/현장요약 |
| 테이블 (6열) | ✓ | 프로젝트명(핀)·공사기간·가동율·센서·계측상태·예측상태 |
| status 텍스트 컬러 | ✓ | 3차초과(red)·2차(orange)·1차(blue)·안정(gray)·주의(caution) |
| 행 hover 액션 | ✓ | 요약보기(primary)·상세보기(outline)·⋯ |
| 정렬 드롭다운 | ✓ | 위험도순/종료일/이름순 (토글) |
| 행 액션 메뉴 | ⚠ | 편집/삭제 — ⋯ 클릭 메뉴 미연결(hover 버튼만) |
| 페이지네이션 | ✓ | « ‹ 1~5 › » |
| 생성 모달 (Form) | ✓ | 프로젝트명·위치(검색/gps)·기간·구성원초대(이메일칩,에러)·설명·취소/생성 |

## 현장요약 (Report archetype) — 구조 일치, 내용 재구성 ⚠
| 영역 | 일치 | 비고 |
|---|---|---|
| 보고서 헤더(중앙 타이틀·기간) | ✓ | |
| 툴바(기간 select + 보고서 생성) | ✓ | |
| 전체 현장 요약 테이블 | ✓ 구조 | status 뱃지 |
| 현장 위치 지도 | ✓ | 정적 map |
| 프로젝트 섹션 × N (callout + 계측현황 + 예측현황) | ✓ 구조 | |
| **세부 수치/텍스트** | ✗ | 원본 글자 작아 판독 불가 → **대표값 재구성**. 정밀화 시 design_context 또는 고해상 크롭으로 실값 반영 필요 |

## 신규 토큰 (이 화면들에서 추가 발견)
- Display 2/Bold 48 · Heading 3(18)/4(17) SemiBold · Reading 라인하이트군(1.6/1.625)
- Orange-48 #f55a00 · Blue-55 #1a75ff · Whiteblue-99 #fdfdfe
- **spacing**: Paddings&Gaps/p-6 = 24 (첫 실제 spacing 변수 — 8pt 그리드 확인)

## 판정
List·Form·Report 3개 archetype을 Foundation 토큰으로 커버 성공. 누적 archetype: Map/Monitoring·List·Form·Report. 미세 구멍: 리스트 액션메뉴 연결, 보고서 실값.
