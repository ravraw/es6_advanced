console.log("Starting notes.js.....");
const fs = require("fs");

//
const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

//
const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};
// add Note
const add = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const list = () => {
  return fetchNotes();
};
debugger;
const read = title => {
  let notes = fetchNotes();
  let filteredNote = notes.filter(note => note.title === title);
  debugger;
  return filteredNote[0];
};

// Remove note
const remove = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};
module.exports = {
  add,
  list,
  read,
  remove
};
