const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("INCIDENT", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const responseONG = await request(app).post("/ongs").send({
      name: "APAD23",
      email: "contato23@apad2.com.br",
      whatsapp: "1698842189",
      city: "Ribeirão Preto2",
      uf: "SP",
    });

    const response = await request(app)
      .post("/incident")
      .set("Authorization", responseONG.body.id)
      .send({
        title: "teste novo 3",
        description: "descricao teste 3",
        value: "130",
      });

    expect(response.body).toHaveProperty("id");
  });
});
