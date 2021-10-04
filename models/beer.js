//Create mongoose schema from existing database entries
// Currently uses beerscraper.py to populate db, so schema is derived from there

const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema({});

module.exports = mongoose.model("Beer", beerSchema, "beers");
