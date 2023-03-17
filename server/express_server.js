const pool = require("./db/index");

const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api", async(req, res) => {
  try {
    const users = await (pool.query(` 
      SELECT *
      FROM users
    `))
    res.json(users.rows);
  }
  catch (error) { 
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
