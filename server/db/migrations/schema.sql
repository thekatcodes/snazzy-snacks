DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS boxes CASCADE;
DROP TABLE IF EXISTS selections CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  street VARCHAR(255),
  city VARCHAR(255),
  province VARCHAR(255),
  country VARCHAR(255),
  postal_code VARCHAR(255),
  subscription_tier VARCHAR(255),
  stripe_sub_id VARCHAR(255),
  CONSTRAINT user_email UNIQUE (email)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  tier SMALLINT NOT NULL,
  type VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE boxes (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  price INTEGER,
  order_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE selections (
  id SERIAL PRIMARY KEY NOT NULL,
  box_id INTEGER REFERENCES boxes(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
);

-- comment for testing purpose
