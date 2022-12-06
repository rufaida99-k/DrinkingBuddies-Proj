const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/getLocalBars/:zipcode", async (req, res) => {
  //Line 9
  let zipcode = req.params.zipcode;
  url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=bars%20in%20${zipcode.trim()}&key=AIzaSyDJyQraEDSqatjKqzQlMApq0DbcR73D6WA`;
  const options = {
    method: "GET",
  };
  // promise syntax
  try {
    let response = await fetch(url, options);
    response = await response.json();
    let results = response["results"].splice(0, 5);
    let responseList = [];
    console.log(results[0]);
    for (result in results) {
      console.log(result);
      let newPlace = {};
      newPlace["name"] = results[result]["name"];
      newPlace["address"] = results[result]["formatted_address"];
      newPlace["rating"] = results[result]["rating"];
      responseList.push(newPlace);
    }
    let finalResponse = { results: responseList };
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
    res.status(200).json(finalResponse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
}); //Line 11
