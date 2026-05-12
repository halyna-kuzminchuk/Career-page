import { initCardStack } from '../components/card-stack.js';

const OFFICES = [
  'denmark', 'norway', 'sweden', 'uk', 'germany', 'france',
  'italy', 'benelux', 'middle-east', 'canada', 'usa', 'singapore', 'australia',
];

const section = document.querySelector('.locations-gallery');
if (section) {
  let current = 0;
  const photo = section.querySelector('.locations-gallery__photo');
  const prevBtn = section.querySelector('.locations-gallery__arrow--prev');
  const nextBtn = section.querySelector('.locations-gallery__arrow--next');
  const stackEl = section.querySelector('.card-stack');
  const { setActive } = initCardStack(stackEl);

  function activate(index) {
    current = ((index % OFFICES.length) + OFFICES.length) % OFFICES.length;
    setActive(OFFICES[current]);

    // Brief fade transition on the photo placeholder
    photo.classList.add('is-transitioning');
    setTimeout(() => photo.classList.remove('is-transitioning'), 250);
  }

  // Wire up dots as clickable indicators after card-stack renders them
  requestAnimationFrame(() => {
    const dots = [...stackEl.querySelectorAll('.card-stack__dot')];
    dots.forEach((dot, i) => dot.addEventListener('click', () => activate(i)));
  });

  prevBtn?.addEventListener('click', () => activate(current - 1));
  nextBtn?.addEventListener('click', () => activate(current + 1));

  // Keyboard arrow keys when focused inside the media area
  section.querySelector('.locations-gallery__media')?.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') activate(current - 1);
    if (e.key === 'ArrowRight') activate(current + 1);
  });

  // Touch swipe on photo
  let startX = 0;
  photo.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  photo.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) activate(current + (dx < 0 ? 1 : -1));
  }, { passive: true });

  activate(0);
}
