
import React, { useState } from "react";
import './Choices.css'

const Choices = ({correctAnswer, shuffledAnswers, advanceTurn}) => {

  const [button, setButton] = useState(false)

  const checkAnswer = (e) => {
    e.preventDefault()
    e.target.name === correctAnswer ? e.target.className = 'correct' :
    e.target.className = 'incorrect'
    setButton(true)
    advanceTurn(e)
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
    <>
      <div className="choices-container">
        {answerButtons}
      </div>
    </>
  )
}

export default Choices