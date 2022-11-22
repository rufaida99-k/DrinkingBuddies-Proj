// import React, { Component } from 'react';
import Button from "react-bootstrap/Button";


const SINGLE_PAGE = "calc(100vh - 3.25rem)";
const aboutUs = require("./img/aboutUs2.png");

const divStyle = {
  border: "15px solid #fda0d8",
  boxSizing: "border-box",
  height: "70vh",
  backgroundColor: "pink",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

const wrapperStyle = {
  padding: "40px",
  boxSizing: "border-box",
  height: SINGLE_PAGE,
  maxHeight: SINGLE_PAGE,
};

const pStyle = {
  fontSize: "100px",
  textAlign: "center",
  fontFamily: "Chalkduster",
};

const p2Style = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "AmericanTypewriter",
  padding: "30px",
};

const imgStyle = {
  width: "300px",
};
const HomePage = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div style={wrapperStyle}>
      <div style={divStyle}>
        <p style={pStyle}> About Drinking Buddies!</p>
        <hr />
        <Button as="a" variant="outline-secondary" size="lg" href="#started">
          Get Started
        </Button>
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: SINGLE_PAGE,
        maxHeight: SINGLE_PAGE,
      }}
    >
      <br />
      <div style={divStyle}>
        <p style={p2Style}>
          {" "}
          Have you ever been at a liquor store just trying to buy a drink but
          you don’t which one to buy? So you end up googling "best alcoholic
          drinks to buy" and then realize that none of these drinks suit your
          taste? And you end up googling again trying to figure out which one to
          buy? Then half an hour passes and you end up buying a very disgusting
          drink that you drank maybe once? Or how about you just turn 21 and,
          assuming you have never drunk alcohol before, you have no idea what to
          get. We been there and we have seen lots of people experience this
          especially as a new drinker. So we wanted to find a solution to this
          embarrassing and honestly unhealthy situation.
        </p>
        <img style={imgStyle} alt="About Us" src={aboutUs} />
      </div>
      <div id="started"></div>
    </div>
  </div>
);

export default HomePage;
