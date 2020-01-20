const express = require("express");
const router = express.Router();
const db = require("../config/connection.js");
const Burger = require("../models/Burger.js");

router.get("/burgers", (req, res) =>
  Burger.findAll()
    .then(burgers => {
      console.log(burgers);
      res.send(burgers);
    })
    .catch(err => console.log(err))
);

router.post("/add", (req, res) => {
  console.log(req.body);
  db.Burger.create(req.body)
    .then(function() {
      res.redirect("/");
    })
    .catch(function(err) {
      console.log(err);
    });
});

module.exports = router;
