import { initCardStack } from '../components/card-stack.js';

const section = document.querySelector('.locations-map');
if (section) {
  const stackEl = section.querySelector('.card-stack');
  const dots = [...section.querySelectorAll('.locations-map__dot')];
  const { setActive } = initCardStack(stackEl);

  function activate(id) {
    setActive(id);
    dots.forEach(d => d.classList.toggle('is-active', d.dataset.card === id));
  }

  if (dots[0]) activate(dots[0].dataset.card);

  dots.forEach(dot => {
    dot.addEventListener('mouseenter', () => activate(dot.dataset.card));
    dot.addEventListener('click', () => activate(dot.dataset.card));
  });
}
