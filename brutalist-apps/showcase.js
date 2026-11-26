(function () {
  var OUTLINKS = {
    itch: {
      href: "https://lrpsec.itch.io/brutalist-apps",
      enabled: false,
      label: "ITCH.IO"
    },
    play: {
      href: "",
      enabled: false,
      label: "GOOGLE PLAY"
    },
    apple: {
      href: "",
      enabled: false,
      label: "APP STORE"
    },
    github: {
      href: "https://github.com/lrpsec/brutalist-apps",
      enabled: false,
      label: "GITHUB",
      handle: "SOURCE"
    }
  };

  var ORDER = ["itch", "play", "apple", "github"];

  var ICONS = {
    itch: '<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"/></svg>',
    play: '<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7 4.2v15.6L18.8 12 7 4.2z"/></svg>',
    apple: '<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.2 7.3c-.6.7-1.6 1.3-2.6 1.2-.1-1 .4-2.1.9-2.7.6-.7 1.7-1.2 2.6-1.3.1 1.1-.3 2.1-.9 2.8z"/><path fill="currentColor" d="M16.5 9.2c-1.5-1.1-3.1-.6-3.8-.3-.7.3-1.5.3-2.3 0-.9-.3-2.2-.7-3.5.2-1.5 1-2.4 2.9-2.4 5.2 0 2.4.9 4.6 2.1 6.1.6.8 1.3 1.6 2.2 1.6.9 0 1.2-.5 2.3-.5s1.3.5 2.2.5c.9 0 1.5-.7 2.1-1.5.7-.9 1.2-2.1 1.5-3.2-1.6-.6-2.6-2.1-2.6-3.8 0-1.6.8-2.8 2.2-3.6-.4-.3-1.2-.6-2.1-.7z"/></svg>',
    github: '<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>'
  };

  function renderOutlinks() {
    var mount = document.getElementById("hero-outlinks");
    if (!mount) return;
    mount.innerHTML = "";
    ORDER.forEach(function (key) {
      var item = OUTLINKS[key];
      if (!item) return;
      var live = !!(item.enabled && item.href);
      var handle = live ? (item.handle || "") : "COMING SOON";
      var inner =
        (ICONS[key] || "") +
        '<span class="link-copy"><span class="link-label">' + item.label + "</span>" +
        (handle ? ' <span class="link-handle">' + handle + "</span>" : "") +
        "</span>";
      var el;
      if (live) {
        el = document.createElement("a");
        el.className = "hero-link glitch-target";
        el.href = item.href;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
        el.innerHTML = '<span class="glitch-fx">' + inner + "</span>";
      } else {
        el = document.createElement("button");
        el.type = "button";
        el.className = "hero-link";
        el.disabled = true;
        el.setAttribute("aria-disabled", "true");
        el.setAttribute("aria-label", item.label + ", coming soon");
        el.innerHTML = inner;
      }
      mount.appendChild(el);
    });
  }

  renderOutlinks();

  var APPS = window.BRUTALIST_APPS || [];
  var grid = document.getElementById("apps-grid");
  var panel = document.getElementById("app-panel");
  if (!grid || !panel || !APPS.length) return;

  var GLITCH_MS = 500;
  var ROTATE_MS = 3000;
  var reduce = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  var index = 0;
  var timer = null;
  var lastButton = null;
  var nameEl = document.getElementById("showcase-name-text");
  var blurbEl = document.getElementById("showcase-blurb");
  var iconWrap = document.getElementById("showcase-icon-wrap");

  function motionOk() {
    return !(reduce && reduce.matches);
  }

  function themeName() {
    return document.documentElement.getAttribute("data-theme") === "BLACK" ? "BLACK" : "WHITE";
  }

  function byId(id) {
    for (var i = 0; i < APPS.length; i++) if (APPS[i].id === id) return APPS[i];
    return null;
  }

  function indexOf(id) {
    for (var i = 0; i < APPS.length; i++) if (APPS[i].id === id) return i;
    return -1;
  }

  function iconUrl(id) {
    return "../assets/apps/" + id + ".svg";
  }

  function replay(els, className) {
    if (!motionOk()) return;
    els.forEach(function (el) {
      if (!el) return;
      el.classList.remove("glitch-load", "glitch-soft", "glitch-theme");
    });
    void document.body.offsetWidth;
    els.forEach(function (el) {
      if (el) el.classList.add(className);
    });
    window.setTimeout(function () {
      els.forEach(function (el) {
        if (el) el.classList.remove(className);
      });
    }, GLITCH_MS);
  }

  function showApp(i, animate) {
    index = (i + APPS.length) % APPS.length;
    var app = APPS[index];
    if (nameEl) {
      nameEl.textContent = app.name;
      nameEl.setAttribute("data-text", app.name);
    }
    if (blurbEl) {
      var blurb = app.blurb || "PLACEHOLDER SHORT DESCRIPTION.";
      blurbEl.textContent = blurb;
      blurbEl.setAttribute("data-text", blurb);
    }
    var icon = 'url("' + iconUrl(app.id) + '")';
    if (iconWrap) iconWrap.style.setProperty("--icon", icon);
    if (animate) replay([nameEl, blurbEl, iconWrap], "glitch-soft");
  }

  function restart() {
    if (timer) window.clearInterval(timer);
    timer = null;
    if (!motionOk() || APPS.length < 2 || document.hidden) return;
    timer = window.setInterval(function () {
      showApp(index + 1, true);
    }, ROTATE_MS);
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (timer) window.clearInterval(timer);
      timer = null;
    } else {
      restart();
    }
  });

  if (reduce && reduce.addEventListener) {
    reduce.addEventListener("change", function () {
      if (motionOk()) restart();
      else if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    });
  }

  function updateThemeLabels() {
    var word = themeName();
    panel.querySelectorAll(".shot-ph-theme").forEach(function (el) {
      el.textContent = word;
    });
  }

  document.documentElement.addEventListener("lrpsec-theme", updateThemeLabels);

  APPS.forEach(function (app) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "app-tile glitch-target";
    btn.setAttribute("aria-pressed", "false");
    btn.setAttribute("data-app", app.id);
    btn.setAttribute("aria-label", app.name);
    btn.innerHTML =
      '<span class="glitch-fx">' +
      '<span class="app-icon" style="--icon: url(' + iconUrl(app.id) + ')" aria-hidden="true"></span>' +
      '<span class="app-tile-name">' + app.name + "</span>" +
      "</span>";
    btn.addEventListener("click", function () {
      openApp(app.id, true, true);
    });
    grid.appendChild(btn);
  });

  function tile(id) {
    return grid.querySelector('[data-app="' + id + '"]');
  }

  function mediaPaths(media) {
    var video = null;
    var gif = null;
    if (!media) return { video: video, gif: gif };
    if (typeof media === "string") {
      var ext = media.split(".").pop().toLowerCase();
      if (ext === "webm" || ext === "mp4") video = media;
      else if (ext === "gif") gif = media;
      return { video: video, gif: gif };
    }
    if (media.video) video = media.video;
    if (media.gif) gif = media.gif;
    return { video: video, gif: gif };
  }

  function renderMedia(app) {
    var frame = panel.querySelector(".media-frame");
    var slot = panel.querySelector(".media-slot");
    var paths = mediaPaths(app.media);
    slot.innerHTML = "";
    if (!paths.video && !paths.gif) {
      frame.hidden = true;
      slot.classList.remove("has-media");
      return;
    }
    frame.hidden = false;
    slot.classList.add("has-media");
    if (paths.video) {
      var video = document.createElement("video");
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("loop", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("autoplay", "");
      video.autoplay = motionOk();
      var source = document.createElement("source");
      var vext = paths.video.split(".").pop().toLowerCase();
      source.src = paths.video;
      source.type = vext === "webm" ? "video/webm" : "video/mp4";
      video.appendChild(source);
      if (paths.gif) {
        var fallback = document.createElement("img");
        fallback.src = paths.gif;
        fallback.alt = app.name + " showcase";
        video.appendChild(fallback);
      }
      video.setAttribute("aria-label", app.name + " showcase");
      slot.appendChild(video);
      if (motionOk()) {
        var play = video.play();
        if (play && play.catch) play.catch(function () {
          if (paths.gif) {
            slot.innerHTML = "";
            var img = document.createElement("img");
            img.src = paths.gif;
            img.alt = app.name + " showcase";
            slot.appendChild(img);
          }
        });
      }
    } else if (paths.gif) {
      var img = document.createElement("img");
      img.src = paths.gif;
      img.alt = app.name + " showcase";
      slot.appendChild(img);
    }
  }

  function renderShots(app) {
    var shots = panel.querySelector(".shot-grid");
    shots.innerHTML = "";
    for (var n = 1; n <= 3; n++) {
      var fig = document.createElement("figure");
      fig.className = "shot-ph";
      var num = n < 10 ? "0" + n : String(n);
      fig.setAttribute("aria-label", app.name + " placeholder screenshot " + num);
      fig.innerHTML =
        '<span class="shot-ph-kicker">PLACEHOLDER</span>' +
        '<span class="shot-ph-label">SCREENSHOT ' + num + "</span>" +
        '<span class="shot-ph-theme">' + themeName() + "</span>";
      shots.appendChild(fig);
    }
  }

  function renderPanel(app) {
    panel.querySelector(".panel-name").textContent = app.name;
    panel.querySelector(".panel-summary").textContent = app.summary;
    var feat = panel.querySelector(".panel-features");
    feat.innerHTML = "";
    var lines = (app.features && app.features.length) ? app.features : ["PLACEHOLDER FEATURE."];
    lines.forEach(function (line) {
      var li = document.createElement("li");
      li.textContent = line;
      feat.appendChild(li);
    });
    renderShots(app);
    renderMedia(app);
  }

  function openApp(id, pushHash, animateShowcase) {
    var app = byId(id);
    if (!app) return;
    var at = indexOf(id);
    if (at >= 0) showApp(at, !!animateShowcase);
    if (animateShowcase) restart();
    lastButton = tile(id) || lastButton;
    grid.querySelectorAll(".app-tile").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-app") === id ? "true" : "false");
    });
    renderPanel(app);
    panel.hidden = false;
    panel.setAttribute("data-open", id);
    if (pushHash && location.hash !== "#" + id) {
      history.pushState(null, "", "#" + id);
    }
    panel.scrollIntoView({ block: "nearest", behavior: "auto" });
    var close = panel.querySelector(".panel-close");
    if (close) close.focus();
  }

  function closePanel() {
    if (panel.hidden) return;
    panel.hidden = true;
    panel.removeAttribute("data-open");
    grid.querySelectorAll(".app-tile").forEach(function (b) {
      b.setAttribute("aria-pressed", "false");
    });
    if (location.hash && location.hash.length > 1) {
      history.pushState(null, "", location.pathname + location.search);
    }
    if (lastButton) lastButton.focus();
  }

  function applyHash() {
    var id = (location.hash || "").replace(/^#/, "").toLowerCase();
    if (id && byId(id)) openApp(id, false, false);
    else if (!panel.hidden) closePanel();
  }

  panel.querySelector(".panel-close").addEventListener("click", closePanel);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) {
      e.preventDefault();
      closePanel();
    }
  });

  window.addEventListener("hashchange", applyHash);

  var bootId = (location.hash || "").replace(/^#/, "").toLowerCase();
  if (bootId && byId(bootId)) openApp(bootId, false, false);
  else showApp(0, false);
  restart();
})();
