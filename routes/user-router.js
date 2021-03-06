const express = require("express");
const path = require("path");
const jsonParser = express.json();

const UserService = require("../services/user-services");
const { requireAuth } = require("../middleware/jwt-auth");

const UserRoute = express.Router();

UserRoute.route('/').post(express.json(), (req, res, next) => {
  const { user_name, user_password } = req.body;

  // Looking for missing fields
  for (const field of ["user_name", "user_password"])
    if (!req.body[field])
      return res.status(400).json({ error: `Missing '${field} in body` });

  // Validates Password using validateUserPassword method in user-services.js
  const passwordError = UserService.validateUserPassword(user_password);
  if (passwordError) return res.status(400).json({ error: passwordError });

  // Check to see if a username is avalible
  return UserService.hasUserWithUserName(req.app.get("db"), user_name)
    .then((hasUserWithUserName) => {
      if (hasUserWithUserName) {
        return res.status(400).json({ error: `Username is not available` });
      }

      // If the username is avalible, then we prepare credentials for storage in the DB
      return UserService.hashUserPassword(user_password).then(
        (hashedUserPassword) => {
          const newUser = {
            ...req.body,
            user_password: hashedUserPassword,
          };

          // Hash the password and insert it into the DB
          return UserService.insertUser(req.app.get("db"), newUser)
            .then((user) => {
              return res
                .status(201)
                .location(path.posix.join(req.originalUrl, `/${user.user_id}`))
                .json(UserService.serializeUser(user));
            })
            .catch(next);
        }
      );
    })
    .catch(next);
});

UserRoute.route('/tips')
  .get(requireAuth, (req, res, next) => {
    UserService.getAllEarnings(req.app.get('db'), {user_id: req.user.user_id})
      .then((earnings) => {
        return res.json(earnings);
      })
      .catch(next);
  })
  .post(jsonParser, requireAuth, (req, res, next) => {
    const { tip_total } = req.body;
    const user_id = req.user.user_id;
    const newTip = { tip_total, user_id };
    UserService.createNewEarning(req.app.get('db'), newTip)
      .then((tip) => {
        res.status(200).json(tip);
      })
      .catch(next);
  });

module.exports = UserRoute;

