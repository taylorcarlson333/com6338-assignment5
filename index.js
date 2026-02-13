const hamburgerButton = document.querySelector("button.hamburger-btn");
const hamburgerMenu = document.querySelector(".hamburger-menu");

function openHamburger() {
  hamburgerMenu.classList.add("show-menu");
  hamburgerButton.setAttribute("aria-expanded", "true");
}

function closeHamburger() {
  hamburgerMenu.classList.remove("show-menu");
  hamburgerButton.setAttribute("aria-expanded", "false");
  hamburgerButton.focus();
}

function toggleHamburger() {
  hamburgerMenu.classList.contains("show-menu") ? closeHamburger() : openHamburger();
}

hamburgerButton.onclick = toggleHamburger;

document.onkeyup = function (event) {
  if (event.key === "Escape" && hamburgerMenu.classList.contains("show-menu")) {
    closeHamburger();
  }
};

document.onclick = function (event) {
  const insideClick = hamburgerMenu.contains(event.target);
  const buttonClick = hamburgerButton.contains(event.target);

  if (!insideClick && !buttonClick && hamburgerMenu.classList.contains("show-menu")) {
    closeHamburger();
  }
};