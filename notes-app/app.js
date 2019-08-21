const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const titleOptions = {
  describe: "Title of note",
  demandOption: true,
  alias: "t"
};

const bodyOptions = {
  describe: "Body of note",
  demandOption: true,
  alias: "b"
};

const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "Listing all Notes")
  .command("remove", "Removing a Note", {
    title: titleOptions
  })
  .command("read", "Reading a Note", {
    title: titleOptions
  })
  .help().argv;
const command = argv._[0];
console.log("Command:", command);
console.log("Yargs:", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note created");
    notes.logNote(note);
  } else {
    console.log("Note title already exist");
  }
} else if (command === "list") {
  var note = notes.getAll();
  if (note.length > 0) {
    console.log(`Listing ${note.length} Note(s)`);
    note.forEach(n => notes.logNote(n));
    // console.log(note);
  } else {
    console.log("Note Array is empty");
  }
} else if (command === "read") {
  var note = notes.readNote(argv.title);
  if (note) {
    console.log("Reading Note");
    notes.logNote(note);
  } else {
    console.log("Note doesn't exist");
  }
} else if (command === "remove") {
  var note = notes.removeNote(argv.title);
  if (note) {
    console.log("Note was removed");
    // notes.logNote(note);
  } else {
    console.log("Note title does not exist");
  }
} else {
  console.log("Command not recognized");
}
