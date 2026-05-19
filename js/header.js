const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
});