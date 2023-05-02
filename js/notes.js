const addNoteBtn = document.querySelector(".add-note");
const notesForm = document.querySelector(".notes-form");
const closeNotesFormBtn = notesForm.querySelector("span.close");
let notesFormShow = false;

closeNotesFormBtn.addEventListener("click", hideNoteForm);

addNoteBtn.addEventListener("click", showNoteForm);

function showNoteForm() {
  notesFormShow = true;
  notesForm.classList.remove("d-none");
}

function hideNoteForm() {
  notesFormShow = false;
  notesForm.classList.add("d-none");
}
