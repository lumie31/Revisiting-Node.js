const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const note = require("./notes");

const argv = yargs.argv;
// const command = process.argv[2];
const command = argv._[0];
console.log("Command:", command);
console.log("Yargs:", argv);

if (command === "add") {
  note.addNote(argv.title, argv.body);
} else if (command === "list") {
  note.getAll();
} else if (command === "read") {
  note.readNote(argv.title);
} else if (command === "remove") {
  note.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}
