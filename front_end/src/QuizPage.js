import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./quiz.css";
import DrinkData from "./QuizData.js";

const divStyle = {
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#22277A",
  height: "90vh",
};

const manhattanDrink = require("./img/ManhattanDrink.png");
const drinkStyle = {
  width: "150px",
  height: "150px",
};

const drinks = {
  manhattan: 0,
  cosmopolitan: 0,
  daiquiri: 0,
  old_fashioned: 0,
  margarita: 0,
  gin_and_tonic: 0,
};

let drinkingResultDrink = "";
let drinkingResultDescription = "";
let drinkingResultImg = "";

function calculateDrink() {
  let drink = "";
  let drinkCount = 0;
  for (const [key, value] of Object.entries(drinks)) {
    if (value > drinkCount) {
      drink = key;
      drinkCount = value;
    }
  }
  drinkingResultDrink = drink.replaceAll("_", " ");
  drinkingResultDescription = DrinkData[drink].desc;
  drinkingResultImg = DrinkData[drink].img;
}

export default function HomePage() {
  const [displayResults, setDisplayResults] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);

  const questions = [
    {
      text: "How strong do you want your drink?",
      options: [
        { id: 0, text: "Strong", drinks: ["manhattan", "cosmopolitan"] },
        {
          id: 1,
          text: "In Between",
          drinks: ["old_fashioned", "gin_and_tonic"],
        },
        { id: 2, text: "Light", drinks: ["daiquiri"] },
      ],
    },
    {
      text: "How do you take your coffee?",
      options: [
        {
          id: 0,
          text: "No milk and no sugar!",
          drinks: ["manhattan", "gin_and_tonic"],
        },
        {
          id: 1,
          text: "Some milk and sugar",
          drinks: ["old_fashioned", "daiquiri"],
        },
        { id: 2, text: "Lots of milk and sugar", drinks: ["cosmopolitan"] },
      ],
    },

    {
      text: "Are We Fruity Or Nah?",
      options: [
        {
          id: 0,
          text: "I'd Never Pass On A Tart Cherry",
          drinks: ["daiquiri", "cosmopolitan"],
        },
        { id: 1, text: "No Thank You Berry Much ", drinks: ["manhattan"] },
        {
          id: 2,
          text: "I Find Them Ap-peeling Sometimes",
          drinks: ["old_fashioned", "gin_and_tonic"],
        },
      ],
    },
    {
      text: "What type of garnish?",
      options: [
        {
          id: 0,
          text: "Fruity (Lime, Cherry, etc.)",
          drinks: ["manhattan", "cosmopolitan", "old_fashioned", "daiquiri"],
        },
        { id: 1, text: "Leaves", drinks: ["manhattan", "gin_and_tonic"] },
        { id: 2, text: "Salty Rim", drinks: [] },
      ],
    },
    {
      text: "Is It New York Or Nowhere?",
      options: [
        {
          id: 0,
          text: "Yes, New York Is Always On My Mind",
          drinks: ["manhattan"],
        },
        ,
        {
          id: 1,
          text: "No, Anywhere But Here",
          drinks: [
            "cosmopolitan",
            "old_fashioned",
            "daiquiri",
            "gin_and_tonic",
          ],
        },
      ],
    },
  ];

  // helper functions

  /* A possible answer was clicked */
  const optionClick = (option) => {
    for (option of option.drinks) {
      drinks[option]++;
    }
    if (currQuestion + 1 < questions.length) {
      setCurrQuestion(currQuestion + 1);
    } else {
      setDisplayResults(true);
      calculateDrink();
    }
  };

  return (
    <div style={divStyle}>
      <h1 id="Heading1"> Drinking Buddy Quiz </h1>
      {displayResults ? (
        <div className="results">
          <h2 id="Heading2"> {drinkingResultDrink}</h2>
          <h3 id="Heading3"> {drinkingResultDescription}</h3>
          <img style={drinkStyle} src={drinkingResultImg} />
          <hr />
          <Button as="a" variant="outline-secondary" size="lg" href="/list">
            Learn More
          </Button>
          {"  "}
          <Button as="a" variant="outline-secondary" size="lg" href="/quiz">
            Try Again
          </Button>
        </div>
      ) : (
        <div className="question-container">
          <h2 className="question-number"> Question {currQuestion + 1} </h2>
          <h3 className="question-quest"> {questions[currQuestion].text}</h3>
          <ul id="horizontal">
            {questions[currQuestion].options.map((option) => {
              return (
                <li onClick={() => optionClick(option)} key={option.id}>
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <br />
    </div>
  );
}
