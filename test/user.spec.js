const knex = require("knex");
const supertest = require("supertest");
const app = require("../src/app");
const jwt = require("jsonwebtoken");

describe("User Router Endpoints", function () {
  this.timeout(0);
  let db;

  function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
    const token = jwt.sign(
      {
        id: user.id,
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

  describe(`POST api/user/`, () => {
    it(`Responds with 201 and inserts the user into the DB`, () => {
      const testUser = {
        user_name: "testUser",
        user_password: "Password123!",
      };

      return supertest(app).post("/api/user").send(testUser).expect(201);
    });
  });

  describe(`GET api/user/tips`, () => {
    context(`When getting all tips in the DB`, () => {
      const testUser = {
        user_name: "testUser",
        user_password: "Password123!",
      };

      const testTip = [
        {
          tip_id: 1,
          tip_total: "1.5000",
          tip_date: new Date().toISOString(),
          user_id: 1,
        },
      ];

      beforeEach(`insert test user`, () => {
        return db.into("users").insert(testUser);
      });
      beforeEach(`insert test tip`, () => {
        return db.into("tips").insert(testTip);
      });

      it(`Responds with all tips in the DB`, () => {
        return supertest(app)
          .get("/api/user/tips")
          .set("Authorization", makeAuthHeader(testUser))
          .expect(testTip);
      });
    });
  });

  describe(`POST api/user/tips`, () => {
    context(`When posting a tip into the DB`, () => {
      const testUser = {
        user_name: "testUser",
        user_password: "Password123!",
      };

      const testTip = { tip_total: 1.50, user_id: 1 };

      beforeEach(`insert test user`, () => {
        return db.into("users").insert(testUser);
      });

      it(`returns a status of 200`, () => {
        return supertest(app)
          .post("/api/user/tips")
          .set("Authorization", makeAuthHeader(testUser))
          .send(testTip)
          .expect(200);
      });
    });
  });
});
