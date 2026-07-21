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
    { title: 'Home', url: 'index.html', text: 'Bastien technical program manager Montreal Tokyo API People CRM fintech healthcare' },
    { title: 'Career', url: 'career.html', text: 'TPM AAA games distributed systems fintech PMP MBA ESG Paris API People' },
    { title: 'Tokyo Move', url: 'tokyo.html', text: 'Tokyo relocation job search Sakana AI Rapyuta Robotics tokyodev Japanese N4 N3' },
    { title: 'Now', url: 'now.html', text: 'currently working on job search language study personal finance NISA' },
    { title: 'Contact', url: 'contact.html', text: 'contact email get in touch' }
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
