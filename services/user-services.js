const bcyrpt = require("bcryptjs");
const xss = require('xss');
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

  serializeUser(user) {
    return {
      user_id: user.user_id,
      user_name: xss(user.user_name),
      user_date_created: user.user_date_created,
    };
  },

  // ----- Main User Services ------//

  getAllEarnings(db, user_id) {
    return db('tips').select("*").where({user_id});
  },

  createNewEarning(db, newEarning) {
    return db('tips').insert(newEarning).returning('*').then(([res]) => res);
  },

  editEarning(db, tip_id, newEarning) {
    return db('tips').where({tip_id}).update(newEarning, ['*']);
  },

  deleteEarning(db, tip_id) {
    return db('tips').delete().where({tip_id});
  },

  createNewShift(db, newShift) {
    return db('shifts').insert(newShift).returning('*').then(([res]) => res);
  },

  // My thoughts here are just edit the current shift and change the end_date to right now
  endCurrentShift(db, shift_id, newShift) {
    return db('shifts').where({shift_id}).update(newShift, ['*']);
  }

};

module.exports = UserService;