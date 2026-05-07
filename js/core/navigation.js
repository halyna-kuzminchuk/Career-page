const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");
const workToggle = document.querySelector(".main-nav__summary");
const workMenu = document.querySelector("#work-menu");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });
}

function closeWorkMenu() {
  if (!workToggle || !workMenu) return;
  if (workMenu.hidden) return;

  workToggle.setAttribute("aria-expanded", "false");
  workMenu.style.maxHeight = `${workMenu.scrollHeight}px`;
  requestAnimationFrame(() => {
    workMenu.classList.remove("is-open");
    workMenu.style.maxHeight = "0px";
  });

  const handleTransitionEnd = (event) => {
    if (event.propertyName !== "max-height") return;

    workMenu.removeEventListener("transitionend", handleTransitionEnd);

    if (workToggle.getAttribute("aria-expanded") === "false") {
      workMenu.hidden = true;
      workMenu.style.maxHeight = "";
    }
  };

  workMenu.addEventListener("transitionend", handleTransitionEnd);
}

function openWorkMenu() {
  if (!workToggle || !workMenu) return;

  workMenu.hidden = false;
  workToggle.setAttribute("aria-expanded", "true");
  workMenu.style.maxHeight = "0px";
  workMenu.offsetHeight; // force layout so transition has a start state

  requestAnimationFrame(() => {
    workMenu.classList.add("is-open");
    workMenu.style.maxHeight = `${workMenu.scrollHeight}px`;
  });
}

if (workToggle && workMenu) {
  workToggle.addEventListener("click", () => {
    const isOpen = workToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeWorkMenu();
    } else {
      openWorkMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".main-nav__item--has-menu")) {
      closeWorkMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeWorkMenu();
      workToggle.focus();
    }
  });
}
