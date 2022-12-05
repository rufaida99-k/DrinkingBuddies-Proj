// import React, { Component } from 'react';
import Faq from "react-faq-component";
import { GeneralData, DrinkData, HealthData } from "./FAQData.js";
import { useState } from "react";
import "./FAQ.css";

const faqSign = require("./faq-Images/faq.png");
const cocktailSign = require("./faq-Images/cocktail.png");
const questionSign = require("./faq-Images/help.png");
const healthSign = require("./faq-Images/health.png");

const divStyle = {
  height: "40vh",
  border: "3px solid rgb(150 123 171)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "center",
  width: "80vw",
};

const pStyle = {
  fontSize: "50px",
  textAlign: "center",
  fontFamily: "Chalkduster",
};

const imgStyle = {
  height: "20vh",
};

const iconStyle = {
  height: "30px",
  marginLeft: "10px",
};

const wrapperStyle = {
  padding: "30px",
};

const styles = {
  bgColor: "#e3d7ff",
  border: "3px solid #fda0d8",
  titleTextColor: "black",
  rowTitleColor: "e3d7ff",
  rowContentColor: "e3d7ff",
  rowContentPaddingRight: "50px",
  titleContentPaddingRight: "50px",
  padding: "50px",
};

const config = {
  animate: true,
};

const pageStyle = {
  backgroundColor: "#ffe5f4",
};

const faqContainer = {
  border: "3px solid rgb(150 123 171)",
  borderRadius: "10px",
  padding: "15px",
  fontSize: "30px",
  backgroundColor: "#ffe5f4",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  color: "rgb(150 123 171)",
};

const titleContainer = {
  display: "flex",
  alignItems: "flexStart",
};

const faqStyle = {
  padding: "15px",
  backgroundColor: "#e3d7ff",
  border: "2px solid rgb(150 123 171)",
  borderRadius: "10px",
};

function HomePage() {
  const [section, setSection] = useState([true, true, true]);
  const [lastEvent, setEvent] = useState({});

  function showSection(e, section) {
    if (section === "all") {
      setSection([true, true, true]);
    } else if (section == "general") {
      setSection([true, false, false]);
    } else if (section == "health") {
      setSection([false, true, false]);
    } else if (section == "cocktail") {
      setSection([false, false, true]);
    }
    if (lastEvent.target != undefined) {
      lastEvent.target.className = "faq-buttonStyle";
    }
    setEvent(e);
    e.target.className = "faq-buttonStyle-selected";
  }
  return (
    <div style={pageStyle}>
      <div style={wrapperStyle}>
        <div style={divStyle}>
          <img style={imgStyle} src={faqSign} />
          <hr />
          <div style={buttonStyle}>
            <button
              className="faq-buttonStyle"
              style={{ borderRadius: "20px" }}
              onClick={(e) => showSection(e, "all")}
            >
              All Questions
            </button>
            <button
              className="faq-buttonStyle"
              style={{ borderRadius: "20px" }}
              onClick={(e) => showSection(e, "general")}
            >
              General Questions
            </button>
            <button
              className="faq-buttonStyle"
              style={{ borderRadius: "20px" }}
              onClick={(e) => showSection(e, "health")}
            >
              Health Questions
            </button>
            <button
              className="faq-buttonStyle"
              style={{ borderRadius: "20px" }}
              onClick={(e) => showSection(e, "cocktail")}
            >
              Cocktail Questions
            </button>
          </div>
        </div>
      </div>
      {section[0] && (
        <div style={wrapperStyle}>
          <div style={faqContainer}>
            <div style={titleContainer}>
              General Questions
              <img src={questionSign} style={iconStyle} />
            </div>
            <div style={faqStyle}>
              <Faq data={GeneralData} styles={styles} config={config} />
            </div>
          </div>
        </div>
      )}
      {section[1] && (
        <div style={wrapperStyle}>
          <div style={faqContainer}>
            <div style={titleContainer}>
              Health Questions
              <img src={healthSign} style={iconStyle} />
            </div>
            <div style={faqStyle}>
              <Faq data={HealthData} styles={styles} config={config} />
            </div>
          </div>
        </div>
      )}
      {section[2] && (
        <div style={wrapperStyle}>
          <div style={faqContainer}>
            <div style={titleContainer}>
              Cocktail Questions
              <img src={cocktailSign} style={iconStyle} />
            </div>
            <div style={faqStyle}>
              <Faq data={DrinkData} styles={styles} config={config} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
