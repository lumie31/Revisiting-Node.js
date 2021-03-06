const fs = require("fs");

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  } catch (error) {
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNote = notes.filter(note => note.title === title);
  if (duplicateNote.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var readNote = title => {
  var notes = fetchNotes();
  return notes.filter(note => note.title === title)[0];
};

var removeNote = title => {
  var notes = fetchNotes();
  // console.log(notes);
  var res = notes.filter(note => note.title !== title);
  saveNotes(res);
  return notes.length !== res.length;
};

var logNote = note => {
  console.log("---");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
  logNote
};
