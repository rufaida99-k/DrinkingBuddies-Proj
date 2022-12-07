import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  let imgSrc = require("./HomePage-Images/yellowLogo.png");
  let imgSrc2 = require("./GIF/womenDrinking.gif");
  // let icon1 = require("./HomePage-Images/cocktail.png");
  // let icon2 = require("./HomePage-Images/calculator.png");
  // let icon3 = require("./HomePage-Images/help.png");
  const quizGuide = require("./HomePage-Images/HIW/cocktailbw.png");
  const bacGuide = require("./HomePage-Images/HIW/calculatorbw.png");
  const faqGuide = require("./HomePage-Images/HIW/faqbw.png");

  return (
    <>
      <div className="header">
        <div className="main-background">
          <div className="top-sectionRow">
            <div className="left-column">
              <img className="img-style2" src={imgSrc2} alt=""></img>
            </div>
            <div className="right-column">
              <img className="img-style1" src={imgSrc} alt=""></img>
            </div>
          </div>
        </div>
        {/* Add button in react */}
        <div className="buttonContainer">
          <Link className="quiz-buttonLinkStyle" to="/quiz">
            <br></br>
            <button
              className="quiz-buttonStyle"
              style={{ borderRadius: "20px" }}
            >
              Take Quiz
            </button>
          </Link>
        </div>
      </div>
      <hr className = "lineStyle"></hr>
      <div className="howItWorks">
        <h2 className="howItWorks-title">How It Works</h2>

        <div class="rowStyle">
          <div class="columnStyle">
            <img className="img-howItWorks" src={quizGuide} alt=""></img>
            <br></br>
            <div className="HIW-Glass1">
              <p className="howItWorks-text"> Take the drinking quiz </p>
              <Link className="quiz-buttonLinkStyle" to="/quiz">
                <br></br>
                <br></br>
                <button
                  className="quiz-buttonStyle2"
                  style={{ borderRadius: "20px" }}
                >
                  Take Quiz
                </button>
              </Link>
            </div>
          </div>
          <div class="columnStyle">
            <img className="img-howItWorks" src={bacGuide} alt=""></img>
            <br></br>
            <div className="HIW-Glass2">
              <p className="howItWorks-text"> Calculate your BAC </p>
              <Link className="quiz-buttonLinkStyle" to="/bac">
                <br></br>
                <br></br>
                <button
                  className="quiz-buttonStyle2"
                  style={{ borderRadius: "20px" }}
                >
                  Calculate BAC
                </button>
              </Link>
            </div>
          </div>
          <div class="columnStyle">
            <img className="img-howItWorks" src={faqGuide} alt=""></img>
            <br></br>
            <div className="HIW-Glass3">
              <p className="howItWorks-text"> Have Questions? Visit FAQ </p>
              <Link className="quiz-buttonLinkStyle" to="/faq">
                <br></br>
                <br></br>
                <button
                  className="quiz-buttonStyle2"
                  style={{ borderRadius: "20px" }}
                >
                  Read FAQ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
