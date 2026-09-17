/**
 * Neural Learn — bundle único
 * Inclui: menu mobile, header scroll, reveal, scroll suave e carrossel de produtos.
 */
(function () {
  "use strict";

  // ========== MENU MOBILE ==========
  function initMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");

      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ========== HEADER SCROLL ==========
  function initHeader() {
    const header = document.querySelector(".site-header");

    if (!header) return;

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // ========== REVEAL ON SCROLL ==========
  function initReveal() {
    const items = document.querySelectorAll(".reveal");

    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ========== SCROLL SUAVE ==========
  function initAnchorScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        if (targetId === "#topo") {
          e.preventDefault();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

          return;
        }

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  // ========== CARROSSEL DE PRODUTOS ==========
  function initProductsCarousel() {
    const track = document.querySelector(".carousel-track");
    const nextBtn = document.querySelector(".carousel-btn.next");
    const prevBtn = document.querySelector(".carousel-btn.prev");

    if (!track || !nextBtn || !prevBtn) return;

    function getScrollStep() {
      return track.offsetWidth / 2;
    }

    nextBtn.addEventListener("click", function () {
      track.scrollBy({
        left: getScrollStep(),
        behavior: "smooth"
      });
    });

    prevBtn.addEventListener("click", function () {
      track.scrollBy({
        left: -getScrollStep(),
        behavior: "smooth"
      });
    });
  }

  // ========== START ==========
  function start() {
    initMenu();
    initHeader();
    initReveal();
    initAnchorScroll();
    initProductsCarousel();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();