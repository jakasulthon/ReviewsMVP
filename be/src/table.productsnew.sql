INSERT INTO productsnew (product, author, rating, reviews)
VALUES (
  'Harry Potter and the Deathly Hallows',
  'Rowling, J.K.',
  4.5,
  '[
    {
    "review_id" : "75d4f989-900f-4314-909b-e71ac0a10e2b",
    "rating" : 4,
    "description" : "I read this book and feels awesome"
    }
  ]'
);

SELECT * FROM productsnew WHERE reviews @> '[{"rating" : 4}]';

SELECT jsonb_array_length(reviews) FROM productsnew WHERE id = 1;

SELECT jsonb_array_length(reviews) FROM productsnew WHERE id = 1;

SELECT jsonb_array_elements(reviews)  FROM productsnew WHERE id = 1;

SELECT jsonb_pretty(reviews)  FROM productsnew WHERE id = 1;

select (x.obj ->> 'rating') AS rating
FROM productsnew t
CROSS JOIN LATERAL (
    SELECT x.obj, lag(obj) over(ORDER BY rn) lag_obj
    FROM jsonb_array_elements(t.reviews) WITH ORDINALITY AS x(obj, rn)
) x WHERE id = 1;

SELECT (x.obj ->> 'rating') AS rating FROM productsnew t CROSS JOIN LATERAL (SELECT x.obj, lag(obj) over(ORDER BY rn) lag_obj FROM jsonb_array_elements(t.reviews) WITH ORDINALITY AS x(obj, rn)) x WHERE id = 1;
