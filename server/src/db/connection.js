const knex = require("knex");
require("dotenv").config();

 const pg = knex({
  client:"pg",
  connection: process.env.DB_URL
});


module.exports= pg;