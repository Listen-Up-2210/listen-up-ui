import React, { useState } from "react";
import './Choices.css'

const Choices = ({correctAnswer, shuffledAnswers, advanceTurn}) => {

  const [button, setButton] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)

  const checkAnswer = (e) => {
    e.preventDefault()
    e.target.name === correctAnswer ? countCorrectGuess(e) :
    e.target.className = 'incorrect'
    setButton(true)
    advanceTurn(e)
    setTimeout(() => setButton(false), 3000)
    setTimeout(() => e.target.className = 'base', 3000)
  }

  const countCorrectGuess = (e) => {
    e.target.className = 'correct'
    setCorrectAnswers(correctAnswers + 1)
    console.log(correctAnswers)
  }

  const answerButtons = shuffledAnswers.map((answer, index) => {
    console.log('answer buttons map')
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