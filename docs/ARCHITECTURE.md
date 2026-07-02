# MIDAS Design Agent (MDA)

기획 산출물 → 디자인 시스템 → 다중 페이지 UI → 프로토타입 생성 AX 에이전트.
이 레포는 Design Agent 영역 + 온사이트(Onsite) 제품 디자인 시스템을 함께 적재한다.

## 설계 철학

> LLM = 분석·선택·생성(컨셉/토큰 시드). 엔진 = 결정론적 조립.
> "제어 가능한 생성" = LLM이 토큰값까지 뱉지 않고 좁은 시드만 정하면 엔진이 규칙대로 확장.

## 파이프라인

```
[Planning Input]
 S1 Ingest    MD → 정규화 IR (JSON)      LLM
 S2 Concept   IR → 컨셉3 + 토큰시드        LLM   (Phase 3에서 구현)
 S3 DesignSys 시드 → 토큰 확장             엔진
 S4 Pages     IR×Pattern → 컴포넌트트리    엔진 + LLM 폴백
 S5 Prototype 페이지 링크/플로우           엔진
 S6 Render    트리 → HTML/CSS             엔진 (Handlebars)
```

## 확정 결정

| 항목 | 선택 |
|---|---|
| 입력 포맷 | Markdown → JSON IR 정규화 (S1에서) |
| S4 슬롯↔필드 매핑 | 규칙 기반 + 애매할 때만 LLM 폴백 |
| 렌더 스택 | Handlebars + CSS Custom Properties |
| 토큰 구조 | DTCG 3-tier (primitive→semantic→component) |
| 다크모드 | semantic 토큰만 override, [data-theme] 토글 |

## 토큰 스케일 기준 (references 근거)

- 스페이싱: 4·8·12·16·24·32·48·64 (8pt 주, 4pt 보조)
- 타입: 12/14/16/20/24/32/40, line-height 본문 1.5(한글 1.45~1.6)·헤딩 1.25
- 컬러: primitive ramp → semantic 역할토큰 경유 (다크모드/테마 전환 위함)

## 로드맵

- **Phase 0 (현재)** — 온사이트 Figma 시안 역설계 → DS 추출·고도화 + master md → 화면 재생성 → 원본과 audit 검증. 정답지(원본 시안)로 DS 완성도 입증.
  - Pass A: 대표 시안 2~3개에서 Foundation 토큰만 (color/type/spacing/radius)
  - Pass B: 시안별 컴포넌트 추출 → 토큰 참조 연결
  - Gate 0: 재생성 화면 ≈ 원본 → Phase 1 진입
- **Phase 1** — 결정론 엔진 제품화 (contracts → S6 → S4 → S1)
- **Phase 2** — 자연어 입력 확장
- **Phase 3** — 컨셉 3종 생성 (references md 참조) → 고정DS/생성DS 어댑터로 결합

## 폴더

```
onsite-ds/        온사이트 디자인 시스템 (정답지 기반)
  tokens/         3-tier DTCG
  components/     schema + hbs 템플릿
  DESIGN-SYSTEM.md  master 문서
site/             DS 쇼케이스·검증 사이트 (design-system-site 스킬 구조)
screens/          재생성 화면
audit/            원본 vs 재생성 비교 기록
docs/             아키텍처·결정 기록
```
