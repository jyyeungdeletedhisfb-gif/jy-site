(function () {
  var copy = {
    dang: {
      title: "Dang",
      body: "Placeholder for Dang. Caroline Polachek PowerPoint energy — IG slides and video land here. Body copy TBD."
    },
    mas: {
      title: "Main Antagonist Syndrome",
      body: "Placeholder for Main Antagonist Syndrome. Red editorial mood and the Apple Music playlist embed will sit in this mini window. Body copy TBD."
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

  var backdrop = document.getElementById("ehw-backdrop");
  var modal = document.getElementById("ehw-modal");
  var titleEl = document.getElementById("ehw-modal-title");
  var bodyEl = document.getElementById("ehw-modal-body");
  var closeBtn = document.getElementById("ehw-modal-close");
  if (!backdrop || !modal || !titleEl || !bodyEl || !closeBtn) return;

  var lastFocus = null;

  function openModal(key) {
    var item = copy[key];
    if (!item) return;
    lastFocus = document.activeElement;
    titleEl.textContent = item.title;
    bodyEl.textContent = item.body;
    modal.classList.toggle("art-desc", !!item.art);
    backdrop.hidden = false;
    void backdrop.offsetWidth;
    backdrop.classList.add("open");
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.classList.remove("open");
    var done = function () {
      backdrop.hidden = true;
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
