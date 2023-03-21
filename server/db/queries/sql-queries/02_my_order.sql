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