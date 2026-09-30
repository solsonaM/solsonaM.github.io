(function () {
  "use strict";
  var root = document.documentElement;
  var themeToggle = document.getElementById("theme-toggle");
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var initial = stored || (prefersDark ? "dark" : "light");
  setTheme(initial);
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }
  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.classList.add("flash");
        window.setTimeout(function () { target.classList.remove("flash"); }, 600);
      }
    });
  });
  (function () {
    var img = document.getElementById("hero-img");
    if (!img) return;
    Promise.all([0,1,2,3].map(function (i) {
      return fetch("assets/p" + i + ".b64").then(function (r) { return r.text(); });
    })).then(function (parts) {
      img.src = "data:image/jpeg;base64," + parts.map(function (p) { return p.trim(); }).join("");
    }).catch(function () {});
  })();
})();
