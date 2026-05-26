(function buildCtaBanner() {
  const section = document.querySelector(".cta-banner");
  if (!section || section.innerHTML.trim()) return;

  section.innerHTML = `
    <div class="container">
      <div class="cta-banner__grid">
        <div class="cta-banner__text">
          <span class="hero__eyebrow">Join MacArtney</span>
          <h2 class="cta-banner__heading" id="cta-banner-title">
            Whatever your expertise, you'll
            <span class="page-hero__title-accent">find</span> your
            <span class="page-hero__title-accent">connection</span> here.
          </h2>
          <p class="cta-banner__sub">
            Your ideal role may exist across different areas at MacArtney.
            Explore where your skills can make an impact.
          </p>
          <a class="btn btn-space btn--primary btn--md" href="search.html">
            
            Explore open roles
          </a>
        </div>
        <div class="cta-banner__media">
          <img src="assets/team.webp" alt="MacArtney team" class="cta-banner__image" />
          <img src="assets/Top_connector.svg" alt="" class="cta-banner__connector" aria-hidden="true" />
        </div>
      </div>
    </div>
  `;
})();
