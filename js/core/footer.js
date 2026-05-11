(function buildFooter() {
  const footer = document.querySelector('.site-footer');
  if (!footer || footer.innerHTML.trim()) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img class="footer__logo" src="assets/Logo.svg" alt="MacArtney Careers" />
          <p class="footer__tagline">
            This is where connections beneath the ocean surface — and between
            the people above it — are made possible by experts who work as one
            global team.
          </p>
          <div class="footer__social" aria-label="Social media links">
            <a href="#" class="footer__social-link" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="X (Twitter)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="#001F3E"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer__col">
          <p class="footer__col-title">Careers</p>
          <nav class="footer__links" aria-label="Careers navigation">
            <a href="index.html" class="footer__link">Home</a>
            <a href="search.html" class="footer__link">All Positions</a>
            <a href="locations.html" class="footer__link">Hiring Locations</a>
            <a href="sustainability.html" class="footer__link">Sustainability</a>
          </nav>
        </div>

        <div class="footer__col">
          <p class="footer__col-title">Job Areas</p>
          <nav class="footer__links" aria-label="Job areas navigation">
            <a href="search.html?team=Engineering" class="footer__link">Engineering</a>
            <a href="search.html?team=Sales" class="footer__link">Sales</a>
            <a href="search.html?team=Workshop" class="footer__link">Workshop</a>
            <a href="search.html?team=Business" class="footer__link">Business Support</a>
          </nav>
        </div>

        <div class="footer__col">
          <p class="footer__col-title">Get in Touch</p>
          <nav class="footer__links" aria-label="Contact navigation">
            <a href="mailto:careers@macartney.com" class="footer__link">careers@macartney.com</a>
            <a href="https://www.macartney.com" class="footer__link" target="_blank" rel="noopener">macartney.com</a>
          </nav>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__legal">&copy; 2026 MacArtney A/S. All rights reserved.</p>
        <div class="footer__legal-links">
          <a href="#" class="footer__legal-link">Privacy Policy</a>
          <a href="#" class="footer__legal-link">Cookie Policy</a>
          <a href="#" class="footer__legal-link">Terms of Use</a>
        </div>
      </div>
    </div>
  `;
})();
