const express = require("express");
const bcrypt = require("bcryptjs");
const AuthService = require("../services/auth-services");
const AuthRoute = express.Router();

AuthRoute.route("/login").post(express.json(), (req, res, next) => {
  const { user_name, user_password } = req.body;
  const loginInputs = { user_name, user_password };

  for (const [key, value] of Object.entries(loginInputs))
    if (value === null)
      return res.status(400).json({ error: `Missing ${key} in body` });

  return AuthService.getUser(req.app.get("db"), user_name)
    .then((user) => {
      if (!user)
        return res.status(401).json({ error: `Invalid username or password` });

      return bcrypt
        .compare(loginInputs.user_password, user.user_password)
        .then((match) => {
          if (!match)
            return res
              .status(401)
              .json({ error: `Invalid username or password` });

          const token = AuthService.createJWT(user);

          res.status(200).json({ authToken: token });
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = AuthRoute;
