const user = JSON.parse(localStorage.getItem("user")) || null;

if (user) {
  document.querySelector("header .container").innerHTML = `
        <a href="../index.html" class="logo">E-Learn</a>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/pages/courses.html">Courses</a></li>
          <li><a href="/pages/notes.html">Notes</a></li>
        </ul>
        <div class="btns">
          <a class="header-btn" href="/pages/profile.html">
            <i class="fa-solid fa-user fa-lg"></i
          ></a>
        </div>
        <button id="menu"><i class="fa-solid fa-bars fa-2xl"></i></button>
        <ul class="mobile">
          <li><a href="/index.html">Home</a></li>
          <li><a href="/pages/courses.html">Courses</a></li>
          <li><a href="/pages/notes.html">Notes</a></li>
          <li class="mobile">
            <a class="header-btn" href="/pages/profile.html">
              <i class="fa-solid fa-user fa-lg"></i
            ></a>
          </li>
        </ul>
  `;
}

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
