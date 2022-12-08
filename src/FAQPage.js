// import React, { Component } from 'react';
import Faq from "react-faq-component";
import { GeneralData, DrinkData, HealthData } from "./FAQData.js";
import { useState } from "react";
import "./FAQ.css";

const cocktailSign = require("./faq-Images/cocktail.png");
const questionSign = require("./faq-Images/help.png");
const healthSign = require("./faq-Images/health.png");

const config = {
  animate: true,
};

const styles = {
  titleTextColor: "black",
  rowContentColor: "white",
  rowContentPaddingRight: "50px",
  titleContentPaddingRight: "50px",
  padding: "50px",
};

function HomePage() {
  const [section, setSection] = useState([true, true, true]);
  const [lastEvent, setEvent] = useState({});

  function showSection(e, section) {
    if (section === "all") {
      setSection([true, true, true]);
    } else if (section === "general") {
      setSection([true, false, false]);
    } else if (section === "health") {
      setSection([false, true, false]);
    } else if (section === "cocktail") {
      setSection([false, false, true]);
    }
    if (lastEvent.target !== undefined) {
      lastEvent.target.className = "faq-buttonStyle";
    }
    setEvent(e);
    e.target.className = "faq-buttonStyle-selected";
  }
  return (
    <div className="pageStyle">
      <div className="wrapperStyle">
        <div className="divStyle">
          <h1 className="FAQ-Heading"> Frequently Asked Questions </h1>
          <br></br>
          <br></br>
          <hr/>
          <div className="buttonStyle">
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
        <div className="wrapperStyle">
          <div className="faqContainer">
            <div className="titleContainer">
              General Questions
              <img src={questionSign} className="iconStyle" alt="question symbol"/>
            </div>
            <div className="faqStyle">
              <Faq data={GeneralData} style={styles} config={config} />
            </div>
          </div>
        </div>
      )}
      {section[1] && (
        <div className="wrapperStyle">
          <div className="faqContainer">
            <div className="titleContainer">
              Health Questions
              <img src={healthSign} alt="health sign" className="iconStyle" />
            </div>
            <div className="faqStyle">
              <Faq data={HealthData} style={styles} config={config} />
            </div>
          </div>
        </div>
      )}
      {section[2] && (
        <div className="wrapperStyle">
          <div className="faqContainer">
            <div className="titleContainer">
              Cocktail Questions
              <img src={cocktailSign} alt="cocktail sign" className="iconStyle" />
            </div>
            <div className="faqStyle">
              <Faq data={DrinkData} style={styles} config={config} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
