let burger = document.getElementById("burger");
let nav = document.getElementById("nav");

window.addEventListener("click", () => {
  if (nav.className == "open") {
    nav.className = "";
    burger.setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    nav.className = "open";
    burger.setAttribute("src", "./images/icon-close.svg");
  }
});
