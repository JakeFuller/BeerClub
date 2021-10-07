//Create mongoose schema from existing database entries
// Currently uses beerscraper.py to populate db, so schema is derived from there

const mongoose = require("mongoose");

const setSchema = new mongoose.Schema({
  set_id: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  set_id: {
    type: Number,
    required: true,
  },
  beer_ids: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("SetList", setSchema, "sets");
