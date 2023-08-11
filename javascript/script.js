const imgA = document.querySelector(".about-me__picture");
const imgB = document.querySelector(".nav__img");
const nav = document.querySelector("nav");
const personalLogo = document.querySelector(".personal__logo");

// Set the initial scale of imgB to 0
imgB.style.transform = "scale(0)";

window.addEventListener("scroll", () => {
  const rect = imgA.getBoundingClientRect();
  const navHeight = document.querySelector("nav").offsetHeight;
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Add your code for screens with a max-width of 768px here
    if (rect.top + 10 <= navHeight) {
      imgB.style.transform = "scale(1)";
      nav.style.borderRadius = "3%";
      nav.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.3)";
    } else {
      imgB.style.transform = "scale(0)";
      nav.style.borderRadius = "0%";
      nav.style.boxShadow = "0 0 0";
    }
  } else if (window.matchMedia("(max-width: 480px)").matches) {
    if (rect.top + 10 <= navHeight) {
      imgB.style.transform = "scale(1)";
      nav.style.borderRadius = "3%";
      nav.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.3)";
    } else {
      imgB.style.transform = "scale(0)";
      nav.style.borderRadius = "0%";
      nav.style.boxShadow = "0 0 0";
    }
  } else {
    if (rect.top + 10 <= navHeight) {
      imgB.style.transform = "scale(1)";
      nav.style.borderRadius = "2%";
      nav.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.3)";
    } else {
      imgB.style.transform = "scale(0)";
      nav.style.borderRadius = "0%";
      nav.style.boxShadow = "0 0 0";
    }
  }
});

const links = document.querySelectorAll(".nav__link--anchor");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (href) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView();
      }
    }
    history.pushState(null, null, " ");
  });
});
