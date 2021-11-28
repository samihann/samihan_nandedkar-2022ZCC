var request = require('supertest')
var app = require('./app');

describe("GET /all-tickets", () => {
  test("should respond with a 200 status code", async () => {
    request(app).get("/all-tickets").expect(200)
  })

})

