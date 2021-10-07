//Routes server functions for use in script.js (public)
//TODO: Create more routes for different functions (add, delete, find_one, etc)

const express = require("express");
const router = express.Router();
const Setlist = require("../models/set");

//Get All Sets
router.get("/", async (req, res) => {
  try {
    const sets = await Setlist.find();
    res.json(sets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One Set
router.get("/:id", getCurrentSet, (req, res) => {
  res.send(res.setSelect);
});

async function getCurentSet(req, res, next) {
  let setSelect;
  try {
    setSelect = await Setlist.findById(req.params.id);
    if (setSelect == null) {
      return res.status(404).json({ message: "Set not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.setSelect = setSelect;
  next();
}

async function getCurrentSet(req, res, next) {
  let setSelect;
  try {
    setSelect = await Setlist.findById(req.params.id);
    if (setSelect == null) {
      return res.status(404).json({ message: "Set not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.setSelect = setSelect;
  next();
}
module.exports = router;
