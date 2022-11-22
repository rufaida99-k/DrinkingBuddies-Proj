// import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import "./quiz.css";

const divStyle = {
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#22277A",
  height: "95vh",

};

// const manhattanDrink = require("./img/ManhattanDrink.png");
const drinkStyle = {
  width: "250px",
  height: "250px",
};

export default function HomePage(){

  const [displayResults, setDisplayResults] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);
  
  const questions = [
    {
      text: "What Do You Prefer: Sweet Or Bitter?",
      options: [
<<<<<<< Updated upstream
        { id: 0, text: "Sweet", isCorrect: false },
        { id: 1, text: "Bitter", isCorrect: false },
        { id: 2, text: "Sweet & Bitter", isCorrect: false },
        { id: 3, text: "Neither", isCorrect: true },
=======
        { id: 0, text: "Strong", drinks: ["manhattan", "cosmopolitan"] },
        {
          id: 1,
          text: "In Between",
          drinks: ["old_fashioned", "gin_and_tonic","margarita"],
        },
        { id: 2, text: "Light", drinks: ["daiquiri"] },
>>>>>>> Stashed changes
      ],
    },
    {
      text: "Do You Like Slushies?",
      options: [
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
        {
          id: 0,
          text: "No milk and no sugar!",
          drinks: ["manhattan", "gin_and_tonic"],
        },
        {
          id: 1,
          text: "Some milk and sugar",
          drinks: ["old_fashioned", "daiquiri","margarita"],
        },
        { id: 2, text: "Lots of milk and sugar", drinks: ["cosmopolitan"] },
>>>>>>> Stashed changes
      ],
    },
    {
      text: "Are We Fruity Or Nah?",
      options: [
<<<<<<< Updated upstream
        { id: 0, text: "I'd Never Pass On A Tart Cherry", isCorrect: true },
        { id: 1, text: "No Thank You Berry Much ", isCorrect: false },
        { id: 2, text: "I Find Them Ap-peeling Sometimes", isCorrect: false },
=======
        {
          id: 0,
          text: "I'd Never Pass On A Tart Cherry",
          drinks: ["daiquiri", "cosmopolitan","margarita"],
        },
        { id: 1, text: "No Thank You Berry Much ", drinks: ["manhattan"] },
        {
          id: 2,
          text: "I Find Them Ap-peeling Sometimes",
          drinks: ["old_fashioned", "gin_and_tonic"],
        },
>>>>>>> Stashed changes
      ],
    },
    {
      text: "Are You Drinking Alone Or At A Party?",
      options: [
<<<<<<< Updated upstream
        { id: 0, text: "Alone", isCorrect: false },
        { id: 1, text: "Party", isCorrect: true },
=======
        {
          id: 0,
          text: "Fruity (Lime, Cherry, etc.)",
          drinks: ["manhattan", "cosmopolitan", "old_fashioned", "daiquiri"],
        },
        { id: 1, text: "Leaves", drinks: ["manhattan", "gin_and_tonic"] },
        { id: 2, text: "Salty Rim", drinks: ["margarita"] },
>>>>>>> Stashed changes
      ],
    },
    {
      text: "Is It New York Or Nowhere?",
      options: [
<<<<<<< Updated upstream
        { id: 0, text: "Yes, New York Is Always On My Mind", isCorrect: true},
        { id: 1, text: "No, Anywhere But Here", isCorrect: false },
=======
        {
          id: 0,
          text: "Yes, New York Is Always On My Mind",
          drinks: ["manhattan"],
        },
        
        {
          id: 1,
          text: "No, Anywhere But Here",
          drinks: [
            "cosmopolitan",
            "old_fashioned",
            "daiquiri",
            "margarita",
            "gin_and_tonic",
          ],
        },
>>>>>>> Stashed changes
      ],
    },
  ];

  // helper functions 

  /* A possible answer was clicked */
  const optionClick = (isCorrect) => {
   
    if (currQuestion + 1 < questions.length) {
      setCurrQuestion(currQuestion + 1);
    } else {
      setDisplayResults(true);
    }
      
 
    
  };





  return(
    <div style={divStyle}>
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
      <h1 id="Heading1"> Drinking Buddy Quiz </h1>
      {displayResults ? (
        <div className="results">
          <h2 id="Heading2"> {drinkingResultDrink}</h2>
          <h3 id="Heading3"> {drinkingResultDescription}</h3>
          <img style={drinkStyle} alt="Drink" src={drinkingResultImg} />
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
>>>>>>> Stashed changes
            {questions[currQuestion].options.map((option) => {
              return (
                <li onClick = { () => optionClick(option.isCorrect) }key = {option.id}> {option.text} </li>

              );


            })}
            
            
          </ul> 

        </div> }

       

      
    
    
    </div>
 );
}
