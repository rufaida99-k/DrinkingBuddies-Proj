import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import "./quiz.css";

const divStyle = {
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



export default function HomePage(){

  const [displayResults, setDisplayResults] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);
  
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
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
      <p style={pStyle}>

        {/* Title of the quiz */}
        <h1> Drinking Buddy Quiz </h1>
        {displayResults ?  
          <div className = 'results' >
            <h2> Drinking Results: </h2>
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

       

      </p>
    
    
    </div>
 );
}
