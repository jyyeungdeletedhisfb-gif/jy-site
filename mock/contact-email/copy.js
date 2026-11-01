/* Copy-to-clipboard for Contact email mocks. */
(function () {
  var EMAIL = 'thisisjyyeung@gmail.com';

  function setStatus(el, text, ok) {
    if (!el) return;
    el.textContent = text || '';
    el.classList.toggle('is-ok', !!ok);
  }

  function copyEmail(statusEl) {
    var done = function () {
      setStatus(statusEl, 'Copied', true);
      window.setTimeout(function () {
        setStatus(statusEl, '', false);
      }, 1600);
    };
    var fail = function () {
      setStatus(statusEl, 'Select and copy the address', false);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done).catch(fail);
      return;
    }

    var ta = document.createElement('textarea');
    ta.value = EMAIL;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      if (document.execCommand('copy')) done();
      else fail();
    } catch (e) {
      fail();
    }
    document.body.removeChild(ta);
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-copy-email]');
    if (!btn) return;
    e.preventDefault();
    var root = btn.closest('[data-contact-mock]') || document;
    copyEmail(root.querySelector('[data-copy-status]'));
  });
})();
