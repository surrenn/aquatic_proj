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

  //modals
  const modal = document.querySelector(".modal");
  const consultModal = document.querySelector(".modal__free-consult");
  const calcModal = document.querySelector(".modal__calc");

  const consultBtns = document.querySelectorAll(".btn-consult");
  const calcBtns = document.querySelectorAll(".btn-calc");

  const modalCloser = document.querySelectorAll(".modal__closer");

  function openModal(arr, modalPopUp, modalClass) {
    arr.forEach((item) => {
      item.addEventListener("click", () => {
        modal.classList.add("modal_active");
        modalPopUp.classList.add(modalClass);
        document.querySelector("body").style.overflow = "hidden";

        modalCloser.forEach((closer) => {
          closer.addEventListener("click", () => {
            modal.classList.remove("modal_active");
            modalPopUp.classList.remove(modalClass);
            document.querySelector("body").style.overflow = "scroll";
          });
        });
      });
    });
  }

  openModal(consultBtns, consultModal, "free-consult_active");
  openModal(calcBtns, calcModal, "calc_active");
});
