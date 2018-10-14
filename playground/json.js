// const obj = {
//   name: "Ravindra"
// };

// const stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name":"ravindra","age":25}';
// const personObj = JSON.parse(personString);
// console.log(personString);
// console.log(personObj);

const fs = require("fs");

const originalNote = {
  title: "some title",
  body: "some body"
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString, err => {
  console.log(err);
});

const noteString = fs.readFileSync("./notes.json", err => {
  console.log(err);
});
const note = JSON.parse(noteString);

console.log(typeof note, typeof originalNoteString);
console.log(note.title);
