const expect = require("expect");

const utils = require("./utils");

describe("Utils", () => {
  it("should add two numbers", () => {
    var result = utils.add(33, 11);

    expect(result).toBe(44);
  });

  it("should async add two numbers", done => {
    utils.asyncAdd(2, 3, sum => {
      expect(sum).toBe(5);
      done();
    });
  });

  it("should square a number", () => {
    var res = utils.square(5);

    expect(res).toBe(25);
    // if (res !== 25) {
    //   throw new Error(`Expected 25, but got ${res}`);
    // }
  });

  it("should async square a number", done => {
    utils.asyncSquare(3, sqr => {
      expect(sqr).toBe(9);
      done();
    });
  });
});

// it("should expect some values", () => {
//   // expect(12).toBe(12);
//   expect({ name: "Andrew" }).toEqual({ name: "Andrew" });
//   // expect([2, 3, 4]).toInclude(2);
//   // expect({
//   //   name: "Olumide",
//   //   age: 25,
//   //   location: "Lagos"
//   // }).toInclude({
//   //   age: 23
//   // });
// });

//Some methods in the expect library seems to have been deprecated after they got merged into the JEST library, so some of the tests below don't actually work as they should

it("should verify first and last names are set", () => {
  var user = { location: "Lagos", age: 25 };
  var result = utils.setName(user, "Olumide Okedusi");

  expect(result).toInclude({
    firstName: "Olumide",
    lastName: "Okedusi"
  });
  // expect(result).toContain({ firstName: "Olumide" });
});
