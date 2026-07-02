# 온사이트 생성 정책 rulebook

PRD/시안 → 온사이트 DS 준수 화면을 "사람이 만든 것처럼" 생성하기 위한 **판단 기준서**.
설계: [docs/2026-07-02-generation-policy-agent-design.md](../docs/2026-07-02-generation-policy-agent-design.md).
실전 근거: [bootstrap 24화면](../docs/2026-07-02-onsite-screen-bootstrap.md) + 멤버관리(PRD 드로어)·초대모달(Figma) 2빌드.

## 커널 루프

```
입력(PRD 또는 Figma 노드)
 → 노드 순회: 1 IA → 2 레이아웃 → 3 UX(축) → 4 컴포넌트 → 5 토큰 → 6 audit
 → 각 노드: rulebook 조회
      ├ 규칙 매치      → 적용 (결정론)
      └ 규칙 없음(gap) → 신규 규칙 제안 → [사용자 승인] → 파일 누적 → 적용
```

- LLM = 축 판단·gap 감지·제안. 엔진 = 패턴→컴포넌트 결정론 조립. (MDA 철학)
- 토큰 값 레벨 누적은 `mda-onsite-ds-sync` 스킬이 담당. 이 rulebook은 **규칙/패턴 레벨** 누적.

## 소스별 판단 경계 (실전 교훈 — 가장 중요)

같은 기능을 PRD추측(드로어)·Figma실측(모달)로 두 번 만든 결과: **소스 없이 추측하면 진입형태·상태표현 등 비주얼 판단이 빗나감.**

| 소스 | 규칙 |
|------|------|
| **Figma 노드 있음** | 충실도 우선([midas-onsite-fidelity-rule]). 진입형태·색·간격·상태표현 **실측 그대로**. 추측 금지. |
| **PRD 텍스트만** | 구조·흐름은 규칙으로 생성. 단 **비주얼 결정(진입형태/상태표현/레이아웃)은 게이트로 사용자 확인** 후 확정. |

## 규칙 스키마 (통일)

```
### R-<노드><번호>: <이름>
- 조건: <입력 신호>
- 결정: <선택/적용>
- 근거: <bootstrap 화면 / Figma 노드 / references>
- 신뢰도: 확정 | 잠정(1회 관측) | 추측(소스없음)
```

## 파일 구성

| 파일 | 내용 |
|------|------|
| `rules/1-ia.md` | 아키타입 판정 |
| `rules/2-layout.md` | 골격·진입형태 |
| `rules/3-ux-axes.md` | 결정축 7개 + 축별 규칙 |
| `rules/4-components.md` | 패턴→컴포넌트 레시피 + 권한 게이팅 |
| `rules/5-tokens.md` | 상태·토큰 컨텍스트 규칙 |
| `rules/6-audit.md` | "사람이 만든 것처럼" 검증 체크 |
| `patterns/data-representation.md` | 데이터표현 패턴 8종 |
| `patterns/overlays.md` | 드로어/패널 + 모달 5종 |

## 확장 (게이트)

새 상황에서 규칙 없음 → AI가 위 스키마로 초안 작성 → 사용자 승인 → 해당 파일에 append + 신뢰도 표기.
승인 없이 확정 금지. 잠정 규칙은 재관측 시 확정 승격.
