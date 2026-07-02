# 온사이트(Onsite) Design System — Master

> 상태: **Phase 0 / Pass A 진행** — 사이트뷰 5종에서 Foundation 토큰 추출 완료.
> 정답지 = 원본 Figma 시안. 추출 → 재생성 → audit 루프로 고도화.
> 토큰 소스: `tokens/tokens.css` (3-tier). Pretendard 기반, Primary=Emerald `#1bb9cd`.
> **쇼케이스 사이트**: `site/index.html` (토큰 단일 소비·라이브 임베드·Audit). → `http://localhost:5190/onsite-designsystem/site/`

## 0. 제품 특수성 (IA에서 도출 — 토큰 설계 선반영)
- **status 멀티레벨 컬러**: 안전/정상 · 주의 · 경고 · 위험 · 사이렌(critical). 모니터링 제품 척추. semantic.status.* 로 5단계 예약.
- **density 모드**: 공통유틸 "심플/디테일" → spacing(inset) 토큰 2벌 검토. `[data-density]` 토글 구조 후보.

## 0.5 공식 파운데이션 정합 (MIDAS Onsite DS ver0.1, file 6cMbzixAAfkhXPc7a0xsJV)
> 2026-06-25 공식 컬러(node 1:435)·타이포(9:1336) 수신 → primitive 정합.

### 네이밍 컨벤션 (공식)
- 컬러: `{family}-{step}`, **step 99=가장 밝음 → 10/5=가장 어두움**. (내 역추출과 일치 — 확정)
- primary = **emerald blue 50 `#1bb9cd`**, 55 `#29bdd0`. 풀 램프 tokens.css 반영.

### 컬러 패밀리 (공식 램프, 각 ~11~15단)
neutral(gray) · bluegray · blue · green · deep green · red · orange · yellow · lime · emerald blue(Primary) · cyan · lightblue · violet · purple · pink. + 투명도(Opacity 0~100).
→ 현재 tokens.css엔 사용된 패밀리 위주 적재. 새 패밀리는 화면에 등장 시 추가.

### 계측 초과 단계 = Gradient (공식)
| 단계 | 의미 | 그라데이션 | 토큰 |
|---|---|---|---|
| 3차 초과 | 경고 | red #fe2217→#ff6410 | `--grad-exceed-3` |
| 2차 초과 | 경고 | orange | `--grad-exceed-2` |
| 1차 초과 | 위험 | yellow | `--grad-exceed-1` |
| 안전 | — | blue | `--grad-safe` |
※ 테이블/카드의 status 텍스트색(안전=green·주의=orange·위험=red)과 별개 — 그라데이션은 "초과 단계 강조"용.

### 타이포 (공식 네임)
Pretendard Bold/SemiBold/Medium/Regular × Display(2:48/3:40) · Title(2:32/3:24/4) · Headline 2(17/SemiBold/ls0) · Body(1:16/2:15) · Label(1:14/2:13) · Caption(1:12/2:11). tokens.css에 `--fs-display-3`·`--fs-headline-2` 추가.

### semantic 정합 상태
primitive는 공식 확정. **semantic 역할토큰 매핑은 여전히 사용 맥락 기반 추정** — 화면 누적하며 계속 교정. (예: label 위계, surface/line 단계)

## 1. Foundation (Pass A)

### 1.1 Color (semantic — 추정 매핑, Pass B audit로 확정)
| semantic | 값 | primitive 원본 | 역할 |
|---|---|---|---|
| `--color-primary` | #1bb9cd | Emerald blue-50 | 브랜드/주요 액션 |
| `--color-primary-hover` | #29bdd0 | Emerald blue-55 | hover |
| `--color-label-strong` | #1f2937 | bluegray-20 | 제목/강조 텍스트 |
| `--color-label-neutral` | #4b5563 | bluegray-40 | 기본 본문 |
| `--color-label-alternative` | #6b7280 | bluegray-50 | 보조 |
| `--color-label-assistive` | #9ca3af | bluegray-60 | 캡션/placeholder |
| `--color-bg` | #ffffff | white | 기본 배경 |
| `--color-bg-subtle` | #f8f9fc | whiteblue-90 | 페이지 바탕 |
| `--color-surface` | #ffffff | white | 카드 |
| `--color-surface-sunken` | #eef2f7 | whiteblue-85 | 입력 배경 |
| `--color-line` | #e5e7eb | bluegray-85 | 구분선 |
| `--color-safe` / bg | #34ac5c / #ebf7ef | green-60/99 | 안전·정상 |
| `--color-caution` / bg | #ff7b2e / #feeee5 | orange-60/95 | 주의·경고 |
| `--color-danger` / bg | #ff4242 / #feecec | red-50/95 | 위험 |
| `--color-siren` / bg | #f82e36 / #fffafa | red-45/99 | 사이렌(critical) |
| `--color-info` / bg | #3385ff / #eaf2fe | blue-60/95 | 정보 |

primitive 램프: bluegray 13단(역순: 20=darkest~95=lightest), whiteblue 6단, red 6단, coolgray 3단. 전체값 `tokens/tokens.css`.

### 1.2 Typography (Pretendard)
| 토큰 | size | lh | ls(px) | 용도 |
|---|---|---|---|---|
| Title 2 | 32 | 1.334 | -2.7 | 대형 타이틀 |
| Title 3 | 28 | 1.358 | -2.36 | |
| Title 4 | 24 | 1.334 | -2.3 | |
| Heading 2 | 20 | 1.40 | -1.2 | 섹션 헤딩 |
| Body 1 | 16 | 1.5 | -0.19 | 본문(SemiBold/Bold) |
| Body 2 | 15 | 1.467 | -0.19 | 본문(Medium/SemiBold) |
| Label 1 | 14 | 1.429 | -0.19 | 라벨/버튼(M/SB/B) |
| Label 2 | 13 | 1.385 | -0.19 | 보조 라벨 |
| Caption 1 | 12 | 1.334 | -0.19 | 캡션 |
| Caption 2 | 11 | 1.273 | -0.19 | 최소 캡션 |
weight: 400/500/600/700. 10단계 스케일.

### 1.3 Spacing
원본 변수 미노출 → 8pt 그리드 기본값(4·8·12·16·20·24·32·40·48). Pass B에서 auto-layout 실측 보정.

### 1.4 Radius / Effect
- radius: xs=8(원본 확인) · sm10 · md12 · lg16 · full. (xs 외 Pass B 보정)
- shadow: `--shadow-card` = box-shadow-30 (0 6 32 -4 / 0 3 14 -6, #131927 alpha)

## 2. Components (Pass B — 사이트뷰에서 1차 추출)
구현: `screens/siteview.html` · `screens/siteview.css`. 모두 semantic 토큰 참조.

| 컴포넌트 | 핵심 토큰 | 비고 |
|---|---|---|
| GNB | surface/line, label, primary, danger(알림) | 로고 글리프 추출 TODO |
| Button (primary/outline) | primary/on-primary, line-strong | h38, radius-xs |
| Status Pill (안정/주의) | safe/caution solid, white | radius-full |
| Status Badge (5색) | danger/safe/caution/info/neutral bg+fg | w60, radius4 |
| Project Card | surface, whiteblue-70 border, primary(선택시 2.5px) | 240×130 |
| Detail Panel | surface, shadow-card, radius-md | 340×598 |
| Stat Block | safe(수치), label 위계 | 누적/변화량 |
| Progress Wheel | safe, wheel.svg | 80% |
| Map Marker / Label | pin svg, rgba(38,44,57,.62) label | |
| View Toggle | bluegray-50 active | |
| Dropdown Filter | surface, bluegray-90 border | |

audit: `audit/siteview-pass1.md` — 거의 일치, 구멍 4개(로고·줄바꿈·마커·spacing) Pass B 정밀화.

### 추가 컴포넌트 (리스트뷰·생성모달·현장요약)
| 컴포넌트 | 핵심 토큰 | 출처 |
|---|---|---|
| Data Table (6열) | bg-muted 헤더, line, status 텍스트색 | 리스트뷰 |
| Status Text (계측/예측상태) | danger/caution/info/safe | 리스트뷰 |
| Row Hover Actions | btn-sm primary/outline | 리스트뷰 |
| Sort Dropdown / Action Menu | surface, bluegray-90, shadow-card | 리스트뷰 |
| Pagination | bg-muted active | 리스트뷰 |
| Modal | surface, shadow-card, overlay rgba | 생성모달 |
| Form Field (input/textarea) | line-strong, label-assistive placeholder | 생성모달 |
| Email Chip (+error) | bg-muted / danger-bg | 생성모달 |
| Report Doc | **흰 배경·쉐도우 없음·폭 1055** doc, 섹션 gap80 | 현장요약 (node 10142:16670) |
| Section Title | display-2(48)/title-2(32)/title-4(24), ls-heading | 현장요약 |
| AI Callout | whiteblue-90 bg, whiteblue-80 border, primary 헤더 | 현장요약 |
| Report Table | th h100 whiteblue-85, td h78, body-1/2, lbl whiteblue-85 | 현장요약 |
| Project Card (rail) | w240 h130 pad20 r8 border1.5 whiteblue-70 · gap8 · 아이콘=**status색 미니핀** · 제목 body-1 Bold · 날짜 caption-1 **coolgray-60** · 뱃지 w60 r4 caption-2 | 지도뷰 (node 5047:26159) |

화면: `screens/siteview.html` · `listview.html` · `sitesummary.html`.
커버 archetype: **Map/Monitoring · List · Form · Report**.
audit: `audit/listview-sitesummary-pass1.md`.

## 3. Audit 기록
| 날짜 | 검증 화면 | 원본 일치 | 발견 구멍 | 조치 |
|---|---|---|---|---|
| | | | | |

## 변경 이력
- 2026-07-02 **Radio selected dot 6→8px 교정** (128:303 재확인). 지적: 체크 시 안쪽 원이 소스보다 작음. 링 16 대비 dot ≈50%(=8px)인데 6px(37%)로 작았음 → `.rad__box::after` 8px. 측정 confirmed(box19=16+1.5×2, dot 8×8). 사이트 iframe v3→v4.
- 2026-07-02 **Selection 데모 = 공식 상태 매트릭스로 재구성** (128:279·128:298·231:652 스크린샷 재확인). 지적: 기존 데모가 4상태를 안 보여줌(Hover 누락). 원소 스타일(16/16·28×16·blue-55·bluegray-80/90/70·thumb 좌우)은 소스와 일치 확인. 데모를 Figma 프레임 그대로 열=상태(Checkbox/Radio: Default·Hover·Checked/Selected·Disable / Toggle: Off·On·Disable)로 재작성 + `.is-hover` 정적 모디파이어 추가(문서용 hover 시각화). 토큰 변경 없음(전부 기존 참조). 사이트 iframe 높이 180→400.
- 2026-06-22 레포 생성, 골격 작성.
- 2026-06-22 Pass A — 사이트뷰 5종 get_variable_defs로 Foundation 토큰 추출. color/type/radius/shadow 확정, spacing 8pt 기본. `tokens/tokens.css` 생성.
- 2026-06-22 사이트뷰(지도뷰) 재생성 + audit. 컴포넌트 11개.
- 2026-06-22 리스트뷰·생성모달·현장요약 재생성. archetype 4개(Map/List/Form/Report) 커버. 컴포넌트 누적 18개. 신규 토큰(Display2·Heading3/4·Orange-48·Blue-55·Whiteblue-99·p-6) 반영.
- 2026-06-26 **DS-sync 스킬 도입**(`~/.claude/skills/mda-onsite-ds-sync`). MCP값→토큰 매칭 강제(USE/SNAP/ADD), raw px 금지, 인벤토리 자동 갱신 루프.
- 2026-06-26 현장요약(node 10142:16670) 재추출 정합: 보고서카드 폐기→**Report Doc**(흰 배경·무쉐도우·폭1055). 신규 토큰 `--ls-display:-2.82px`(ADD). sitesummary.css 타이포 전량 토큰화(USE): 48→fs-display-2·32→title-2·24→title-4·16→body-1·15→body-2·13→label-2·-1.2px→ls-heading. var 56→78.
- 2026-06-26 **전 화면·컴포넌트 일괄 토큰화 패스**(DS-sync 적용). raw 폰트/웨이트값 0 달성.
  - listview/siteview/button/gnb/dropdown/pagination 의 font-size 전부 `--fs-*` 참조로 교체(USE).
  - SNAP 2건(시스템 우선): siteview stat 29→`--fs-title-3`(28), badge 10→`--fs-caption-2`(11).
  - 신규 토큰 ADD: `--radius-2xs:6px`(소형버튼 재등장 확정). button.xl radius·listview btn-sm radius 참조.
  - 잔여 px = 1회성 geometry(높이·폭·gap·로고좌표·아이콘크기)만 — 토큰화 대상 아님.
  - 미세 letter-spacing(-0.03~-0.025px ≈0)은 Figma 반올림 노이즈로 raw 유지(스케일 토큰 아님).
- 2026-06-26 지도뷰(node 5047-26122) Project Card 정밀 정합: ① 카드 아이콘 = 손그림 빌딩 폐기 → **status색 미니핀**(node 5047:26162 실제 글리프, 인라인 svg body=currentColor·중앙점 흰, 첫 뱃지 status로 틴트). ② 날짜색 교정 `--color-label-alternative`(#6b7280) → `--p-coolgray-60`(#878a93, node 5047:26166 실측). ③ map 이미지 `decoding=sync`로 hero 페인트 지연 해결(async시 흰 화면). 카드 geometry(w240·h130·pad20·r8·gap8·뱃지 w60 r4)는 기존과 시안 일치 확인.
- 2026-06-26 지도뷰 좌측 **상세 패널**(node 5141-55643) 정밀 정합 + **GNB 시스템 컴포넌트화**:
  - **여백 버그 수정**: `.panel { padding: 24px 50px }` → **`24px 20px`** (콘텐츠 폭 240→**300**, 시안값). 패널 radius-md(12)·shadow-card.
  - GNB: 손그림 인라인 GNB 폐기 → **시스템 `components/gnb/gnb.html` iframe**(h72, tab=0). 죽은 `.gnb__*` CSS 제거. (리스트뷰/현장요약과 동일 방식)
  - 버튼 텍스트 교정: 프로젝트 이동/상세 보기 → **요약보기/상세보기**(시안). 버튼 h38→h40.
  - 섹션: 첫 섹션 버튼과 16·섹션 간 gap6, 계측결과 body h113(stat2+세로구분), 예측결과 h48(바only), 계측운영 body h119(휠90+센서). radius `--radius-2xs`(6).
  - 센서 "/ 32" 색 교정 label-strong → `--p-bluegray-55`(#7a808d 시안). update 텍스트 우하단(right20 bottom14).
  - SNAP: stat 숫자 29.12→`--fs-title-3`(28), % 14.56→`--fs-label-1`(14).
- 2026-06-26 지도뷰 **반응형(유체) 전환**: 1920 고정 캔버스 → 폭 100% 유체. chrome(GNB iframe·rail full-width, 패널 좌측 고정, viewtype 우측 고정)은 자연 크기 유지. 지도는 1920×971 자연 평면(좌상단 고정)에 마커 동일 px 공간 → 정렬 유지·뷰포트 윈도우(가장자리 잘림=지도 패닝). **uniform scale 축소 폐기**(요소 작아짐 문제). 가로 overflow 0.
- 2026-06-26 폴더 rename 대응: `onsite-ds` → `onsite-designsystem`. 스크린 6개·스킬·메모리·dashboard nav.js 경로 일괄 교체.
- 2026-06-26 **DS 쇼케이스 사이트 구축** (`site/`, 7페이지): index·foundation·components·patterns·system(foundation/components/audit). 순수 HTML/CSS/JS, 토큰 `tokens.css` 단일 소비(`@import`). Components/Patterns는 실제 컴포넌트·화면 파일 iframe 라이브 임베드. Audit는 grep 실측(하드코딩 0·raw 폰트 0·토큰 126·잠정 12·다크 미정의). site/README.md 포함. 새 토큰 추가 없음(사이트는 소비만).
- 2026-06-26 **사이트 `midas-onsite` 스타일 재스킨 + 다크모드**: 룩앤필 이식(Poppins·72px hero char-stagger·frosted GNB·home-card·btn-pill·theme.js 토글). 크롬 토큰은 사이트 로컬 `--s-*`(라이트/다크 2벌), DS 데이터 토큰(`tokens.css`)은 그대로 소비 → 네이밍 충돌 회피. DS 콘텐츠 패널(스와치·스펙표)은 라이트 유지(실제 토큰값 노출), 크롬만 다크 flip. tokens.css 변경 없음(DS 무오염).
- 2026-06-26 **사이트 구조·스타일 전면 midas-onsite 채택** (사용자: input.html 그대로 따라): midas css/js 통째 복사(reset·tokens-midas·base·layout·components·main·theme), 페이지를 **midas doc-page 구조**로 재작성 — gnb--solid + page-grid + SNB + page-content + doc-section + demo + spec-table + notice. DS 데이터는 `ds-extra.css`(midas에 없는 --p-* 팔레트·--fs-*·status·gradient, 비충돌 104토큰)로 보충 + 컴포넌트/화면 iframe. 사이트 전체 다크모드. 자체 site.css 폐기.
- 2026-06-26 **토픽별 페이지 분리 + TOC 제거**(사용자): foundation/{color,typography,spacing}·components/{button,selection,input,dropdown,pagination,gnb}·patterns/{map,list,report}·audit — 총 13+홈. SNB가 페이지 앵커(항목=페이지 링크·aria-current). 우측 TOC 폐기 → `page-grid--no-toc`로 콘텐츠 폭 확대. `_gen.py`로 공유 shell 일괄 생성. GNB=최상위 카테고리·SNB=해당 섹션 항목만(GNB 기준 분류).
- 2026-06-26 **Input·Dropdown 공식 DS 3-사이즈 정합 + Loading 스피너 신규** (file 6cMbzix):
  - **Input**(131:106 L·131:196 M·924:1168 S): 필드 h **Large48·Medium40·Small32**, pad L12·M8·S8·gap12·radius8, border **bluegray-90**, bg 흰(Outline)/bluegray-99(Filled), placeholder Medium16 bluegray-60, label SB14 bluegray-40, helper Reg13 bluegray-60(Small 12/12/11), icon L/M24·S16. focus blue-55. `.field--lg/md/sm`.
  - **Dropdown**(376:211 L·376:266 M·935:643 S): 트리거 = Input 필드 동일, h 48/40/32·240w. Select Medium16 bluegray-60, open border blue-55, 메뉴 체크 blue-55/16. `.dd--lg/md/sm`.
  - **Loading 스피너 신규**(336:38): `components/loading/`. 16x·24x, type color(blue arc #0066ff≈blue-50)/white, conic-gradient 회전 arc, reduced-motion 대응. 컴포넌트 7개로 증가.
  - 사이트: components 페이지 7개로 재생성(SNB에 Loading 추가), input/dropdown/selection 스펙 문서 갱신.
- 2026-06-26 **Selection 컴포넌트 공식 DS 정합** (file 6cMbzix, nodes 128:279·128:298·231:652 재추출): accent **blue-50 #0068ff → blue-55 #1a75ff**(공식 DS 값, chk/radio/toggle 전부 confirmed). 크기 **chk/radio 18→16**, **toggle 36×20→28×16**(thumb 16→12). default border bluegray-65→**bluegray-80**, disable bg-muted→**bluegray-90**, toggle off bluegray-65→**bluegray-70**. **Hover 상태 추가**(border blue-55). tokens.css blue-55 주석 교정(공식 선택컨트롤 accent). 제품파일(blue-50)과 공식파일(blue-55) 값 상이 — 공식 채택.
- 2026-07-02 **정책 agent 실전 테스트 — PRD→화면 생성**(첫 비-Figma 소스). PRD "프로젝트 사용자 초대"를 판단 파이프라인 수동 실행 → `screens/member-management.html`(우측 드로어, 통합관리자 관점) 생성. gap을 정식 누적으로 해소:
  - **신규 토큰 ADD**: `--color-dim`(#131927)·`--dim-backdrop`(color-mix 45%, 모달/드로어 백드롭 재사용)·`--shadow-drawer`(card보다 강한 elevation).
  - **신규 컴포넌트 3종**: `components/tag/`(상태 태그 — tone neutral/safe/caution/danger/info × sm/md, status 토큰 재사용)·`components/avatar/`(이니셜 원형 sm/md/lg + pending 점선)·`components/modal/`(확인 다이얼로그, --dim-backdrop). 컴포넌트 10개로 증가.
  - **버튼 variant 추가**: `.btn--danger`(파괴적 확정 — 제거, --color-danger/red-45).
  - 화면 CSS 전량 토큰 참조(1회성 drawer 폭 440만 raw). 상태색 = bootstrap §5 정책(참여중 safe·초대중 caution·검토대기 info).
  - 검증(preview 5190): 드로어·권한 게이팅(통합관리자 제거 비활성)·제거 danger 모달·외부이메일 자동완성 분기 전부 정상, 콘솔 에러 0.
  - 발견 gap→규칙 후보: 우측 드로어 골격·autocomplete·권한 위계 게이팅·상태 태그·아바타·모달·danger 버튼·빈상태. → rulebook 파일화 대상.
- 2026-07-02 **동일 기능 실제 Figma 시안 구현**(file ZBz3Nc, node 12774:40857 "프로젝트 멤버 초대") → `screens/member-invite-modal.html`. 위 PRD 드로어 추측과 대조 = rulebook 교정 재료. THE LOOP 실측 적용:
  - **토큰 정정(실측이 추측을 이김)**: `--color-dim` #131927(추측)→**neutral-5 #0f0f0f**, dim opacity 45→**80%**(node 12774:41303 실측). 신규 primitive `--p-neutral-5`. 신규 `--radius-3xs:4px`(칩·뱃지 재등장 확정).
  - **컴포넌트 정정**: avatar 기본 bg surface-sunken→**bluegray-80**, 글자 label-neutral→**bluegray-60**(실측). modal `--lg`(w1000 r16) 추가.
  - **진입형태**: PRD 추측=드로어 / 실제 시안=**중앙 모달**. → rulebook "진입형태" 규칙은 소스 우선.
  - **상태 표현**: 실제 시안은 상태태그 미사용, **섹션 그룹**(접근요청/초대중/프로젝트멤버)으로 상태 구분. → §5 상태정책 = "표=컬러텍스트 / 리스트카드=태그 / **관리모달=섹션그룹**" 컨텍스트 조건부로 확정.
  - 실측 매핑: 타이틀 title-3(28)·부제 body-2·역할 label-1 Medium bluegray-55·행이름 body-1 SB bluegray-30·메타 caption-1 bluegray-60·칩 label-1 bluegray-30 r4·액션버튼 w48h32 r6 caption-1 Bold. 전 토큰 참조, raw 폰트 0.
  - 검증(preview): Figma 시안과 레이아웃·컬러·컴포넌트 일치, 콘솔 에러 0.
