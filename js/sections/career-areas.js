(function buildCareerAreas() {
  const section = document.querySelector('.career-areas');
  if (!section || section.innerHTML.trim()) return;

  const cards = [
    {
      href: 'search.html?team=Workshop',
      title: 'Workshop',
      text: 'Build and service world-class subsea gear in a positive team where every skill level can thrive.',
    },
    {
      href: 'search.html?team=Engineering',
      title: 'Engineering',
      text: 'Push the boundaries of subsea technology in a culture that pushes you to grow.',
    },
    {
      href: 'search.html?team=Sales',
      title: 'Sales',
      text: 'Connect with a world of clients, backed by a product you believe in and a team that has your back.',
    },
    {
      href: 'search.html?team=Business+Support',
      title: 'Business Support',
      text: 'Make a difference in a company that trusts and values your contributions.',
    },
  ];

  section.innerHTML = `
    <div class="container">
      <div class="career-areas__grid">
        ${cards.map(c => `
          <a href="${c.href}" class="career-card">
            <h3 class="career-card__title">${c.title}</h3>
            <p class="career-card__text">${c.text}</p>
            <img src="assets/Arrow.svg" class="career-card__arrow" aria-hidden="true" alt="" />
          </a>
        `).join('')}
      </div>
    </div>
  `;
})();
