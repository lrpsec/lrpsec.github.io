(function () {
  var KEY = 'lrpsec-theme';
  var root = document.documentElement;
  var colorMeta = document.getElementById('theme-color');
  var name = document.querySelector('.fullname');

  function current() {
    return root.getAttribute('data-theme') === 'BLACK' ? 'BLACK' : 'WHITE';
  }

  function apply(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (colorMeta) colorMeta.setAttribute('content', theme === 'BLACK' ? '#000000' : '#FFFFFF');
    if (name && name.tagName === 'BUTTON') {
      name.setAttribute('aria-label', 'Change theme, current theme ' + theme);
      name.setAttribute('aria-pressed', theme === 'BLACK' ? 'true' : 'false');
    }
    if (persist) {
      try { localStorage.setItem(KEY, theme); } catch (e) {}
    }
  }

  apply(current(), false);

  function flip() {
    apply(current() === 'BLACK' ? 'WHITE' : 'BLACK', true);
  }

  if (name) {
    name.addEventListener('click', flip);
    if (name.tagName !== 'BUTTON') {
      name.setAttribute('tabindex', '0');
      name.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          flip();
        }
      });
    }

    function reduceMotion() {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function playTitleGlitch() {
      if (reduceMotion()) return;
      name.classList.remove('glitch-now');
      void name.offsetWidth;
      name.classList.add('glitch-now');
    }

    name.addEventListener('mouseenter', playTitleGlitch);
    name.addEventListener('focus', function () {
      if (name.matches && name.matches(':focus-visible')) playTitleGlitch();
    });
    name.addEventListener('animationend', function (e) {
      if (e.animationName === 'glitch-hover') name.classList.remove('glitch-now');
    });
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  var forced = new URLSearchParams(location.search).get('theme');
  if (!saved && forced !== 'WHITE' && forced !== 'BLACK' && window.matchMedia) {
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', function (e) {
      var still = null;
      try { still = localStorage.getItem(KEY); } catch (err) {}
      if (!still) apply(e.matches ? 'BLACK' : 'WHITE', false);
    });
  }
})();
