const header = document.querySelector("body > .header");

window.addEventListener("scroll", () => {
  if (scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const toggleMenuBar = document.querySelector(".header .navbar > .menu-icon");
const navLinks = document.querySelector(".header .navbar > .links");

toggleMenuBar.onclick = () => {
  toggleMenuBar.classList.toggle("active");
  navLinks.classList.toggle("active");
};

//

const switcherLis = document.querySelectorAll(".skills-tools .switcher li");
const toolboxes = Array.from(
  document.querySelectorAll(".skills-tools .toolbox > div")
);

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", filterGallery);
});

function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function filterGallery() {
  toolboxes.forEach((e) => {
    e.style.visibility = "hidden";
    document.querySelectorAll(this.dataset.switch).forEach((e) => {
      e.style.visibility = "visible";
    });
  });
}

//

// let html = document.querySelector("html");
// let changeTheme = document.querySelector("body > .theme");

// changeTheme.addEventListener("click", () => {});

//

const scrollToTop = document.querySelector("body > .scroll-top");

window.addEventListener("scroll", () => {
  if (scrollY >= 1300) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
