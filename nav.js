/* Shared hamburger nav logic — included on every page */
(function () {
  var btn    = document.getElementById('nav-hamburger');
  var drawer = document.getElementById('nav-mobile');
  if (!btn || !drawer) return;
  btn.addEventListener('click', function () {
    var open = drawer.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });
  /* close on outside click */
  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !drawer.contains(e.target)) {
      drawer.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
  /* close on link click */
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      drawer.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();