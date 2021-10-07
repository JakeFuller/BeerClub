//Create mongoose schema from existing database entries
// Currently uses beerscraper.py to populate db, so schema is derived from there

const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  abv: {
    type: Number,
    required: false,
  },
  ibu: {
    type: Number,
    required: false,
  },
  brewery_name: {
    type: String,
    required: true,
  },
  brewery_city: {
    type: String,
    required: true,
  },
  brewer_country: {
    type: String,
    required: true,
  },
  bid: {
    type: Number,
    required: false,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Beer", beerSchema, "beers");
