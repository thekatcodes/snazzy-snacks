-- SELECT u.id, u.email, u.street, u.city, u.province, u.country, u.postal_code, b.id AS box_id, p.tier
-- FROM users u
-- INNER JOIN boxes b ON u.id = b.customer_id
-- INNER JOIN selections s ON b.id = s.box_id
-- INNER JOIN products p ON s.product_id = p.id
-- Where u.id=

SELECT users.id AS user_id, email, street, city, province, country, postal_code, subscription_tier, boxes.id AS order_number
FROM users
INNER JOIN boxes ON users.id = boxes.customer_id
WHERE users.id=1;
