/**
 * Initialises a card-stack component.
 * @param {Element} container — the .card-stack element
 * @returns {{ setActive: (id: string) => void }}
 */
export function initCardStack(container) {
  const cards = [...container.querySelectorAll('.card-stack__card')];
  const stage = container.querySelector('.card-stack__stage');
  const dotsContainer = container.querySelector('.card-stack__dots');

  let currentIndex = 0;

  const dots = cards.map(() => {
    const dot = document.createElement('span');
    dot.className = 'card-stack__dot';
    dotsContainer?.appendChild(dot);
    return dot;
  });

  // Next-card chevron button
  const nextBtn = document.createElement('button');
  nextBtn.className = 'card-stack__next';
  nextBtn.setAttribute('aria-label', 'Next card');
  nextBtn.innerHTML = `<svg width="9" height="16" viewBox="0 0 9 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1,1 8,8 1,15"/></svg>`;
  stage?.appendChild(nextBtn);

  function setActive(id) {
    const prevActive = cards.find(c => c.classList.contains('is-active'));
    const shouldAnimate = prevActive && prevActive.dataset.card !== id;
    const activeIndex = cards.findIndex(c => c.dataset.card === id);
    if (activeIndex !== -1) currentIndex = activeIndex;

    cards.forEach((c, i) => {
      const isActive = c.dataset.card === id;
      c.removeAttribute('data-stack');
      c.classList.remove('is-active', 'is-animating');
      c.setAttribute('aria-hidden', String(!isActive));

      if (isActive) {
        c.classList.add('is-active');
      } else {
        const offset = (i - activeIndex + cards.length) % cards.length;
        if (offset === 1) c.setAttribute('data-stack', '1');
      }

      dots[i]?.classList.toggle('is-active', isActive);
    });

    if (shouldAnimate) {
      const newCard = cards.find(c => c.dataset.card === id);
      requestAnimationFrame(() => {
        newCard?.classList.add('is-animating');
        newCard?.addEventListener('animationend', () => {
          newCard.classList.remove('is-animating');
        }, { once: true });
      });
    }
  }

  // Next button — advance one card, wrapping around
  nextBtn.addEventListener('click', () => {
    const next = (currentIndex + 1) % cards.length;
    setActive(cards[next].dataset.card);
  });

  return { setActive };
}
