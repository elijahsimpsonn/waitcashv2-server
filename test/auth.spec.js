const knex = require("knex");
const supertest = require("supertest");
const app = require("../src/app");
const jwt = require("jsonwebtoken");


describe("Auth Router Endpoints", function () {
  this.timeout(0);
  let db;

  function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
    const token = jwt.sign(
      {
        id: user.user_id,
      },
      secret,
      {
        subject: user.user_name,
        algorithm: "HS256",
      }
    );
    return `Bearer ${token}`;
  }


  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from DB", () => db.destroy());
  before("cleanup", () =>
    db.raw(`TRUNCATE users, tips RESTART IDENTITY CASCADE`)
  );
  afterEach("cleanup", () =>
    db.raw(`TRUNCATE users, tips RESTART IDENTITY CASCADE`)
  );

  describe.only(`POST api/auth/login`, () => {
    context(`Logs in user`, () => {
      const testUser = {
        user_name: "testUser",
        user_password: "Password123!",
      };

      beforeEach(`insert test user`, () => {
        return db.into("users").insert(testUser);
      });

      it(`Returns 200 Status`, () => {
        return supertest(app).post("/api/auth/login").send(testUser).expect(200, {authToken: makeAuthHeader(testUser)});
      });
    });
  });
});
