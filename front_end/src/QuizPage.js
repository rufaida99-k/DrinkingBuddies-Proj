import Button from "react-bootstrap/Button";

const divStyle = {
  margin: "40px",
  height: "70vh",
 
  backgroundColor: "pink",
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

export default function HomePage() {
  return(
    <div style={divStyle}>
      
      <p> 
      <br>
      </br>
      {/* add all the divs  */}
      <div id = "quizzie">
        {/* title of the quiz */}
        <h1> What should you drink?</h1>
        
            {/* question 1 with choices  */}
            <ul class="quiz-step step1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> You have one choice, sweet or bitter?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">sweet</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">bitter</p>
                  </div>
              </li>
            </ul>

            {/* question 2 with choices  
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> Do you like coffee?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">yes</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">no</p>
                  </div>
              </li>
            </ul>
            */}

            {/* question 3 with choices  
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> How do you feel about olives?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">I love them</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">I hate them</p>
                  </div>
              </li>
            </ul>
            */}

            {/* question 4 with choices  */}
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> Are you drinking alone or at a party?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">alone</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">party</p>
                  </div>
              </li>
            </ul>

            {/* question 5 with choices  */}
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> Do you like slushies?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">yes</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">no</p>
                  </div>
              </li>
            </ul>

            {/* question 6 with choices  */}
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> Are we fruity or no?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">yes</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">no</p>
                  </div>
              </li>
            </ul>

            {/* question 7 with choices  
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> Do you like bubbles?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">yes</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">no</p>
                  </div>
              </li>
            </ul>
            */}

            {/* question 8 with choices  
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> Do you like red bull?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">yes</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">no</p>
                  </div>
              </li>
            </ul> */}

          {/* question 9 with choices  
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> Is it manhattan or nowhere?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">manhattan</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">nowhere</p>
                  </div>
              </li>
            </ul>
            */}

            {/* question 10 with choices  */}
            <ul class="quiz-q q1 current">
              <li class="question">
                  <div class="question-wrap">
                      <h2> Do you like leaves?</h2>
                  </div>
              </li>
              <li class="quiz-answer low-value" data-quizIndex="2">
                  <div class="answer-wrap"> 
                      <p class="answer-text">yes</p>
                  </div>
              </li>
              <li class="quiz-answer high-value" data-quizIndex="4">
                  <div class="answer-wrap"> 
                      <p class="answer-text">no</p>
                  </div>
              </li>
            </ul>

          <ul id="results">
            <li class="results-inner">
                <p>Your drink is:</p>
                <h1></h1>
                <p class="desc"></p>
            </li>
        </ul>
        

      </div>
      

      </p>
      
    
      
    
    </div>
 );
}
