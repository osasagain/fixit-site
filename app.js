const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".navbar-menu");


hamburger.addEventListener("click",  () => {
    hamburger.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});