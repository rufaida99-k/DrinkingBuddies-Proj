import "./HomePage.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function HomePage(){

  let imgSrc = require("./HomePage-Images/yellowLogo.png");
  let imgSrc2 = require("./GIF/womenDrinking.gif");
  let icon1 = require("./HomePage-Images/cocktail.png");
  let icon2 = require("./HomePage-Images/calculator.png");
  let icon3 = require("./HomePage-Images/help.png");

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

          <div class="rowStyle">
            <div class="columnStyle">
              <img className = "img-howItWorks"src={icon1} alt=""></img>
              <p className = "howItWorks-text"> Take the drinking quiz </p>

            </div>
            <div class="columnStyle">
              <img className = "img-howItWorks"src={icon2} alt=""></img>
              <p className = "howItWorks-text"> Calculate your BAC </p>

            </div>
            <div class="columnStyle">
              <img className = "img-howItWorks"src={icon3} alt=""></img>
              <p className = "howItWorks-text"> Have Questions? Visit FAQ </p>

            </div>
          </div>


     </div>
    </>
   
    );
  }
