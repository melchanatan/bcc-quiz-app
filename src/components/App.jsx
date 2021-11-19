import React, { useState } from "react";
import Quiz from "./Quiz";
import Header from "./Header";
import Footer from "./Footer";
import QUESTIONS from "../questions"

let questionNumber = 0
let startingRetry = 3

function App() {
  const [remainingRetry, setRemainRetry] = useState(startingRetry)
  const [currentQuestion, setCurrentQuestion] = useState(QUESTIONS[questionNumber])

  function updateQuestion() {
    questionNumber ++;
    setCurrentQuestion(QUESTIONS[questionNumber])
  }

  function wrongAnswer() {
    setRemainRetry(remainingRetry - 1)
  }

  return (
    <div className="App">
    <Header />
      <div className="container">
        <div className="app-container">
          { remainingRetry > 0 && currentQuestion ? <Quiz key={currentQuestion.title}
            text={currentQuestion.title}
            answerIndex={currentQuestion.answer}
            image={currentQuestion.image}
            link={currentQuestion.link}
            choices={currentQuestion.choices}
            questionNumber={questionNumber}
            updateQuestion={updateQuestion}
            totalRetry={startingRetry}
            remainingRetry={remainingRetry}
            removeRetry={wrongAnswer}
          /> : <div className="gameover">
            <h3 className="heading-4 u-mb-100">You got {questionNumber} / {QUESTIONS.length} </h3>
            <h3 className="heading-3 u-mb-500">{remainingRetry ? "You did it👍" : "Nice try! but you kinda blew it🐔"}</h3>
            <a href="." className="btn-link">Play again!</a>
          </div> }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
