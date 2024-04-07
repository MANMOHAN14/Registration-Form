const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://manmohan14:Manu2410@cluster0.cijajb4.mongodb.net/registrationFormDB`);

const registrationSchema = new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String,
});

const Registration = mongoose.model("Registration", registrationSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/start.html");
});

app.post("/register", async (req, res) => {
  try {
    const { Firstname, Lastname, Email, Password } = req.body;
    const existingUser = await Registration.findOne({ Email: Email });
    if (!existingUser) {
      const registrationData = new Registration(
        { Firstname, Lastname, Email, Password}
      );
      await registrationData.save();
      res.redirect("/success");
    } else {
      console.log("user already exists");
      res.redirect("/error");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/error");
  }
});

app.get("/success", (req, res) => {
  res.sendFile(__dirname + "/success.html");
});

app.get("/error", (req, res) => {
  res.sendFile(__dirname + "/error.html");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
