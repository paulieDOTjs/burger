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

router.post("/add", (req, res) =>
  Burger.create({
    name: req.body
  })
    .then(burgers => {
      console.log(burgers);
      console.log(res);
      // console.log("res" + res);
      res.send(burgers);
    })
    .catch(err => console.log(err))
);

module.exports = router;
