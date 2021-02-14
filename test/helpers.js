const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function cleanTables(db) {
  return db.raw(`TRUNCATE users, tips RESTART IDENTITY CASCADE`);
}

const testUsers = function makeUsersArray() {
  return [
    {
      user_name: "test-user-1",
      user_password: "Password1!",
    },
    {
      user_name: "test-user-2",
      user_password: "Password2!",
    },
  ];
};

const testTips = function makeTipsArray() {
  return [
    {
      tip_id: 1,
      tip_total: 1.5,
      tip_date: new Date().toLocaleString(),
      user_id: 1,
    },
    {
      tip_id: 2,
      tip_total: 3.5,
      tip_date: new Date().toLocaleString(),
      user_id: 2,
    },
  ];
};

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.username,
    algorithm: "HS256",
  });
  return `Bearer ${token}`;
}

module.exports = {
  cleanTables,
  testUsers,
  testTips,
  makeAuthHeader,
};
