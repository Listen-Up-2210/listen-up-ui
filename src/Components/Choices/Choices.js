import React, { useState } from "react";
import './Choices.css'

const Choices = ({correctAnswer, wrongAnswers}) => {

  const answers = [...wrongAnswers, correctAnswer]
  const shuffledAnswers = answers.sort(() => Math.random() - .5)

  const checkAnswer = (e) => {
    if(e.target.name === correctAnswer) {
      e.target.className = 'correct'
    } else {
      e.target.className = 'incorrect'
    }
  }

  const answerButtons = shuffledAnswers?.map((answer, index) => {
    return (
      <button onClick={(e) => checkAnswer(e)}
        className='base'
        id={index}
        key={index}
        name={answer}
        >{answer}
      </button>
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