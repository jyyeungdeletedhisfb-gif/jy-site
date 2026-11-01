/* Dysphoria showreel taste mock — center-snap + peeks + viewfinder brackets */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Real Dysphoria plates (640w for mock speed). Paths relative to /mock/dysphoria-showreel/
  const sheets = [
    { n: "01", title: "The Host", ar: 0.75, src: "../../assets/dysphoria/01-the-host-640w.jpg",
      liner: "Dysphoria as something that keeps living in the body until it is given somewhere else to go." },
    { n: "02", title: "Grinding Grit onto Grief", ar: 1, src: "../../assets/dysphoria/02-grinding-grit-onto-grief-640w.jpg",
      liner: "Friction as ritual — grinding until the edge dulls or cuts clean." },
    { n: "03", title: "A Charlatan's Curse", ar: 1, src: "../../assets/dysphoria/03-a-charlatans-curse-640w.jpg",
      liner: "Performance of certainty when the frame itself is the trick." },
    { n: "04", title: "Funnel", ar: 1, src: "../../assets/dysphoria/04-funnel-640w.jpg",
      liner: "Everything narrows. What remains is pressure." },
    { n: "05", title: "X-OVER", ar: 1, src: "../../assets/dysphoria/05-x-over-640w.jpg",
      liner: "A crossing that refuses to resolve into one side." },
    { n: "06", title: "Pin", ar: 1, src: "../../assets/dysphoria/06-pin-640w.jpg",
      liner: "Held in place. The gesture is the wound and the fix." },
    { n: "07", title: "trance", ar: 0.75, src: "../../assets/dysphoria/07-trance-640w.jpg",
      liner: "Stillness that moves under the surface." },
    { n: "08", title: "Sinister & Dexter", ar: 0.8, src: "../../assets/dysphoria/08-sinister-dexter-640w.jpg",
      liner: "Left and right as mirror adversaries." },
  ];

  const track = document.getElementById("track");
  const viewport = document.getElementById("viewport");
  const brackets = document.getElementById("brackets");
  const titleNum = document.getElementById("titleNum");
  const titleName = document.getElementById("titleName");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const flipBtn = document.getElementById("flipBtn");
  const ticks = document.getElementById("ticks");

  let i = 0;
  let flipped = false;
  let animating = false;
  let dragX = 0;
  let startX = 0;
  let dragging = false;
  let suppressClick = false;
  let captured = false;
  let pointerId = null;
  const DRAG_THRESHOLD = 6;

  function pad(n) { return String(n).padStart(2, "0"); }

  function build() {
    track.innerHTML = "";
    ticks.innerHTML = "";
    sheets.forEach((s, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slide";
      btn.style.setProperty("--ar", s.ar);
      btn.setAttribute("role", "listitem");
      btn.setAttribute("aria-label", `${s.n} ${s.title}`);
      btn.dataset.index = String(idx);
      btn.innerHTML =
        `<div class="slide-card">` +
          `<div class="face front"><img src="${s.src}" alt="" draggable="false" /></div>` +
          `<div class="face back"><h3>${s.n} — ${s.title}</h3><p>${s.liner}</p></div>` +
        `</div>`;
      btn.addEventListener("click", () => onSlideClick(idx));
      track.appendChild(btn);

      const tick = document.createElement("li");
      const tb = document.createElement("button");
      tb.type = "button";
      tb.setAttribute("aria-label", `Go to ${s.n}`);
      tb.addEventListener("click", () => goTo(idx, true));
      tick.appendChild(tb);
      ticks.appendChild(tick);
    });
  }

  function slideEls() {
    return Array.from(track.querySelectorAll(".slide"));
  }

  function metrics() {
    const slide = slideEls()[0];
    if (!slide) return { slideW: 300, gap: 20 };
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap) || 20;
    // Layout (unscaled) width. getBoundingClientRect() includes the
    // peek scale() transform, which skewed slot math and drifted the active plate.
    // Computed width is sub-pixel exact (offsetWidth rounds, e.g. 58vw=226.2).
    const w = parseFloat(getComputedStyle(slide).width) || slide.offsetWidth;
    return { slideW: w, gap };
  }

  /** Offset so slide `index` sits centered in the viewport */
  function offsetFor(index, extraDrag) {
    const { slideW, gap } = metrics();
    const vpW = viewport.clientWidth;
    const center = vpW / 2;
    const slideCenter = index * (slideW + gap) + slideW / 2;
    return center - slideCenter + (extraDrag || 0);
  }

  function applyTransform(extraDrag, animate) {
    if (!animate || reduceMotion) track.classList.add("no-anim");
    else track.classList.remove("no-anim");
    track.style.transform = `translate3d(${offsetFor(i, extraDrag)}px,0,0)`;
  }

  function peekScale() {
    const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--peek-scale"));
    return isFinite(v) && v > 0 ? v : 0.78;
  }

  function syncClasses() {
    const { slideW } = metrics();
    // Pull scaled peeks inward so the visible gap between every plate equals
    // the track gap (scale shrinks around centre, leaving dead space otherwise).
    const pull = slideW * (1 - peekScale()) / 2;
    slideEls().forEach((el, idx) => {
      const d = idx - i;
      const shift = d === 0 ? 0 : -Math.sign(d) * (2 * Math.abs(d) - 1) * pull;
      el.style.setProperty("--shift", shift.toFixed(2) + "px");
      el.classList.toggle("is-active", idx === i);
      el.classList.toggle("is-flipped", idx === i && flipped);
      if (idx !== i) el.classList.remove("is-flipped");
    });
    ticks.querySelectorAll("button").forEach((b, idx) => {
      if (idx === i) b.setAttribute("aria-current", "true");
      else b.removeAttribute("aria-current");
    });
    titleNum.textContent = `${pad(i + 1)}/${pad(sheets.length)}`;
    titleName.textContent = sheets[i].title;
    prevBtn.disabled = i <= 0;
    nextBtn.disabled = i >= sheets.length - 1;
    flipBtn.setAttribute("aria-pressed", flipped ? "true" : "false");
    sizeBrackets();
  }

  function sizeBrackets() {
    const active = slideEls()[i];
    if (!active) return;
    const rect = active.getBoundingClientRect();
    const vp = viewport.getBoundingClientRect();
    // Size from layout box, not the live rect: right after a class swap the new
    // active plate is still mid-transition at peek scale, which shrank brackets.
    const cs = getComputedStyle(active);
    brackets.style.width = parseFloat(cs.width) + "px";
    brackets.style.height = parseFloat(cs.height) + "px";
    // Keep vertically centered on the active plate within viewport
    const cy = rect.top + rect.height / 2 - vp.top;
    brackets.style.top = cy + "px";
    brackets.classList.add("on");
  }

  function pulseBrackets() {
    if (reduceMotion) return;
    brackets.classList.remove("pulse");
    // reflow
    void brackets.offsetWidth;
    brackets.classList.add("pulse");
    window.setTimeout(() => brackets.classList.remove("pulse"), 700);
  }

  function goTo(next, fromUser) {
    next = Math.max(0, Math.min(sheets.length - 1, next));
    if (next === i && !fromUser) return;
    if (animating && next === i) return;
    flipped = false;
    i = next;
    animating = true;
    applyTransform(0, true);
    syncClasses();
    pulseBrackets();
    window.setTimeout(() => { animating = false; }, reduceMotion ? 0 : 560);
  }

  function onSlideClick(idx) {
    if (suppressClick) return;
    if (idx !== i) {
      goTo(idx, true);
      return;
    }
    // Active plate: flip
    toggleFlip();
  }

  function toggleFlip() {
    flipped = !flipped;
    syncClasses();
  }

  // Pointer / touch drag (gutter swipe analogue)
  // No pointer capture on pointerdown: capturing retargets the follow-up click
  // to .track-viewport, killing active-plate flip + peek snap. Capture only once
  // the pointer has travelled past DRAG_THRESHOLD (a real drag).
  function onPointerDown(e) {
    if (e.button != null && e.button !== 0) return;
    dragging = true;
    captured = false;
    suppressClick = false;
    pointerId = e.pointerId;
    startX = e.clientX;
    dragX = 0;
  }
  function onPointerMove(e) {
    if (!dragging) return;
    dragX = e.clientX - startX;
    if (!captured) {
      if (Math.abs(dragX) < DRAG_THRESHOLD) return;
      captured = true;
      suppressClick = true;
      viewport.classList.add("is-dragging");
      track.classList.add("no-anim");
      try { viewport.setPointerCapture(pointerId); } catch (_) {}
    }
    applyTransform(dragX, false);
  }
  function onPointerUp() {
    if (!dragging) return;
    dragging = false;
    if (!captured) { dragX = 0; return; } // plain click: let it reach the slide
    captured = false;
    viewport.classList.remove("is-dragging");
    try { viewport.releasePointerCapture(pointerId); } catch (_) {}
    // Swallow the click that follows a drag, then re-arm.
    window.setTimeout(() => { suppressClick = false; }, 0);
    const { slideW, gap } = metrics();
    const threshold = Math.min(72, (slideW + gap) * 0.22);
    let next = i;
    if (dragX <= -threshold) next = i + 1;
    else if (dragX >= threshold) next = i - 1;
    dragX = 0;
    goTo(next, true);
  }

  viewport.addEventListener("pointerdown", onPointerDown);
  viewport.addEventListener("pointermove", onPointerMove);
  viewport.addEventListener("pointerup", onPointerUp);
  viewport.addEventListener("pointercancel", onPointerUp);

  prevBtn.addEventListener("click", () => goTo(i - 1, true));
  nextBtn.addEventListener("click", () => goTo(i + 1, true));
  flipBtn.addEventListener("click", toggleFlip);

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(i - 1, true); }
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(i + 1, true); }
    if (e.key === "f" || e.key === "F") toggleFlip();
  });

  window.addEventListener("resize", () => {
    applyTransform(0, false);
    syncClasses();
  });

  // After images load, re-measure (AR / height)
  track.addEventListener("load", () => {
    applyTransform(0, false);
    syncClasses();
  }, true);

  build();
  applyTransform(0, false);
  syncClasses();
  // Second pass after layout + fonts
  requestAnimationFrame(() => {
    applyTransform(0, false);
    syncClasses();
    pulseBrackets();
  });
})();
