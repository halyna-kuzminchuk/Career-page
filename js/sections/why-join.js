import { initCardStack } from '../components/card-stack.js';

const section = document.querySelector('.why-join');
if (section) {
  const triggers = [...section.querySelectorAll('.why-join__trigger')];
  const stackEl = section.querySelector('.card-stack');
  const sheet = section.querySelector('.why-join__sheet');
  const backdrop = section.querySelector('.why-join__sheet-backdrop');
  const sheetClose = sheet?.querySelector('.why-join__sheet-close');
  const sheetIcon = sheet?.querySelector('.why-join__sheet-icon');
  const sheetTitle = sheet?.querySelector('.why-join__sheet-title');
  const sheetText = sheet?.querySelector('.why-join__sheet-text');

  const isTouch = () => window.matchMedia('(pointer: coarse)').matches;

  const { setActive } = initCardStack(stackEl);

  function openSheet(id) {
    const card = stackEl?.querySelector(`.card-stack__card[data-card="${id}"]`);
    if (!card || !sheet) return;

    sheetIcon.textContent = card.querySelector('.card-stack__card-icon').textContent;
    sheetTitle.textContent = card.querySelector('.card-stack__card-title').textContent;
    sheetText.textContent = card.querySelector('.card-stack__card-text').textContent;

    sheet.classList.add('is-open');
    sheet.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    sheetClose?.focus();
  }

  function closeSheet() {
    sheet.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    setTimeout(() => {
      sheet.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }, 380);
  }

  if (triggers.length) setActive(triggers[0].dataset.card);

  triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
      if (isTouch()) return;
      setActive(trigger.dataset.card);
    });

    trigger.addEventListener('click', () => {
      if (!isTouch()) return;
      openSheet(trigger.dataset.card);
    });
  });

  sheetClose?.addEventListener('click', closeSheet);
  backdrop?.addEventListener('click', closeSheet);
  sheet?.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSheet();
  });
}
