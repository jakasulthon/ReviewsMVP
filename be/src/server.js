const express = require('express');
const postgre = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

/** Creating express App */

const app = express();

/** Creating Postgresql configuration pool */

const Pool = postgre.Pool;

// const pool = new Pool({
//   user: 'gwqxmugy',
//   host: 'rosie.db.elephantsql.com',
//   database : 'gwqxmugy',
//   password: 'aO0qABLnCIQESmELqlK4_jVZx8_-bvC3',
//   dialect: 'postgres',
//   port: 5432,
// });


const pool = new Pool({
  user: 'jaka',
  host: 'localhost',
  database : 'jaka',
  password: '',
  dialect: 'postgres',
  port: 5432,
});

//CREATE TABLE test(id int not null);
//INSERT INTO test VALUES(1);
//INSERT INTO test VALUES(2);


/**  */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors())

/** DB connect */

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack)
  };
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error(
        'Error executing query', err.stack
      );
      console.log('Connected to Database !');
    }
  });
});


// v1 products
app.get('/products', (req, res, next) => {
  console.log("TEST productsnew : ");
  pool.query('Select * from productsnew')
    .then(testData => {
      console.log(testData);
      res.send(testData.rows);
    });
});


// v1 products/:id
app.put('/products/:id', (req, res, next) => {
  console.log("TEST productsnew "+ req.body.id +" : ");
  pool.query('Select * from productsnew WHERE id = ' + req.body.id +'')
    .then(testData => {
      // console.log(testData);
      res.send(testData.rows);
    });
});


// v1 testdata
app.get('/testdata', (req, res, next) => {
  console.log("TEST DATA : ");
  pool.query('Select * from test')
    .then(testData => {
      console.log(testData);
      res.send(testData.rows);
    });
});


// v1 test products

// app.get('/testproducts', (req, res, next) => {
//   console.log("TEST products : ");
//   pool.query('Select data FROM products')
//     .then(testData => {
//       console.log(testData);
//       res.send(testData.rows);
//     });
// });

// v2 test products

app.get('/testproducts', (req, res, next) => {
  console.log("TEST productsnew : ");
  pool.query('Select * FROM productsnew WHERE id = 1')
    .then(testData => {
      console.log(testData);
      res.send(testData.rows);
    });
});

// v1 select all ratings and updated them

app.get('/testselectratings', (req, res, next) => {
  console.log("TEST productsnew : ");
  const queries =
  'SELECT (x.obj ->> \'rating\') AS rating FROM productsnew t CROSS JOIN LATERAL (SELECT x.obj, lag(obj) over(ORDER BY rn) lag_obj FROM jsonb_array_elements(t.reviews) WITH ORDINALITY AS x(obj, rn)) x WHERE id = 2;';


  pool.query(queries)
    .then(testData => {
      // console.log(testData.rows.length);
      let row = {}

      let total_rating = 0;

      for (let a = 0; a < testData.rows.length; a++) {
        total_rating += parseInt(testData.rows[a].rating);
        // console.log(parseInt(row.rating));
      }
      // console.log(row.rating / testData.rows.length);
      row.rating = total_rating / testData.rows.length;
      res.send(row);

      const updateRatingQuery = 'UPDATE productsnew SET rating = ' + row.rating + 'WHERE id = 2';

      pool.query(updateRatingQuery).then(testData => {
        console.log(testData.rows);
      });
    });
});


// v2 select all ratings and updated them

app.post('/updatereviewonproducts/:id', (req, res, next) => {
  console.log("TEST updatereviewonproducts : ");


  pool.query(queries)
    .then(testData => {
      // console.log(testData.rows.length);
      let row = {}

      let total_rating = 0;

      for (let a = 0; a < testData.rows.length; a++) {
        total_rating += parseInt(testData.rows[a].rating);
        // console.log(parseInt(row.rating));
      }
      // console.log(row.rating / testData.rows.length);
      row.rating = total_rating / testData.rows.length;
      res.send(row);

      const updateRatingQuery = 'UPDATE productsnew SET rating = ' + row.rating + 'WHERE id = '+req.body.id+';';

      pool.query(updateRatingQuery).then(testData => {
        console.log(testData.rows);
      });
    });
});

// v1 test reviews

// app.post('/testreviews', (req, res, next) => {
//   console.log("TEST reviews : ");
//   console.log(req.body);
//
//   const queryme =
//   "UPDATE products SET data ="
//   + "jsonb_set(data, '{reviews, 2}',"
//   + " '{\"review_id\" : 7, \"rating\": 3, \"description\": \"good\"}', true)"
//   + " WHERE data ->> 'author' = 'Mark Manson'";
//
//   const queryres =
//   "UPDATE products SET data ="
//   + "jsonb_set(data, '{reviews, 999999}',"
//   + " '" + JSON.stringify(req.body) +"', "
//   + "true)"
//   + " WHERE data ->> 'author' = 'Mark Manson'";
//
//   console.log(queryme);
//
//   console.log(queryres);
//
//   pool.query(queryres)
//     .then(testData => {
//       console.log(testData);
//       res.send(testData.rows);
//     });
// });

// v2 test reviews

app.post('/testreviews', (req, res, next) => {
  console.log("TEST reviews : ");

  // v1 query
  // const queryme =
  // "UPDATE productsnew SET data ="
  // + "jsonb_set(data, '{reviews, 2}',"
  // + " '{\"review_id\" : 7, \"rating\": 3, \"description\": \"good\"}', true)"
  // + " WHERE data ->> 'author' = 'Mark Manson'";
  //
  // const queryres =
  // "UPDATE products SET data ="
  // + "jsonb_set(data, '{reviews, 999999}',"
  // + " '" + JSON.stringify(req.body) +"', "
  // + "true)"
  // + " WHERE data ->> 'author' = 'Mark Manson'";
  //
  // console.log(queryme);
  //
  // console.log(queryres);

  // v2 query
  // const querymenewreviews =
  // "UPDATE productsnew SET reviews = reviews || "
  // + " '{\"review_id\" : \"8ac94403-0b86-4eba-b81b-0e19293fbba4\","
  // + "\"rating\" : 4,"
  // + "\"description\" : \"I want this book for my grandson\"}'::JSONB "
  // + "WHERE id = 1;";
  //
  // const querynewreviews =
  // "UPDATE productsnew SET reviews = reviews || "
  // + "'"+JSON.stringify(req.body)+"'::JSONB "
  // + "WHERE id = 1;";
  //
  // console.log(querymenewreviews);
  // console.log(querynewreviews);
  //
  // pool.query(querynewreviews)
  //   .then(testData => {
  //     console.log(testData);
  //     res.send(testData.rows);
  //   });


  // v3 query
  const querymenewreviews =
  "UPDATE productsnew SET reviews = reviews || "
  + " '{\"review_id\" : \"8ac94403-0b86-4eba-b81b-0e19293fbba4\","
  + "\"rating\" : 4,"
  + "\"description\" : \"I want this book for my grandson\"}'::JSONB "
  + "WHERE id = 1;";

  const querynewreviews =
  "UPDATE productsnew SET reviews = reviews || "
  + "'" + JSON.stringify(req.body.reviews) + "'::JSONB "
  + "WHERE id = " + req.body.id + ";";
  //
  // console.log(querymenewreviews);
  // console.log(querynewreviews);

  // Rating.updateOnProducts(req.body.id);
  // console.log(calculate);


  pool.query(querynewreviews).then(testData => {
    const queries =
    'SELECT (x.obj ->> \'rating\') AS rating FROM productsnew t CROSS JOIN LATERAL (SELECT x.obj, lag(obj) over(ORDER BY rn) lag_obj FROM jsonb_array_elements(t.reviews) WITH ORDINALITY AS x(obj, rn)) x WHERE id = '+req.body.id+';';

    console.log(queries);
    console.log(req.body.id);

    let row = {};

    let total_rating = 0;

    pool.query(queries)
    .then(testData => {


      for (let a = 0; a < testData.rows.length; a++) {
        total_rating += parseInt(testData.rows[a].rating);
        // console.log(parseInt(row.rating));
      }
      // console.log(row.rating / testData.rows.length);
      row.rating = total_rating / testData.rows.length;
      // res.send(row);


      const updateRatingQuery = 'UPDATE productsnew SET rating = ' + row.rating + ' WHERE id = '+req.body.id+';';


      pool.query(updateRatingQuery).then(testData => {
        console.log(row.rating);
        console.log(updateRatingQuery);
        res.send(testData.rows);
      });

    });

  });




  // pool.query(updateRatingQuery).then(testData => {
  //   console.log(testData.rows);
  // });



});



const server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
});
