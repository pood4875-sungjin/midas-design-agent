# MDA 구축 계획 (Phase 0~1)

> 목표: 자연어 → 기획 → (컨셉) → DS → 화면 시안 파이프라인의 **판단·지식·재료 3층**을 채운다.
> 비유: 주방. 주방장(판단)이 레시피북(지식)과 냉장고(재료)를 참조해 요리(HTML)를 낸다.
> 온사이트 = 테스트베드. DS(재료)가 이미 있으니 **"화면 생성(④)"부터 거꾸로 검증**.

---

## 0. 핵심 원칙 (계획 전체를 관통)

1. **한 화면 수직 관통 먼저.** 6종 룰 다 만들고 틀리면 전부 재작업. List 하나로 ①~⑤ 전부 뚫어 구조 검증 → 맞으면 복사.
2. **있는 규칙은 주고, 없는 규칙은 뽑는다.** DS·척추는 가드레일로 처음부터 AI에 줌. recipe·선택룰 등 없는 규칙은 화면 만들며 추출.
3. **미리 다 쓰지 않는다.** 폴더(카테고리)만 잡고, 내용은 화면이 끌어낸다. 백지 추측 = 위험.
4. **정답지로 반증한다.** 모든 산출물은 원본 Figma 시안과 audit(Gate 0). 어긋나면 룰이 틀린 것.

---

## 1. 14칸 현황 (보강판 기준)

판단(🟢 Routing) · 지식(🟠 Policy) · 재료(🔵 Resource). 점 = 됨/일부/없음.

| 층 | 칸 | 비유 | 현황 |
|---|---|---|---|
| 입력 | IR 스키마 ★ | 웨이터 주문서 정리 | 🔴 없음 |
| 🟢판단 | meta | 운영 매뉴얼 | 🔴 |
| 🟢판단 | requirement routing | 무슨 요리? (선택룰) | 🔴 |
| 🟢판단 | retrieval playbook ★ | 어느 레시피 펼쳐? | 🔴 |
| 🟢판단 | checklists | 나가기 전 검수 | 🟠 audit 루프만 |
| 🟠지식 | archetypes | 요리 장르 | 🟠 목록만(IA) |
| 🟠지식 | ui rules | 플레이팅 규칙 | 🔴 |
| 🟠지식 | ux patterns | 검증된 조리법 | 🟠 references 있음, 룰化 ❌ |
| 🟠지식 | policies | 가게 원칙(위계·표기) | 🔴 |
| 🔵재료 | tokens | 양념 | 🟢 Pass A |
| 🔵재료 | assets ★ | 고명(아이콘) | 🔴 |
| 🔵재료 | components | 손질 재료 | 🟠 일부 |
| 🔵재료 | recipes | 조합법(슬롯) | 🔴 |
| 🔵재료 | page shell | 기본 상차림 | 🟠 gnb 정도 |
| 출력 | feedback loop ★ | 손님반응→레시피북 개정 | 🔴 |

★ = 이번 보강에서 추가한 칸.

---

## 2. 단계별 계획

### STEP 0 — 메뉴판: archetype 커버리지 맵 〔너랑 같이〕
- 온사이트 실제 화면 전부 나열 → 각 화면이 무슨 archetype인지 매핑.
- **산출물**: `docs/archetype-coverage.md` — 6종으로 충분한지/7번째 필요한지 **데이터로** 확정 + 경계 케이스(통합보기 등) 표시.
- **왜 먼저**: 추측 말고 증거. 이거 없이 룰 만들면 헛고생.
- 채우는 칸: 🟠 archetypes

### STEP 1 — List 한 화면 수직 관통 (견본) 〔내 초안 → 너 검토〕
한 화면으로 비어있는 칸을 처음 채운다. 순서 = 주방장 4단계.
- **① IR 스키마** (`docs/intake-schema.md`) — List 만들려면 입력에 뭐가 필수? (목적·필드·필터·다음행동·위험도)
- **② 선택룰** (`docs/decision-contract.md` 시작) — 무슨 신호면 List로 가나 + 결정노드 순서(그릇→이름→구조→버튼→재료)
- **③ recipe** (`docs/recipes/list.md`) — List 슬롯 구성(필터바+테이블+페이지네이션) + 슬롯 제약(개수·우선순위·필수)
- **④ 슬롯↔컴포넌트** — 어떤 슬롯에 기존 컴포넌트 꽂나. 빠진 컴포넌트는 onsite-ds에 추가.
- **⑤ 점검 룰셋** (`docs/checklist.md` 시작) — 대비·status색·하드코딩금지·필수슬롯 채움
- 막히면 그때 UX 판단근거 한 줄씩 추출 → `docs/ux-principles/*.md`
- **산출물**: 재생성된 List 화면 + `audit/`로 원본 리스트뷰 대비 검증(Gate 0).
- **왜**: 아키텍처가 진짜 작동하는지 한 화면으로 증명. 깨지면 여기서 싸게 고침.
- 채우는 칸: 입력 IR · 🟢 routing/checklist · 🟠 archetypes/ui rules/ux patterns/policies · 🔵 components/recipes/assets/shell (List에 필요한 만큼)

### STEP 2 — 나머지 archetype 확장 〔반복〕
- 견본 틀 그대로 Detail → Form → Report → Dashboard → Map.
- 매번 audit. 안 맞는 부분 = 견본 틀 수정 신호.
- **산출물**: archetype별 recipe + 누적 컴포넌트(Pass B 완성) + 누적 UX 원칙.

### STEP 3 — 횡단 정리 〔내 초안〕
- **직교축 확정**: status 5레벨 · density 2벌을 모든 recipe에 곱하는 규칙.
- **retrieval playbook** (`docs/retrieval-playbook.md`) — 어떤 요구사항에 어떤 정책·패턴을 어떤 순서로 꺼낼지. 정책 늘어난 뒤 필요. (risk 2 해법)
- **meta / ui rules 분리·정리**, 점검 룰셋 표준화, 커버리지 맵 갱신.
- 채우는 칸: 🟢 meta/retrieval playbook · 🟠 ui rules 정리

### STEP 4 — 정책 운영틀 〔나중〕
- **policy 스키마** (`docs/policy-schema.md`) — scope/priority/supersedes.
- **승격 게이트** — 사람 선택을 정책에 반영할 때 "왜·맥락·일반화가능?" 메타 필수. N회×다맥락 재현돼야 승격. (feedback loop 안전장치)
- 채우는 칸: 출력 feedback loop
- **지금 안 함.** 화면 몇 개 쌓인 뒤 의미 있음.

---

## 3. 의존 순서

```
STEP0 커버리지맵 → STEP1 List수직관통 → STEP2 확장 → STEP3 횡단 → STEP4 운영틀
   (증거)            (구조검증)           (양)        (메커니즘)   (확장성)
```
앞이 뒤의 전제. 0 없이 1 못 하고, 1 검증 안 되면 2 무의미.

---

## 4. 문서 지도 (최종 목표)

```
docs/
  PLAN.md                 이 문서
  archetype-coverage.md   STEP0 화면→archetype 매핑
  intake-schema.md        ① 질문틀 + 기획서 스키마
  decision-contract.md    ② 선택룰·결정노드·우선순위 (라우팅 메커니즘)
  recipes/                ③ archetype별 슬롯 recipe
  checklist.md            ⑤ 점검 룰셋
  retrieval-playbook.md   STEP3 조회 전략
  policy-schema.md        STEP4 정책 운영틀 + 승격 게이트
  meta.md                 문서 운영 기준 (or policy-schema 흡수)
  ui-rules.md             레이아웃·텍스트·컴포넌트 사용 기본규칙
  ux-principles/          판단근거(WHY) — 화면이 끌어내며 채움
    hierarchy.md            정보 위계·우선순위
    states.md               빈/로딩/에러/권한
    writing.md              단위·숫자·빈값 표기
    dataviz.md              차트·status 색
    actions-feedback.md     액션·확인·되돌리기
    accessibility.md        대비·키보드·포커스
onsite-ds/                재료 (이미 있음, 누적)
  tokens/ components/ assets/ page-shell/
references/               UX 패턴 원천 (있음)
audit/                    원본 vs 재생성 검증 기록
```

---

## 5. 지금 당장

**STEP 0** — 온사이트 화면 목록부터 같이 뽑기.
IA에서 화면 후보 긁어 표 초안 → 너가 "맞다/아니다" 쳐냄 → archetype 확정.
