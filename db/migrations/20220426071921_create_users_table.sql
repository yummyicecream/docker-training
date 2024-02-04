-- migrate:up
CREATE TABLE users (
    id INT NOT NULL,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(200),
    PRIMARY KEY (id),
    CONSTRAINT users_email_ukey UNIQUE (email)
)

-- migrate:down

