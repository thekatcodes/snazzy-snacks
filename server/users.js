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
async function updateUsers(name, email, password, address) {
  try {
    await pool.query(`
      INSERT INTO users (name, email, password, address)
      VALUES ($1, $2, $3, $4)`, [name, email, password, address]);
    return ("User created successfully");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getUsers, updateUsers };
