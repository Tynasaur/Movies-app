const jwtSecret = process.env.JWT_TOKEN; //This has to be the same key used in the JWTSrategy

const jwt = require("jsonwebtoken"),
  passport = require("passport");

require("./passport"); //Your local passpot file

let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, // This is the username you're ecdoding in JWT
    expiresIn: "7d", // This specifies that the token will expire in 7 days
    algorithm: "HS256", //This is the algorithm used to "sign" or encode the values of the JWT
  });
};

/**
 * Post login redentials and create JWT token
 */

module.exports = (router) => {
  router.post("/login", (req, res) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          messsage: "login information is icorrect",
          user: user,
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
};
