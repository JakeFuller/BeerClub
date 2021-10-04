//Routes server functions for use in script.js (public)
//TODO: Create more routes for different functions (add, delete, find_one, etc)

const express = require("express");
const router = express.Router();
const Beer = require("../models/beer");

//Get All Beers
router.get("/beers", async (req, res) => {
  try {
    const beers = await Beer.find();
    res.json(beers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get One Beer

module.exports = router;
