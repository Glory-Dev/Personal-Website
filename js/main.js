const header = document.querySelector("body > .header");
const navLinks = document.querySelector(".header .navbar > .links");
const navLinksLis = document.querySelectorAll(".header .navbar > .links li");
const menuBarIcon = document.querySelector(".header .navbar > .menu-icon");

window.addEventListener("scroll", () => {
  scrollY >= 50
    ? header.classList.add("active")
    : header.classList.remove("active");
});

function resizeWindowForHeader() {
  if (window.innerWidth > 575) {
    navLinks.classList.remove("active");
    menuBarIcon.classList.remove("active");
  }
}

window.addEventListener("resize", resizeWindowForHeader());
resizeWindowForHeader();

menuBarIcon.addEventListener("click", toggleMenuBar);
navLinksLis.forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBarIcon.classList.remove("active");
  });
});

document.addEventListener("keyup", (e) => {
  if (menuBarIcon.classList.contains("active"))
    if (e.key == "Escape") toggleMenuBar();
});

function toggleMenuBar() {
  menuBarIcon.classList.contains("active")
    ? menuBarIcon.classList.remove("active")
    : menuBarIcon.classList.add("active");
  navLinks.classList.contains("active")
    ? navLinks.classList.remove("active")
    : navLinks.classList.add("active");
}

//

const toolboxes = Array.from(
  document.querySelectorAll(".skills-tools .toolbox > .card")
);

window.addEventListener("resize", function () {
  console.log(window.innerWidth);

  if (window.innerWidth > 900) {
    toolboxes.forEach((card) => {
      card.addEventListener("click", removeActive);
    });
  } else {
    card.classList.remove("active");
  }
});

function removeActive() {
  toolboxes.forEach((card) => {
    card.classList.remove("active");
    this.classList.add("active");
  });
}

//

// const switcherLis = document.querySelectorAll(".projects .switcher li");
// const toolboxes = Array.from(
//   document.querySelectorAll(".projects .content .gallery > div")
// );

// switcherLis.forEach((li) => {
//   li.addEventListener("click", removeActive);
//   li.addEventListener("click", filterGallery);
// });

// function removeActive() {
//   switcherLis.forEach((li) => {
//     li.classList.remove("active");
//     this.classList.add("active");
//   });
// }

// function filterGallery() {
//   toolboxes.forEach((e) => {
//     e.style.visibility = "hidden";
//     document.querySelectorAll(this.dataset.switch).forEach((e) => {
//       e.style.visibility = "visible";
//     });
//   });
// }

//

//

const scrollToTop = document.querySelector("body > .scroll-top");

window.addEventListener("scroll", () => {
  scrollY >= 1300
    ? scrollToTop.classList.add("show")
    : scrollToTop.classList.remove("show");
});
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
