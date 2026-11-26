/* One dictionary per language. Retranslate by editing that language only.
   Visible labels, buttons, headings and COMING SOON stay in capitals.
   Descriptions, feature lines, privacy paragraphs and similar body copy
   stay in sentence case. Brand names, app names and LRPSEC are not translated. */
(function () {
  var KEY = "lrpsec-lang";
  var ORDER = ["en", "es", "pt-BR", "pt-PT", "fr", "de", "it"];
  var LABEL = { en: "EN", es: "ES", "pt-BR": "PT-BR", "pt-PT": "PT-PT", fr: "FR", de: "DE", it: "IT" };
  var NAME = {
    en: "ENGLISH",
    es: "ESPAÑOL",
    "pt-BR": "PORTUGUÊS (BRASIL)",
    "pt-PT": "PORTUGUÊS (PORTUGAL)",
    fr: "FRANÇAIS",
    de: "DEUTSCH",
    it: "ITALIANO"
  };
  var HTML = { en: "en", es: "es", "pt-BR": "pt-BR", "pt-PT": "pt-PT", fr: "fr", de: "de", it: "it" };

  var DICT = {
    en: {
      skip: "SKIP TO CONTENT",
      theme: "Theme",
      language: "Language",
      portfolioHome: "Portfolio",
      role: "CYBERSECURITY PROFESSIONAL",
      projects: "PROJECTS",
      links: "LINKS",
      visit: "VISIT",
      suiteTagline: "A suite of minimal apps for desktop and mobile.",
      suiteLicense: "Free and open source under the MIT license. No ads and no tracking.",
      apps: "APPS",
      faq: "FAQ",
      questionSoon: "QUESTION COMING SOON.",
      answerSoon: "Answer coming soon.",
      by: "BY",
      privacy: "PRIVACY",
      comingSoon: "COMING SOON",
      close: "CLOSE",
      placeholder: "PLACEHOLDER",
      screenshot: "SCREENSHOT {n}",
      feature: "Placeholder feature {n}.",
      blurb: "Placeholder short description.",
      summary: "Placeholder in-depth description for {name}. This copy will be replaced with the final application description.",
      white: "WHITE",
      black: "BLACK",
      shotAria: "{name} placeholder screenshot {n}",
      data: "DATA",
      dataBody: "Brutalist Apps collect no data.",
      ads: "ADS AND TRACKING",
      adsBody: "The apps have no ads and no tracking.",
      network: "NETWORK",
      networkBody: "The apps do not use the network.",
      permissions: "PERMISSIONS",
      permissionsBody: "Permissions are used only for their stated features.",
      contact: "CONTACT",
      metaPortfolio: "Cybersecurity professional | Creator of Brutalist Apps",
      metaApps: "A suite of minimal apps for Windows and Android by LRPSEC. Free and open source under the MIT license. No ads and no tracking.",
      metaPrivacy: "Brutalist Apps collect no data. The apps have no ads, no tracking, and no network use.",
      privacyTitle: "PRIVACY | BRUTALIST APPS"
    },
    es: {
      skip: "SALTAR AL CONTENIDO",
      theme: "Tema",
      language: "Idioma",
      portfolioHome: "Portafolio",
      role: "PROFESIONAL DE CIBERSEGURIDAD",
      projects: "PROYECTOS",
      links: "ENLACES",
      visit: "VISITAR",
      suiteTagline: "Una suite de aplicaciones mínimas para escritorio y móvil.",
      suiteLicense: "Gratis y de código abierto bajo la licencia MIT. Sin anuncios y sin rastreo.",
      apps: "APLICACIONES",
      faq: "PREGUNTAS",
      questionSoon: "PREGUNTA PRÓXIMAMENTE.",
      answerSoon: "Respuesta próximamente.",
      by: "POR",
      privacy: "PRIVACIDAD",
      comingSoon: "PRÓXIMAMENTE",
      close: "CERRAR",
      placeholder: "PROVISIONAL",
      screenshot: "CAPTURA {n}",
      feature: "Función provisional {n}.",
      blurb: "Descripción corta provisional.",
      summary: "Descripción detallada provisional de {name}. Este texto se sustituirá por la descripción final de la aplicación.",
      white: "BLANCO",
      black: "NEGRO",
      shotAria: "{name}, captura provisional {n}",
      data: "DATOS",
      dataBody: "Brutalist Apps no recopila datos.",
      ads: "ANUNCIOS Y RASTREO",
      adsBody: "Las aplicaciones no tienen anuncios ni rastreo.",
      network: "RED",
      networkBody: "Las aplicaciones no usan la red.",
      permissions: "PERMISOS",
      permissionsBody: "Los permisos se usan solo para sus funciones declaradas.",
      contact: "CONTACTO",
      metaPortfolio: "Profesional de ciberseguridad | Creador de Brutalist Apps",
      metaApps: "Una suite de aplicaciones mínimas para Windows y Android de LRPSEC. Gratis y de código abierto bajo la licencia MIT. Sin anuncios y sin rastreo.",
      metaPrivacy: "Brutalist Apps no recopila datos. Las aplicaciones no tienen anuncios, ni rastreo, ni uso de red.",
      privacyTitle: "PRIVACIDAD | BRUTALIST APPS"
    },
    "pt-BR": {
      skip: "PULAR PARA O CONTEÚDO",
      theme: "Tema",
      language: "Idioma",
      portfolioHome: "Portfólio",
      role: "PROFISSIONAL DE CIBERSEGURANÇA",
      projects: "PROJETOS",
      links: "LINKS",
      visit: "VISITAR",
      suiteTagline: "Uma suíte de aplicativos mínimos para computador e celular.",
      suiteLicense: "Grátis e de código aberto sob a licença MIT. Sem anúncios e sem rastreamento.",
      apps: "APLICATIVOS",
      faq: "PERGUNTAS",
      questionSoon: "PERGUNTA EM BREVE.",
      answerSoon: "Resposta em breve.",
      by: "POR",
      privacy: "PRIVACIDADE",
      comingSoon: "EM BREVE",
      close: "FECHAR",
      placeholder: "PROVISÓRIO",
      screenshot: "CAPTURA {n}",
      feature: "Recurso provisório {n}.",
      blurb: "Descrição curta provisória.",
      summary: "Descrição detalhada provisória de {name}. Este texto será substituído pela descrição final do aplicativo.",
      white: "BRANCO",
      black: "PRETO",
      shotAria: "{name}, captura provisória {n}",
      data: "DADOS",
      dataBody: "Brutalist Apps não coleta dados.",
      ads: "ANÚNCIOS E RASTREAMENTO",
      adsBody: "Os aplicativos não têm anúncios nem rastreamento.",
      network: "REDE",
      networkBody: "Os aplicativos não usam a rede.",
      permissions: "PERMISSÕES",
      permissionsBody: "As permissões são usadas somente para os recursos informados.",
      contact: "CONTATO",
      metaPortfolio: "Profissional de cibersegurança | Criador de Brutalist Apps",
      metaApps: "Uma suíte de aplicativos mínimos para Windows e Android por LRPSEC. Grátis e de código aberto sob a licença MIT. Sem anúncios e sem rastreamento.",
      metaPrivacy: "Brutalist Apps não coleta dados. Os aplicativos não têm anúncios, nem rastreamento, nem uso de rede.",
      privacyTitle: "PRIVACIDADE | BRUTALIST APPS"
    },
    "pt-PT": {
      skip: "SALTAR PARA O CONTEÚDO",
      theme: "Tema",
      language: "Idioma",
      portfolioHome: "Portefólio",
      role: "PROFISSIONAL DE CIBERSEGURANÇA",
      projects: "PROJETOS",
      links: "LIGAÇÕES",
      visit: "VISITAR",
      suiteTagline: "Uma suite de aplicações mínimas para computador e telemóvel.",
      suiteLicense: "Gratuita e de código aberto ao abrigo da licença MIT. Sem anúncios e sem rastreio.",
      apps: "APLICAÇÕES",
      faq: "PERGUNTAS",
      questionSoon: "PERGUNTA EM BREVE.",
      answerSoon: "Resposta em breve.",
      by: "POR",
      privacy: "PRIVACIDADE",
      comingSoon: "BREVEMENTE",
      close: "FECHAR",
      placeholder: "PROVISÓRIO",
      screenshot: "CAPTURA {n}",
      feature: "Funcionalidade provisória {n}.",
      blurb: "Descrição curta provisória.",
      summary: "Descrição detalhada provisória de {name}. Este texto será substituído pela descrição final da aplicação.",
      white: "BRANCO",
      black: "PRETO",
      shotAria: "{name}, captura provisória {n}",
      data: "DADOS",
      dataBody: "Brutalist Apps não recolhe dados.",
      ads: "ANÚNCIOS E RASTREIO",
      adsBody: "As aplicações não têm anúncios nem rastreio.",
      network: "REDE",
      networkBody: "As aplicações não utilizam a rede.",
      permissions: "PERMISSÕES",
      permissionsBody: "As permissões são utilizadas apenas para as funcionalidades indicadas.",
      contact: "CONTACTO",
      metaPortfolio: "Profissional de cibersegurança | Criador de Brutalist Apps",
      metaApps: "Uma suite de aplicações mínimas para Windows e Android por LRPSEC. Gratuita e de código aberto ao abrigo da licença MIT. Sem anúncios e sem rastreio.",
      metaPrivacy: "Brutalist Apps não recolhe dados. As aplicações não têm anúncios, nem rastreio, nem utilização de rede.",
      privacyTitle: "PRIVACIDADE | BRUTALIST APPS"
    },
    fr: {
      skip: "ALLER AU CONTENU",
      theme: "Thème",
      language: "Langue",
      portfolioHome: "Portfolio",
      role: "PROFESSIONNEL DE LA CYBERSÉCURITÉ",
      projects: "PROJETS",
      links: "LIENS",
      visit: "VISITER",
      suiteTagline: "Une suite d'applications minimales pour ordinateur et mobile.",
      suiteLicense: "Gratuit et open source sous la licence MIT. Sans publicité et sans traçage.",
      apps: "APPLICATIONS",
      faq: "QUESTIONS",
      questionSoon: "QUESTION À VENIR.",
      answerSoon: "Réponse à venir.",
      by: "PAR",
      privacy: "CONFIDENTIALITÉ",
      comingSoon: "BIENTÔT",
      close: "FERMER",
      placeholder: "PROVISOIRE",
      screenshot: "CAPTURE {n}",
      feature: "Fonction provisoire {n}.",
      blurb: "Description courte provisoire.",
      summary: "Description détaillée provisoire de {name}. Ce texte sera remplacé par la description finale de l'application.",
      white: "BLANC",
      black: "NOIR",
      shotAria: "{name}, capture provisoire {n}",
      data: "DONNÉES",
      dataBody: "Brutalist Apps ne collecte aucune donnée.",
      ads: "PUBLICITÉ ET TRAÇAGE",
      adsBody: "Les applications n'ont ni publicité ni traçage.",
      network: "RÉSEAU",
      networkBody: "Les applications n'utilisent pas le réseau.",
      permissions: "AUTORISATIONS",
      permissionsBody: "Les autorisations servent uniquement aux fonctions indiquées.",
      contact: "CONTACT",
      metaPortfolio: "Professionnel de la cybersécurité | Créateur de Brutalist Apps",
      metaApps: "Une suite d'applications minimales pour Windows et Android par LRPSEC. Gratuit et open source sous la licence MIT. Sans publicité et sans traçage.",
      metaPrivacy: "Brutalist Apps ne collecte aucune donnée. Les applications n'ont ni publicité, ni traçage, ni usage du réseau.",
      privacyTitle: "CONFIDENTIALITÉ | BRUTALIST APPS"
    },
    de: {
      skip: "ZUM INHALT SPRINGEN",
      theme: "Thema",
      language: "Sprache",
      portfolioHome: "Portfolio",
      role: "CYBERSICHERHEITS-FACHKRAFT",
      projects: "PROJEKTE",
      links: "LINKS",
      visit: "BESUCHEN",
      suiteTagline: "Eine Suite minimaler Apps für Desktop und Mobilgeräte.",
      suiteLicense: "Kostenlos und Open Source unter der MIT-Lizenz. Keine Werbung und kein Tracking.",
      apps: "APPS",
      faq: "FRAGEN",
      questionSoon: "FRAGE FOLGT.",
      answerSoon: "Antwort folgt.",
      by: "VON",
      privacy: "DATENSCHUTZ",
      comingSoon: "DEMNÄCHST",
      close: "SCHLIESSEN",
      placeholder: "PLATZHALTER",
      screenshot: "AUFNAHME {n}",
      feature: "Platzhalterfunktion {n}.",
      blurb: "Kurze Platzhalterbeschreibung.",
      summary: "Ausführliche Platzhalterbeschreibung für {name}. Dieser Text wird durch die endgültige App-Beschreibung ersetzt.",
      white: "WEISS",
      black: "SCHWARZ",
      shotAria: "{name}, Platzhalter-Aufnahme {n}",
      data: "DATEN",
      dataBody: "Brutalist Apps erhebt keine Daten.",
      ads: "WERBUNG UND TRACKING",
      adsBody: "Die Apps haben keine Werbung und kein Tracking.",
      network: "NETZWERK",
      networkBody: "Die Apps nutzen das Netzwerk nicht.",
      permissions: "BERECHTIGUNGEN",
      permissionsBody: "Berechtigungen werden nur für die angegebenen Funktionen verwendet.",
      contact: "KONTAKT",
      metaPortfolio: "Cybersicherheits-Fachkraft | Schöpfer von Brutalist Apps",
      metaApps: "Eine Suite minimaler Apps für Windows und Android von LRPSEC. Kostenlos und Open Source unter der MIT-Lizenz. Keine Werbung und kein Tracking.",
      metaPrivacy: "Brutalist Apps erhebt keine Daten. Die Apps haben keine Werbung, kein Tracking und keine Netznutzung.",
      privacyTitle: "DATENSCHUTZ | BRUTALIST APPS"
    },
    it: {
      skip: "VAI AL CONTENUTO",
      theme: "Tema",
      language: "Lingua",
      portfolioHome: "Portfolio",
      role: "PROFESSIONISTA DELLA CYBERSICUREZZA",
      projects: "PROGETTI",
      links: "COLLEGAMENTI",
      visit: "VISITA",
      suiteTagline: "Una suite di app minimali per desktop e mobile.",
      suiteLicense: "Gratuita e open source sotto la licenza MIT. Senza pubblicità e senza tracciamento.",
      apps: "APP",
      faq: "DOMANDE",
      questionSoon: "DOMANDA IN ARRIVO.",
      answerSoon: "Risposta in arrivo.",
      by: "DI",
      privacy: "PRIVACY",
      comingSoon: "PROSSIMAMENTE",
      close: "CHIUDI",
      placeholder: "SEGNAPOSTO",
      screenshot: "SCHERMATA {n}",
      feature: "Funzione segnaposto {n}.",
      blurb: "Descrizione breve segnaposto.",
      summary: "Descrizione dettagliata segnaposto di {name}. Questo testo sarà sostituito dalla descrizione finale dell'app.",
      white: "BIANCO",
      black: "NERO",
      shotAria: "{name}, schermata segnaposto {n}",
      data: "DATI",
      dataBody: "Brutalist Apps non raccoglie dati.",
      ads: "PUBBLICITÀ E TRACCIAMENTO",
      adsBody: "Le app non hanno pubblicità né tracciamento.",
      network: "RETE",
      networkBody: "Le app non usano la rete.",
      permissions: "PERMESSI",
      permissionsBody: "I permessi servono solo alle funzioni indicate.",
      contact: "CONTATTO",
      metaPortfolio: "Professionista della cybersicurezza | Creatore di Brutalist Apps",
      metaApps: "Una suite di app minimali per Windows e Android di LRPSEC. Gratuita e open source sotto la licenza MIT. Senza pubblicità e senza tracciamento.",
      metaPrivacy: "Brutalist Apps non raccoglie dati. Le app non hanno pubblicità, né tracciamento, né uso della rete.",
      privacyTitle: "PRIVACY | BRUTALIST APPS"
    }
  };

  function allowed(code) {
    return ORDER.indexOf(code) !== -1;
  }

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (allowed(saved)) return saved;
    var nav = (navigator.language || "en").toLowerCase();
    if (nav === "pt-pt" || nav.indexOf("pt-pt") === 0) return "pt-PT";
    if (nav === "pt" || nav.indexOf("pt-") === 0) return "pt-BR";
    var primary = nav.split("-")[0];
    if (primary === "en" || primary === "es" || primary === "fr" || primary === "de" || primary === "it") return primary;
    return "en";
  }

  var current = detect();

  function fill(str, vars) {
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, function (_, name) {
      return vars[name] == null ? "" : String(vars[name]);
    });
  }

  function t(key, vars) {
    var table = DICT[current] || DICT.en;
    var str = table[key] || DICT.en[key] || key;
    return fill(str, vars);
  }

  function setMeta(name, attr, value) {
    var el = document.querySelector("meta[" + attr + "=\"" + name + "\"]");
    if (el) el.setAttribute("content", value);
  }

  function apply(lang, persist) {
    if (!allowed(lang)) lang = "en";
    current = lang;
    document.documentElement.lang = HTML[lang];
    document.documentElement.setAttribute("data-lang", lang);
    if (persist) {
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = t(el.getAttribute("data-i18n"));
      el.textContent = value;
      if (el.hasAttribute("data-text")) el.setAttribute("data-text", value);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    var page = document.body && document.body.getAttribute("data-i18n-page");
    if (page === "portfolio") {
      setMeta("description", "name", t("metaPortfolio"));
      setMeta("og:description", "property", t("metaPortfolio"));
      setMeta("twitter:description", "name", t("metaPortfolio"));
    } else if (page === "apps") {
      setMeta("description", "name", t("metaApps"));
      setMeta("og:description", "property", t("metaApps"));
      setMeta("twitter:description", "name", t("metaApps"));
    } else if (page === "privacy") {
      document.title = t("privacyTitle");
      setMeta("og:title", "property", t("privacyTitle"));
      setMeta("twitter:title", "name", t("privacyTitle"));
      setMeta("description", "name", t("metaPrivacy"));
      setMeta("og:description", "property", t("metaPrivacy"));
      setMeta("twitter:description", "name", t("metaPrivacy"));
    }
    var currentLabel = document.getElementById("lang-current");
    if (currentLabel) currentLabel.textContent = LABEL[lang];
    document.querySelectorAll(".lang-menu button").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-current", on ? "true" : "false");
    });
    document.documentElement.dispatchEvent(new CustomEvent("lrpsec-lang", { detail: { lang: lang } }));
  }

  function closeMenu() {
    var menu = document.getElementById("lang-menu");
    var toggle = document.getElementById("lang-toggle");
    if (menu) menu.hidden = true;
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function buildMenu() {
    var menu = document.getElementById("lang-menu");
    var toggle = document.getElementById("lang-toggle");
    if (!menu || !toggle) return;
    menu.innerHTML = "";
    ORDER.forEach(function (code) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("data-lang", code);
      btn.textContent = NAME[code];
      btn.addEventListener("click", function () {
        apply(code, true);
        closeMenu();
        toggle.focus();
      });
      li.appendChild(btn);
      menu.appendChild(li);
    });
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.hidden;
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!menu.hidden && !menu.parentNode.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  window.lrpsecT = t;
  window.lrpsecLang = function () { return current; };
  buildMenu();
  apply(current, false);
})();
