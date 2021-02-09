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
    );


INSERT INTO "tips" (tip_total, user_id)
VALUES
    (3.20, 1),
    (4.89, 1),
    (1.56, 1),
    (2.00, 1),
    (3.89, 1),
    (7.26, 1),
    (1.25, 1),
    (3.02, 1),
    (0.48, 1),
    (2.15, 1),
    (1.48, 1),
    (0.18, 1),
    (8.99, 1),
    (1.87, 1),
    (3.26, 1);

COMMIT;