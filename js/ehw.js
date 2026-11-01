(function () {
  var IG_GLYPH =
    '<svg class="ig-icon" viewBox="0 0 24 24" aria-hidden="true">' +
    '<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/>' +
    '<circle cx="12" cy="12" r="4"/>' +
    '<circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/>' +
    "</svg>";

  /* HQ portraits (Jy map 2026-11-02): DSCF0009→01 Dang, DSCF0044→02 MAS, DSCF0058→03 EHW */
  var PORTRAIT_V = "ehw-p1";
  function portraitUrls(slug) {
    var base = "assets/ehw/portraits/" + slug;
    return {
      slug: slug,
      webp: [720, 1080, 1600, 2400].map(function (w) { return base + "-" + w + "w.webp " + w + "w"; }).join(", "),
      jpg: [720, 1080, 1600].map(function (w) { return base + "-" + w + "w.jpg " + w + "w"; }).join(", "),
      fallback: base + "-1080w.jpg",
      preload: base + "-1080w.webp"
    };
  }

  var copy = {
    dang: {
      title: "Dang",
      body: "Placeholder for Dang. Caroline Polachek PowerPoint energy — IG slides and video land here. Body copy TBD.",
      ig: "https://www.instagram.com/p/DbvWOeOEgox/?exln=eWRhMmNxYjVnMmU=",
      portrait: portraitUrls("01-dang")
    },
    mas: {
      title: "Main Antagonist Syndrome",
      body: "Playlist for the red editorial piece. Body copy TBD.",
      ig: "https://www.instagram.com/p/DcgYMkEkuu3/?mdxt=MnR2d2x3andxYTJ4",
      portrait: portraitUrls("02-main-antagonist-syndrome"),
      embed: {
        src: "https://embed.music.apple.com/hk/playlist/pl.u-jV89b1Wud12y6xr",
        listen: "https://music.apple.com/hk/playlist/main-antagonist-syndrome/pl.u-jV89b1Wud12y6xr?l=en&ls",
        title: "Main Antagonist Syndrome on Apple Music"
      }
    },
    ehw: {
      title: "everything he wanted",
      body: "Placeholder for everything he wanted. Younger-self editorial piece. Body copy TBD.",
      ig: "https://www.instagram.com/p/Deo-DPsnztj/?psln=MTYweXJsd290eDR5MA==",
      portrait: portraitUrls("03-everything-he-wanted")
    },
    art: {
      title: "Art description",
      body: "Placeholder art description for the everything he wanted cover. Mustard field, three untidy portraits, stacked title. Full credit and process notes TBD.",
      art: true
    }
  };

  var MAS_EMBED_SRC = copy.mas.embed.src;
  var warmWrap = null;
  var warmIframe = null;

  function makeAppleIframe(src, title) {
    var iframe = document.createElement("iframe");
    iframe.title = title || "Apple Music playlist";
    iframe.setAttribute("allow", "autoplay *; encrypted-media *; fullscreen *; clipboard-write");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("height", "450");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute(
      "sandbox",
      "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    );
    iframe.src = src;
    return iframe;
  }

  /* Warm MAS embed during load gate so modal open is instant. */
  function warmAppleEmbed() {
    if (warmIframe || !document.body) return;
    warmWrap = document.createElement("div");
    warmWrap.id = "ehw-embed-warm";
    warmWrap.setAttribute("aria-hidden", "true");
    warmIframe = makeAppleIframe(MAS_EMBED_SRC, copy.mas.embed.title);
    warmWrap.appendChild(warmIframe);
    document.body.appendChild(warmWrap);
  }

  /* --- Load gate (Dysphoria timings; EHW cover + Apple Music warm) --- */
  function preloadImages(urls) {
    return Promise.all(
      urls.map(function (src) {
        return new Promise(function (resolve) {
          var img = new Image();
          img.decoding = "async";
          img.onload = img.onerror = function () {
            resolve(src);
          };
          img.src = src;
        });
      })
    );
  }

  function dismissLoadGate() {
    var gate = document.getElementById("loadGate");
    if (!gate || gate.classList.contains("is-done")) return;
    gate.classList.add("is-done");
    gate.setAttribute("aria-busy", "false");
    var remove = function () {
      if (gate.parentNode) gate.parentNode.removeChild(gate);
    };
    gate.addEventListener("transitionend", remove, { once: true });
    setTimeout(remove, 700);
  }

  async function runLoadGate() {
    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var urls = [
      "assets/ehw/ehw-cover-4x5.webp",
      "assets/ehw/ehw-cover-4x5.jpg",
      copy.dang.portrait.preload,
      copy.mas.portrait.preload,
      copy.ehw.portrait.preload
    ];
    var timeoutMs = reduced ? 400 : 2200;
    var minMs = reduced ? 0 : 320;
    var started = performance.now();
    warmAppleEmbed();
    await Promise.race([
      preloadImages(urls),
      new Promise(function (r) {
        setTimeout(r, timeoutMs);
      })
    ]);
    var waited = performance.now() - started;
    if (waited < minMs) {
      await new Promise(function (r) {
        setTimeout(r, minMs - waited);
      });
    }
    dismissLoadGate();
  }

  runLoadGate().catch(function () {
    dismissLoadGate();
  });

  /* --- Interact cue (top-left oval slot; no finger) --- */
  function mountInteractCue() {
    var cue = document.getElementById("ehw-interact-cue");
    if (!cue) return;
    var TEXT = "TAP EACH ELEMENT TO INTERACT.";
    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    cue.innerHTML = "";
    var wrap = document.createElement("span");
    wrap.className = "chars";
    var word = null;
    for (var i = 0; i < TEXT.length; i++) {
      var c = TEXT.charAt(i);
      if (c === " ") {
        wrap.appendChild(document.createTextNode(" "));
        word = null;
        continue;
      }
      if (!word) {
        word = document.createElement("span");
        word.className = "word";
        wrap.appendChild(word);
      }
      var ch = document.createElement("span");
      ch.className = "char";
      ch.textContent = c;
      if (!reduced) ch.style.animationDelay = 40 + i * 28 + "ms";
      word.appendChild(ch);
    }
    cue.appendChild(wrap);
  }
  mountInteractCue();

  /* --- Hotspot brackets + modals --- */
  var backdrop = document.getElementById("ehw-backdrop");
  var modal = document.getElementById("ehw-modal");
  var titleEl = document.getElementById("ehw-modal-title");
  var bodyEl = document.getElementById("ehw-modal-body");
  var embedEl = document.getElementById("ehw-modal-embed");
  var closeBtn = document.getElementById("ehw-modal-close");
  if (!backdrop || !modal || !titleEl || !bodyEl || !closeBtn) return;

  var lastFocus = null;

  function mountBrackets(btn) {
    if (btn.querySelector(".ehw-brackets")) return;
    var box = document.createElement("span");
    box.className = "ehw-brackets";
    box.setAttribute("aria-hidden", "true");
    ["tl", "tr", "bl", "brc"].forEach(function (cls) {
      var s = document.createElement("span");
      s.className = "br " + cls;
      box.appendChild(s);
    });
    btn.appendChild(box);
  }

  document.querySelectorAll(".ehw-hotspot").forEach(mountBrackets);

  function clearEmbed() {
    if (!embedEl) return;
    // If modal still holds the warm iframe, park it back offscreen.
    var live = embedEl.querySelector("iframe");
    if (live && warmWrap && live === warmIframe) {
      warmWrap.appendChild(live);
    }
    embedEl.innerHTML = "";
    embedEl.hidden = true;
  }

  function renderPortrait(portrait, alt) {
    if (!portrait) return null;
    var pic = document.createElement("picture");
    pic.className = "ehw-modal-photo";
    var webp = document.createElement("source");
    webp.type = "image/webp";
    // cache-bust via query on each candidate
    webp.srcset = portrait.webp
      .split(", ")
      .map(function (part) {
        var bits = part.split(" ");
        return bits[0] + "?v=" + PORTRAIT_V + " " + bits[1];
      })
      .join(", ");
    webp.sizes = "(max-width: 520px) 92vw, 420px";
    pic.appendChild(webp);
    var img = document.createElement("img");
    img.src = portrait.fallback + "?v=" + PORTRAIT_V;
    img.srcset = portrait.jpg
      .split(", ")
      .map(function (part) {
        var bits = part.split(" ");
        return bits[0] + "?v=" + PORTRAIT_V + " " + bits[1];
      })
      .join(", ");
    img.sizes = "(max-width: 520px) 92vw, 420px";
    img.alt = alt || "";
    img.width = 1080;
    img.height = 1620;
    img.decoding = "async";
    img.loading = "eager";
    pic.appendChild(img);
    return pic;
  }

  function renderIgLink(href, title) {
    if (!href || !/^https?:\/\//i.test(href)) return null;
    var a = document.createElement("a");
    a.className = "ehw-modal-ig";
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "View " + (title || "") + " on Instagram");
    a.innerHTML = IG_GLYPH + "<span>View on Instagram</span>";
    return a;
  }

  function renderEmbed(embed) {
    if (!embedEl || !embed) {
      clearEmbed();
      return;
    }
    embedEl.hidden = false;
    embedEl.innerHTML = "";

    var row = document.createElement("div");
    row.className = "listen-row";
    var label = document.createElement("span");
    label.textContent = "Listen on";
    var apple = document.createElement("a");
    apple.href = embed.listen;
    apple.target = "_blank";
    apple.rel = "noopener";
    apple.textContent = "Apple Music";
    var soon = document.createElement("span");
    soon.className = "soon";
    soon.textContent = "Spotify · soon";
    row.appendChild(label);
    row.appendChild(apple);
    row.appendChild(soon);
    embedEl.appendChild(row);

    var iframe;
    if (warmIframe && embed.src === MAS_EMBED_SRC) {
      iframe = warmIframe;
      // Ensure attrs stay correct if first paint used defaults
      iframe.title = embed.title || iframe.title;
    } else {
      iframe = makeAppleIframe(embed.src, embed.title);
    }
    embedEl.appendChild(iframe);
  }

  function openModal(key) {
    var item = copy[key];
    if (!item) return;
    lastFocus = document.activeElement;
    titleEl.textContent = item.title;
    bodyEl.textContent = "";
    var photo = renderPortrait(item.portrait, item.title);
    if (photo) bodyEl.appendChild(photo);
    if (item.body) {
      var p = document.createElement("p");
      p.textContent = item.body;
      bodyEl.appendChild(p);
    }

    modal.classList.toggle("art-desc", !!item.art);
    modal.classList.toggle("ehw-modal--embed", !!item.embed);
    if (item.embed) {
      renderEmbed(item.embed);
    } else {
      clearEmbed();
    }
    // IG at bottom of mini window (Dysphoria plate pattern). Art has no mapped post.
    var ig = renderIgLink(item.ig, item.title);
    if (ig) {
      if (item.embed && embedEl) embedEl.appendChild(ig);
      else bodyEl.appendChild(ig);
    }
    backdrop.hidden = false;
    void backdrop.offsetWidth;
    backdrop.classList.add("open");
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.classList.remove("open");
    var done = function () {
      backdrop.hidden = true;
      clearEmbed();
      modal.classList.remove("ehw-modal--embed");
      backdrop.removeEventListener("transitionend", done);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      done();
    } else {
      backdrop.addEventListener("transitionend", done);
      setTimeout(done, 250);
    }
  }

  document.querySelectorAll(".ehw-hotspot").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openModal(btn.getAttribute("data-modal"));
    });
  });

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && backdrop.classList.contains("open")) {
      e.preventDefault();
      closeModal();
    }
  });
})();
