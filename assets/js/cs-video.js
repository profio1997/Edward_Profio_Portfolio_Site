// Case-study clips: autoplay muted and looping, but only while they are on screen.
// Off-screen clips stay unloaded (preload="none") and pause, which keeps pages light.
// Visitors who ask their system for reduced motion, or who have Data Saver on, see the still poster;
// clicking (or Enter / Space on) any clip plays or pauses it.
(function () {
  var vids = [].slice.call(document.querySelectorAll('video[data-autoplay]'));
  if (!vids.length) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var save = navigator.connection && navigator.connection.saveData;
  var auto = !reduce && !save;

  function play(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }

  vids.forEach(function (v) {
    v.muted = true;
    v.setAttribute('role', 'button');
    v.setAttribute('title', 'Click to pause or play');
    function toggle() {
      if (v.paused) { delete v.dataset.userPaused; play(v); }
      else { v.dataset.userPaused = '1'; v.pause(); }
    }
    v.addEventListener('click', toggle);
    v.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  if (!('IntersectionObserver' in window)) { if (auto) vids.forEach(play); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { if (auto && !v.dataset.userPaused) play(v); }
      else { v.pause(); }
    });
  }, { rootMargin: '150px 0px', threshold: 0.01 });
  vids.forEach(function (v) { io.observe(v); });
})();
