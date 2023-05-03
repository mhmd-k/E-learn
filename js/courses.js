const courses = [
  {
    id: 1,
    image: "../images/html.png",
    title: "HTML5 crash course",
    disc: "Skills you'll gain: HTML and CSS, Web Development, Network Architecture, Computer Programming.",
    time: 2,
  },
  {
    id: 2,
    image: "../images/java.jpg",
    title: "Java Programming and Software Engineering Fundamentals",
    disc: "Skills you'll gain: Back-End Web Development, Computer Programming, Computer Programming Tools, Data...",
    time: 13,
  },
  {
    id: 3,
    image: "../images/linux.jpg",
    title: "Linux Fundamentals",
    disc: "Skills you'll gain: Operating Systems, Linux, System Software, Databases, NoSQL, SQL, Computer Programming..",
    time: 8,
  },
  {
    id: 4,
    image: "../images/nodejs.jpg",
    title: "Node.js Backend Basics with Best Practices",
    disc: "Skills you'll gain: Back-End Web Development, Computer Programming, Computer Programming Tools, Data...",
    time: 5,
  },
  {
    id: 5,
    image: "../images/sql.jpg",
    title: "Introduction to Structured Query Language (SQL)",
    disc: "Skills you'll gain: Data Management, Databases, SQL, Statistical Programming, PostgreSQL, Database Administration...",
    time: 4,
  },
  {
    id: 6,
    image: "../images/react.png",
    title: "React Basics",
    disc: "Skills you'll gain: React (web framework), Web Development, Front-End Web Development.",
    time: 5,
  },
];

const container = document.querySelector("main .container");
const searchInput = document.querySelector("input[name='search']");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase().split(" ").join("");
  container.innerHTML = "";
  const filteredCourses = courses.filter((e) => search(e.title, value));
  filteredCourses.forEach((course) => {
    createCourseCard(course);
  });
});

courses.forEach((course) => {
  createCourseCard(course);
});

function createCourseCard(course) {
  let a = document.createElement("a");
  a.href = "../pages/log-in.html";
  a.className = "box";
  a.setAttribute("data-course", course.id);
  a.innerHTML = `
    <div
        class="image"
        style="background-image: url(${course.image});"
    ></div>
    <h3>${course.title}</h3>
    <p class="disc">${course.disc}</p>
    <p>${course.time} hours</p>
    `;
  container.append(a);
}

function search(str, value) {
  return str.toLowerCase().split(" ").join("").search(value) !== -1;
}

const links = document.querySelectorAll("a.box");

//if the user is loged in

if (user) {
  document.querySelector("header .container").innerHTML = `
        <a href="../index.html" class="logo">E-Learn</a>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="./courses.html">Courses</a></li>
          <li><a href="./about.html">About Us</a></li>
          <li><a href="./contact.html">Contact</a></li>
          <li><a href="./notes.html">Notes</a></li>
        </ul>
        <div class="btns">
          <a class="header-btn" href="./profile.html">
            <i class="fa-solid fa-user fa-lg"></i
          ></a>
        </div>
        <button id="menu"><i class="fa-solid fa-bars fa-2xl"></i></button>
        <ul class="mobile">
          <li><a href="#">Home</a></li>
          <li><a href="./courses.html">Courses</a></li>
          <li><a href="./about.html">About Us</a></li>
          <li><a href="./contact.html">Contact</a></li>
          <li><a href="./notes.html">Notes</a></li>
          <li class="mobile">
            <a class="header-btn" href="./profile.html">
              <i class="fa-solid fa-user fa-lg"></i
            ></a>
          </li>
        </ul>
  `;
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("course", link.getAttribute("data-course"));
      location.href = "../pages/course.html";
    });
  });
}
