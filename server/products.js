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


module.exports = { getProducts };