import "./HelpPage.css";
import { Link } from "react-router-dom";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const wrapperStyle = {
  backgroundColor: "rgb(104 159 255 / 83%)",
};

const pStyle = {
  fontSize: "80px",
  textAlign: "center",
};

const card = {
  textAlign: "center",
  fontFamily: "AmericanTypewriter",
  fontSize: "30px",
  padding: "10px",
  display: "block",
  fontWeight: "bold",
  backgroundColor: "#b2ceff",
  width: "40vw",
  overflow: "auto",
};

const rowStyle = {
  display: "flex",
  height: "65vh",
  width: "90vw",
  alignItems: "stretch",
  justifyContent: "space-evenly",
};

const imgStyle = {
  height: "50px",
};

const car = require("./help-Images/car.png");
const phone = require("./help-Images/phone.png");
const siren = require("./help-Images/siren.png");
const faq = require("./help-Images/woman.png");

export default function helpCenter() {
  return (
    <div style={wrapperStyle}>
      <br />
      <div style={pStyle}> Hi, How Can We Help You?</div>
      <br />
      <div className="HelpPage">
        <div style={rowStyle}>
          <div style={card} className="cards">
            <img src={siren} style={imgStyle} />
            <br />
            Is this an emergency?
            <hr />
            <p className="answer"> Call 911! </p>
          </div>
          <div style={card} className="cards">
            <img src={car} style={imgStyle} />
            <br />
            Do you need a cab service?
            <hr />
            <div className="helpButton">
              <button className="helpButtonStyle">
                <a
                  href="https://auth.uber.com/v2/?breeze_local_zone=dca22&next_url=https%3A%2F%2Fm.uber.com%2Flooking&state=FP5gm-9KBct3wOYjoVshPfM8579RqQSxc2Lv2fL4JQc%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Uber
                </a>
              </button>
              <br />

              <br />

              <button className="helpButtonStyle">
                <a
                  href="https://ride.lyft.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Lyft
                </a>
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div style={rowStyle}>
          <div style={card} className="cards">
            <img src={phone} style={imgStyle} />
            <br />
            Questions about alcohol abuse addiction?
            <hr />
            <ul className="newList">
              <li className="newBullet">
                SAMHSA’s National Helpline: 1-800-662-HELP (4357), or TTY:
                1-800-487-4889 is a confidential, free, information service, for
                individuals and family members facing mental and/or substance
                use disorders.
              </li>
              <li className="newBullet">
                HOPEline offers a general addiction help hotline number. This is
                a NY hotline that offers help for prescription drug abuse
                sufferers, provides alcohol addiction help, and can connect you
                with various NY addiction services. Call 877-846-7369.
              </li>
              <li className="newBullet">
                NYC Health offers a free NYC crisis hotline. This is where you
                can learn about various NYC substance abuse programs. Call
                1-888-692-9355.
              </li>
              <li className="newBullet">
                New York State Office of Alcoholism & Substance Abuse Services
                has a toll-free 24-hour alcohol hotline for NY families whose
                members are struggling with SUD. Call at 877-8-HOPENY(467369).
              </li>
            </ul>
          </div>
          <div style={card} className="cards">
            <img src={faq} style={imgStyle} />
            <br />
            Have any other questions about Alcohol?
            <hr />
            <p className="answer">
              {" "}
              Visit our{" "}
              <Link className="linksStyle" to="/quiz">
                {" "}
                FAQ Page{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <br /> <br />
      <br /> <br />
    </div>
  );
}
