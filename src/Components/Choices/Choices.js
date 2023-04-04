import React, { useState } from "react";
import './Choices.css'

const Choices = ({correctAnswer, shuffledAnswers, advanceTurn, addCorrectAnswer}) => {

  const [button, setButton] = useState(false)
 
  const checkAnswer = (e) => {
    e.preventDefault()
    e.target.name === correctAnswer ? countCorrectGuess(e) :
    e.target.className = 'incorrect'
    setButton(true)
    advanceTurn(e)
    setTimeout(() => {
      e.target.className = 'base' 
      setButton(false)}, 2500)
  }

  const countCorrectGuess = (e) => {
    e.target.className = 'correct'
    addCorrectAnswer()
  }

  const answerButtons = shuffledAnswers.map((answer, index) => {
    return (
      <button onClick={(e) => checkAnswer(e)}
        className='base'
        id={index}
        key={index}
        name={answer}
        disabled={button}
        >{answer}
      </button>
    )
  })

  return (
    <div className="choices-container">
      {answerButtons}
    </div>
  )
}

export default Choices