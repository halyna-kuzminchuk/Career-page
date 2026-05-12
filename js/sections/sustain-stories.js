import { initCardStack } from '../components/card-stack.js';

const STORIES = {
  esbjerg: {
    title: 'Partnering with Esbjerg on climate neutrality',
    image: { src: 'assets/esbjerg-sculpture.webp', alt: 'Man Meets the Sea sculpture, Esbjerg' },
    body: [
      'As our headquarters city aims for carbon neutrality by 2030, MacArtney joined Esbjerg\'s local Climate Partnership to align our own CO₂ reduction plans with this vision. In practice, this means we work hand-in-hand with the municipality and other local companies to cut emissions – for example by reducing energy use at our facilities and switching to green power.',
      'This collaboration shows "Act Global, Think Local" in action: our global climate ambition (net-zero HQ by 2030) is pursued through local community effort in Esbjerg.',
    ],
  },
  norway: {
    title: 'New service hub in Norway boosts circularity',
    body: [
      'A regional initiative in Norway is helping us serve customers faster and reduce waste. MacArtney Norge partnered to open a European subsea connector service hub, offering certified inspection and refurbishment of connectors closer to local operators. By fixing and reusing components on-site, this hub prolongs the life of subsea equipment and cuts down on shipping and material waste.',
      'It\'s tightly tied to our global circular-economy strategy: instead of scrapping and replacing parts (global goal: less waste), we empower a local team in Norway to recondition items regionally, improving efficiency and sustainability for customers and MacArtney alike.',
    ],
  },
  refurbishment: {
    title: 'Giving winches a second life',
    image: { src: 'assets/refurbishment-winch.webp', alt: 'MacArtney technician refurbishing a winch' },
    body: [
      'Our Offshore Solutions team is extending equipment lifespan through refurbishment – an example of global sustainability principles in daily practice. Rather than selling only new winches, we actively refurbish older winches for clients. Critical components are repaired, upgraded, or replaced (gearboxes, control panels, cables, etc.) and the winch is retested to ensure like-new performance.',
      'This local engineering effort supports a global goal: reduce resource consumption and waste by embracing circular use of products. Every refurbished winch avoids the need for manufacturing a new one, saving material and energy – all while maintaining high safety and reliability standards.',
    ],
  },
  elars: {
    title: 'Innovating all-electric A-frames for a cleaner ocean',
    body: [
      'MacArtney engineers have developed an all-electric Launch and Recovery System (eLARS) A-frame – a breakthrough reducing environmental risks and improving offshore operations. Traditional A-frames use hydraulics, but our new eLARS™ A-frame eliminates hydraulic oil completely, meaning no risk of oil spills at sea, fewer spare parts, less noise, and easier maintenance.',
      'We\'ve sold the first five eLARS units globally, supporting clients\' own green profiles. This innovation demonstrates how a local R&D initiative advances our global sustainability commitment: by offering cleaner, safer technology to the industry.',
    ],
  },
  singapore: {
    title: 'Hands-on climate action in Singapore',
    image: { src: 'assets/singapore-planting.webp', alt: 'MacArtney Singapore colleagues planting trees' },
    body: [
      'Our Singapore team literally "planted" our sustainability values by joining a local tree-planting initiative. Colleagues volunteered to restore green spaces and boost biodiversity in their community, planting trees to help create a more climate-resilient urban area.',
      'Beyond the environmental benefit, this local act brought employees and partners together and strengthened ties with the community. It\'s a small example of a global mindset put into local action – and it shows that sustainability at MacArtney isn\'t only top-down policy, but also grassroots efforts by our people on the ground.',
    ],
  },
  safety: {
    title: 'Zero workplace injuries in 2024–25',
    body: [
      'A strong safety culture across MacArtney\'s sites led to zero work-related injuries in 2024–25 – a result of global standards implemented locally. We maintain strict safety procedures at all production facilities and encourage every location to report near-misses and improve practices continually.',
      'The payoff is clear: after steadily reducing incidents in prior years, last year we had no workplace accidents group-wide. This success illustrates how global policies (like ISO 45001 and consistent training) combined with local diligence creates a truly safe work environment. MacArtney\'s safety mantra – "we\'ve got each other\'s back" – translates into tangible results in every workshop and office.',
    ],
  },
};

const section = document.querySelector('.sustain-stories');
if (section) {
  const triggers = [...section.querySelectorAll('.why-join__trigger')];
  const stackEl = section.querySelector('.card-stack');
  const modal = section.querySelector('.sustain-modal');
  const modalClose = modal?.querySelector('.sustain-modal__close');
  const modalTitle = modal?.querySelector('.sustain-modal__title');
  const modalBody = modal?.querySelector('.sustain-modal__body');

  const isTouch = () => window.matchMedia('(pointer: coarse)').matches;
  const { setActive } = initCardStack(stackEl);

  function openModal(id) {
    const story = STORIES[id];
    if (!story || !modal) return;
    modalTitle.textContent = story.title;
    const imgHtml = story.image
      ? `<img src="${story.image.src}" alt="${story.image.alt}" class="sustain-modal__image" />`
      : '';
    modalBody.innerHTML = imgHtml + story.body.map(p => `<p>${p}</p>`).join('');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose?.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    setTimeout(() => {
      modal.setAttribute('aria-hidden', 'true');
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
      setActive(trigger.dataset.card);
      openModal(trigger.dataset.card);
    });
  });

  stackEl?.querySelectorAll('.card-stack__card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.card));
  });

  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}
