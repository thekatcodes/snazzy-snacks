const pool = require("./db/index");

// Find user id of user who made a successful purchase by email
async function findUserId(email) {
    try {
      const user = await pool.query(`
        SELECT id
        FROM users
        WHERE email=$1
      `, [email]);
      console.log("USER ID:", user.rows[0].id);
      return user.rows[0].id;
    } catch (error) {
      console.log(error);
    }
  }

// Updates users table with address
async function updateAddress(street, city, province, countryName, postalCode, subscriptionId, email) {
    try {
      await pool.query(`
        UPDATE users SET street=$1, city=$2, province=$3, country=$4, postal_code=$5, stripe_sub_id=$6
        WHERE email LIKE $7
      `, [street, city, province, countryName, postalCode, subscriptionId, email]);
      return "Address updated successfully";
    } catch (err) {
      console.log(err);
    }
}
  
// Updates boxes table with new row (order number)
async function createOrderNumber(userId, subscriptionTier, price, formattedDate) {
    try {
      const id = await userId;
      await pool.query(`
        INSERT INTO boxes (customer_id, subscription_tier, price, order_date)
        VALUES ($1, $2, $3, $4);
      `, [id, subscriptionTier, price, formattedDate]);
      console.log("Order number created successfully");
    } catch (err) {
      console.log("Error creating boxes table row", err);
    }
}
  
// Grab order summary for GET request on the front-end
async function orderSummary() {
        try {
          const order = await pool.query(`
            SELECT users.id AS user_id, first_name, last_name, email, street, city, province, country, postal_code, boxes.subscription_tier AS subscription_tier, boxes.price AS price, boxes.id AS order_number, boxes.order_date AS order_date
            FROM users
            INNER JOIN boxes ON users.id = boxes.customer_id
            ORDER BY order_number DESC;
            `);
    
            console.log('Order summary ready');
            return order.rows;
        } catch (error) {
            console.log(error);
            throw new Error('Could not retrieve order summary');
        }
    }

module.exports = { findUserId, updateAddress, createOrderNumber, orderSummary };
