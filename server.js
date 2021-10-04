//Starts Local Server -- TO CHANGE
// Connects to DB
// Sends index.html
// Handles routing (?)

require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

//Set up the root path using route for index (index.html)
const indexRouter = require("./routes/index");
app.use(express.static(__dirname + "/public"));
app.use("/", indexRouter);

//Connect to database
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//Route beers
const beerRouter = require("./routes/beers");
app.use("/", beerRouter);

//Start server
app.listen(process.env.PORT || port, () => {
  console.log("Beer Club App listening at http://localhost:${port}");
});
