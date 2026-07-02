// state.js를 주기적으로 재주입 → 자동 리렌더 (file:// 환경에서도 동작, 새로고침 불필요)
(function () {
  var POLL_MS = 4000;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); };

  function loadState(cb) {
    var s = document.createElement("script");
    s.src = "js/state.js?t=" + Date.now();
    s.onload = function () { cb(window.MDA_STATE); s.remove(); };
    s.onerror = function () { s.remove(); };
    document.body.appendChild(s);
  }

  function render(d) {
    if (!d) return;
    $("p-title").textContent = d.project;
    $("p-sub").textContent = d.subtitle;
    $("p-updated").textContent = "갱신: " + d.updatedAt;
    $("p-now").textContent = d.now.phase + " · " + d.now.step;

    $("pipe").innerHTML = d.pipeline.map(function (n) {
      return '<div class="node" data-s="' + n.status + '">' +
        '<div class="node__id">' + n.id + '</div>' +
        '<div class="node__n">' + esc(n.name) + '</div>' +
        '<div class="node__d">' + esc(n.desc) + '</div></div>';
    }).join("");

    $("rm").innerHTML = d.roadmap.map(function (r) {
      var gt = r.gate === "passed" ? "passed" : r.gate === "open" ? "open" : "locked";
      var gl = r.gate === "passed" ? "Gate ✓" : r.gate === "open" ? "Gate 진행" : "잠김";
      return '<div class="rm__item" data-s="' + r.status + '"><span class="rm__dot"></span>' +
        '<div class="rm__b"><span class="rm__id">' + r.id + '</span>' +
        '<div class="rm__title">' + esc(r.title) + '</div>' +
        (r.note ? '<div class="rm__note">' + esc(r.note) + '</div>' : '') + '</div>' +
        '<span class="tag tag--' + gt + '">' + gl + '</span></div>';
    }).join("");

    function group(g) {
      return '<div class="ck__group"><h4>' + esc(g.title) + '</h4>' +
        g.items.map(function (i) {
          return '<div class="ck__row" data-done="' + !!i.done + '">' +
            '<span class="ck__box">' + (i.done ? "✓" : "") + '</span>' + esc(i.label) + '</div>';
        }).join("") + '</div>';
    }
    $("ck").innerHTML = group(d.passes.A) + group(d.passes.B);

    var t = d.tokens;
    $("tok").innerHTML = [["color", "Color"], ["type", "Type"], ["spacing", "Spacing"],
      ["radius", "Radius"], ["component", "Comp"]].map(function (k) {
      return '<div class="tok__c"><div class="tok__n">' + (t[k[0]] || 0) + '</div>' +
        '<div class="tok__l">' + k[1] + '</div></div>';
    }).join("");

    $("audit").innerHTML = d.audit && d.audit.length
      ? '<table class="tbl"><thead><tr><th>화면</th><th>원본 일치</th><th>발견 구멍</th></tr></thead><tbody>' +
        d.audit.map(function (a) {
          return '<tr><td>' + esc(a.screen) + '</td><td class="m m--' + a.match + '">' +
            ({ ok: "일치", partial: "부분", fail: "불일치" }[a.match] || a.match) +
            '</td><td>' + esc(a.gaps || "-") + '</td></tr>';
        }).join("") + '</tbody></table>'
      : '<div class="empty">audit 기록 없음 — 화면 재생성 후 채워짐</div>';

    $("log").innerHTML = d.activity.map(function (a) {
      return '<div class="log__row"><span class="log__t">' + esc(a.time) +
        '</span><span class="log__x">' + esc(a.text) + '</span></div>';
    }).join("");
  }

  loadState(render);
  setInterval(function () { loadState(render); }, POLL_MS);
})();
