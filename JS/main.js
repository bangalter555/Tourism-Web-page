import { w, d, hamburgerBtn, hiddenMenu } from "./elements.js";

import { responsiveMedia } from "./responsive-media.js";
//Creating function to make hidden menu show up
d.addEventListener("click", (e) => {
  let target = e.target;
  if (target === hamburgerBtn || target.matches(".hamburger i")) {
    e.preventDefault();
    hiddenMenu.classList.add("animate__animated", "animate__fadeInLeft");
  }
});

w.addEventListener("resize", (e) => {
  if (w.innerWidth > 658) {
    hiddenMenu.classList.remove("animate__animated", "animate__fadeInLeft");
  }
});

//Function to make content responsive
d.addEventListener("DOMContentLoaded", (e) => {
  responsiveMedia(
    "videos-content",
    "(min-width: 658px)",
    `<a href="https://www.youtube.com/watch?v=JvbzmkR5t90&t=49s" class="youtube-link" target="_blank">Explore the city with us</a>`,
    `<iframe class="youtube-video" src="https://www.youtube.com/embed/JvbzmkR5t90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
});
