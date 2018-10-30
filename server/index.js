const express = require ('express');
const bodyParser = require ('body-parser');
const knex = require('knex')({
  client: 'pg',
  version: '10.5',
  connection: {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : 'hs_listing_reviews'
  }
});

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../dist'));
app.param('listingId', (req, res, next, id) => {
  if (id) {
    req.id = id;
  }
  next();
});

app.get('/listing-reviews/:listingId', (req, res) => {
  console.log('THE GET REQ CAME THROUGH!!!!', req.id);
  knex('reviews')
  .where('listingId', req.id)
  .innerJoin('users', 'reviews.userId', 'users.userId')
    .then( data => res.send(data))
    .catch(err => console.log('ERROR-->', err))
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
