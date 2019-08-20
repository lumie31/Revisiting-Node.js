const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
// const command = process.argv[2];
const command = argv._[0];
console.log("Command:", command);
console.log("Yargs:", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  note
    ? console.log(
        `Note with title ${note.title} and body ${note.body} added successfully`
      )
    : console.log("Note title already exist");
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.readNote(argv.title);
} else if (command === "remove") {
  var note = notes.removeNote(argv.title);
  note
    ? console.log("Deleted successfully")
    : console.log("Note title does not exist");
} else {
  console.log("Command not recognized");
}
