const user = JSON.parse(localStorage.getItem("user")) || null;
const notes = user.notes || null;
const showNotesFormBtn = document.querySelector(".add-note");
const notesForm = document.querySelector(".notes-form");
const closeNotesFormBtn = notesForm.querySelector("span.close");
const addNoteBtn = notesForm.querySelector(".notes-form #submit");
const titleInput = notesForm.querySelector("[name='title']");
const descriptionInput = notesForm.querySelector("[name='description']");
let notesFormShow = false;
let notesCounter = notes[notes.length - 1]?.id + 1 || 0;

closeNotesFormBtn.addEventListener("click", hideNoteForm);

showNotesFormBtn.addEventListener("click", showNoteForm);

addNoteBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const description = descriptionInput.value;
  let d = new Date();
  let hour = d.getHours();
  let minut = d.getMinutes();
  if (parseInt(hour) < 10) {
    hour = `0${hour}`;
  }
  if (parseInt(minut) < 10) {
    minut = `0${minut}`;
  }
  const date = `${
    d.getMonth() + 1
  }/${d.getDate()}/${d.getFullYear()} at ${hour}:${minut}`;
  const note = { title, description, id: notesCounter, date: date };
  addNote(note);
  // clear the note form
  titleInput.value = "";
  descriptionInput.value = "";
});

function showNoteForm() {
  notesFormShow = true;
  notesForm.classList.remove("d-none");
}

function hideNoteForm() {
  notesFormShow = false;
  notesForm.classList.add("d-none");
}

function addNote(note) {
  if (note.title === "" || note.description === "") {
    alert("a note can't be empty");
    return;
  }
  notesCounter++;
  localStorage.setItem(
    "user",
    JSON.stringify({ ...user, notes: [...user.notes, note] })
  );
}
