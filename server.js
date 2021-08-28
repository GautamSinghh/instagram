const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const mongoose = require("mongoose");

const port = process.env.PORT || 9000;

const Insta = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// const connectDB = require("./db/conn");
const { request } = require("http");
// connectDB();
const DB =
  "mongodb+srv://gautamsingh:q1w2e3r4t5y6_Gautam@cluster0.zi9id.mongodb.net/instagram?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection succesful`);
  })
  .catch((err) => console.log(`no connection`));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const pass = req.body.pass;
    if (username && pass) {
      const registerEmployee = new Insta({
        username: req.body.username,
        pass: req.body.pass,
      });
      // console.log(pass);
      const users = await registerEmployee.save();
      // var success = req.file.fieldname + "uploaded succesfully";

      // res.send("vocvision.com");
    } else {
      console.log("user not added");
    }
  } catch (error) {
    res.status(400).send("incompleted");
  }
});

app.listen(port, (req, res) => {
  console.log(`port is working on ${port}`);
});
