require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const expressSession = require("express-session");
const cors = require("cors");
const routes = require("./routes");
const passport = require("./config/passport");
const AUTH_CLIENT_PORT = process.env.AUTH_CLIENT_PORT || 3001;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV === "production") {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(AUTH_CLIENT_PORT, () => {
  console.log(" Listening on port %s", AUTH_CLIENT_PORT, AUTH_CLIENT_PORT);
});
