//Document
const d = document,
  hamburgerBtn = d.querySelector(".hamburger"),
  hiddenMenu = d.querySelector(".hidden-menu");

//Creating function to make hidden menu show up
d.addEventListener("click", (e) => {
  let target = e.target;
  if (target === hamburgerBtn || target.matches(".hamburger i")) {
    e.preventDefault();
    hiddenMenu.classList.add("animate__animated", "animate__fadeInLeft");
  }
});

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 658) {
    hiddenMenu.classList.remove("animate__animated", "animate__fadeInLeft");
  }
});
