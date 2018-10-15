require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 3005;

const app = express();
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    currentYear: new Date().getFullYear(),
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
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
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
