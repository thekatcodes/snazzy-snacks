SELECT users.id AS user_id, email, street, city, province, country, postal_code, subscription_tier, boxes.id AS order_number
FROM users
INNER JOIN boxes ON users.id = boxes.customer_id
WHERE users.id=1
ORDER BY order_number DESC;
