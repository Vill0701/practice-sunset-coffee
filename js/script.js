// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu diclick
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan sidebar nav
const hamburgerMenu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
