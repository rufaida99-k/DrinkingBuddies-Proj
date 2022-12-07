import React, { useState } from "react";
import "./bacPage.css";


export default function HomePage() {
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState(0);
  const [BAC, setBAC] = useState(0);
  const [message, setMessage] = useState("");
  const [beer, setBeer] = useState(0);
  const [wine, setWine] = useState(0);
  const [shot, setShot] = useState(0);
  const [hours, setHours] = useState(0);


  let clearedBefore = 0;

  /* insert the calculate bac function here */

  const calcBac = (event) => {
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

      console.log(BAC);

      // logic for BAC message
      if (result === 0.0) {
        setMessage("You are currently sober.");
      } else if (result > 0.0 && result < 0.02) {
        setMessage("You are currently sober.");
      }
      // image name: toasting.jpg
      else if (result >= 0.02 && result < 0.04) {
        setMessage(
          "You should be feeling relaxed, no loss of coordination, slight euphoria, and slight loss of judgment. Note at this moment, you are legally able to drive but don’t if you are not feeling well."
        );
      }
      // image name: womenDancing.jpg
      else if (result >= 0.04 && result < 0.06) {
        setMessage(
          "You may feel uninhibited, relaxed, and euphoric. Also, you may experience minor impairments in reasoning and memory and may experience heightened emotions. Lastly, you may have lower alertness and may have some exaggerated behaviors. Note at this moment, you are legally able to drive but don’t if you are not feeling well."
        );
      }
      // image name: starryHead.jpg
      else if (result >= 0.06 && result < 0.1) {
        setMessage(
          "You may have slight impairment of balance, speech, vision, reaction time and hearing. Your judgment, self-control, sense of caution, reasoning, and memory are impaired. You may feel euphoric and also believe that you are functioning much better than you actually are. Note if your BAC is 0.08% and above, you are legally intoxicated and cannot be driving."
        );
      }
      // image name: stage-5.jpg
      else if (result >= 0.1 && result < 0.12) {
        setMessage(
          "You may have significant impairment of motor coordination and loss of good judgment. Speech may be slurred; balance, peripheral vision, reaction time, and hearing will be impaired. Note you are legally intoxicated and cannot be driving."
        );
      }
      // image name: hangover.jpg
      else if (result >= 0.12 && result < 0.16) {
        setMessage(
          "You may have gross motor impairment and lack of physical control. Blurred vision and major loss of balance. Euphoria is reducing and beginning dysphoria (a state of feeling unwell). Note you are legally intoxicated and cannot be driving."
        );
      }
      // image name: sloppy drunk
      else if (result >= 0.16 && result < 0.2) {
        setMessage(
          "Dysphoria predominates, nausea may appear. You may have the appearance of a sloppy drunk. Note you are legally intoxicated and cannot be driving."
        );
      }
      // image name: needs assistance
      else if (result >= 0.2 && result < 0.25) {
        setMessage(
          "At this point, you may need assistance in walking and have total mental confusion. You may have Dysphoria with nausea and vomiting; possible blackout. Note you are legally intoxicated and cannot be driving."
        );
      }
      // image name: passed out drunk
      else if (result >= 0.25 && result < 0.4) {
        setMessage("Alcohol poisoning. Loss of consciousness.");
      }
      // image name: coma with death
      else if (result >= 0.4) {
        setMessage(
          "Onset of coma, and possible death due to respiratory arrest."
        );
      }
    }
  };

  const clearForm = () => {
    setSex("");
    setWeight(0);

    setMessage("");
    setBeer(0);
    setWine(0);
    setShot(0);
    setHours(0);
    setBAC(0);
    clearedBefore++;
  };

  // display images based on BAC levels
  let imgSrc;
  // image name: noDrinkingWomen.jpg
  if (BAC === 0.0) {
    imgSrc = null;
  } else if (BAC > 0.0 && BAC < 0.02) {
    imgSrc = require("./BAC-Images/noDrinkingWomen.jpg");
  }
  // image name: toasting.jpg
  else if (BAC >= 0.02 && BAC < 0.04) {
    imgSrc = require("./BAC-Images/toasting.jpg");
  }
  // image name: womenDancing.jpg
  else if (BAC >= 0.04 && BAC < 0.06) {
    imgSrc = require("./BAC-Images/womenDancing.jpg");
  }
  // image name: starryHead.jpg
  else if (BAC >= 0.06 && BAC < 0.1) {
    imgSrc = require("./BAC-Images/starryHead.jpg");
  }
  // image name: stage-5.jpg
  else if (BAC >= 0.1 && BAC < 0.12) {
    imgSrc = require("./BAC-Images/stage5.jpg");
  }
  // image name: hangover.jpg
  else if (BAC >= 0.12 && BAC < 0.16) {
    imgSrc = require("./BAC-Images/hangover.jpg");
  }
  // image name: sloppy drunk
  else if (BAC >= 0.16 && BAC < 0.2) {
    imgSrc = require("./BAC-Images/sloppyDrunk.jpg");
  }
  // image name: needs assistance
  else if (BAC >= 0.2 && BAC < 0.25) {
    imgSrc = require("./BAC-Images/needsAssistance.jpg");
  }
  // image name: passed out drunk
  else if (BAC >= 0.25 && BAC < 0.4) {
    imgSrc = require("./BAC-Images/passedOutDrunk.jpg");
  }
  // image name: coma with death
  else if (BAC >= 0.4) {
    imgSrc = require("./BAC-Images/comaWithDeath.jpg");
  }



  return (

        <div className="BAC-mainPage">


          <div> 

            {/* title of the page  */}
            <h1 className = "BAC-title"> BAC Calculator </h1> 

           {/* entire calculator section  */}
          
            <div className="calculator">


                <form onSubmit={calcBac}>
                  <div className = "bac-sectionInput">
                    <label className = "bac-labelStyle"> Sex (F/M)</label>
                    <input
                      value={sex}
                      onChange={(event) => setSex(event.target.value)}
                    />
                  </div>

                  <div className = "bac-sectionInput">
                    <label className = "bac-labelStyle"> Weight (lbs)</label>
                    <input
                      value={weight}
                      onChange={(event) => setWeight(event.target.value)}
                    />
                  </div>

                  <div className = "bac-sectionInput">
                    <label className = "bac-labelStyle"> Beer</label>
                    <input
                      value={beer}
                      onChange={(event) => setBeer(event.target.value)}
                    />
                  </div>

                  <div className = "bac-sectionInput">
                    <label className = "bac-labelStyle"> Wine</label>
                    <input
                      value={wine}
                      onChange={(event) => setWine(event.target.value)}
                    />
                  </div>

                  <div className = "bac-sectionInput">
                    <label className = "bac-labelStyle"> Shot</label>
                    <input
                      value={shot}
                      onChange={(event) => setShot(event.target.value)}
                    />
                  </div>

                  <div className = "bac-sectionInput">
                    <label className = "bac-labelStyle">
                      {" "}
                      How many hours have passed since your first drink?{" "}
                    </label>
                    <input
                      value={hours}
                      onChange={(event) => setHours(event.target.value)}
                    />
                  </div>

                  <div className = "BACbuttonContainer">
                    <button id="calculate" type="submit">
                      {" "}
                      Calculate
                    </button>
                    {/* <p> </p> */}
                    <button onClick={() => clearForm()} id="clear">
                      {" "}
                      Clear{" "}
                    </button>
                  </div>
                </form>

              <div className="center">
                <h4> Your BAC is: {BAC} %</h4>
                <p> {message} </p>
              </div>

              <div className="BAC-img">
                <img src={imgSrc} alt=""></img>
              </div>

          </div> 



             

            

          </div>

        </div>
      
  );
}
