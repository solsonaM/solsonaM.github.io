(function () {
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var menuBtn = document.querySelector(".menu-toggle");
  var mobileNav = document.getElementById("mobile-nav");
  var sun = document.querySelector('[data-icon="sun"]');
  var moon = document.querySelector('[data-icon="moon"]');
  var menuIcon = document.querySelector('[data-icon="menu"]');
  var closeIcon = document.querySelector('[data-icon="close"]');
  var year = document.querySelector("[data-year]");

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
    }
    if (sun && moon) {
      sun.classList.toggle("is-off", theme !== "dark");
      moon.classList.toggle("is-off", theme !== "light");
    }
  }

  setTheme(currentTheme());

  if (toggle) {
    toggle.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = !mobileNav.classList.contains("is-open");
      mobileNav.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (menuIcon && closeIcon) {
        menuIcon.classList.toggle("is-off", open);
        closeIcon.classList.toggle("is-off", !open);
      }
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
        if (menuIcon && closeIcon) {
          menuIcon.classList.remove("is-off");
          closeIcon.classList.add("is-off");
        }
        document.body.style.overflow = "";
      });
    });
  }

  if (year) year.textContent = String(new Date().getFullYear());

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".reveal").forEach(function (node) {
    if (reduce) {
      node.classList.add("is-in");
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
  });
})();
