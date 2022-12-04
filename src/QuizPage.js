import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./quiz.css";
import DrinkData from "./QuizData.js";
import { Link } from "react-router-dom";

const drinkStyle = {
  width: "128px",
  height: "128px",
};

const drinks = {
  Manhattan: 0,
  Cosmopolitan: 0,
  Daiquiri: 0,
  Old_Fashioned: 0,
  Margarita: 0,
  Gin_And_Tonic: 0,
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
    /*

    Money Question?!

    */

    {
      text: "How strong do you want your drink?",
      options: [
        { id: 0, text: "Strong", drinks: ["Manhattan", "Cosmopolitan"] },
        {
          id: 1,
          text: "In Between",
          drinks: ["Old_Fashioned", "Gin_And_Tonic", "Margarita"],
        },
        { id: 2, text: "Light", drinks: ["Daiquiri"] },
      ],
    },

    {
      text: "Is This A Party Of One Or Many?",
      options: [
        { id: 0, text: "It's Me, Myself & I", drinks: ["Manhattan", "Old_Fashioned"] },
        { id: 1, text: "We Are Going All Out Tonight!", drinks: ["Cosmopolitan", "Daiquiri", "Gin_And_Tonic", "Margarita"] },
      ],
    },

    {
      text: "Do We Like Slushies?",
      options: [
        { id: 0, text: "Yes, Absolutely!", drinks: ["Daiquiri", "Margarita"] },
        {
          id: 1,
          text: "Sometimes When It's Hot Out",
          drinks: ["Old_Fashioned", "Manhattan","Cosmopolitan"],
        },
        { id: 2, text: "No, What Is Wrong With You?", drinks: ["Gin_And_Tonic"] },
      ],
    },

    {
      text: "How do you take your coffee?",
      options: [
        {
          id: 0,
          text: "No milk and no sugar!",
          drinks: ["Manhattan", "Gin_And_Tonic"],
        },
        {
          id: 1,
          text: "Some milk and sugar",
          drinks: ["Old_Fashioned", "Daiquiri", "Margarita"],
        },
        { id: 2, text: "Lots of milk and sugar", drinks: ["Cosmopolitan"] },
      ],
    },

    {
      text: "Are We Fruity Or Nah?",
      options: [
        {
          id: 0,
          text: "I'd Never Pass On A Tart Cherry",
          drinks: ["Daiquiri", "Cosmopolitan", "Margarita"],
        },
        { id: 1, text: "No Thank You Berry Much ", drinks: ["Manhattan"] },
        {
          id: 2,
          text: "I Find Them Ap-peeling Sometimes",
          drinks: ["Old_Fashioned", "Gin_And_Tonic"],
        },
      ],
    },
    {
      text: "What type of garnish?",
      options: [
        {
          id: 0,
          text: "Fruity (Lime, Cherry, etc.)",
          drinks: ["Manhattan", "Cosmopolitan", "Old_Fashioned", "Daiquiri"],
        },
        { id: 1, text: "Leaves", drinks: ["Manhattan", "Gin_And_Tonic"] },
        { id: 2, text: "Salty Rim", drinks: ["Margarita"] },
      ],
    },
    {
      text: "Is It New York Or Nowhere?",
      options: [
        {
          id: 0,
          text: "Yes, New York Is Always On My Mind",
          drinks: ["Manhattan"],
        },

        {
          id: 1,
          text: "No, Anywhere But Here",
          drinks: [
            "Cosmopolitan",
            "Old_Fashioned",
            "Daiquiri",
            "Gin_And_Tonic",
            "Margarita",
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
    <div className="main-Quiz">
      <br></br><h1 class="quizHeading1"> Drinking Buddy Quiz </h1><br></br>
      <div className="blurQuiz" align="center">
      
      {displayResults ? (
        <div className="quizResults" align="center">
          <h3 className="quizHeading3" align="center"> {drinkingResultDrink}</h3>
          <br></br><h4 className="quizHeading4" align="center"> {drinkingResultDescription} </h4>
          <img style={drinkStyle} align="center" alt="Drink Result" src={drinkingResultImg} />
          <hr />
          <Button as="a" variant="outline-secondary" size="lg">
            <Link className="quiz-Links" to="/list">
              Learn More
            </Link>
          </Button>
          {"  "}
          <Button as="a" variant="outline-secondary" size="lg">
            <Link className="quiz-Links" to="/quiz"> 
              Try Again
            </Link>
          </Button>
        </div>
      ) : (
        <div className="quizQuestion" align="center">
          <br></br><h2 className="questionNumber" align="center"> Question {currQuestion + 1} </h2>
          <br></br><h3 className="questionContents" align="center"> {questions[currQuestion].text}</h3>
          
            {questions[currQuestion].options.map((option) => {
              return (
                <p class="choices" onClick={() => optionClick(option)} key={option.id}>
                  {option.text} 
                </p>
              );
            })}
          
        </div>
      )}

      <br />
     
      </div>
    </div>
  );
}
