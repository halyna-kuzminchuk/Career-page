document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;

  const groups = [
    {
      container: '.media-grid',
      pieces: '.media-grid__photo, .media-grid__video-card',
      offsets: [
        { x: -60, y: -40, rotation: -4 },
        { x: -50, y:  25, rotation:  2 },
        { x: -55, y:  55, rotation: -2 },
        { x:  60, y: -50, rotation:  5 },
        { x:  65, y:  45, rotation: -3 },
      ],
    },
    {
      container: '.sustain-strip',
      pieces: '.sustain-strip__photo',
      offsets: [
        { x:  60, y: -40, rotation:  3 }, // A — top-right large
        { x: -50, y:  40, rotation: -2 }, // B — bottom-left
        { x:  20, y:  50, rotation:  2 }, // C — bottom-centre
      ],
    },
    {
      container: '.sales-culture',
      pieces: '.sales-culture__photo',
      offsets: [
        { x:  60, y: -40, rotation:  3 }, // A — top-right large
        { x: -50, y:  40, rotation: -2 }, // B — bottom-left
        { x:  20, y:  50, rotation:  2 }, // C — bottom-centre
      ],
    },
  ];

  function animateGroup(container, pieces, offsets) {
    gsap.set(pieces, { opacity: 0 });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (!entries[0].isIntersecting) return;
        obs.disconnect();
        container.style.overflow = 'visible';
        gsap.fromTo(
          pieces,
          {
            opacity: 0,
            x: (i) => offsets[i]?.x ?? 0,
            y: (i) => offsets[i]?.y ?? 0,
            rotation: (i) => offsets[i]?.rotation ?? 0,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            duration: 0.85,
            ease: 'back.out(1.4)',
            stagger: 0.08,
            delay: 0.15,
            onComplete: () => container.style.removeProperty('overflow'),
          }
        );
      },
      { threshold: 0 }
    );

    // Watch the first piece — fires as soon as it enters the viewport
    observer.observe(pieces[0]);
  }

  groups.forEach(({ container: sel, pieces: pieceSel, offsets }) => {
    document.querySelectorAll(sel).forEach(container => {
      const pieces = Array.from(container.querySelectorAll(pieceSel));
      if (!pieces.length) return;
      animateGroup(container, pieces, offsets);
    });
  });
});
