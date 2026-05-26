const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mainNav.classList.toggle("is-open", !isOpen);
  });
}

function closeMenu(toggle, menu) {
  if (!toggle || !menu) return;
  if (menu.hidden) return;

  toggle.setAttribute("aria-expanded", "false");
  menu.style.maxHeight = `${menu.scrollHeight}px`;
  requestAnimationFrame(() => {
    menu.classList.remove("is-open");
    menu.style.maxHeight = "0px";
  });

  const handleTransitionEnd = (event) => {
    if (event.propertyName !== "max-height") return;
    menu.removeEventListener("transitionend", handleTransitionEnd);
    if (toggle.getAttribute("aria-expanded") === "false") {
      menu.hidden = true;
      menu.style.maxHeight = "";
    }
  };

  menu.addEventListener("transitionend", handleTransitionEnd);
}

function openMenu(toggle, menu) {
  if (!toggle || !menu) return;

  menu.hidden = false;
  toggle.setAttribute("aria-expanded", "true");
  menu.style.maxHeight = "0px";
  menu.offsetHeight;

  requestAnimationFrame(() => {
    menu.classList.add("is-open");
    menu.style.maxHeight = `${menu.scrollHeight}px`;
  });
}

const dropdowns = document.querySelectorAll(".main-nav__item--has-menu");

dropdowns.forEach((item) => {
  const toggle = item.querySelector(".main-nav__summary");
  const menuId = toggle?.getAttribute("aria-controls");
  const menu = menuId ? document.querySelector(`#${menuId}`) : null;

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    // Close all other open dropdowns first
    dropdowns.forEach((other) => {
      if (other === item) return;
      const otherToggle = other.querySelector(".main-nav__summary");
      const otherId = otherToggle?.getAttribute("aria-controls");
      const otherMenu = otherId ? document.querySelector(`#${otherId}`) : null;
      closeMenu(otherToggle, otherMenu);
    });

    if (isOpen) {
      closeMenu(toggle, menu);
    } else {
      openMenu(toggle, menu);
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".main-nav__item--has-menu")) {
      closeMenu(toggle, menu);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu(toggle, menu);
      toggle.focus();
    }
  });
});
