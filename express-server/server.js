require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

const port = process.env.PORT || 3005;

const app = express();
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});
hbs.registerHelper("screamText", text => {
  return text.toUpperCase();
});

app.use(express.static(__dirname + "/public"));

//Middleware
app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now},${req.method}, ${req.url}`;
  fs.appendFile("server.log", log + "\n", err => {
    if (err) {
      console.log("Unable to append to server.log");
    }
  });
  console.log(log);
  next();
});

// Maintenance middleware
// app.use((req, res, next) => {
//   res.render("maintenance.hbs");
// });

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    welcomeMessage: "Welcome home !!!!"
  });
});

app.get("/info", (req, res) => {
  res.send({
    name: "ravraw",
    likes: ["Fishing", "Hunting"]
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Bad request - page does not exist"
  });
});

app.listen(port, () => {
  console.log(`Server listening on ${port}....`);
});
