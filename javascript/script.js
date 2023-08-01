const imgA = document.querySelector(".about-me__picture");
const imgB = document.querySelector(".nav__img");
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const rect = imgA.getBoundingClientRect();
  const navHeight = document.querySelector("nav").offsetHeight;
  if (rect.top + 10 <= navHeight) {
    imgB.style.transform = "scale(1)";
    nav.style.borderRadius = "2%";
    nav.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.3)";
  } else {
    imgB.style.transform = "scale(0)";
    nav.style.borderRadius = "0%";
    nav.style.boxShadow = "0 0 0";
  }
});

// Set the initial scale of imgB to 0
imgB.style.transform = "scale(0)";
