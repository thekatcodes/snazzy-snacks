const pool = require("./db/index");

async function getProducts() {
  try {
    const products = await pool.query(`
      SELECT *
      FROM products;
    `);
    return products.rows;
  } catch (error) {
    console.log(error);
  }
}

async function getOrder() {
  try {
    const order = await pool.query(`
      SELECT
      boxes.id AS box,
      boxes.order_date AS order_date,
      products.name AS snack,
      products.tier AS box_price
      FROM users
      JOIN boxes ON customer_id = users.id
      JOIN selections ON box_id = boxes.id
      JOIN products ON product_id = products.id
      WHERE users.id = 1;
    `);
    return order.rows;
  } catch (error) {
    console.log(error);
  }
}


module.exports = { getProducts, getOrder };