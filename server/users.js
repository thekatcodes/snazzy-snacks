const pool = require("./db/index");

// Grab users table from PSQL
async function getUsers() {
  try {
    const users = await pool.query(`
      SELECT * 
      FROM users;
    `);
    return users.rows;
  } catch (error) {
    console.log(error);
  }
}

// Updates users table from PSQL when registration is successful
async function updateNewUser(first_name, last_name, email, password) {
  try {
    await pool.query(`
      INSERT INTO users (first_name, last_name, email, password)
      VALUES ($1, $2, $3, $4)`, [first_name, last_name, email, password]);
    return ("User created successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getUsers, updateNewUser };
