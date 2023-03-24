SELECT
    users.id AS user_id,
    first_name,
    last_name,
    email,
    street,
    city,
    province,
    country,
    postal_code,
    subscription_tier,
    boxes.price AS price,
    boxes.id AS order_number,
    boxes.order_date AS order_date
FROM
    users
    INNER JOIN boxes ON users.id = boxes.customer_id
ORDER BY
    order_number DESC;

