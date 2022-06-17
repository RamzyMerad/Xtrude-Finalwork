const pg = require("./../");

const get = async()=>{
try {
  const posts= await pg.select().table("posts");
  return posts;
} catch (error) {
  return 400;
}
};

const create = async(post)=>{
  try {
   await pg("posts").insert([post]);
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


