var db = require('./config.js');

const getRatings = (listing_id, whenRatings) => {
  const qs = `SELECT accuracy, communication, clenliness, location, check_in, value \
              FROM reviews WHERE listing_id = ${listing_id}`;

  db.query(qs, whenRatings);
}
