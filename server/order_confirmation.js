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

// Updates users table with address
async function updateAddress(street, city, province, country, postalCode, email) {
    try {
      await pool.query(`
        UPDATE users SET street=$1, city=$2, province=$3, country=$4, postal_code=$5
        WHERE email LIKE $6
      `, [street, city, province, country, postalCode, email]);
      return "Address updated successfully";
    } catch (err) {
      console.log(err);
    }
  }

module.exports = { getUsers, updateAddress };