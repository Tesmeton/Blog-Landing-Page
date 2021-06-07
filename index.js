let burger = document.getElementById("burger");
let nav = document.getElementById("nav");
let mainNavLinks = document.getElementsByClassName("mainNavLinks");

burger.addEventListener("click", () => {
  if (nav.className == "open") {
    nav.className = "";
    burger.setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    nav.className = "open";
    burger.setAttribute("src", "./images/icon-close.svg");
  }
});

for (let i = 0; i < mainNavLinks.length; i++) {
  const linkNode = mainNavLinks[i];

  linkNode.addEventListener("click", (e) => {
    e.preventDefault();
    let ul = linkNode.nextElementSibling;

    if (ul.className == "open") {
      linkNode.classList.remove("rotate");
      ul.className = "";
    } else {
      linkNode.classList.add("rotate");
      ul.className = "open";
    }
  });
}
