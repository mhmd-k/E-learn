const user = JSON.parse(localStorage.getItem("user")) || null;
const menuBtn = document.querySelector("#menu");
const menu = document.querySelector("ul.mobile");

let showMenu = false;
menuBtn.addEventListener("click", () => {
  if (showMenu) {
    menu.style.display = "none";
    showMenu = false;
  } else {
    menu.style.display = "flex";
    showMenu = true;
  }
});
