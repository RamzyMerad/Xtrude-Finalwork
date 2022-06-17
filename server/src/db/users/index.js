const pg = require("./../");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const get = async()=>{
try {
  const users= await pg.select().table("users");
  return users;
} catch (error) {
  return 400;
}
};

const getUser =async(user) =>{
  try {
    const foundUser = await pg("users").where(user).select()
    const token = jwt.sign(foundUser[0], process.env.TOKEN_SECRET);
    return token;
  } catch (error) {
    return 400;
  }
}

const create = async(user)=>{
  try {
     const createdUser= await pg("users").insert([user]).returning("*");
     console.log(createdUser);
     const token = jwt.sign(createdUser[0], process.env.TOKEN_SECRET);
     return token;
  } catch (error) {
   console.log(error);
    return 400;
  }
  
};
const update = (user)=>{};
const archive = (user)=>{};


module.exports= {
  get,
  create,
  update,
  archive,
  getUser
}


