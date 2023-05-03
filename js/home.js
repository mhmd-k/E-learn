const courses = [
  {
    id: 1,
    image: "html.png",
    title: "HTML5 crash course",
    disc: "Skills you'll gain: HTML and CSS, Web Development, Network Architecture, Computer Programming.",
    time: 2,
  },
  {
    id: 2,
    image: "java.jpg",
    title: "Java Programming and Software Engineering Fundamentals",
    disc: "Skills you'll gain: Back-End Web Development, Computer Programming, Computer Programming Tools, Data...",
    time: 13,
  },
  {
    id: 3,
    image: "linux.jpg",
    title: "Linux Fundamentals",
    disc: "Skills you'll gain: Operating Systems, Linux, System Software, Databases, NoSQL, SQL, Computer Programming..",
    time: 8,
  },
  {
    id: 4,
    image: "nodejs.jpg",
    title: "Node.js Backend Basics with Best Practices",
    disc: "Skills you'll gain: Back-End Web Development, Computer Programming, Computer Programming Tools, Data...",
    time: 5,
  },
  {
    id: 5,
    image: "sql.jpg",
    title: "Introduction to Structured Query Language (SQL)",
    disc: "Skills you'll gain: Data Management, Databases, SQL, Statistical Programming, PostgreSQL, Database Administration...",
    time: 4,
  },
  {
    id: 6,
    image: "react.png",
    title: "React Basics",
    disc: "Skills you'll gain: React (web framework), Web Development, Front-End Web Development.",
    time: 5,
  },
];

const CourseId = parseInt(localStorage.getItem("course")) || null;
const course = courses[CourseId - 1];

if (user) {
  document.querySelector("header .container").innerHTML = `
        <a href="#" class="logo">E-Learn</a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="./pages/courses.html">Courses</a></li>
          <li><a href="./pages/about.html">About Us</a></li>
          <li><a href="./pages/contact.html">Contact</a></li>
          <li><a href="./pages/notes.html">Notes</a></li>
        </ul>
        <div class="btns">
          <a class="header-btn" href="./pages/profile.html">
            <i class="fa-solid fa-user fa-lg"></i
          ></a>
        </div>
        <button id="menu"><i class="fa-solid fa-bars fa-2xl"></i></button>
        <ul class="mobile">
          <li><a href="#">Home</a></li>
          <li><a href="./pages/courses.html">Courses</a></li>
          <li><a href="./pages/about.html">About Us</a></li>
          <li><a href="./pages/contact.html">Contact</a></li>
          <li><a href="./pages/notes.html">Notes</a></li>
          <li class="mobile">
            <a class="header-btn" href="./pages/profile.html">
              <i class="fa-solid fa-user fa-lg"></i
            ></a>
          </li>
        </ul>
  `;
  document.querySelector("section.info").remove();
  document.querySelector(
    "main .container .text h1"
  ).innerText = `Welcome back ${user.username}`;
  // if the user have started a course
  if (CourseId) {
    document.querySelector("main .container .text").innerHTML = `
      <h1>Welcome back ${user.username}</h1>
      <div class="start">
        <p style="line-height: 25px;"> Jump back in:</p>
        <div class="course">
          <div class="image">
            <img src="./images/${course.image}" alt="course"/>
          </div>
          <div>
            <p style="text-align: start; margin: 0; line-height: 25px;">${course.title}</p>
            <a href="./pages/courses.html" class="landing-btn">Continue</a>
          </div>
        </div>
      </div>
  `;
  }
}
