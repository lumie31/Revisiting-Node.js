var user = {
  name: "Olumide",
  sayHi: function() {
    console.log(`${this.name} says Hi!!!`);
  },
  sayHiES6: () => {
    console.log(arguments);
    console.log(`${this.name} says Hi!!!`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`${this.name} says Hi!!!`);
  }
};

user.sayHi();
user.sayHiES6(1, 2, 3);
user.sayHiAlt(1, 2, 3);
