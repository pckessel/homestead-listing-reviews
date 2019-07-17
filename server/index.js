const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../data/database/dbConnect.js');

// const environment = 'development';
// const config = require('../knexfile.js')[environment];
// const knex = require('knex')(config);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../dist')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/listing/:listingId', (req, res) => {
  const queryString = `SELECT * FROM new_reviews INNER JOIN new_users on new_reviews.userId = new_users.userId  WHERE listingId = ${req.params.listingId};`;

  // CLEAN UP THE BACK END CODE SO WE ARE SENDING ONLY WHAT WE NEED

  db.query(queryString)
    .then( dbres => res.send(dbres.rows))
    .catch( err => console.log('db Error-->', err))
});

const html = path.join(__dirname, '/../dist/index.html');
app.get('/:listingId', (req, res) => {
  res.sendFile(html);
});

const bundle = path.join(__dirname, '/../dist/bundle.js');
app.get('/bundle.js', (req, res) => {
  res.sendFile(bundle);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// SELECT * FROM new_reviews WHERE listingId = 5 INNER JOIN new_users on new_reviews.userId = new_users.userId

// SELECT * FROM new_reviews INNER JOIN new_users on new_reviews.userId = new_users.userId  WHERE listingId = 40;