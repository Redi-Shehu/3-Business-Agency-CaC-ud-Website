// navbar
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".navbar__links");
const menu = document.querySelector(".menu");
const line1 = document.querySelector(".line-1");
const line3 = document.querySelector(".line-3");

menu.addEventListener("click", () => {
  navbar.classList.toggle("show");
  navbarLinks.classList.toggle("show");
  line1.classList.toggle("change");
  line3.classList.toggle("change");
});
