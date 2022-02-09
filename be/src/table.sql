CREATE TABLE products(
  id serial primary key,
  data JSONB
);

INSERT INTO products (data) VALUES(
  '{"id":1,"product":"The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life","author":"Mark Manson","rating":4.4,"reviews":[{"review_id":1,"rating":4,"description":"[a] good yardstick by which self-improvement books should be measured."},{"review_id":2,"rating":5,"description":"If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."},{"review_id":3,"rating":3,"description":"I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."}]}'
),

SELECT DATA ->> 'id' AS product_id FROM products;
SELECT data FROM products;

UPDATE products SET data = JSONB_SET(data, '{reviews, 3}', '{"review_id" : 5, "rating": 4, "description": "The best book i have ever read"}', true)
WHERE data ->> 'author' = 'Mark Manson';

UPDATE products SET data = JSONB_SET(data, '{reviews, 4}', '{"review_id" : 5, "rating": 5, "description": "This book made my day"}', true)
WHERE data ->> 'author' = 'Mark Manson';

UPDATE products SET data = JSONB_SET(data, '{reviews, 5}', '{"review_id" : 5, "rating": 5, "description": "The coolest thing on the book is how fastinating the author telling his story is"}', true)
WHERE data ->> 'author' = 'Mark Manson';

SELECT data ->> 'rating' AS rating from products WHERE data ->> 'author' = 'Mark Manson';
