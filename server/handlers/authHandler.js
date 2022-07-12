const passport = require("passport");

module.exports = {
  login: async () => {
    try {
      passport.authenticate("google", { scope: ["email", "profile"] });
    } catch (error) {
      console.log("ERROR", error);
    }
  },
  callback: async () => {
    passport.authenticate("google", {
      successRedirect: "/auth/callback/success",
      failureRedirect: "/auth/callback/failure",
    });
  },
  success: async (req, res) => {
    if (!req.user) res.redirect("/auth/callback/failure");
    console.log("REQQQQ", req);
    res.send("Welcome " + req.user);
  },
  failure: async (req, res) => {
    res.send("Error");
  },
};
