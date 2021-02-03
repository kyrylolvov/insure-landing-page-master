"use strict";

const menuButton = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".websiteNavMenu");
let mediaQuery = window.matchMedia("(max-width: 500px)");
const heroImg = document.querySelector(".heroImg");

if (mediaQuery.matches) {
  // window width is at less than 799px
  heroImg.src = "/images/image-intro-mobile.jpg";
}

function hamburgerMenuAnimation() {
  menuButton.classList.toggle("hamburgerMenuOpen");
}

function navMenuuAnimation() {
  navMenu.classList.toggle("websiteNavMenuActive");
}

function disableScroll() {
  document.body.classList.toggle("disableScroll");
}

function toggleMobileMenu() {
  hamburgerMenuAnimation();
  navMenuuAnimation();
  disableScroll();
}
menuButton.addEventListener("click", toggleMobileMenu);
