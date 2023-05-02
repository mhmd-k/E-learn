const notes = JSON.parse(localStorage.getItem("user")).notes || [];
const container = document.querySelector("main .container");
let colors = [
  "#e91e63",
  "#673ab7",
  "#2196f3",
  "#ffc107",
  "#607d8b",
  "#ff5722",
  "#1c1f20",
  "#009688",
];

if (notes.length === 0) {
  container.parentElement.innerHTML = `
        <h2>You don't have any notes</h2>
    `;
}

notes.forEach((note) => {
  createNoteCard(note);
});

const optionBtns = document.querySelectorAll(".options") || [];
const deleteBtns = document.querySelectorAll(".options #delete") || [];
const editBtns = document.querySelectorAll(".options #edit") || [];

optionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.children[0].classList.toggle("visible");
    btn.children[1].classList.toggle("visible");
  });
});

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const noteCard = btn.parentElement.parentElement.parentElement;
    deleteNote(parseInt(btn.getAttribute("data-id")), noteCard);
  });
});

editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const noteCard = btn.parentElement.parentElement.parentElement;
    const titleInput = noteCard.querySelector("input[name='title']");
    const descriptionInput = noteCard.querySelector("textarea");
    const id = parseInt(btn.getAttribute("data-id"));
    if (btn.getAttribute("data-edit") === "false") {
      btn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> done`;
      btn.setAttribute("data-edit", "true");
      titleInput.removeAttribute("readonly");
      descriptionInput.removeAttribute("readonly");
      titleInput.focus();
    } else {
      btn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i> done`;
      btn.setAttribute("data-edit", "false");
      editNote(id, titleInput.value, descriptionInput.value);
      titleInput.readOnly = true;
      descriptionInput.readOnly = true;
    }
  });
});

function createNoteCard(note) {
  let noteCard = document.createElement("div");
  noteCard.className = "note";
  const color = randomColor();
  noteCard.style.backgroundColor = color;
  noteCard.innerHTML = `
        <input readonly name="title" value="${note.title}" />
        <textarea readonly>${note.description}</textarea>
        <hr>
        <div class="note-footer">
            <div class="date">${note.date}</div>
            <div class="options">
                ...
                <button id="edit" data-edit="false" data-id="${note.id}" style="background-color: ${color};">
                    <i class="fa-regular fa-pen-to-square"></i> edit
                </button>
                <button id="delete" data-id="${note.id}" style="background-color: ${color};">
                    <i class="fa-sharp fa-solid fa-trash"></i> delete
                </button>
            </div>
        </div>
    `;
  container.append(noteCard);
}

function randomColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function deleteNote(id, card) {
  const newNotes = notes.filter((note) => note.id !== id);
  localStorage.setItem("user", JSON.stringify({ ...user, notes: newNotes }));
  card.remove();
}

function editNote(id, title, description) {
  const newNotes = notes.map((note) =>
    note.id === id
      ? {
          ...note,
          title: title,
          description: description,
        }
      : note
  );
  localStorage.setItem("user", JSON.stringify({ ...user, notes: newNotes }));
}
