// 공통 GNB 주입 — 각 페이지 <body data-page="..."> 로 active 표시
(function () {
  var items = [
    { id: "overview", label: "현황판", href: "index.html" },
    { id: "prd",      label: "PRD",    href: "prd.html" },
    { id: "spec",     label: "스펙",   href: "spec.html" },
    { id: "stages",   label: "단계",   href: "stages.html" },
    { id: "comp",     label: "컴포넌트", href: "http://localhost:5190/onsite-designsystem/components/index.html" }
  ];
  var active = document.body.getAttribute("data-page") || "overview";
  var nav = document.createElement("nav");
  nav.className = "gnb";
  nav.innerHTML =
    '<a class="gnb__brand" href="index.html">◆ MDA</a>' +
    '<div class="gnb__links">' +
      items.map(function (i) {
        return '<a class="gnb__link' + (i.id === active ? " is-active" : "") +
          '" href="' + i.href + '">' + i.label + "</a>";
      }).join("") +
    '</div>' +
    '<span class="gnb__env">localhost:5189</span>';
  document.body.insertBefore(nav, document.body.firstChild);
})();
