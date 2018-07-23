
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/operations.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/listing/:listingid/overview', (req, res) => {
  const listing_id = Number(req.params.listingid);
  console.log(listing_id);

  db.getRatings(listing_id, function(err, results) {
    if (err) {
      console.log('err in server - overview: ', err)
    }

    console.log(results);
  });
});

app.get('/api/listing/:listingid/reviews', (req, res) => {
  const listing_id = Number(req.params.listingid);
  console.log(listing_id);

  db.getReviews(listing_id, function(err, results) {
    if (err) {
      console.log('err in server - reviews: ', err)
    }

    console.log(results);
  });
});

app.listen(3002, console.log('Listening on port 3002'));
