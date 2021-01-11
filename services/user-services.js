const bcyrpt = require("bcryptjs");
// eslint-disable-next-line no-useless-escape
const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const UserService = {

  // ----- New User / User Signup Services ------//

  validateUserPassword(user_password) {
    if (user_password.length <= 8)
      return "Password must be longer than 8 characters";

    if (user_password.length >= 24)
      return "Password must be shorter than 24 characters";

    if (user_password.startsWith(" ") || user_password.endsWith(" "))
      return "Password must not start or end with spaces";

    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(user_password))
      return "Password must contain 1 upper case, 1 lower case, 1 number, and 1 special character";

    return null;
  },

  hasUserWithUserName(db, user_name) {
    return db('users').select("user_name").where({ user_name }).first();
  },

  hashUserPassword(user_password) {
    return bcyrpt.hash(user_password, 12);  
  },

  insertUser(db, user) {
    return db('users').insert(user).returning('*').then(([user]) => user);  
  },

  // ----- Main User Services ------//

  getAllEarnings(db, user_id) {
      
  },

  insertEarning() {

  },

  editEarning() {

  },

  deleteEarning() {

  },

  createShift() {

  }

};

module.exports = UserService;