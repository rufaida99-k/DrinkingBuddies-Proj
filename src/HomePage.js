import "./HomePage.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function HomePage(){

  let imgSrc = require("./HomePage-Images/yellowLogo.png");
  let imgSrc2 = require("./GIF/womenDrinking.gif");

  return(
    <>
    <div className = "header">

      <div className = "main-background">  
        <div className = "top-sectionRow"> 
          <div className = "left-column">  
            <img className = "img-style1"src={imgSrc} alt=""></img>
          </div>
          <div className = "right-column">  
          <img className = "img-style2" src={imgSrc2} alt=""></img>
          </div>
        </div>
        
      </div>
      {/* Add button in react */}
      <div className = "buttonContainer">
        <Link className = "quiz-buttonLinkStyle"to="/quiz">
          <button className = "quiz-buttonStyle">
            Take Quiz
          </button>
        </Link> 
      </div>
       
    </div>
   
     <div className = "howItWorks"> 
          <h2 className = "howItWorks-title">
            How It Works
          </h2>

     </div>
    </>
   
    );
  }
