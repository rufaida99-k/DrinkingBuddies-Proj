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

// const manhattanDrink = require("./img/ManhattanDrink.png");
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
<<<<<<< HEAD
<<<<<<< Updated upstream
        { id: 0, text: "Sweet", isCorrect: false },
        { id: 1, text: "Bitter", isCorrect: false },
        { id: 2, text: "Sweet & Bitter", isCorrect: false },
        { id: 3, text: "Neither", isCorrect: true },
=======
=======
>>>>>>> main
        { id: 0, text: "Strong", drinks: ["manhattan", "cosmopolitan"] },
        {
          id: 1,
          text: "In Between",
<<<<<<< HEAD
          drinks: ["old_fashioned", "gin_and_tonic","margarita"],
        },
        { id: 2, text: "Light", drinks: ["daiquiri"] },
>>>>>>> Stashed changes
=======
          drinks: ["old_fashioned", "gin_and_tonic"],
        },
        { id: 2, text: "Light", drinks: ["daiquiri"] },
>>>>>>> main
      ],
    },
    {
      text: "How do you take your coffee?",
      options: [
<<<<<<< HEAD
<<<<<<< Updated upstream
        { id: 0, text: "Yes, Absolutely!", isCorrect: true },
        { id: 1, text: "No, What Is Wrong With You?", isCorrect: false },
        { id: 2, text: "Only In The Summer", isCorrect: false },
        { id: 3, text: "Maybe, Depends On The Day", isCorrect: false },
      ],
    },
    {
      text: "Do You Like Leaves?",
      options: [
        { id: 0, text: "Yes (For Garnish)", isCorrect: true},
        { id: 1, text: "Nope, I'll Pass", isCorrect: false },
=======
=======
>>>>>>> main
        {
          id: 0,
          text: "No milk and no sugar!",
          drinks: ["manhattan", "gin_and_tonic"],
        },
        {
          id: 1,
          text: "Some milk and sugar",
<<<<<<< HEAD
          drinks: ["old_fashioned", "daiquiri","margarita"],
        },
        { id: 2, text: "Lots of milk and sugar", drinks: ["cosmopolitan"] },
>>>>>>> Stashed changes
=======
          drinks: ["old_fashioned", "daiquiri"],
        },
        { id: 2, text: "Lots of milk and sugar", drinks: ["cosmopolitan"] },
>>>>>>> main
      ],
    },

    {
      text: "Are We Fruity Or Nah?",
      options: [
<<<<<<< HEAD
<<<<<<< Updated upstream
        { id: 0, text: "I'd Never Pass On A Tart Cherry", isCorrect: true },
        { id: 1, text: "No Thank You Berry Much ", isCorrect: false },
        { id: 2, text: "I Find Them Ap-peeling Sometimes", isCorrect: false },
=======
        {
          id: 0,
          text: "I'd Never Pass On A Tart Cherry",
          drinks: ["daiquiri", "cosmopolitan","margarita"],
=======
        {
          id: 0,
          text: "I'd Never Pass On A Tart Cherry",
          drinks: ["daiquiri", "cosmopolitan"],
>>>>>>> main
        },
        { id: 1, text: "No Thank You Berry Much ", drinks: ["manhattan"] },
        {
          id: 2,
          text: "I Find Them Ap-peeling Sometimes",
          drinks: ["old_fashioned", "gin_and_tonic"],
        },
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> main
      ],
    },
    {
      text: "What type of garnish?",
      options: [
<<<<<<< HEAD
<<<<<<< Updated upstream
        { id: 0, text: "Alone", isCorrect: false },
        { id: 1, text: "Party", isCorrect: true },
=======
=======
>>>>>>> main
        {
          id: 0,
          text: "Fruity (Lime, Cherry, etc.)",
          drinks: ["manhattan", "cosmopolitan", "old_fashioned", "daiquiri"],
        },
        { id: 1, text: "Leaves", drinks: ["manhattan", "gin_and_tonic"] },
<<<<<<< HEAD
        { id: 2, text: "Salty Rim", drinks: ["margarita"] },
>>>>>>> Stashed changes
=======
        { id: 2, text: "Salty Rim", drinks: [] },
>>>>>>> main
      ],
    },
    {
      text: "Is It New York Or Nowhere?",
      options: [
<<<<<<< HEAD
<<<<<<< Updated upstream
        { id: 0, text: "Yes, New York Is Always On My Mind", isCorrect: true},
        { id: 1, text: "No, Anywhere But Here", isCorrect: false },
=======
=======
>>>>>>> main
        {
          id: 0,
          text: "Yes, New York Is Always On My Mind",
          drinks: ["manhattan"],
        },
<<<<<<< HEAD
        
=======
        ,
>>>>>>> main
        {
          id: 1,
          text: "No, Anywhere But Here",
          drinks: [
            "cosmopolitan",
            "old_fashioned",
            "daiquiri",
<<<<<<< HEAD
            "margarita",
            "gin_and_tonic",
          ],
        },
>>>>>>> Stashed changes
=======
            "gin_and_tonic",
          ],
        },
>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< Updated upstream
      

        {/* Title of the quiz */}
        <h1 id="Heading1"> Drinking Buddy Quiz </h1>
        {displayResults ?  
          <div className = 'results' >
            <h2 id="Heading2"> Drinking Results: Manhattan</h2>
            <h3 id = "Heading3"> This is a classic cocktail of choice for whiskey-lovers. 
              This delightful mix of rye or bourbon whiskey, sweet vermouth, and bitters has been adored for hundreds of years because of its subtle bitterness and herbal undertones.
              </h3><img style={drinkStyle} src={manhattanDrink} />

           </div> :  

        <div className = 'question-container'> 
          <h2 className = 'question-number'> Question {currQuestion + 1} </h2>
          <h3 className = 'question-quest'> {questions[currQuestion].text}</h3>
          <ul>
          
=======
=======
>>>>>>> main
      <h1 id="Heading1"> Drinking Buddy Quiz </h1>
      {displayResults ? (
        <div className="results">
          <h2 id="Heading2"> {drinkingResultDrink}</h2>
          <h3 id="Heading3"> {drinkingResultDescription}</h3>
<<<<<<< HEAD
          <img style={drinkStyle} alt="Drink" src={drinkingResultImg} />
=======
          <img style={drinkStyle} src={drinkingResultImg} />
>>>>>>> main
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
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> main
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
