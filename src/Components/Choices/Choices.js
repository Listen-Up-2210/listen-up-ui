import React from "react";
import './Choices.css'

const Choices = ({correctAnswer, wrongAnswers}) => {

  const answers = [...wrongAnswers, correctAnswer]

  const shuffledAnswers = answers.sort(() => Math.random() - .5)

  const checkAnswer = () => {
    
  }

  const answerButtons = shuffledAnswers.map(answer => {
    return (
      <button>{answer}</button>
    )
  })

  return (
    <>
      <div className="choices-container">
        {answerButtons}
      </div>
    </>
  )
}

export default Choices