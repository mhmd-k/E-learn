const user = JSON.parse(localStorage.getItem("user")) || null;

if (user) {
  document.querySelector("header .btns").innerHTML = `
    <a class="header-btn" href="../pages/profile.html">
        <i class="fa-solid fa-user fa-lg"></i>
    </a>`;
  document.querySelector("li.mobile").innerHTML = `
    <a class="header-btn" href="../pages/profile.html">
        <i class="fa-solid fa-user fa-lg"></i
    ></a>`;
  document.querySelectorAll(".landing-btn").forEach((e) => {
    e.innerHTML = "Continue learning";
    e.href = "../pages/courses.html";
  });
  document.querySelector("section.info").remove();
  document.querySelector("main .container .text").innerHTML = `
  <h1>Welcome back ${user.username}</h1>
  <div class="start">
    <p style="line-height: 25px;"> Jump back in:</p>
    <div class="course">
      <div class="image">
        <img src="./images/java.jpg" alt="course image"/>
      </div>
      <div>
        <p style="text-align: start; margin: 0; line-height: 25px;">Multi Threading in java, intro</p>
        <a href="../pages/courses.html" class="landing-btn">Continue</a>
      </div>
    </div>
  </div>
  `;
}
