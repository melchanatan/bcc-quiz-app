import React from "react";
import Button from "./Button"


function Quiz(props) {

    const currentChoices = props.choices;
    const imageUrl = "/images/" + props.image;

    function checkAnswer(playerAnswer) {
        if ( props.answerIndex === playerAnswer) props.updateQuestion();
        else props.removeRetry();
    }

    return (
        <div>
            <div className="topbar-container">
                <h3 className="heading-3">Question {props.questionNumber + 1}</h3>
                <h5 className="retry-keeper">{props.remainingRetry} / {props.totalRetry}</h5>
            </div>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={imageUrl} alt="image1" className="quiz__img" height="100%"/>
            </a>
            <p className="paragraph">{props.text}</p>
            <div className="button-container">
                {currentChoices.map( (choice, index) => 
                    <Button key={index}
                        text={choice} 
                        id={index} 
                        checkAnswer={checkAnswer}
                    />
                )}
            </div>
        </div>
    )
}

export default Quiz;