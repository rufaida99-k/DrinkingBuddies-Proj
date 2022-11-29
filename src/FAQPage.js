// import React, { Component } from 'react';
import Button from "react-bootstrap/Button";
import Faq from "react-faq-component";
import { GeneralData, DrinkData, HealthData } from "./FAQData.js";

const SINGLE_PAGE = "calc(100vh - 3.25rem)";

const divStyle = {
  margin: "40px",
  height: "70vh",
  border: "15px solid #fda0d8",
  backgroundColor: "pink",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};
const pStyle = {
  fontSize: "100px",
  textAlign: "center",
  fontFamily: "Chalkduster",
};

const wrapperStyle = {
  padding: "40px",
  boxSizing: "border-box",
  height: SINGLE_PAGE,
  maxHeight: SINGLE_PAGE,
  backgroundColor: "#ffe5f4",
};

const styles = {
  bgColor: "pink",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "grey",
  rowContentPaddingRight: "50px",
  titleContentPaddingRight: "50px",
};

const config = {
  animate: true,
};

const faqContainer = {
  border: "5px solid black",
  margin: "10px",
  padding: "10px",
  backgroundColor: "#ffe5f4",
};

const HomePage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#ffe5f4",
    }}
  >
    <div style={wrapperStyle}>
      <div style={divStyle}>
        <p style={pStyle}> Frequently Asked Questions!</p>
        <hr />
      </div>
    </div>

    <div
      id="question"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffe5f4",
      }}
    >
      <div id="started"></div>

      <br />
      <br />
      <br />
      <br />

      <div style={faqContainer}>
        General Questions
        <Faq data={GeneralData} styles={styles} config={config} />
        <br />
        <hr />
        <br />
        Health Questions
        <Faq data={HealthData} styles={styles} config={config} />
        <br />
        <hr />
        <br />
        Cocktail Questions
        <Faq data={DrinkData} styles={styles} config={config} />
      </div>
      <br />
      <br />
      <br />
    </div>
  </div>
);

export default HomePage;
