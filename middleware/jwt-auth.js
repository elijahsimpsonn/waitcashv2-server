const AuthService = require("../services/auth-services");

function requreAuth(req, res, next) {
  const authToken = req.get("Authorization") || "";
  let token;

  //validate authToken
  //remove 'bearer ' and set JSON web token to var called token
  if (!authToken.toLowerCase().startsWith("bearer ")) {
    return res.status(401).json({ error: `Missing bearer token` });
  } else {
    token = authToken.slice("bearer ".length, authToken.length);
  }

  //verify token and set result containing user_name to var called payload
  //on verification, retrieve user data from database
  //if match is found, append user creds to request
  //otherwise, return 401 and error message
  try {
    const payload = AuthService.verifyJWT(token);
    return AuthService.getUser(req.app.get("db"), payload.sub).then((user) => {
      if (!user) return res.status(401).json({ error: "Unauthorized" });
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = {
  requreAuth,
};
