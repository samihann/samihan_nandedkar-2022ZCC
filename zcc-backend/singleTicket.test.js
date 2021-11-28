var request = require('supertest')
var app = require('./app');

describe("POST /single-tickets", () => {
  test("should respond with a 200 status code", async () => {
    var response = await request(app).post("/single-tickets").send({ 
      ticketId: "2"
    })
    expect(response.statusCode).toBe(200)
  })

})

