// Fills in the GitHub repository / profile cards on the repositories page using
// the public GitHub REST API. Everything degrades gracefully: if a request fails
// (rate limit, offline, private repo) the card keeps its server-rendered name and link.
(function () {
  'use strict';

  var CACHE_MS = 6 * 60 * 60 * 1000; // 6 hours — keeps us well under the 60 req/hr anonymous limit
  var API = 'https://api.github.com';

  // A few common GitHub language colours; anything else gets a neutral grey.
  var LANG_COLORS = {
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    SCSS: '#c6538c',
    'Jupyter Notebook': '#DA5B0B',
    Swift: '#F05138',
    Solidity: '#AA6746',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    R: '#198CE7',
    Ruby: '#701516',
    Shell: '#89e051',
    SQL: '#e38c00',
    TSX: '#3178c6',
    Liquid: '#67b8de'
  };

  function getJSON(path) {
    var key = 'ghcache:' + path;
    try {
      var raw = window.localStorage.getItem(key);
      if (raw) {
        var hit = JSON.parse(raw);
        if (Date.now() - hit.t < CACHE_MS) return Promise.resolve(hit.d);
      }
    } catch (e) {
      /* storage unavailable — fine */
    }
    return fetch(API + path, { headers: { Accept: 'application/vnd.github+json' } })
      .then(function (res) {
        if (!res.ok) throw new Error('GitHub API ' + res.status);
        return res.json();
      })
      .then(function (data) {
        try {
          window.localStorage.setItem(key, JSON.stringify({ t: Date.now(), d: data }));
        } catch (e) {
          /* ignore */
        }
        return data;
      });
  }

  function stat(iconClass, text, title) {
    var span = document.createElement('span');
    span.className = 'gh-stat';
    if (title) span.title = title;
    var i = document.createElement('i');
    i.className = iconClass;
    span.appendChild(i);
    span.appendChild(document.createTextNode(' ' + text));
    return span;
  }

  function fmt(n) {
    return n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k' : String(n);
  }

  function fillRepo(card) {
    if (card.getAttribute('data-rendered') === 'true') return;   // already rendered with real data
    var repo = card.getAttribute('data-repo');
    getJSON('/repos/' + repo)
      .then(function (r) {
        var desc = card.querySelector('.repo-card__desc');
        if (r.description) {
          desc.textContent = r.description;
          desc.hidden = false;
        }

        var meta = card.querySelector('.repo-card__meta');
        if (r.language) {
          var lang = document.createElement('span');
          lang.className = 'gh-stat';
          var dot = document.createElement('span');
          dot.className = 'gh-lang-dot';
          dot.style.backgroundColor = LANG_COLORS[r.language] || '#8b949e';
          lang.appendChild(dot);
          lang.appendChild(document.createTextNode(' ' + r.language));
          meta.appendChild(lang);
        }
        meta.appendChild(stat('fa-solid fa-star', fmt(r.stargazers_count), 'Stars'));
        meta.appendChild(stat('fa-solid fa-code-fork', fmt(r.forks_count), 'Forks'));
        meta.hidden = false;
      })
      .catch(function () {
        /* keep the plain name + link */
      });
  }

  function fillUser(card) {
    if (card.getAttribute('data-rendered') === 'true') return;   // already rendered with real data
    var user = card.getAttribute('data-user');
    getJSON('/users/' + user)
      .then(function (u) {
        if (u.name) card.querySelector('.repo-user-card__name').textContent = u.name;
        var bio = card.querySelector('.repo-user-card__bio');
        if (u.bio) {
          bio.textContent = u.bio;
          bio.hidden = false;
        }
        var meta = card.querySelector('.repo-user-card__meta');
        meta.appendChild(stat('fa-solid fa-book-bookmark', u.public_repos + ' repos', 'Public repositories'));
        meta.appendChild(stat('fa-solid fa-user-group', fmt(u.followers) + (u.followers === 1 ? ' follower' : ' followers'), 'Followers'));
        meta.appendChild(stat('fa-solid fa-user-plus', fmt(u.following) + ' following', 'Following'));
        meta.hidden = false;
      })
      .catch(function () {
        /* keep the plain avatar + username */
      });
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll('.repo-user-card[data-user]'), fillUser);
    Array.prototype.forEach.call(document.querySelectorAll('.repo-card[data-repo]'), fillRepo);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
