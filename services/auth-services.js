const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../src/config");

const AuthService = {
  getUser(db, user_name) {
    console.log(user_name);  
    return db("users").where({user_name}).first();
  },

  createJWT(user) {
    return jwt.sign({ user_id: user.user_id }, JWT_SECRET, {
      subject: user.user_name,
      algorithm: "HS256",
    });
  },

  verifyJWT(token) {
    return jwt.verify(token, JWT_SECRET, {
      algorithm: "HS256",
    });
  },
};

module.exports = AuthService;
