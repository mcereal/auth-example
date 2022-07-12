var GoogleStrategy = require("passport-google-oidc");

const strategy = new GoogleStrategy(
  {
    clientID: process.env["GOOGLE_CLIENT_ID"],
    clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
    callbackURL: "http://localhost:3001/auth/callback",
    passReqToCallback: true,
  },
  function (request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
);

module.exports = strategy;
