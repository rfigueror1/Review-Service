
const express = require('express');
const path = require('path');
const bodyParser = require('bodyParser');
const db = require('../database/operations.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/listing/:listingid/overview', (req, res) => {
  const listing_id = Number(req.params.listingid);
  
});

app.listen(3002, console.log('Listening on port 3002'));
