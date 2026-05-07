(function initSpaceButtons() {
  const buttons = document.querySelectorAll(".btn-space");
  if (!buttons.length) return;

  const updatePointer = (el, clientX, clientY) => {
    const rect = el.getBoundingClientRect();
    const x = `${(((clientX - rect.left) / rect.width) * 100).toFixed(1)}%`;
    const y = `${(((clientY - rect.top) / rect.height) * 100).toFixed(1)}%`;

    el.style.setProperty("--mx", x);
    el.style.setProperty("--my", y);
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

    btn.append(fill, bloom, border, shine, nebula, label);

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
