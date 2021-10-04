/** Fetches data from host...
 * Creates page elements from data...
 * Pushes HTML content to the page.
 */

/**
 * Fetch data from server (localhost curren)
 * Call appendData Function...
 * Log Errors.
 */

fetch("http://localhost:3000/beers", {
  credientials: "omit",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

/**
 * Input json data as data...
 * Create div for beer container...
 * Create p for beer information...
 * Fetch HTML content from json data...
 * Update HTML.
 */
function appendData(data) {
  // create html elements (div, p)
  var beerContainer = document.getElementById("beer_list");
  for (var i = 0; i < data.length; i++) {
    var beer = document.createElement("div");
    beer.setAttribute("id", "beer_info");
    var beerName = document.createElement("p");
    var link = document.createElement("a"); // Make the Beer Name a link
    link.href = data[i].url;
    link.target = "_blank";
    beerName.setAttribute("id", "beer_name");
    var beerStyle = document.createElement("p");
    beerStyle.setAttribute("id", "beer_style");
    var beerAbv = document.createElement("p");
    beerAbv.setAttribute("id", "beer_abv");
    var beerIbu = document.createElement("p");
    beerIbu.setAttribute("id", "beer_ibu");
    var beerBrewery = document.createElement("p");
    beerBrewery.setAttribute("id", "brewery_name");
    var beerLocation = document.createElement("p");
    beerLocation.setAttribute("id", "brewery_city");
    var beerId = document.createElement("p");
    beerId.setAttribute("id", "brewery_country");

    // Fetch dictionary data from json, add to HTML content
    beerName.innerHTML = data[i].name;
    beerStyle.innerHTML = data[i].style;
    beerAbv.innerHTML = "abv: " + data[i].abv;
    beerIbu.innerHTML = "ibu: " + data[i].ibu;
    beerBrewery.innerHTML = data[i].brewery_name;
    beerLocation.innerHTML = data[i].brewery_city + ", " + data[i].brewery_country;

    // Push HTML content to page
    link.appendChild(beerName);
    beer.appendChild(link);
    beer.appendChild(beerStyle);
    beer.appendChild(beerAbv);
    beer.appendChild(beerIbu);
    beer.appendChild(beerBrewery);
    beer.appendChild(beerLocation);
    beerContainer.appendChild(beer);
  }
}
