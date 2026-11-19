(function () {
  // Flip enabled to true to turn each button into a live link. URLs are already set.
  var OUTLINKS = {
    github: {
      href: "https://github.com/lrpsec/brutalist-apps",
      enabled: false,
      label: "GITHUB",
      handle: "SOURCE"
    },
    itch: {
      href: "https://lrpsec.itch.io/brutalist-apps",
      enabled: false,
      label: "ITCH.IO",
      handle: ""
    }
  };

  var ICONS = {
    github: '<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>',
    itch: '<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"/></svg>'
  };

  function renderOutlinks() {
    var mount = document.getElementById("hero-outlinks");
    if (!mount) return;
    mount.innerHTML = "";
    ["itch", "github"].forEach(function (key) {
      var item = OUTLINKS[key];
      if (!item) return;
      var handle = item.enabled ? (item.handle || "") : "COMING SOON";
      var inner =
        ICONS[key] +
        '<span class="link-copy"><span class="link-label">' + item.label + "</span>" +
        (handle ? ' <span class="link-handle">' + handle + "</span>" : "") +
        "</span>";
      var el;
      if (item.enabled) {
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
        el.innerHTML = inner;
      }
      mount.appendChild(el);
    });
  }

  renderOutlinks();

  var APPS = window.BRUTALIST_APPS || [];
  var grid = document.getElementById("apps-grid");
  var panel = document.getElementById("app-panel");
  if (!grid || !panel) return;

  var lastButton = null;

  function byId(id) {
    for (var i = 0; i < APPS.length; i++) if (APPS[i].id === id) return APPS[i];
    return null;
  }

  function iconUrl(id) {
    return "../assets/apps/" + id + ".svg";
  }

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
      openApp(app.id, true);
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
    var slot = panel.querySelector(".media-slot");
    var paths = mediaPaths(app.media);
    slot.innerHTML = "";
    slot.classList.toggle("has-media", !!(paths.video || paths.gif));
    if (paths.video) {
      var video = document.createElement("video");
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("loop", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("autoplay", "");
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      video.autoplay = !reduce;
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
      if (!reduce) {
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
    } else {
      var p = document.createElement("p");
      p.className = "media-placeholder";
      p.textContent = app.name + " — SHOWCASE COMING SOON";
      slot.appendChild(p);
    }
  }

  function renderPanel(app) {
    panel.querySelector(".panel-name").textContent = app.name;
    panel.querySelector(".panel-summary").textContent = app.summary;
    var feat = panel.querySelector(".panel-features");
    feat.innerHTML = "";
    var lines = (app.features && app.features.length) ? app.features : ["FEATURES COMING SOON."];
    lines.forEach(function (line) {
      var li = document.createElement("li");
      li.textContent = line;
      feat.appendChild(li);
    });
    var tags = panel.querySelector(".platform-tags");
    tags.innerHTML = "";
    if (app.platforms.length === 1) {
      tags.hidden = false;
      app.platforms.forEach(function (p) {
        var s = document.createElement("span");
        s.textContent = p;
        tags.appendChild(s);
      });
    } else {
      tags.hidden = true;
    }

    renderMedia(app);
  }

  function openApp(id, pushHash) {
    var app = byId(id);
    if (!app) return;
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
    if (id && byId(id)) openApp(id, false);
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
  applyHash();
})();
