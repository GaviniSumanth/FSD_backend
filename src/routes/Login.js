const express = require("express");
const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
app = express();
app.post("/login", async (req, res) => {
  try {
    const { username, hash } = req.body;
    console.log(req.body);
    let exist = await UserModel.findOne({ username: req.body.username });
    console.log(exist);
    if (!exist) {
      res.send("user doesn't exist");
    } else {
      if (exist.hash === req.body.password) {
        console.log(exist.id);
        let payload = {
          user: {
            id: exist.id,
          },
        };
        await jwt.sign(
          payload,
          "jwtsecret",
          { expiresIn: 3600000 },
          (err, token) => {
            if (err) throw err;
            return res.json(token);
          }
        );
      } else {
        res.send("incoorect password");
      }
    }
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
});
module.exports = app;
