const pg = require("./connection");

const createTables = async () => {
  await pg.schema.hasTable("posts").then(async (exist)=>{
    if(!exist){
      await pg.schema.createTable("posts", function (table) {
        table.increments(); // integer id
        table.string('content'); // content
        table.string('media'); //media
        table.integer('user_id') //user-id
        table.integer('likes') //likes
      }).then(() => {
  
      });
    }
  });
 

  await pg.schema.hasTable("users").then(async (exist)=>{
    if(!exist){
     await pg.schema.createTable("users", function (table) {
        table.increments(); // integer id
        table.string('name'); // name
        table.string('picture'); //PP
        table.string('bio'); //bio
        table.string('level'); //level
        table.string('password'); //password
      }).then(() => {
  
      });
    }
  });
}
createTables();
module.exports = pg;