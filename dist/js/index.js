"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".header__hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuCloser = document.querySelector(".mobile-menu__closer");
  const mobileItem = document.querySelector(".mobile-menu__link");

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("mobile-menu_active");

    mobileMenuCloser.addEventListener("click", () => {
      mobileMenu.classList.remove("mobile-menu_active");
    });

    mobileItem.addEventListener("click", () => {
      mobileMenu.classList.remove("mobile-menu_active");
    });
  });
});
