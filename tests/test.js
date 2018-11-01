const request = require("supertest");
const app = require("../index").app;
const server = require("../index").server;

describe("GET /", () => {
  afterEach(() => {
    console.log("afterEach executed");
    server.close();
  });
  it("respond with Hello-World", done => {
    request(app)
      .get("/")
      .expect("Hello world!", done);
  });
});
