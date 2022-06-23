const express = require("express");
const posts = express.Router();
const postService = require("./../db/posts");
posts.get("/", async(req, res) => {
  const psts = await postService.get();
  res.send(psts);
});
posts.post("/", async(req, res) => {
  const post= req.body;
  const pst = await postService.create(post);
  const io = req.app.get("socketio");
  io.sockets.emit("post",pst);
  res.send(pst);
});
module.exports = posts;