const imgA = document.querySelector(".about-me__picture");
const imgB = document.querySelector(".nav__img");

window.addEventListener("scroll", () => {
  const rect = imgA.getBoundingClientRect();
  const navHeight = document.querySelector("nav").offsetHeight;
  if (rect.top + rect.height <= navHeight) {
    imgB.style.transform = "scale(1)";
  } else {
    imgB.style.transform = "scale(0)";
  }
});

// Set the initial scale of imgB to 0
imgB.style.transform = "scale(0)";
