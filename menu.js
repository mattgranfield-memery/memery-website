/* =========================================================
   MEMERY — SHARED HEADER / MENU
   Update links or header markup here once for the whole site.
   ========================================================= */

(() => {
  const mount = document.getElementById('site-header');
  if (!mount) return;

  const items = [
    { label:'Home', href:'index.html', files:['index.html',''] },
    { label:'Our Approach', href:'index.html#what-we-do' },
    { label:'Our Work', href:'index.html#work' },
    { label:'Podcasts', href:'podcast.html', files:['podcast.html','podcast-marketing-report.html'] },
    { label:'Marketing AI', href:'ai-marketing.html', files:['ai-marketing.html'] },
    { label:'GEO/AEO', href:'geo.html', files:['geo.html'] },
    { label:'The Team', href:'about.html', files:['about.html'] }
  ];

  const currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const links = items.map(item => {
    const active = (item.files || []).includes(currentFile);

    return `<a href="${item.href}"${active ? ' aria-current="page"' : ''}>${item.label}</a>`;
  }).join('');

  const contactHref = document.getElementById('contact')
    ? '#contact'
    : 'index.html#contact';

  mount.innerHTML = `
    <div class="site-nav-shell">
      <nav class="site-nav" aria-label="Primary navigation">

        <a class="site-brand" href="index.html" aria-label="memery home">
          <span class="site-brand-word">
            memery<span class="site-brand-play" aria-hidden="true">▶</span>
          </span>
        </a>

        <div class="site-navlinks" id="site-navlinks">
          ${links}

          <a class="site-nav-mobile-only" href="${contactHref}">
            Contact Us
          </a>
        </div>

        <a class="site-nav-cta" href="${contactHref}">
          Contact Us <span aria-hidden="true">↗</span>
        </a>

        <button
          class="site-menu"
          id="site-menu"
          type="button"
          aria-label="Open navigation"
          aria-expanded="false"
          aria-controls="site-navlinks"
        >
          ☰
        </button>

      </nav>
    </div>
  `;

  const menu = document.getElementById('site-menu');
  const navlinks = document.getElementById('site-navlinks');

  if (!menu || !navlinks) return;

  const closeMenu = () => {
    navlinks.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    menu.textContent = '☰';
  };

  menu.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');

    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute(
      'aria-label',
      open ? 'Close navigation' : 'Open navigation'
    );

    menu.textContent = open ? '✕' : '☰';
  });

  navlinks
    .querySelectorAll('a')
    .forEach(link => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', event => {
    if (
      event.key === 'Escape' &&
      navlinks.classList.contains('open')
    ) {
      closeMenu();
      menu.focus();
    }
  });
})();
