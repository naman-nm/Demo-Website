'use strict';


const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})