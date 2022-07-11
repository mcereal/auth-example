// const path = require("path");
const router = require("express").Router();
const passport = require("passport");

// Auth
router
  .route("/auth/login")
  .get(passport.authenticate("google", { scope: ["email", "profile"] }));

// Auth Callback
router.route("/auth/callback").get(
  passport.authenticate("google", {
    successRedirect: "/auth/callback/success",
    failureRedirect: "/auth/callback/failure",
  })
);

// Success
router.route("/auth/callback/success").get((req, res) => {
  if (!req.user) res.redirect("/auth/callback/failure");
  console.log("REQQQQ", req);
  res.send("Welcome " + req.user);
});

// failure
router.route("/auth/callback/failure").get((req, res) => {
  res.send("Error");
});

router.use("/login", (req, res) => {
  res.send("<button><a href='/auth'>Login With Google</a></button>");
});

module.exports = router;
