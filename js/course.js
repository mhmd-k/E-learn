const courses = [
  {
    id: 1,
    name: "html",
    title: "HTML5 crash course",
    leassons: [
      "https://www.youtube.com/embed/6QAELgirvjs",
      "https://www.youtube.com/embed/7LxA9qXUY5k",
      "https://www.youtube.com/embed/QG5aEmS9Fu0",
      "https://www.youtube.com/embed/dVgTBEYCseU",
    ],
  },
  {
    id: 2,
    name: "java",
    title: "Java Programming and Software Engineering Fundamentals",
    leassons: [
      "https://www.youtube.com/embed/mNvJipMTKSM",
      "https://www.youtube.com/embed/wJKgqYj4mtU",
      "https://www.youtube.com/embed/vtHwpyk5v08",
      "https://www.youtube.com/embed/mY8yxPP9_AE",
    ],
  },
  {
    id: 3,
    name: "linux",
    title: "Linux Fundamentals",
    leassons: [
      "https://www.youtube.com/embed/YHFzr-akOas",
      "https://www.youtube.com/embed/dQ8JgDUS8DA",
      "https://www.youtube.com/embed/FTTr2bjI2UM",
      "https://www.youtube.com/embed/E01hskdRmUg",
    ],
  },
  {
    id: 4,
    name: "nodejs",
    title: "Node.js Backend Basics with Best Practices",
    leassons: [
      "https://www.youtube.com/embed/zb3Qk8SG5Ms",
      "https://www.youtube.com/embed/OIBIXYLJjsI",
      "https://www.youtube.com/embed/-HPZ1leCV8k",
      "https://www.youtube.com/embed/DQD00NAUPNk",
    ],
  },
  {
    id: 5,
    name: "sql",
    title: "Introduction to Structured Query Language (SQL)",
    leassons: [
      "https://www.youtube.com/embed/DftlOK7fCtc",
      "https://www.youtube.com/embed/z4j4S6GsxaU",
      "https://www.youtube.com/embed/9p7ugFU9dvs",
      "https://www.youtube.com/embed/9p7ugFU9dvs",
    ],
  },
  {
    id: 6,
    name: "react",
    title: "React Basics",
    leassons: [
      "https://www.youtube.com/embed/j942wKiXFu8",
      "https://www.youtube.com/embed/kVeOpcw4GWY",
      "https://www.youtube.com/embed/9D1x7-2FmTA",
      "https://www.youtube.com/embed/pnhO8UaCgxg",
    ],
  },
];

const course = courses[parseInt(localStorage.getItem("course")) - 1];
const test = document.querySelector("#test");
const aside = document.querySelector("aside");
const asideBtn = document.querySelector("header #aside");
const leasonBtns = document.querySelectorAll("li.leason");
const project = document.querySelector("#project");
const mainContainer = document.querySelector(".content");

// show and hide aside in small screens
let show = false;
aside.addEventListener("click", (e) => e.stopPropagation());
asideBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (show) {
    show = false;
    aside.classList.remove("active");
  } else {
    show = true;
    aside.classList.add("active");
  }
});
document.addEventListener("click", () => {
  show = false;
  aside.classList.remove("active");
});

// update the content of the intro screen
mainContainer.innerHTML = `
  <p class="text-muted">${course.title} <span>> ${leasonBtns[0].textContent}</span></p>
  <iframe
    src="${course.leassons[0]}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, quis
    nesciunt suscipit aperiam officiis perferendis vitae distinctio
    consequatur. Alias placeat nemo ex velit error consectetur tempora
    maiores, expedita autem non. Sequi corrupti recusandae odit dolor,
    distinctio nulla rerum animi perspiciatis minima amet illum quos ea et
    provident labore eum quisquam sit repellendus odio mollitia inventore
    dicta iure? Nostrum, rerum eius? Quam possimus ea rerum omnis fugiat
    modi. xpedita autem non. Sequi corrupti recusandae odit dolor,
    distinctio nulla rerum animi perspiciatis minima amet illum quos ea et
    provident labore eum quisquam sit repellendus odio mollitia inventore
    dicta iure
  </p>
`;

leasonBtns.forEach((e, i) => {
  e.addEventListener("click", () => {
    loadingAnimation();
    mainContainer.classList.add("loading");
    setTimeout(() => {
      mainContainer.classList.remove("loading");
      mainContainer.innerHTML = `
        <p class="text-muted">${course.title} <span>> ${e.textContent}</span></p>
        <iframe
          src="${course.leassons[i]}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, quis
          nesciunt suscipit aperiam officiis perferendis vitae distinctio
          consequatur. Alias placeat nemo ex velit error consectetur tempora
          maiores, expedita autem non. Sequi corrupti recusandae odit dolor,
          distinctio nulla rerum animi perspiciatis minima amet illum quos ea et
          provident labore eum quisquam sit repellendus odio mollitia inventore
          dicta iure? Nostrum, rerum eius? Quam possimus ea rerum omnis fugiat
          modi. xpedita autem non. Sequi corrupti recusandae odit dolor,
          distinctio nulla rerum animi perspiciatis minima amet illum quos ea et
          provident labore eum quisquam sit repellendus odio mollitia inventore
          dicta iure
        </p>`;
    }, 1000);
    document
      .querySelectorAll("aside ul li")
      .forEach((li) => li.classList.remove("active"));
    e.classList.add("active");
  });
});

project.addEventListener("click", () => {
  loadingAnimation();
  mainContainer.classList.add("loading");
  setTimeout(() => {
    mainContainer.classList.remove("loading");
    mainContainer.innerHTML = `
        <p class="text-muted">${course.title}  <span>> ${project.textContent}</span></p>
        <h3>What is the purpose of this project?</h3>
        <p>The primary purpose of this project is
            to check your knowledge and understanding of the key
            learning objectives of the course you have just completed.
            Most importantly, projects help you establish which topics
            you have mastered and which require further focus before 
            completing the course. Ultimately, the project is designed to help you
            make sure that you can apply what you have learned.
        </p>
        <div class="upload">
            <h3>Upload your project</h3>
            <input type="file" name="upload" />
        </div>
    `;
  }, 1000);
  document
    .querySelectorAll("aside ul li")
    .forEach((li) => li.classList.remove("active"));
  project.classList.add("active");
});

function loadingAnimation() {
  mainContainer.innerHTML = `
        <div class="loadingio-spinner-rolling-fvxxpi27vlr"><div class="ldio-h7qmz13llzu">
            <div class="course"></div>
        </div></div>`;
}

test.addEventListener("click", () => {
  loadingAnimation();
  mainContainer.classList.add("loading");
  document
    .querySelectorAll("aside ul li")
    .forEach((li) => li.classList.remove("active"));
  test.classList.add("active");
  setTimeout(() => {
    mainContainer.classList.remove("loading");
    const subject = course.name.toUpperCase();
    mainContainer.innerHTML = `
    <!-- start section -->
    <section class="start">
        <h3>${subject} ASSESSMENT</h3>
        <p>
          Score 60 or higher to pass.<br />
          You have 30 seconds to answer each question. <br />
          good luck.
        </p>
        <button id="start">START</button>
    </section>
    <!-- quiz section -->
    <section class="quiz d-none">
        <div class="top">
          <h4></h4>
          <h4 class="timer">00:30</h4>
        </div>
        <h2></h2>
        <ul class="answers"></ul>
        <button id="submit">
          Next <i class="fa-solid fa-arrow-right"></i>
        </button>
    </section>
    <!-- lose/win section -->
    <section class="end d-none">
        <img src="" alt="" />
        <h2></h2>
        <button id="restart">
          Restart <i class="fa-solid fa-arrow-rotate-left"></i>
        </button>
    </section>
    `;

    // assessment
    const assessment = document.createElement("script");
    assessment.src = "../js/assessment.js";
    document.body.appendChild(assessment);
  }, 1000);
});
