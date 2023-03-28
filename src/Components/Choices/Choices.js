import React from "react";
import './Choices.css'

const Choices = ({correctAnswer, wrongAnswers}) => {

  return (
    <div>
      <p>{correctAnswer}</p>
      <p>{wrongAnswers[0]}</p>
      <p>{wrongAnswers[1]}</p>
      <p>{wrongAnswers[2]}</p>
    </div>
  )
}

export default Choices