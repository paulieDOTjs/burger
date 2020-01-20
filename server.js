const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios").default;

//Connection to database
const connect = require("./config/connection");
//Connection to burger models
const db = require("./models/Burger");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//routes
app.use("/api/", require("./routes/api.js"));

const PORT = process.env.PORT || 3000;

connect
  .authenticate()
  .then(() => console.log("database is connected"))
  .catch(err => console.log(err));

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
