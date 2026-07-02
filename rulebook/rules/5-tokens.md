# Node 5 — 토큰 / 스타일

semantic 토큰 바인딩. 값 레벨 재사용/스냅/신규는 `mda-onsite-ds-sync`. 여기선 **맥락→토큰 매핑 규칙**.

## 상태 컬러

### R-5.1: 초과 에스컬레이션
- 1차→2차→3차 = **파랑 → 주황 → 빨강** (계측초과). 강조는 `--grad-exceed-*`, 텍스트/배지는 status 토큰.
- 근거: 공식 Gradient + bootstrap §5
- 신뢰도: 확정

### R-5.2: 상태 시맨틱 매핑
- 안전/정상 = safe(green) · 주의 = caution(orange) · 위험 = danger(red) · critical = siren · 정보/대기 = info(blue)
- 멤버상태: 참여중=safe / 초대중=caution / 검토대기=info
- 근거: tokens.css semantic + 멤버 드로어
- 신뢰도: 확정

## 상태 표현 방식 (컨텍스트 조건부 — 핵심)

### R-5.3: 컨텍스트별 상태 표현
- **테이블/표** → 컬러 텍스트 (배지 pill 아님, 밀도 유지)
- **리스트 카드/행** → 상태 태그(tag 컴포넌트)
- **관리 모달** → **섹션 그룹**으로 상태 구분(태그 없이), 예: 접근요청/초대중/멤버
- 근거: 리스트뷰(텍스트) vs 멤버드로어(태그) vs 초대모달(섹션) 대조
- 신뢰도: 확정

## 오버레이

### R-5.4: 딤 백드롭
- `--dim-backdrop` = neutral-5 @ 80% (실측). 모달/드로어 공통.
- 근거: 초대모달 node 12774:41303
- 신뢰도: 확정

## label 위계

### R-5.5: 텍스트 위계
- 제목=label-strong(bluegray-20) / 본문·이름=bluegray-30~40 / 보조·역할=bluegray-55 / 캡션·메타=bluegray-60 / placeholder=bluegray-55~60
- 근거: 초대모달 실측
- 신뢰도: 잠정(semantic 매핑 계속 교정)
