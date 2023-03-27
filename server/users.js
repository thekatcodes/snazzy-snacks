const pool = require("./db/index");

// Functions that query backend for users table

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
      INSERT INTO users (first_name, last_name, email, password, subscribe)
      VALUES ($1, $2, $3, $4, $5)`, [first_name, last_name, email, password, false]);
    return ("User created successfully");
  } catch (err) {
    console.log(err);
  }
}

// Update existing user based on cookie 
async function updateUser(email, password, cookie) {
  console.log("Email: ", email);
  console.log("Password: ", password);
  console.log("Cookie: ", cookie);
  try {
    await pool.query(`
      UPDATE users
      SET 
        email = $1,
        password = $2
      WHERE email = $3
    `, [email, password, cookie]);
    return true;
  } catch(err) {
    return false;
  }
}

// Update existing address based on cookie 
async function updateCurrentAddress(street, city, province, pCode, cookie) {
  console.log("Street: ", street);
  console.log("City: ", city);
  console.log("Province: ", province);
  console.log("Postal Code: ", pCode);
  console.log("Cookie: ", cookie);
  try {
    await pool.query(`
      UPDATE users
      SET 
        street = $1,
        city = $2, 
        province = $3, 
        postal_code = $4
      WHERE email = $5
    `, [street, city, province, pCode, cookie]);
    return true;
  } catch(err) {
    return false;
  }
}

async function cancelSubscription(subscription, cookie) {
  console.log("This is subscription in boolean value: ", subscription);
  try {
    await pool.query(`
    UPDATE users
    SET
      subscribe = $1
    WHERE 
      email = $2`
    , [subscription, cookie]);
    return console.log(`Subscription value for user ${cookie} has been set to ${subscription}`);
  } catch(err) {
    return console.log(err);
  }
}

module.exports = { getUsers, updateNewUser, updateUser, updateCurrentAddress, cancelSubscription };
