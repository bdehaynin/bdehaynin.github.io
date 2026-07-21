(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  window.toggleTheme = function () {
    const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  const SEARCH_INDEX = [
    { title: 'Home', url: '/index.html', text: 'Bastien technical program manager Montreal Tokyo API People CRM fintech healthcare AI' },
    { title: 'Career', url: '/career.html', text: 'TPM AAA games distributed systems fintech PMP MBA ESG Paris API People' },
    { title: 'Now', url: '/now.html', text: 'currently working on job search language study gym personal finance' },
    { title: 'Contact', url: '/contact.html', text: 'contact email get in touch linkedin github' },
    { title: 'Japan', url: '/japan/index.html', text: 'Japan relocation Tokyo dream move' },
    { title: 'Moving to Tokyo', url: '/japan/moving.html', text: 'Tokyo relocation job search tokyodev English friendly TPM PM' },
    { title: 'Japanese language', url: '/japan/language.html', text: 'JLPT N4 N3 Japanese study' },
    { title: 'Projects', url: '/projects/index.html', text: 'personal projects side projects' },
    { title: 'Divine Knockout successor', url: '/projects/dko.html', text: 'Unreal Engine spiritual successor Divine Knockout platform fighter game dev' },
    { title: 'Gaming', url: '/gaming/index.html', text: 'gaming video games' },
    { title: 'Backlog', url: '/gaming/backlog.html', text: 'game backlog picks currently playing' },
    { title: 'Music', url: '/music/index.html', text: 'music guitar bass electronic' },
    { title: 'Guitar and bass', url: '/music/guitar-bass.html', text: 'guitar bass playing music' },
    { title: 'Notes', url: '/notes/index.html', text: 'notes digital garden' },
    { title: 'Photos', url: '/photos/index.html', text: 'photos photography pictures' }
  ];

  window.runSearch = function (query) {
    const box = document.getElementById('search-results');
    if (!box) return;
    const q = query.trim().toLowerCase();
    if (!q) { box.innerHTML = ''; box.style.display = 'none'; return; }
    const hits = SEARCH_INDEX.filter(function (p) {
      return p.title.toLowerCase().includes(q) || p.text.toLowerCase().includes(q);
    });
    box.style.display = 'block';
    box.innerHTML = hits.length
      ? hits.map(function (h) { return '<a href="' + h.url + '">' + h.title + '</a>'; }).join('')
      : '<span class="station-meta">No results</span>';
  };
})();
