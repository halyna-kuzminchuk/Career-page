(function buildHeader() {
  const header = document.querySelector(".site-header");
  if (!header || header.innerHTML.trim()) return;

  header.innerHTML = `
    <div class="container site-header__inner">
      <a class="site-logo" href="index.html" aria-label="MacArtney Careers home">
        <img
          class="site-logo__image"
          src="assets/Logo.svg"
          alt="MacArtney"
          width="242"
          height="49"
        />
        <span class="site-logo__label">Careers</span>
      </a>

      <button
        class="nav-toggle"
        type="button"
        aria-expanded="false"
        aria-controls="main-nav"
        aria-label="Toggle navigation"
      >
        <span class="nav-toggle__bar" aria-hidden="true"></span>
      </button>

      <nav class="main-nav" id="main-nav" aria-label="Main navigation">
        <ul class="main-nav__list">
          <li class="main-nav__item main-nav__item--has-menu">
            <button
              class="main-nav__summary"
              type="button"
              aria-expanded="false"
              aria-controls="work-menu"
            >
              Work
            </button>
            <ul
              class="main-nav__submenu"
              id="work-menu"
              aria-label="Work categories"
              hidden
            >
              <li><a class="main-nav__submenu-link" href="sales.html">Sales</a></li>
              <li><a class="main-nav__submenu-link" href="engineering.html">Engineering</a></li>
              <li><a class="main-nav__submenu-link" href="workshop.html">Workshop</a></li>
              <li><a class="main-nav__submenu-link" href="business-support.html">Business Support</a></li>
            </ul>
          </li>
          <li class="main-nav__item main-nav__item--has-menu">
            <button
              class="main-nav__summary"
              type="button"
              aria-expanded="false"
              aria-controls="locations-menu"
            >
              Locations
            </button>
            <ul
              class="main-nav__submenu"
              id="locations-menu"
              aria-label="Locations"
              hidden
            >
              <li><a class="main-nav__submenu-link" href="locations.html">All locations</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Denmark</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Norway</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Sweden</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">United Kingdom</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Germany</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">France</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Italy</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Benelux</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Middle East</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Canada</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">USA</a></li>
              <li><a class="main-nav__submenu-link" href="singapore.html">Singapore</a></li>
              <li><a class="main-nav__submenu-link" href="locations.html">Australia</a></li>
            </ul>
          </li>
          <li class="main-nav__item">
            <a class="main-nav__link" href="sustainability.html">Sustainability</a>
          </li>
        </ul>
        <div class="nav-cta">
          <a class="btn btn-space btn--primary btn--md" href="search.html">
           
            Search jobs
            <svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="7"/>
              <line x1="16.5" y1="16.5" x2="22" y2="22"/>
            </svg>
          </a>
        </div>
      </nav>
    </div>
  `;
})();
