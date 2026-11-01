(function () {
  var copy = {
    dang: {
      title: "Dang",
      body: "Placeholder for Dang. Caroline Polachek PowerPoint energy — IG slides and video land here. Body copy TBD."
    },
    mas: {
      title: "Main Antagonist Syndrome",
      body: "Playlist for the red editorial piece. Body copy TBD.",
      embed: {
        src: "https://embed.music.apple.com/hk/playlist/pl.u-jV89b1Wud12y6xr",
        listen: "https://music.apple.com/hk/playlist/main-antagonist-syndrome/pl.u-jV89b1Wud12y6xr?l=en&ls",
        title: "Main Antagonist Syndrome on Apple Music"
      }
    },
    ehw: {
      title: "everything he wanted",
      body: "Placeholder for everything he wanted. Younger-self editorial piece. Body copy TBD."
    },
    art: {
      title: "Art description",
      body: "Placeholder art description for the everything he wanted cover. Mustard field, three untidy portraits, stacked title. Full credit and process notes TBD.",
      art: true
    }
  };

  /* --- Load gate (Dysphoria timings; EHW cover preload) --- */
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
      "assets/ehw/ehw-cover-4x5.jpg"
    ];
    var timeoutMs = reduced ? 400 : 2200;
    var minMs = reduced ? 0 : 320;
    var started = performance.now();
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

  /* --- Hotspot modals --- */
  var backdrop = document.getElementById("ehw-backdrop");
  var modal = document.getElementById("ehw-modal");
  var titleEl = document.getElementById("ehw-modal-title");
  var bodyEl = document.getElementById("ehw-modal-body");
  var embedEl = document.getElementById("ehw-modal-embed");
  var closeBtn = document.getElementById("ehw-modal-close");
  if (!backdrop || !modal || !titleEl || !bodyEl || !closeBtn) return;

  var lastFocus = null;

  function clearEmbed() {
    if (!embedEl) return;
    embedEl.innerHTML = "";
    embedEl.hidden = true;
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

    var iframe = document.createElement("iframe");
    iframe.title = embed.title || "Apple Music playlist";
    iframe.setAttribute("allow", "autoplay *; encrypted-media *; fullscreen *; clipboard-write");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("height", "450");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute(
      "sandbox",
      "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
    );
    iframe.src = embed.src;

    embedEl.appendChild(row);
    embedEl.appendChild(iframe);
  }

  function openModal(key) {
    var item = copy[key];
    if (!item) return;
    lastFocus = document.activeElement;
    titleEl.textContent = item.title;
    bodyEl.textContent = item.body || "";
    modal.classList.toggle("art-desc", !!item.art);
    modal.classList.toggle("ehw-modal--embed", !!item.embed);
    if (item.embed) {
      renderEmbed(item.embed);
    } else {
      clearEmbed();
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
