const user = JSON.parse(localStorage.getItem("user")) || null;

if (user) {
  document.querySelector("header .btns").innerHTML = `
    <a class="header-btn" href="./profile.html">
        <i class="fa-solid fa-user fa-lg"></i>
    </a>`;
  document.querySelector("li.mobile").innerHTML = `
    <a class="header-btn" href=".profile.html">
        <i class="fa-solid fa-user fa-lg"></i
    ></a>`;
  document.querySelectorAll(".landing-btn").forEach((e) => {
    e.innerHTML = "Continue learning";
    e.href = "../pages/courses.html";
  });
  document.querySelector("section.info").remove();
}
