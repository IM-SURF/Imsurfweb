// IM-SURF site navigation: mobile hamburger + tap/click-friendly dropdowns.
// Works with touch, mouse and keyboard (no :hover dependency).
(function () {
  "use strict";

  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var dropdowns = Array.prototype.slice.call(document.querySelectorAll(".dropdown"));

  function closeAllDropdowns(except) {
    dropdowns.forEach(function (d) {
      if (d !== except) {
        d.classList.remove("open");
        var btn = d.querySelector(".dropdown-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (!isOpen) closeAllDropdowns(null);
    });
  }

  dropdowns.forEach(function (dropdown) {
    var toggle = dropdown.querySelector(".dropdown-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var willOpen = !dropdown.classList.contains("open");
      closeAllDropdowns(dropdown);
      dropdown.classList.toggle("open", willOpen);
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  });

  // Click outside closes open dropdowns (desktop behaviour)
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) closeAllDropdowns(null);
  });

  // Escape closes everything
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllDropdowns(null);
      if (siteNav) siteNav.classList.remove("open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Highlight the current page's nav link
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#site-nav a").forEach(function (a) {
    var href = a.getAttribute("href").split("#")[0];
    if (href === here) a.setAttribute("aria-current", "page");
  });
})();
