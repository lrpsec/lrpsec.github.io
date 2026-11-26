(function () {
  var KEY = 'lrpsec-theme';
  var GLITCH_MS = 500;
  var root = document.documentElement;
  var colorMeta = document.getElementById('theme-color');
  var btn = document.getElementById('theme-toggle');
  var booted = false;

  function current() {
    return root.getAttribute('data-theme') === 'BLACK' ? 'BLACK' : 'WHITE';
  }

  function reduceMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function apply(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (colorMeta) colorMeta.setAttribute('content', theme === 'BLACK' ? '#000000' : '#FFFFFF');
    if (btn) {
      btn.setAttribute('aria-pressed', theme === 'BLACK' ? 'true' : 'false');
      btn.setAttribute('aria-label', window.lrpsecT ? window.lrpsecT('theme') : 'Theme');
    }
    if (persist) {
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    }
    if (booted) {
      root.dispatchEvent(new CustomEvent('lrpsec-theme', { detail: { theme: theme } }));
    }
    booted = true;
  }

  apply(current(), false);

  function replay(el, className) {
    if (!el || reduceMotion()) return;
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
    window.setTimeout(function () {
      el.classList.remove(className);
    }, GLITCH_MS);
  }

  function glitchTheme() {
    document.querySelectorAll('[data-glitch-title]').forEach(function (title) {
      title.querySelectorAll('.glitch').forEach(function (g) {
        g.classList.remove('glitch-load');
      });
      replay(title, 'glitch-theme');
    });
    document.querySelectorAll('[data-glitch-icon]').forEach(function (icon) {
      icon.classList.remove('glitch-load');
      replay(icon, 'glitch-theme');
    });
  }

  function flip() {
    apply(current() === 'BLACK' ? 'WHITE' : 'BLACK', true);
    glitchTheme();
  }

  if (btn) btn.addEventListener('click', flip);

  document.documentElement.addEventListener('lrpsec-lang', function () {
    if (btn && window.lrpsecT) btn.setAttribute('aria-label', window.lrpsecT('theme'));
  });

  window.setTimeout(function () {
    document.querySelectorAll('.glitch-load').forEach(function (el) {
      el.classList.remove('glitch-load');
    });
  }, GLITCH_MS);

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var forced = new URLSearchParams(location.search).get('theme');
  if (!saved && forced !== 'WHITE' && forced !== 'BLACK' && window.matchMedia) {
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    var onChange = function (e) {
      var still = null;
      try { still = localStorage.getItem(KEY); } catch (err) {}
      if (!still) apply(e.matches ? 'BLACK' : 'WHITE', false);
    };
    if (media.addEventListener) media.addEventListener('change', onChange);
  }
})();
