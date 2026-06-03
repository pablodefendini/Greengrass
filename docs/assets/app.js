// GreenGrass docs — UI behaviour: theme toggle, mobile nav, collapsible sidebar
// sections, and "On this page" scrollspy. Zero dependencies.
(function () {
  'use strict';

  // ---- Theme -------------------------------------------------------------
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('gg-theme'); } catch (e) {}
  if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored);

  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      if (!current) {
        // No explicit choice yet — flip away from the current OS preference.
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        current = prefersDark ? 'dark' : 'light';
      }
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('gg-theme', next); } catch (e) {}
    });
  }

  // ---- Mobile navigation -------------------------------------------------
  var body = document.body;
  var menuToggle = document.querySelector('.menu-toggle');
  var backdrop = document.querySelector('.sidebar-backdrop');
  function closeNav() { body.classList.remove('nav-open'); if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false'); }
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      var open = body.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
  }
  if (backdrop) backdrop.addEventListener('click', closeNav);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
  // Close the drawer after following a link on mobile.
  document.querySelectorAll('.sidebar a').forEach(function (a) {
    a.addEventListener('click', function () { if (window.innerWidth <= 880) closeNav(); });
  });

  // ---- Collapsible sidebar sections -------------------------------------
  document.querySelectorAll('.nav-section-title').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var section = btn.closest('.nav-section');
      var open = section.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  // ---- "On this page" scrollspy -----------------------------------------
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var byId = {};
    tocLinks.forEach(function (link) {
      var id = decodeURIComponent(link.getAttribute('href').slice(1));
      var el = document.getElementById(id);
      if (el) byId[id] = link;
    });
    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      var firstVisible = Object.keys(byId).filter(function (id) { return visible.has(id); })[0];
      tocLinks.forEach(function (l) { l.classList.remove('active'); });
      if (firstVisible && byId[firstVisible]) byId[firstVisible].classList.add('active');
    }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });
    Object.keys(byId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
})();
