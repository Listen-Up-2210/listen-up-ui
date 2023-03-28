import React from "react";
import './Choices.css'

const Choices = ({correctAnswer, wrongAnswers}) => {

  const answers = [...wrongAnswers, correctAnswer]

  const randomizeAnswers = () => {
    
  }

  return (
    <div>
      <button>{correctAnswer}</button>
      <button>{wrongAnswers[0]}</button>
      <button>{wrongAnswers[1]}</button>
      <button>{wrongAnswers[2]}</button>
    </div>
  )
}

export default Choices