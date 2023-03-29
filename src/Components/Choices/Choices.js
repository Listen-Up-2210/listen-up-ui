import React from "react";
import './Choices.css'

const Choices = ({correctAnswer, wrongAnswers}) => {

  const answers = [...wrongAnswers, correctAnswer]

  const shuffledAnswers = answers.sort((a, b) => Math.random() - .5)

  return (
    <>
      <div className="choices-container">
        <button>{shuffledAnswers[0]}</button>
        <button>{shuffledAnswers[1]}</button>
        <button>{shuffledAnswers[2]}</button>
        <button>{shuffledAnswers[3]}</button>
      </div>
    </>
  )
}

export default Choices