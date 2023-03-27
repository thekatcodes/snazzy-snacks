DROP TABLE IF EXISTS users CASCADE;

DROP TABLE IF EXISTS products CASCADE;

DROP TABLE IF EXISTS boxes CASCADE;

DROP TABLE IF EXISTS selections CASCADE;

CREATE TABLE users (
    id serial PRIMARY KEY NOT NULL,
    email varchar(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    street varchar(255),
    city varchar(255),
    province varchar(255),
    country varchar(255),
    postal_code varchar(255),
    stripe_sub_id varchar(255),
    subscribe boolean,
    CONSTRAINT user_email UNIQUE (email)
);

CREATE TABLE products (
    id serial PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL,
    tier smallint NOT NULL,
    type VARCHAR(255) NOT NULL,
    img_url varchar(255) NOT NULL,
    description text NOT NULL
);

CREATE TABLE boxes (
    id serial PRIMARY KEY NOT NULL,
    customer_id integer REFERENCES users (id) ON DELETE CASCADE,
    subscription_tier varchar(255),
    price integer,
    order_date date NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE selections (
    id serial PRIMARY KEY NOT NULL,
    box_id integer REFERENCES boxes (id) ON DELETE CASCADE,
    product_id integer REFERENCES products (id) ON DELETE CASCADE
);

-- comment for testing purpose
