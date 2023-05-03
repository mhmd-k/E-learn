const user = JSON.parse(localStorage.getItem("user")) || null;
const menuBtn = document.querySelector("header .container #menu");
const menu = document.querySelector("ul.mobile");

let showMenu = false;
menuBtn.addEventListener("click", () => {
  console.log("s");
  if (showMenu) {
    menu.style.display = "none";
    showMenu = false;
  } else {
    menu.style.display = "flex";
    showMenu = true;
  }
});

if (user) {
  document
    .querySelectorAll(".header-btn")[0]
    .setAttribute("href", "./profile.html");
  document
    .querySelectorAll("li.mobile a")[0]
    .setAttribute("href", "./profile.html");
  document.querySelectorAll(".header-btn")[1].remove();
  document.querySelectorAll(
    "li.mobile a"
  )[0].innerHTML = `<i class="fa-solid fa-user fa-lg"></i>`;
  document.querySelectorAll("li.mobile a")[1].remove();
}
