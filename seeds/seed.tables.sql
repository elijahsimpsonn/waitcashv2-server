BEGIN;

TRUNCATE
    "users",
    "tips";

INSERT INTO "users" ("user_id", "user_name", "user_password")
VALUES
    (
        1,
        'admin',
        'testtest123!'
    ),

    (
        2,
        'test',
        'thisismypass123!'
    );

INSERT INTO "tips" ("tip_total", "user_id")
VALUES
    (3.20, 1),
    (4.89, 1),
    (1.56, 1),
    (2.00, 2);

COMMIT;