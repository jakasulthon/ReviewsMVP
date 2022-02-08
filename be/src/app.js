const express = require('express');
const postgre = require('pg');
const bodyParser = require('body-parser');

/** Creating express App */

const app = express();

/** Creating Postgresql configuration pool */

const Pool = postgre.Pool;

const pool = new Pool({
  user: 'gwqxmugy',
  host: 'rosie.db.elephantsql.com',
  database : 'gwqxmugy',
  password: 'aO0qABLnCIQESmELqlK4_jVZx8_-bvC3',
  dialect: 'postgres',
  port: 5432,
});

//CREATE TABLE test(id int not null);
//INSERT INTO test VALUES(1);
//INSERT INTO test VALUES(2);


/**  */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

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

app.get('/testdata', (req, res, next) => {
  console.log("TEST DATA : ");
  res.setHeader('Access-Control-Allow-Origin', '*');
  pool.query('Select * from test')
    .then(testData => {
      console.log(testData);
      res.send(testData.rows);
    });
});


app.get('/testproducts', (req, res, next) => {
  console.log("TEST products : ");
  res.setHeader('Access-Control-Allow-Origin', '*');
  pool.query('Select data FROM products')
    .then(testData => {
      console.log(testData);
      res.send(testData.rows);
    });
});


const server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;
});
