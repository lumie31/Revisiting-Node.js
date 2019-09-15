const request = require("supertest");

var app = require("./server").app;

describe("Server", () => {
  describe("GET /", () => {
    it("should return Aloha response", done => {
      request(app)
        .get("/")
        .expect(200)
        .expect("Aloha!")
        .end(done);
    });
  });

  describe("GET /users", () => {
    it("should return my user object", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            Name: "Olumide",
            Age: 25
          });
        })
        .end(done);
    });
  });
});
