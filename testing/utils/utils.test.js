const utils = require("./utils");

it("should add two numbers", () => {
  var result = utils.add(33, 11);

  if (result !== 44) {
    throw new Error(`Expected 44, but got ${result}`);
  }
});

it("should square a number", () => {
  var res = utils.square(5);

  if (res !== 25) {
    throw new Error(`Expected 25, but got ${res}`);
  }
});
