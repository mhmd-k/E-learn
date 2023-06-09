const form = document.querySelector(".form form");
const emailInput = document.querySelector("input[type='text']");
const emailMsg = document.querySelector("input[type='text'] + span");
const passInput = document.querySelector("input[type='password']");
const passMsg = document.querySelector("input[type='password'] + span");
const submiBtn = document.querySelector("form button[type='submit']");

const user = {
  email: "student@mail.com",
  pass: "student",
  username: "Mohammad_k",
  notes: [],
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submiBtn.innerHTML = `
  <div class="loadingio-spinner-rolling-fvxxpi27vlr"><div class="ldio-h7qmz13llzu">
    <div></div>
  </div></div>`;
  setTimeout(() => {
    submiBtn.innerText = "log in";
    login();
  }, 2000);
});

emailInput.addEventListener("input", () => {
  emailMsg.innerText = "";
});
passInput.addEventListener("input", () => {
  passMsg.innerText = "";
});

function login() {
  const email = emailInput.value;
  const pass = passInput.value;
  if (email != user.email) {
    emailMsg.innerText = "email is not valid";
    return;
  }
  if (pass != user.pass) {
    passMsg.innerText = "incorrect password";
    return;
  }
  localStorage.setItem("user", JSON.stringify({ ...user, email, pass }));
  location.href = "../pages/profile.html";
}
