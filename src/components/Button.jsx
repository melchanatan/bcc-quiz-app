import React from "react";


function Button(props) {
    return <button className="quiz__button" onClick={() => props.checkAnswer(props.id)}>{props.text}</button>
}

export default Button;