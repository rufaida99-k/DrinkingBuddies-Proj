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

const manhattanDrink = require("./img/ManhattanDrink.png");
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
        { id: 0, text: "Sweet", isCorrect: false },
        { id: 1, text: "Bitter", isCorrect: false },
        { id: 2, text: "Sweet & Bitter", isCorrect: false },
        { id: 3, text: "Neither", isCorrect: true },
      ],
    },
    {
      text: "Do You Like Slushies?",
      options: [
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
      ],
    },
    {
      text: "Are We Fruity Or Nah?",
      options: [
        { id: 0, text: "I'd Never Pass On A Tart Cherry", isCorrect: true },
        { id: 1, text: "No Thank You Berry Much ", isCorrect: false },
        { id: 2, text: "I Find Them Ap-peeling Sometimes", isCorrect: false },
      ],
    },
    {
      text: "Are You Drinking Alone Or At A Party?",
      options: [
        { id: 0, text: "Alone", isCorrect: false },
        { id: 1, text: "Party", isCorrect: true },
      ],
    },
    {
      text: "Is It New York Or Nowhere?",
      options: [
        { id: 0, text: "Yes, New York Is Always On My Mind", isCorrect: true},
        { id: 1, text: "No, Anywhere But Here", isCorrect: false },
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
