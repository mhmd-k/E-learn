const user = JSON.parse(localStorage.getItem("user")) || null;

if (user) {
  document.querySelector("main .container").innerHTML = `
      <div class="col">
          <div class="image">
            <img src="../images/profile.png" alt="" />
            <button id="edit" class="edit-image">
              <i class="fa-regular fa-pen-to-square fa-lg"></i>
            </button>
          </div>
      </div>
      <div class="col">
      <div class="data">
      <label for="name">Name:</label>
      <div class="input">
          <input
              type="text"
              id="name"
              value="${user.username}"
              name="name"
              readonly
          />
          <button id="edit">
            <i class="fa-regular fa-pen-to-square fa-lg"></i>
          </button>
        </div>
      </div>
      <div class="data">
      <label for="email">Email:</label>
        <div class="input">
            <input
              type="email"
              id="email"
              value="${user.email}"
              name="email"
              readonly
            />
            <button id="edit">
              <i class="fa-regular fa-pen-to-square fa-lg"></i>
            </button>
            </div>
        </div>
        <div class="data"><button id="log-out">Log Out</button></div>
    </div>
  `;
}

const courses = [
  {
    id: 1,
    image: "../images/html.png",
    title: "HTML5 crash course",
  },
  {
    id: 2,
    image: "../images/java.jpg",
    title: "Java Programming and Software Engineering Fundamentals",
  },
];
const container = document.querySelector("section .container");

function createCard(course) {
  let div = document.createElement("div");
  div.className = "box";
  div.setAttribute("data-course", course.data);
  div.innerHTML = `
    <i class="fa-solid fa-circle-check"></i>
    <div
        class="image"
        style="background-image: url(${course.image});"
    ></div>
    <h3>${course.title}</h3>
    `;
  container.append(div);
}

courses.forEach((course) => createCard(course));

let usernameReadOnly = true,
  emailReadOnly = true,
  passReadOnly = true;

const usernameEditBtn = document.querySelector("input[name='name'] + #edit");
const emailEditBtn = document.querySelector("input[name='email'] + #edit");
const passEditBtn = document.querySelector("input[name='pass'] + #edit");

usernameEditBtn.addEventListener("click", () => {
  const input = usernameEditBtn.previousElementSibling;
  if (emailReadOnly) {
    emailReadOnly = false;
    input.readOnly = false;
    input.focus();
    input.classList.add("edit");
    input.addEventListener("input", () =>
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, username: input.value })
      )
    );
  } else {
    if (input.value.length < 4) {
      alert("username must be at least 4 characters");
      return;
    }
    emailReadOnly = true;
    input.readOnly = true;
    input.classList.remove("edit");
  }
});
emailEditBtn.addEventListener("click", () => {
  const input = emailEditBtn.previousElementSibling;
  if (emailReadOnly) {
    emailReadOnly = false;
    input.readOnly = false;
    input.focus();
    input.classList.add("edit");
    input.addEventListener("input", () =>
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, email: input.value })
      )
    );
  } else {
    if (!validateEmail(input.value)) {
      alert("please provide a valid email");
      return;
    }
    emailReadOnly = true;
    input.readOnly = true;
    input.classList.remove("edit");
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

window.addEventListener("beforeunload", (e) => {
  if (usernameEditBtn.previousElementSibling.value.length < 4) {
    e.preventDefault();
    e.returnValue = "";
    return "username must be at least 4 characters";
  }
  if (!validateEmail(emailEditBtn.previousElementSibling.value)) {
    e.preventDefault();
    e.returnValue = "";
    return "please enter a valid email";
  }
});

const logOutBtn = document.querySelector("#log-out");

logOutBtn.addEventListener("click", () => {
  localStorage.clear();
  location.href = "../index.html";
});

const editImageBtn = document.querySelector(".edit-image");
const uploadImageDiv = document.querySelector(".upload-image");
const closeBtn = uploadImageDiv.querySelector("#close");

editImageBtn.addEventListener("click", () => {
  uploadImageDiv.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  uploadImageDiv.style.display = "none";
});
