import React, { useState } from "react";
import "./bacPage.css";

const divStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
};

const pStyle = {
  textAlign: "center",
  fontFamily: "Chalkduster",
};

export default function HomePage() {
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState(0);
  const [BAC, setBAC] = useState(0);
  // const [message, setMessage] = useState("");
  const [beer, setBeer] = useState(0);
  const [wine, setWine] = useState(0);
  const [shot, setShot] = useState(0);
  const [hours, setHours] = useState(0);

  let clearedBefore = 0;

  
    /* insert the calculate bac function here */
  
  let calcBac = (event) => {
    // in case there is no information in the form, it will not submit
    event.preventDefault();

    //If this is the first time we are clearing inputs, do not display alert message
    // display an alert message in
    if (!clearedBefore === 0) {
      if (
        weight === 0 &&
        sex.length === 0 &&
        wine === 0 &&
        shot === 0 &&
        beer === 0
      ) {
        alert("Please fill in values");
      }
    } else {
      // alcohol percentage
      let wineAlcohol = 5 * 0.12;
      let shotAlcohol = 1.5 * 0.4;
      let beerAlcohol = 12 * 0.05;

      // calculate alcohol based on how much time has passed
      let hourRate = 0.015;

      // the rate at which blood will absorb alcohol based on your weight
      let absorptionRate = 5.14;

      //calculate based on sex
      let R = 0.0;

      if (sex === "M") {
        R = 0.68;
      }

      if (sex === "F") {
        R = 0.55;
      }

      let drinkTotal =
        beer * beerAlcohol + wine * wineAlcohol + shot * shotAlcohol;
      let total = drinkTotal * absorptionRate;
      let result = total / (weight * R) - hourRate * hours;
      if (isNaN(result)) {
        result = 0;
        console.log("result is not a number: " + result);
      }
      setBAC(result.toFixed(2));
    }
  };

  const clearForm = () => {
    setSex("");
    setWeight(0);

    // setMessage("");
    setBeer(0);
    setWine(0);
    setShot(0);
    setHours(0);
    setBAC(0);
    clearedBefore++;
  };

  return (
    <div style={divStyle}>
      <p style={pStyle}>
        <br></br>
        <div className="HomePage">
          <div className="calculator">
            <h2 className="center"> BAC calculator</h2>

            <form onSubmit={calcBac}>
              <div>
                <label> Sex (F/M)</label>
                <input
                  value={sex}
                  onChange={(event) => setSex(event.target.value)}
                />
              </div>

              <div>
                <label> Weight (lbs)</label>
                <input
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </div>

              <div>
                <label> Beer</label>
                <input
                  value={beer}
                  onChange={(event) => setBeer(event.target.value)}
                />
              </div>

              <div>
                <label> Wine</label>
                <input
                  value={wine}
                  onChange={(event) => setWine(event.target.value)}
                />
              </div>

              <div>
                <label> Shot</label>
                <input
                  value={shot}
                  onChange={(event) => setShot(event.target.value)}
                />
              </div>

              <div>
                <label>
                  {" "}
                  How many hours have passed since your first drink?{" "}
                </label>
                <input
                  value={hours}
                  onChange={(event) => setHours(event.target.value)}
                />
              </div>

              <div>
                <button id="calculate" type="submit">
                  {" "}
                  Calculate
                </button>
                <p> </p>
                <button onClick={() => clearForm()} id="clear">
                  {" "}
                  Clear{" "}
                </button>
              </div>
            </form>

            <div className="center">
              <h4> Your BAC % is: {BAC} %</h4>
            </div>
          </div>
        </div>
      </p>
    </div>
  );
}
