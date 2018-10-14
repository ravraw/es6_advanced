console.log("Starting app.js ....");

const fs = require("fs");
const os = require("os");

const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const titleOptions = {
  description: "Title of note",
  demand: true,
  alias: "t"
};

const bodyOptions = {
  description: "Body of note",
  demand: true,
  alias: "b"
};

const input = yargs
  .command("add", "Add a note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a note", {
    title: titleOptions
  })
  .help().argv;
const command = input._[0];

switch (command) {
  case "add":
    let note = notes.add(input.title, input.body);
    if (note)
      console.log(
        `Note created : "Title" - "${note.title}", "Body" - "${note.body}"`
      );
    else console.log("note already exists");
    break;
  case "list":
    let currentNotes = notes.list();
    currentNotes = currentNotes.map(note => `${note.title} - ${note.body}`);
    console.log(currentNotes);

    break;
  case "read":
    let recievedNote = notes.read(input.title);
    let message = recievedNote
      ? `Note : ${recievedNote.title} - ${recievedNote.body}`
      : "Note not found";
    console.log(message);
    break;
  case "remove":
    const noteRemoved = notes.remove(input.title);
    let removeMessage = noteRemoved ? "Note was removed" : "Note not found";
    console.log(removeMessage);
    break;

  default:
    console.log("Command not recognized...");
    break;
}
