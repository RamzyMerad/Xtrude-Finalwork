const express= require("express");
const router= express.Router();
const users = require("./users");
const posts= require("./posts");
const comments= require("./comments");
const { getUser } = require("../db/users");

router.use("/users",users);
router.use("/posts",posts);
router.use("/comments",comments);


router.get("/",(req,res)=>{
res.sendStatus(200);
});
router.post("/auth", async(req,res)=>{
  const user = req.body
  console.log(user)
  const token= await getUser(user);
  console.log(token)
  res.send({token});
  })

module.exports =router;