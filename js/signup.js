const username = document.querySelector("input[name='username']");
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='pass']");
const confirmPassword = document.querySelector("input[name='confirmPass']");
const form = document.querySelector(".form form");

username.addEventListener("input", () => {
  if (username.value === "") {
    username.nextElementSibling.innerText = "field can't be empty";
    username.classList.add("not-valid");
    return;
  }
  if (!validateUsername(username.value)) {
    username.nextElementSibling.innerText =
      "username must be at least 5 characters and must contain letters";
    username.classList.add("not-valid");
    return;
  }
  username.nextElementSibling.innerText = "";
  username.classList.remove("not-valid");
});

email.addEventListener("input", () => {
  if (email.value === "") {
    email.nextElementSibling.innerText = "field can't be empty";
    email.classList.add("not-valid");
    return;
  }
  if (!validateEmail(email.value)) {
    email.nextElementSibling.innerText = "email not valid";
    email.classList.add("not-valid");
    return;
  }
  email.nextElementSibling.innerText = "";
  email.classList.remove("not-valid");
});

password.addEventListener("input", () => {
  if (password.value === "") {
    password.nextElementSibling.innerText = "field can't be empty";
    password.classList.add("not-valid");
    return;
  }
  if (!validatePassword(password.value)) {
    password.nextElementSibling.innerText =
      "password should be between 5 and 10 characters";
    password.classList.add("not-valid");
    return;
  }
  password.nextElementSibling.innerText = "";
  password.classList.remove("not-valid");
});

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value === "") {
    confirmPassword.nextElementSibling.innerText = "field can't be empty";
    confirmPassword.classList.add("not-valid");
    return;
  }
  if (confirmPassword.value !== password.value) {
    confirmPassword.nextElementSibling.innerText =
      "the two passwords are not the same";
    confirmPassword.classList.add("not-valid");
    return;
  }
  confirmPassword.nextElementSibling.innerText = "";
  confirmPassword.classList.remove("not-valid");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

function validateUsername(username) {
  if (username.length <= 4) {
    return false;
  }
  if (!/[a-zA-Z]/.test(username)) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(pass) {
  if (pass.length < 5 || pass.length > 10) {
    return false;
  }
  return true;
}

function handleSubmit() {
  showLoadingAnimation(form.querySelector("[type='submit']"));
  setTimeout(() => {
    form.querySelector("button[type='submit']").innerHTML = `sign up`;
    if (
      !validateUsername(username.value) ||
      !validateEmail(email.value) ||
      !validatePassword(password.value) ||
      !validatePassword(confirmPassword.value)
    ) {
      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: username.value,
        email: email.value,
        pass: password.value,
      })
    );
    location.href = "/index.html";
  }, 2000);
}

function showLoadingAnimation(btn) {
  btn.innerHTML = `
  <div class="loadingio-spinner-rolling-fvxxpi27vlr"><div class="ldio-h7qmz13llzu">
    <div></div>
  </div></div>`;
}
