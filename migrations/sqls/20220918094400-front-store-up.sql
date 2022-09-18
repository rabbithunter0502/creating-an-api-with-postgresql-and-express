CREATE TABLE IF NOT EXISTS Product(
     id SERIAL PRIMARY KEY,
     name VARCHAR(150) NOT NULL,
     price integer NOT NULL,
     category VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Customer(
     id SERIAL PRIMARY KEY,
     firstName VARCHAR(150),
     lastName VARCHAR(150),
     password VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS Orders(
    id SERIAL PRIMARY KEY,
    status VARCHAR(15),
    user_id bigint REFERENCES Customer(id)
);

CREATE TABLE IF NOT EXISTS Order_Products (
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id bigint REFERENCES Orders(id),
    product_id bigint REFERENCES Product(id)
 );


