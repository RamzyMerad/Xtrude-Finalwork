const express = require("express");
const comments = express.Router();
const commentService = require("./../db/comments");
comments.get("/", async(req, res) => {
  const comts = await commentService.get();
  res.send(comts);
});
comments.post("/", async(req, res) => {
  const comment= req.body;
  const comt = await commentService.create(comment);
  const io = req.app.get("socketio");
  io.sockets.emit("comment",comt);
  res.send(comt);
});
module.exports = comments;