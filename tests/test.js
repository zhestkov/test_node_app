const request = require("supertest");
const app = require("../index");

process.env.NODE_ENV = "test";

describe("GET /", () => {
  it("respond with Hello-World", done => {
    request(app)
      .get("/")
      .expect("Hello world!", done);
  });
});
