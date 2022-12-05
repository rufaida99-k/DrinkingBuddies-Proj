import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./quizLoader.css";



  export default function HomePage() {

    const animationSRC = require("./quizImages/quizAnimationBigger.gif");
    return (
        <div className="quizLoaderMain">
          <br></br>
          <br></br>
          <br></br>
          <div className="quizLoaderAnimation">
            <img src= {animationSRC} alt="Cutting Board With Alcohol"></img>
          </div>
          <div className="quizLoaderButton">
              <Link className = "quiz-Linked"to="/quizStart">
                <button className ="quizLoaderButton-Style" >
                  Start Quiz
                </button>
              </Link> 
          </div>
          </div>
            
      );
}
