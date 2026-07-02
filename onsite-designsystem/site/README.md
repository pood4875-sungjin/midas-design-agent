# ONSITE Design System — 쇼케이스 사이트

온사이트 DS가 **실제로 잘 들어갔는지** 확인하는 정적 문서 사이트.
**구조·스타일 모두 `midas-onsite` 사이트를 그대로 채택** (SNB + page-content + TOC 3열 doc-page,
gnb--solid frosted, Poppins hero, doc-section/demo/spec-table/notice, 라이트·다크 토글).

## 실행
```
http://localhost:5190/onsite-designsystem/site/index.html
```
우상단 ☀/🌙 로 테마 전환.

## 페이지 (토픽별 분리 · SNB가 페이지 앵커 · 우측 TOC 없음 `page-grid--no-toc`)
```
index.html               홈 — hero(72px char-stagger) + home-grid
foundation/color.html        Color 램프 + Status/Gradient
foundation/typography.html   타입 스케일
foundation/spacing.html      Spacing · Radius · Effect
components/button.html … selection·input·dropdown·pagination·gnb (각 demo iframe + spec)
patterns/map.html … list·report (각 화면 iframe)
audit.html               토큰 커버리지 검증 (score + spec-table)
```
- **GNB = 최상위 카테고리, SNB = 그 카테고리 항목만**. Foundation 탭이면 SNB에 Color/Typography/Spacing만, Components 탭이면 컴포넌트만. GNB 해당 탭 `aria-current` 활성.
- 페이지는 SNB(좌측)로 이동 — 각 항목 = 실제 페이지 링크(aria-current 하이라이트).
- 우측 TOC 제거 → 콘텐츠 폭 확대(`--no-toc`).

## CSS 레이어
```
reset.css         (midas 복사)
tokens-midas.css  (midas 토큰 — 크롬·다크·구조. 원본 css/tokens.css)
ds-extra.css      온사이트 DS 데이터 토큰 (midas에 없는 --p-* 팔레트·--fs-*·status·gradient). 비충돌.
base.css layout.css components.css  (midas 복사 — t-*, snb, toc, doc-section, demo, spec-table…)
```
js/main.js·theme.js 도 midas 복사 (scroll-spy·TOC·char-stagger·copy·테마 토글).

## 원칙
- **구조·스타일 = midas 채택**, **DS 데이터 = 온사이트 tokens.css 단일 소비**(ds-extra로 보충). 두 토큰 네이밍 분리 → 충돌 없음.
- 컴포넌트·화면은 실제 파일 iframe → 데모 정상 = DS 소비 정상.
- 다크모드는 사이트 전체 지원(midas 토큰). DS 자체 다크 토큰은 미수신 → Audit 갭.
- 갭(다크·density·공식 semantic)은 임의로 안 채움(충실도 규칙).
