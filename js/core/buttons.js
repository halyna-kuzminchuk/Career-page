(function initSpaceButtons() {
  const buttons = document.querySelectorAll(".btn-space");
  if (!buttons.length) return;

  const defaultParticleCount = 18;
  const smallParticleCount = 12;

  const updatePointer = (el, clientX, clientY) => {
    const rect = el.getBoundingClientRect();
    const x = `${(((clientX - rect.left) / rect.width) * 100).toFixed(1)}%`;
    const y = `${(((clientY - rect.top) / rect.height) * 100).toFixed(1)}%`;

    el.style.setProperty("--mx", x);
    el.style.setProperty("--my", y);
  };

  const makeParticles = (container, count) => {
    for (let i = 0; i < count; i += 1) {
      const particle = document.createElement("span");
      particle.className = "btn-space__particle";

      const angle = Math.random() * 360;
      const rad = (angle * Math.PI) / 180;
      const rx = 50 + 48 * Math.cos(rad);
      const ry = 50 + 42 * Math.sin(rad);

      const size = `${(Math.random() * 3 + 1.4).toFixed(1)}px`;
      const alpha = (Math.random() * 0.5 + 0.35).toFixed(2);
      const dur = `${(Math.random() * 2 + 1.8).toFixed(1)}s`;
      const delay = `${(Math.random() * 2).toFixed(2)}s`;
      const tx = `${((rx - 50) * 0.6 + (Math.random() - 0.5) * 20).toFixed(0)}px`;
      const ty = `${((ry - 50) * 0.5 - Math.random() * 25 - 5).toFixed(0)}px`;

      particle.style.cssText = `
        --s: ${size};
        --a: ${alpha};
        --d: ${dur};
        --delay: ${delay};
        --tx: ${tx};
        --ty: ${ty};
        --x: ${rx.toFixed(1)}%;
        --y: ${ry.toFixed(1)}%;
      `;

      container.appendChild(particle);
    }
  };

  buttons.forEach((btn) => {
    if (btn.dataset.spaceInit === "1" || btn.classList.contains("btn-basic")) {
      return;
    }

    btn.dataset.spaceInit = "1";

    const label = document.createElement("span");
    label.className = "btn-space__label";

    while (btn.firstChild) {
      label.appendChild(btn.firstChild);
    }

    const fill = document.createElement("span");
    fill.className = "btn-space__fill";

    const bloom = document.createElement("span");
    bloom.className = "btn-space__bloom";

    const border = document.createElement("span");
    border.className = "btn-space__border";

    const shine = document.createElement("span");
    shine.className = "btn-space__shine";

    const nebula = document.createElement("span");
    nebula.className = "btn-space__nebula";

    const particles = document.createElement("span");
    particles.className = "btn-space__particles";
    makeParticles(
      particles,
      btn.classList.contains("btn--sm") ? smallParticleCount : defaultParticleCount,
    );

    btn.append(fill, bloom, border, shine, particles, nebula, label);

    btn.addEventListener("mousemove", (event) => {
      updatePointer(btn, event.clientX, event.clientY);
    });

    btn.addEventListener("click", (event) => {
      const ripple = document.createElement("span");
      ripple.className = "btn-space__ripple";

      const rect = btn.getBoundingClientRect();
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;

      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
})();
