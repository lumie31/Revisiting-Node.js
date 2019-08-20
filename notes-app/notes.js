var addNote = (title, body) => {
  console.log("Add Note:", title, body);
};

var getAll = () => {
  console.log("Getting all notes");
};

var readNote = title => {
  console.log("Reading Note:", title);
};

var removeNote = title => {
  console.log("Deleting Note:", title);
};

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
