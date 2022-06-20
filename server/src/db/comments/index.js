const pg = require("./../");

const get = async()=>{
try {
  const comments= await pg.select().table("comments");
  return comments;
} catch (error) {
  return 400;
}
};

const create = async(comment)=>{
  try {
   await pg("comments").insert([comment]);
     return 200;
  } catch (error) {
    return 400;
  }
  
};
const update = (post)=>{};
const archive = (post)=>{};


module.exports= {
  get,
  create,
  update,
  archive
}
