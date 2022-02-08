CREATE TABLE products(
  id serial primary key,
  data JSON
);

INSERT INTO products (data) VALUES(
  '{"id":1,"product":"The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life","author":"Mark Manson","rating":4.4,"reviews":[{"review_id":1,"rating":4,"description":"[a] good yardstick by which self-improvement books should be measured."},{"review_id":2,"rating":5,"description":"If you follow my reviews/blog at all, you probably already know that I am already a zero fucks given kind of gal when it comes to, well, bullshit."},{"review_id":3,"rating":3,"description":"I sometimes diverge from my comfort zone (fiction mainly mystery, thriller, classics etc.) to explore other genres. This read was the outcome of such an expedition."}]}'
),

SELECT DATA ->> 'id' AS product_id FROM products;
