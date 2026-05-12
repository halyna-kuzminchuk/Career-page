import { initCardStack } from '../components/card-stack.js';

const section = document.querySelector('.sg-quotes');
if (section) {
  const triggers = [...section.querySelectorAll('.why-join__trigger')];
  const stackEl = section.querySelector('.card-stack');
  const { setActive } = initCardStack(stackEl);
  const isTouch = () => window.matchMedia('(pointer: coarse)').matches;

  if (triggers.length) setActive(triggers[0].dataset.card);

  triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
      if (isTouch()) return;
      setActive(trigger.dataset.card);
    });
    trigger.addEventListener('click', () => setActive(trigger.dataset.card));
  });
}
