const express = require("express");
const users = express.Router();
const userService = require("./../db/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();
users.get("/", async(req, res) => {
  const usrs = await userService.get();
  res.send(usrs);
});
users.post("/", async(req, res) => {
  const user= req.body;
  const token = await userService.create(user);
  res.send({token});
});

users.get("/decodeToken", async(req, res) => {
  const token = req.query.token;
  const usr = await jwt.verify(token,process.env.TOKEN_SECRET);
  res.send(usr);
});
users.post("/", async(req, res) => {
  const user= req.body;
  const token = await userService.create(user);
  res.send({token});
});


module.exports = users;