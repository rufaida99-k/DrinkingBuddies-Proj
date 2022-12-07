// import React, { Component } from 'react';

import { useState } from "react";
import * as React from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import "./placesNearMe.css";


function App() {
  const [zipcode, setZipcode] = useState("");
  const [places, setPlaces] = useState([""]);

  const cabbyAnimation = require("./placesNearMe-Images/taxi-animation.gif");  
  const barIcon = require("./placesNearMe-Images/bar.png");

  function Example(content) {
    return (
      <Carousel
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button onClick={onClick}  className="next-prev-button" style={{
              marginTop: "250%",
              color: "white",
              fontFamily: "Eczar-Medium",
              fontWeight: "200",
              backgroundColor: "#66222e",
              borderRadius: "20px",
              opacity: "1",
            }}>
              {next && "Next"}
              {prev && "Prev"}
              {/* style={{backgroundColor: "rgb(255,0,255)"}} */}
            </Button>
          );
        }}
        NextIcon="Next" // Change the "inside" of the next button to "next"
        PrevIcon="Prev" // Change the "inside of the prev button to "prev"
      >
        {content.map((item) => (
          <Item place={item} />
        ))}
      </Carousel>
    );
  }

  function Item(props) {
    return (
      <div className="PNM-Carousel" align="center">
        <img className="imageStyle-PNM" alt="Icon" src={barIcon} />
        <br></br>
        <br></br>
        <h2>{props["place"].name}</h2>
        <p> Address: {props["place"].address} </p>
        <p> Rating: {props["place"].rating}</p>
        

        <br />
      </div>
    );
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.get(
        `https://drinkingbuddies-back-end.herokuapp.com/getLocalBars/${zipcode.trim()}`,
        {
          method: "GET",
        }
      );
      console.log(res)
      let result = await res.data;
      let results = result["results"].splice(0, 5);
      let placesArray = [];
      if (res.status === 200) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
          placesArray.push({
            name: results[i]["name"],
            address: results[i]["address"],
            rating: results[i]["rating"],
          });
        }
        setPlaces(placesArray);
        console.log(placesArray);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="placesNearMeStyle" align="center">
        <br></br>
        <div className="PNM-HEADING-TITLE">
          <h1 className="Places-Near-Me-Heading-Title"> Places Near Me </h1>
        </div>
        <div className="cabbyAnimation-Div" align="center">
          <img src={cabbyAnimation} style={{borderRadius: "20px"}}  alt="Taxi Animation"></img>
        </div>
        <br />
        <h4 className="PNM-Zipcode">Enter Your Zipcode Below To Find Bars Near You!</h4>
          <br />
        <form style={{width: "40%" }} onSubmit={handleSubmit}>
          <input type="text" className="zipcode-NPM" value={zipcode} placeholder="Zipcode" onChange={(e) => setZipcode(e.target.value)}/>
          <hr />
          <div class="Explore-PNM" align="center">
          {/* <Button className="button-style-NPM" variant="contained" size="lg" type="submit">
            Search
          </Button> */}

          <button className="NPM-ZipCode-Button-Style" type="submit">Search</button>
          </div>
          <br></br>
          {places.length > 1 && (
            
            <div className="PNM-Div" align="center">
              <br></br>
              <div className="PNM-Carousel" align="center">{Example(places ?? [])}</div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
