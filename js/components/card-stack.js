/**
 * Initialises a card-stack component.
 * @param {Element} container — the .card-stack element
 * @returns {{ setActive: (id: string) => void }}
 */
export function initCardStack(container) {
  const cards = [...container.querySelectorAll('.card-stack__card')];
  const dotsContainer = container.querySelector('.card-stack__dots');

  const dots = cards.map(() => {
    const dot = document.createElement('span');
    dot.className = 'card-stack__dot';
    dotsContainer?.appendChild(dot);
    return dot;
  });

  function setActive(id) {
    const prevActive = cards.find(c => c.classList.contains('is-active'));
    const shouldAnimate = prevActive && prevActive.dataset.card !== id;
    const activeIndex = cards.findIndex(c => c.dataset.card === id);

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

  return { setActive };
}
