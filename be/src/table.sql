-- old postgresql products TABLE
CREATE TABLE products(
  id serial primary key,
  data JSONB
);

INSERT INTO products (data) VALUES(
  '{"id":1,"product":"The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life","author":"Mark Manson","rating":4.4,"reviews":[{"review_id":"07a78003-c524-4ca7-88a6-5e274964669c","rating":4,"description":"[a] good yardstick by which self-improvement books should be measured."},{"review_id":"066dcbd6-8833-4141-9e2c-476a44cb6c3d","rating":5,"description":"If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."},{"review_id":"dcdfd66e-1ae6-4994-8c92-c4470c4bdd37","rating":3,"description":"I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."}]}'
);




SELECT DATA ->> 'id' AS product_id FROM products;
SELECT data FROM products;

UPDATE products SET data = JSONB_SET(data, '{reviews, 3}', '{"review_id" : 5, "rating": 4, "description": "The best book i have ever read"}', true)
WHERE data ->> 'author' = 'Mark Manson';

UPDATE products SET data = JSONB_SET(data, '{reviews, 4}', '{"review_id" : 5, "rating": 5, "description": "This book made my day"}', true)
WHERE data ->> 'author' = 'Mark Manson';

UPDATE products SET data = JSONB_SET(data, '{reviews, 5}', '{"review_id" : 5, "rating": 5, "description": "The coolest thing on the book is how fastinating the author telling his story is"}', true)
WHERE data ->> 'author' = 'Mark Manson';

UPDATE products SET data =jsonb_set(data, '{reviews, 5}', '{"review_id" : 5, "rating": 5, "description": "This review comes from the product page"}') WHERE data ->> 'author' = 'Mark Manson'

SELECT data ->> 'rating' AS rating from products WHERE data ->> 'author' = 'Mark Manson';

-- new restructured postgresql productsnew TABLE
CREATE TABLE productsnew (
id serial primary key not null,
product varchar(255) not null,
author varchar(255) not null,
rating real not null,
reviews JSONB
);

INSERT INTO productsnew (product, author, rating, reviews) VALUES (
  'Da Vinci Code,The',
  'Brown, Dan',
  4.5,
  '[
    {
      "review_id" : "bbd12c27-ecb4-48db-a860-896191ff5048",
      "rating" : 4,
      "description" : "I want this book badly"
    }
  ]'
);

UPDATE productsnew SET reviews = JSONB_SET(reviews, "999999", '{
  "review_id" : "236fe45e-7522-4aea-a245-873bef2d3952",
  "rating" : 4,
  "description" : "I want this book for life"
}');

UPDATE productsnew SET reviews = reviews || '{
  "review_id" : "236fe45e-7522-4aea-a245-873bef2d3952",
  "rating" : 4,
  "description" : "I want this book for life"
}'::JSONB WHERE id = 1;
