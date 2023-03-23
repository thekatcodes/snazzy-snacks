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

// Adds new user to users table when registration is successful
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

// Update existing user based on cookie 
// Currently it changes it based on username - so duplicate username would cause error
// Solution: template literal with two values - one for username so navbar can still grab username, and one for email, so it can be used for update purposes
async function updateUser(first_name, last_name, email, password, cookie) {
  console.log("First name: ", first_name);
  console.log("Last_name: ", last_name);
  console.log("Email: ", email);
  console.log("Password: ", password);
  console.log("Cookie: ", cookie);
  try {
    await pool.query(`
      UPDATE users
      SET first_name = $1,
        last_name = $2,
        email = $3,
        password = $4
      WHERE first_name = $5
    `, [first_name, last_name, email, password, cookie]);
    return true;
  } catch(err) {
    return false;
  }
}

module.exports = { getUsers, updateNewUser, updateUser };
