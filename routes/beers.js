//Routes server functions for use in script.js (public)
//TODO: Create more routes for different functions (add, delete, find_one, etc)

const express = require("express");
const router = express.Router();
const Beer = require("../models/beer");

//Get All Beers
router.get("/", async (req, res) => {
  try {
    const beers = await Beer.find();
    res.json(beers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One Beer
router.get("/:id", getBeer, (req, res) => {
  res.send(res.beer);
});

async function getBeer(req, res, next) {
  let beer;
  try {
    beer = await Beer.findById(req.params.id);
    if (beer == null) {
      return res.status(404).json({ message: "Beer not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.beer = beer;
  next();
}

module.exports = router;
