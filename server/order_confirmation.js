const pool = require("./db/index");

// Find user id of user who made a successful purchase by email
async function findUserId(email) {
  try {
    const users = await pool.query(`
      SELECT * 
      FROM users
      WHERE email LIKE $1
    `, [email]);
      console.log("USER ID:", users.id)
    return users.id;
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
  
// Updates boxes table with new row (order number)
async function createOrderNumber(street, city, province, country, postalCode, email) {
    try {
      await pool.query(`
      INSERT INTO boxes (customer_id, order_date)
      VALUES (**ID NMBR**, CURRENT_DATE);
      `, [street, city, province, country, postalCode, email]);
      return "Order number created successfully";
    } catch (err) {
      console.log(err);
    }
  }


module.exports = { findUserId, updateAddress, createOrderNumber };