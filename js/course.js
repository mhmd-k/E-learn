const courses = [
  {
    id: 1,
    image: "/images/html.png",
    title: "HTML5 crash course",
    time: 2,
  },
  {
    id: 2,
    image: "/images/java.jpg",
    title: "Java Programming and Software Engineering Fundamentals",
    time: 13,
  },
  {
    id: 3,
    image: "/images/linux.jpg",
    title: "Linux Fundamentals",
    time: 8,
  },
  {
    id: 4,
    image: "/images/nodejs.jpg",
    title: "Node.js Backend Basics with Best Practices",
    time: 5,
  },
  {
    id: 5,
    image: "/images/sql.jpg",
    title: "Introduction to Structured Query Language (SQL)",
    time: 4,
  },
  {
    id: 6,
    image: "/images/react.png",
    title: "React Basics",
    time: 5,
  },
];
const course = courses[parseInt(localStorage.getItem("course")) - 1];
console.log(course);
